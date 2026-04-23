import { useState, useEffect, useRef, useCallback } from 'react';

export function useAnimatedCounter(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [target, duration, hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );
    if (!ref.current) return;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startAnimation]);

  return { count, ref };
}
