import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';

const fleet = [
  { name: 'All New Avanza', category: 'MPV' },
  { name: 'Grand Innova', category: 'MPV' },
  { name: 'Innova Reborn', category: 'MPV' },
  { name: 'Innova Zenix', category: 'MPV' },
  { name: 'Alphard Transformer', category: 'LUXURY' },
  { name: 'Toyota Fortuner VRZ', category: 'SUV' },
  { name: 'Mitsubishi Pajero', category: 'SUV' },
  { name: 'Toyota Hiace Commuter', category: 'MINIBUS' },
  { name: 'Toyota Hiace Premio', category: 'MINIBUS' },
  { name: 'Isuzu Elf Long', category: 'MINIBUS' },
  { name: 'Medium Bus', category: 'BUS' },
  { name: 'Big Bus SHD', category: 'BUS' },
];

const categoryColors: Record<string, string> = {
  MPV: 'bg-primary/5 text-primary border-primary/10',
  LUXURY: 'bg-amber-50 text-amber-700 border-amber-200',
  SUV: 'bg-slate-50 text-slate-700 border-slate-200',
  MINIBUS: 'bg-primary/5 text-primary border-primary/10',
  BUS: 'bg-orange-50 text-orange-700 border-orange-200',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export function ArmadaKamiSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-surface opacity-50" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="DAFTAR ARMADA"
          subtitle="Tersedia berbagai pilihan unit kendaraan mulai dari MPV hingga Bus Besar untuk rombongan."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-16"
        >
          {fleet.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="bg-white rounded-[2rem] border border-gray-100 p-8 text-center hover:shadow-card-hover transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/5 rounded-full group-hover:bg-primary transition-colors duration-500" />
              
              <span className={`inline-block text-[10px] font-medium px-3 py-1 rounded-lg mb-3 border ${categoryColors[item.category]}`}>
                {item.category}
              </span>
              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{item.name}</h4>
              
              <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-0.5 bg-primary rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
