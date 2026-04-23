import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

export function PageHeader({ title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
      {/* Background Image with subtle zoom */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
      </div>

      {/* Content pinned to bottom-left for a modern editorial look */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-14 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-primary font-semibold tracking-[0.3em] text-[11px] uppercase mb-4 block">
            Alterra Tour & Travel
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <div className="flex items-center gap-3 mt-6 mb-5">
            <div className="w-10 h-[2px] bg-primary rounded-full" />
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-white/75 text-base sm:text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
