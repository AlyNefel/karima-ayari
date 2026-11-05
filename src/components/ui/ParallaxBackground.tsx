'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -250]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 200]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -120]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Mesh gradient orbs reacting to active palette */}
      <motion.div
        style={{ y: y1, backgroundColor: 'var(--palette-primary)' }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-[130px] transition-colors duration-700"
      />
      <motion.div
        style={{ y: y2, backgroundColor: 'var(--palette-primary-hover)' }}
        className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full opacity-15 blur-[140px] transition-colors duration-700"
      />
      <motion.div
        style={{ y: y3, backgroundColor: 'var(--palette-primary)' }}
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-15 blur-[130px] transition-colors duration-700"
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

