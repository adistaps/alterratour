import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl hover:brightness-110 hover:-translate-y-2 transition-all duration-300 z-40 border-none"
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faChevronUp} size="lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
