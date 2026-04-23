import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const waLink = 'https://wa.me/6282130205600?text=Halo%20Alterra%20Tour,%20saya%20ingin%20memesan%20kendaraan';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-car.jpg"
          alt="Alterra Tour Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold tracking-[0.25em] text-xs uppercase mb-6"
          >
            Alterra Tour & Travel · Yogyakarta
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Sewa Hiace<br />
            <span className="text-primary font-extrabold">Jogja</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 text-base sm:text-lg mt-6 mb-10 max-w-lg leading-relaxed"
          >
            Layanan sewa kendaraan premium terbaik di Yogyakarta.{' '}
            <span className="text-primary font-semibold">Armada terbaru, driver profesional, harga terbaik.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-full px-8 py-4 text-sm font-semibold tracking-wider hover:brightness-110 shadow-lg shadow-primary/30 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Booking Sekarang
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform text-xs" />
            </a>
            <a
              href="#armada"
              className="bg-white/10 backdrop-blur-sm border border-white/25 text-white rounded-full px-8 py-4 text-sm font-semibold tracking-wider hover:bg-white/20 transition-all duration-300"
            >
              Lihat Armada
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

