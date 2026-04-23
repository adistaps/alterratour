import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export function FadeUp({ children, delay = 0, className = '', direction = 'up' }: FadeUpProps) {
  const directions = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
