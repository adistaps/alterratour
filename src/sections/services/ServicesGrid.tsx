import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { GreenIconCircle } from '@/components/GreenIconCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarDays, 
  faExchangeAlt, 
  faHeart, 
  faMapMarkerAlt, 
  faTruck, 
  faBoxes,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faCalendarDays,
    title: 'DAILY RENT',
    description: 'Sewa mobil harian dengan pilihan lepas kunci atau bersama driver profesional.',
    features: [
      'Gratis antar jemput dalam kota',
      'Asuransi kendaraan',
      'BBM sudah termasuk (dengan driver)',
      '24/7 customer support',
      'Unit terawat dan bersih',
    ],
  },
  {
    icon: faExchangeAlt,
    title: 'TRANSFER IN OUT',
    description: 'Layanan antar jemput bandara, stasiun, dan terminal dengan harga tetap.',
    features: [
      'Tarif flat tanpa meter',
      'Driver berpengalaman',
      'Meet & greet service',
      'Pantau jadwal penerbangan',
      'Gratis waiting time 30 menit',
    ],
  },
  {
    icon: faHeart,
    title: 'WEDDING CAR',
    description: 'Mobil pengantin mewah dengan dekorasi eksklusif untuk hari spesial Anda.',
    features: [
      'Mobil premium (Alphard/Fortuner)',
      'Dekorasi bunga fresh',
      'Driver berpengalaman',
      'Dokumentasi (optional)',
      'Konsultasi gratis',
    ],
  },
  {
    icon: faMapMarkerAlt,
    title: 'TOUR PACKAGE',
    description: 'Paket wisata custom mencakup unit, driver, BBM, dan tour guide.',
    features: [
      'Itinerary fleksibel',
      'Driver sekaligus guide lokal',
      'Rekomendasi tempat wisata',
      'BBM & parkir termasuk',
      'Harga group special',
    ],
  },
  {
    icon: faTruck,
    title: 'MOVING SERVICE',
    description: 'Layanan pindahan rumah atau kantor dengan armada box yang aman.',
    features: [
      'Helper tersedia',
      'Armada box berbagai ukuran',
      'Packing material (optional)',
      'Asuransi barang',
      'Same day service',
    ],
  },
  {
    icon: faBoxes,
    title: 'CARGO SERVICE',
    description: 'Pengiriman barang logistik skala besar dengan manajemen waktu akurat.',
    features: [
      'Tracking real-time',
      'Door to door service',
      'Loading & unloading',
      'Surat jalan resmi',
      'Pengiriman antar kota',
    ],
  },
];

const waLink = 'https://wa.me/6282130205600?text=Halo%20Alterra%20Tour,%20saya%20ingin%20memesan%20layanan%20';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 p-6 sm:p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] group-hover:bg-primary transition-colors duration-500" />
              
              <div className="relative mb-10">
                <GreenIconCircle icon={service.icon} size="lg" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">{service.description}</p>

              <ul className="flex flex-col gap-3 mt-8 flex-1 py-7 border-y border-gray-100">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-primary mt-0.5 text-xs flex-shrink-0" />
                    <span className="text-xs text-gray-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${waLink}${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-xl px-6 py-4 text-xs font-semibold tracking-wide text-center hover:brightness-110 transition-all shadow-md shadow-primary/20 mt-8 w-full"
              >
                Pesan Layanan Ini
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
