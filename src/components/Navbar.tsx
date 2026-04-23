import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/services', label: 'SERVICES' },
  { path: '/price', label: 'PRICE' },
  { path: '/reservation', label: 'RESERVATION' },
  { path: '/terms', label: 'TERMS' },
  { path: '/contact', label: 'CONTACT' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 40;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const waLink = 'https://wa.me/6282130205600?text=Halo%20Alterra%20Tour,%20saya%20ingin%20memesan%20kendaraan';

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/96 backdrop-blur-lg border-b border-gray-100 shadow-sm py-2'
            : 'bg-transparent border-b border-transparent py-3'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/images/logoalterra.png"
                alt="Alterra Tour Logo"
                className={`transition-all duration-300 ${isScrolled ? 'h-9 md:h-11' : 'h-11 md:h-13'}`}
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-[11px] font-semibold tracking-widest transition-all duration-200 rounded-lg ${
                    isActive(link.path)
                      ? isScrolled
                        ? 'text-primary bg-primary/8'
                        : 'text-primary'
                      : isScrolled
                        ? 'text-gray-600 hover:text-primary hover:bg-gray-50'
                        : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-6 py-2.5 text-[11px] font-semibold tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled
                    ? 'bg-primary text-white hover:brightness-110 shadow-md shadow-primary/25'
                    : 'bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary'
                }`}
              >
                Booking Sekarang
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                isScrolled ? 'bg-gray-100 text-gray-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 bg-white shadow-2xl z-50 p-8 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-xl font-black tracking-tighter uppercase italic">
                  <span className="text-primary">ALTERRA</span> TOUR
                </span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400">
                  <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-4 text-sm font-black tracking-widest rounded-2xl transition-all ${isActive(link.path)
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-primary text-white rounded-2xl px-6 py-5 text-sm font-black tracking-widest text-center shadow-lg shadow-primary/20"
                >
                  BOOKING SEKARANG
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

