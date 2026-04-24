import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { GreenIconCircle } from '@/components/GreenIconCircle';
import { 
  faKey, 
  faGlobeAmericas, 
  faLayerGroup, 
  faUsers, 
  faAward, 
  faTags 
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faKey,
    title: 'Dua Metode',
    description: 'Pilihan lepas kunci atau dengan driver sesuai kebutuhan Anda.',
  },
  {
    icon: faGlobeAmericas,
    title: 'Network Area',
    description: 'Layanan mencakup Yogyakarta, Solo, Semarang, dan sekitarnya.',
  },
  {
    icon: faLayerGroup,
    title: 'Multi Services',
    description: 'Berbagai layanan transportasi dalam satu tempat.',
  },
  {
    icon: faUsers,
    title: 'Customers First',
    description: 'Kepuasan pelanggan adalah prioritas utama kami.',
  },
  {
    icon: faAward,
    title: 'Experienced Team',
    description: 'Tim profesional berpengalaman sejak 2007.',
  },
  {
    icon: faTags,
    title: 'Low Cost',
    description: 'Harga kompetitif dengan kualitas terjamin.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function KenapaAlterraSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary to-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="KENAPA ALTERRA TOUR?"
          subtitle="Keunggulan yang membuat kami dipercaya ribuan pelanggan setia."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-card-hover transition-all duration-300 border border-gray-50 flex flex-col items-center text-center group"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                <GreenIconCircle icon={feature.icon} size="lg" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">{feature.title}</h4>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
