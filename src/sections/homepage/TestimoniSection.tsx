import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  {
    text: '"Respon cepat dan pelayanan sangat memuaskan!"',
    stars: 5,
    name: 'DZ',
    location: 'Dieng',
  },
  {
    text: '"Pelayanan ramah, mobilnya juga enak. Full recommended!"',
    stars: 5,
    name: 'RA',
    location: 'Wonosobo',
  },
  {
    text: '"Pelayanan sangat memuaskan, drivernya sangat ramah. Mobilnya juga bersih dan nyaman."',
    stars: 5,
    name: 'RA',
    location: 'Yogyakarta',
  },
  {
    text: '"Pelayanan bagus, mobilnya masih baru dan wangi."',
    stars: 5,
    name: 'PW',
    location: 'Sleman',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function TestimoniSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="APA KATA PELANGGAN"
          subtitle="Review asli dari pelanggan setia yang telah merasakan layanan premium kami."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={`${review.name}-${review.location}`}
              variants={itemVariants}
              className="bg-secondary/40 rounded-3xl p-8 hover:bg-white hover:shadow-card-hover transition-all duration-500 border border-transparent hover:border-gray-50 group"
            >
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {review.text}
              </p>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-amber-400 text-xs" />
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-semibold text-xs shadow-md shadow-primary/20">
                  {review.name}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{review.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

