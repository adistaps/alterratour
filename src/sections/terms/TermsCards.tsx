import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faUserTie,
  faLock,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import { GreenIconCircle } from '@/components/GreenIconCircle';

const termsData = [
  {
    icon: faShieldHalved,
    title: 'Persyaratan Umum',
    items: [
      'Memiliki KTP/Identitas yang masih berlaku',
      'Memiliki SIM A yang masih berlaku (untuk sewa lepas kunci)',
      'Menjaminkan sepeda motor + STNK asli (untuk sewa lepas kunci)',
      'Bersedia difoto bersama kendaraan saat serah terima',
      'Pemakaian kendaraan hanya untuk wilayah yang disepakati',
    ],
  },
  {
    icon: faUserTie,
    title: 'Ketentuan Driver',
    items: [
      'Waktu kerja driver 12-24 jam sesuai paket',
      'Uang makan driver ditanggung penyewa',
      'Akomodasi driver jika keluar kota ditanggung penyewa',
      'Driver berhak menolak rute yang membahayakan keselamatan',
      'Overtime driver dihitung per jam sesuai ketentuan',
    ],
  },
  {
    icon: faLock,
    title: 'Kebijakan & Asuransi',
    items: [
      'Kendaraan sudah dilengkapi asuransi standar',
      'Kerusakan akibat kelalaian penyewa menjadi tanggung jawab penyewa',
      'Kehilangan barang di dalam kendaraan bukan tanggung jawab kami',
      'Dilarang membawa barang berbahaya atau ilegal',
      'Pembatalan sewa pada hari H akan dikenakan biaya pembatalan',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function TermsCards() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {termsData.map((term) => (
            <motion.div
              key={term.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border-t-4 border-t-primary hover:shadow-card-hover transition-all duration-500 group"
            >
              <div className="mb-6">
                <GreenIconCircle icon={term.icon} size="lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">{term.title}</h3>
              <div className="flex flex-col gap-3 mt-6">
                {term.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-primary mt-1 flex-shrink-0 text-xs" />
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl p-8 mt-16 border border-primary/10 max-w-3xl mx-auto text-center"
        >
          <p className="text-base text-gray-600 leading-relaxed">
            Dengan menggunakan layanan Alterra Tour, Anda dianggap telah menyetujui seluruh syarat dan ketentuan untuk menjamin keamanan dan kenyamanan bersama.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

