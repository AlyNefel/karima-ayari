import { connectToDatabase } from './mongodb';
import Portfolio from '../models/PortfolioData';
import { initialPortfolioData } from './initialData';
import { PortfolioData } from './types';
import fs from 'fs';
import path from 'path';

const PERSISTENCE_FILE = path.join(process.cwd(), '.portfolio_data.json');

function deepMerge<T>(target: T, source: any): T {
  if (!source || typeof source !== 'object') return target;
  if (Array.isArray(target) && Array.isArray(source)) {
    return target.map((targetItem) => {
      if (targetItem && targetItem.id) {
        const sourceItem = source.find((s: any) => s && s.id === targetItem.id);
        if (sourceItem) return deepMerge(targetItem, sourceItem);
      }
      return targetItem;
    }) as unknown as T;
  }
  const result = { ...target } as any;
  for (const key of Object.keys(source)) {
    if (source[key] !== undefined && source[key] !== null) {
      if (
        typeof source[key] === 'object' &&
        !Array.isArray(source[key]) &&
        typeof result[key] === 'object' &&
        !Array.isArray(result[key])
      ) {
        result[key] = deepMerge(result[key], source[key]);
      } else if (Array.isArray(source[key]) && Array.isArray(result[key])) {
        result[key] = result[key].map((item: any) => {
          if (item && item.id) {
            const src = source[key].find((s: any) => s && s.id === item.id);
            return src ? deepMerge(item, src) : item;
          }
          return item;
        });
      } else {
        result[key] = source[key];
      }
    }
  }
  return result;
}

// In-memory fallback cache for development or when MongoDB URI is not configured
let inMemoryData: PortfolioData = JSON.parse(JSON.stringify(initialPortfolioData));

// Initialize from file if exists
try {
  if (fs.existsSync(PERSISTENCE_FILE)) {
    const raw = fs.readFileSync(PERSISTENCE_FILE, 'utf-8');
    inMemoryData = deepMerge(JSON.parse(JSON.stringify(initialPortfolioData)), JSON.parse(raw));
  }
} catch (e) {
  console.warn('Could not read local persistence file:', e);
}

export async function getPortfolioData(): Promise<{ data: PortfolioData; source: 'mongodb' | 'memory' }> {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      let doc = await Portfolio.findOne().lean();
      if (!doc) {
        // Seed the database with initial Hajer Riahi CV data
        const created = await Portfolio.create(initialPortfolioData);
        return { data: JSON.parse(JSON.stringify(created)), source: 'mongodb' };
      }
      return { data: JSON.parse(JSON.stringify(doc)), source: 'mongodb' };
    }
  } catch (error) {
    console.warn('MongoDB query failed, falling back to local persistent store:', error);
  }

  // Check file on disk in case it was updated
  try {
    if (fs.existsSync(PERSISTENCE_FILE)) {
      const raw = fs.readFileSync(PERSISTENCE_FILE, 'utf-8');
      inMemoryData = deepMerge(JSON.parse(JSON.stringify(initialPortfolioData)), JSON.parse(raw));
    }
  } catch (e) {
    // ignore
  }

  return { data: inMemoryData, source: 'memory' };
}

export async function updatePortfolioData(updatedData: Partial<PortfolioData>): Promise<{ success: boolean; data: PortfolioData; source: 'mongodb' | 'memory' }> {
  let savedData: PortfolioData = {
    ...inMemoryData,
    ...updatedData,
    updatedAt: new Date().toISOString(),
  };

  // Always save to local file for 100% offline persistence across server restarts
  try {
    fs.writeFileSync(PERSISTENCE_FILE, JSON.stringify(savedData, null, 2), 'utf-8');
    inMemoryData = savedData;
  } catch (e) {
    console.warn('Could not write to local persistence file:', e);
  }

  try {
    const conn = await connectToDatabase();
    if (conn) {
      let doc = await Portfolio.findOne();
      if (!doc) {
        doc = new Portfolio({ ...initialPortfolioData, ...updatedData });
      } else {
        Object.assign(doc, updatedData);
      }
      await doc.save();
      return { success: true, data: JSON.parse(JSON.stringify(doc)), source: 'mongodb' };
    }
  } catch (error) {
    console.warn('MongoDB update failed, successfully saved in persistent local store:', error);
  }

  return { success: true, data: inMemoryData, source: 'memory' };
}
