import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { GreenIconCircle } from '@/components/GreenIconCircle';
import { 
  faCalendarDays, 
  faExchangeAlt, 
  faHeart, 
  faMapMarkerAlt, 
  faTruck, 
  faBoxes,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
  {
    icon: faCalendarDays,
    title: 'Daily Rent',
    description: 'Sewa mobil harian dengan pilihan lepas kunci atau bersama driver profesional.',
  },
  {
    icon: faExchangeAlt,
    title: 'Transfer In Out',
    description: 'Layanan antar jemput bandara, stasiun, dan terminal dengan harga tetap.',
  },
  {
    icon: faHeart,
    title: 'Wedding Car',
    description: 'Mobil pengantin mewah dengan dekorasi eksklusif untuk hari spesial Anda.',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Tour Package',
    description: 'Paket wisata custom mencakup unit, driver, BBM, dan tour guide.',
  },
  {
    icon: faTruck,
    title: 'Moving Service',
    description: 'Layanan pindahan rumah & kantor dengan armada box terjamin aman.',
  },
  {
    icon: faBoxes,
    title: 'Cargo Service',
    description: 'Pengiriman barang logistik skala besar dengan manajemen waktu akurat.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function LayananTerbaikSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="LAYANAN TERBAIK"
          subtitle="Solusi transportasi terpercaya untuk kenyamanan dan efisiensi perjalanan Anda."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <GreenIconCircle icon={service.icon} />
              <h4 className="text-lg font-semibold text-gray-900 mt-5 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">{service.description}</p>
              <a
                href="/services"
                className="text-primary text-sm font-bold tracking-wider hover:translate-x-1 transition-transform flex items-center gap-2 mt-6 uppercase"
              >
                DETAIL 
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
