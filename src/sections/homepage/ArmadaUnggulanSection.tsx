import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faGear, 
  faGasPump,
  faArrowRight,
  faXmark,
  faCheckCircle,
  faCouch,
  faSnowflake,
  faMusic,
  faPlug
} from '@fortawesome/free-solid-svg-icons';

const featuredCars = [
  {
    name: 'Hiace Commuter',
    image: '/images/mobil/hiace-commuter.jpg',
    badge: 'MINIBUS',
    seats: '14 Seat',
    transmission: 'Manual',
    fuel: 'Bensin',
    description: 'Pilihan ekonomis dan handal untuk grup menengah. Toyota Hiace Commuter menawarkan efisiensi tanpa mengorbankan kenyamanan dasar bagi 14 penumpang.',
    amenities: [
      { label: 'AC Double Blower', icon: faSnowflake },
      { label: 'Audio System', icon: faMusic },
      { label: 'Reclining Seat', icon: faCouch },
      { label: 'Pijakan Kaki Luas', icon: faCheckCircle }
    ],
    prices: { city: 'Rp 1.000.000', out: 'Rp 1.250.000' }
  },
  {
    name: 'Hiace Premio',
    image: '/images/mobil/hiace-premio.jpg',
    badge: 'MINIBUS',
    seats: '11-12 Seat',
    transmission: 'Matic',
    fuel: 'Diesel Euro 4',
    description: 'Generasi terbaru dengan desain modern dan performa mesin lebih halus. Hiace Premio memberikan standar kenyamanan lebih tinggi untuk perjalanan jarak jauh.',
    amenities: [
      { label: 'Euro 4 Engine', icon: faGear },
      { label: 'Suspensi Empuk', icon: faCheckCircle },
      { label: 'Premium Interior', icon: faCheckCircle },
      { label: 'USB Charger', icon: faPlug }
    ],
    prices: { city: 'Rp 1.250.000', out: 'Rp 1.500.000' }
  },
  {
    name: 'Premio Luxury',
    image: '/images/mobil/premio-luxury.jpg',
    badge: 'LUXURY',
    seats: '7/8 Seat',
    transmission: 'Matic',
    fuel: 'Premium Leather',
    description: 'Kenyamanan kelas atas (First Class) dengan kursi pilot dan interior mewah. Ideal untuk tamu VVIP, direksi, atau perjalanan keluarga eksklusif.',
    amenities: [
      { label: 'Pilot Seat', icon: faCouch },
      { label: 'Ambient Light', icon: faSnowflake },
      { label: 'Entertainment', icon: faMusic },
      { label: 'Electric Door', icon: faPlug }
    ],
    prices: { city: 'Rp 1.600.000', out: 'Rp 1.900.000' }
  },
];

const waLink = 'https://wa.me/6282130205600?text=Halo%20Alterra%20Tour,%20saya%20ingin%20memesan%20';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function ArmadaUnggulanSection() {
  const [selectedCar, setSelectedCar] = useState<typeof featuredCars[0] | null>(null);

  return (
    <section id="armada" className="py-16 md:py-32 bg-surface relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="ARMADA UNGGULAN"
          subtitle="Pilihan armada terbaik kami dengan kondisi prima untuk perjalanan istimewa Anda."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-12 md:mt-20"
        >
          {featuredCars.map((car) => (
            <motion.div
              key={car.name}
              variants={itemVariants}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 group border border-gray-100/50 flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-6 left-6 bg-primary/90 backdrop-blur-md text-white text-[10px] font-black tracking-[0.2em] px-5 py-2 rounded-xl uppercase italic">
                  {car.badge}
                </span>
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors">{car.name}</h3>
                
                <div className="grid grid-cols-2 gap-3 mt-5 pb-5 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUsers} className="text-primary text-xs" />
                    <span className="text-xs text-gray-500">{car.seats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faGear} className="text-primary text-xs" />
                    <span className="text-xs text-gray-500">{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faGasPump} className="text-primary text-xs" />
                    <span className="text-xs text-gray-500">{car.fuel}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-8">
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="text-gray-400 text-xs font-medium hover:text-primary transition-colors flex items-center gap-2 group/btn"
                  >
                    Detail Unit <FontAwesomeIcon icon={faArrowRight} className="text-[9px] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={`${waLink}${encodeURIComponent(car.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white rounded-full px-6 py-3 text-xs font-semibold hover:brightness-110 transition-all shadow-md shadow-primary/20"
                  >
                    Pesan Unit
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCar(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedCar(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>

              {/* Modal Image Section */}
              <div className="md:w-1/2 relative bg-gray-100">
                <img 
                  src={selectedCar.image} 
                  alt={selectedCar.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden md:block" />
                <div className="absolute bottom-8 left-8 hidden md:block">
                  <span className="bg-primary px-3 py-1.5 rounded-full text-xs font-medium text-white">
                    {selectedCar.badge}
                  </span>
                  <h2 className="text-3xl font-semibold text-white mt-3 leading-tight">
                    {selectedCar.name}
                  </h2>
                </div>
              </div>

              {/* Modal Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="md:hidden mb-6">
                  <span className="text-primary font-medium text-xs">{selectedCar.badge}</span>
                  <h2 className="text-2xl font-semibold text-gray-900 mt-1">{selectedCar.name}</h2>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-10">
                  {selectedCar.description}
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <div className="w-5 h-0.5 bg-primary rounded-full" />
                      Fasilitas Unggulan
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedCar.amenities.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <FontAwesomeIcon icon={item.icon} className="text-primary text-xs" />
                          <span className="text-xs text-gray-600">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <div className="w-5 h-0.5 bg-primary rounded-full" />
                      Estimasi Harga
                    </h4>
                    <div className="space-y-3 bg-gray-50 rounded-2xl p-5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Sewa Dalam Kota</span>
                        <span className="font-semibold text-primary text-sm">{selectedCar.prices.city}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="text-sm text-gray-500">Sewa Luar Kota</span>
                        <span className="font-semibold text-primary text-sm">{selectedCar.prices.out}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={`${waLink}${encodeURIComponent(selectedCar.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 block bg-primary text-white text-center py-4 rounded-xl text-sm font-semibold tracking-wide hover:brightness-110 transition-all shadow-md shadow-primary/20"
                >
                  Booking Sekarang via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
