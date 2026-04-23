import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faWhatsapp,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';

const menuLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Service' },
  { path: '/price', label: 'Price' },
  { path: '/reservation', label: 'Reservation' },
  { path: '/terms', label: 'Terms' },
  { path: '/contact', label: 'Contact' },
];

const paymentPartners = ['OVO', 'LinkAja', 'GoPay', 'Mandiri', 'BCA', 'BNI'];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo & Address */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logoalterra.png" alt="Alterra Tour Logo" className="h-12 md:h-16" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Penyedia layanan transportasi premium di Yogyakarta dengan armada terbaru dan supir profesional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300">
                <FontAwesomeIcon icon={faInstagram} className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300">
                <FontAwesomeIcon icon={faWhatsapp} className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300">
                <FontAwesomeIcon icon={faFacebookF} className="text-xs" />
              </a>
            </div>
          </div>

          {/* Col 2: Info & Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/60 mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="shrink-0 mt-1 text-primary-foreground/50" />
                <span>Ngariboyo, Sindupaten, Kertek, Wonosobo 56371</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="shrink-0 text-primary-foreground/50" />
                <span>info@alterratour.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <FontAwesomeIcon icon={faPhone} className="shrink-0 text-primary-foreground/50" />
                <span>6282130205600</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Menu */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/60 mb-5">
              Menu Utama
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {menuLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/70 text-sm hover:text-white transition-all hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Payment Partners */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-6">
              Payment Partners
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {paymentPartners.map((partner) => (
                <span
                  key={partner}
                  className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-[10px] font-medium text-white/80 text-center hover:bg-white/10 transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-medium tracking-widest uppercase text-white/40">
            &copy; 2007–2025 Alterra Tour &mdash; All Rights Reserved
          </span>
          <div className="flex gap-6 text-[10px] font-medium tracking-widest uppercase text-white/40">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

