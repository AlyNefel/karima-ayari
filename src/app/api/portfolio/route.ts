import { NextResponse } from 'next/server';
import { getPortfolioData, updatePortfolioData } from '@/lib/portfolioService';

export async function GET() {
  try {
    const { data, source } = await getPortfolioData();
    return NextResponse.json({
      success: true,
      source,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown server error',
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await updatePortfolioData(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update portfolio data',
      },
      { status: 500 }
    );
  }
}

