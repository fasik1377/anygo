'use client';

import React from 'react';
import { motion, Transition } from 'framer-motion';
import { Navigation } from './navigation';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

// ✅ Explicitly tell TypeScript this is a valid Framer Motion Transition
const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}  
        className={className}
      >
        {children}
      </motion.main>
    </div>
  );
};
