import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faUsers, 
  faGear 
} from '@fortawesome/free-solid-svg-icons';
import { FadeUp } from '@/components/FadeUp';

interface Vehicle {
  name: string;
  image: string;
  capacity: string;
  transmission: string;
  prices: { label: string; value: string }[];
}

interface Category {
  name: string;
  badgeColor: string;
  borderColor: string;
  vehicles: Vehicle[];
}

const categories: Category[] = [
  {
    name: 'MPV',
    badgeColor: 'bg-primary/5 text-primary border-primary/20',
    borderColor: 'border-l-primary',
    vehicles: [
      { name: 'All New Avanza', image: '/images/mobil/avanza.jpg', capacity: '6-7 org', transmission: 'Manual/Matic', prices: [{ label: 'Dalam Kota', value: 'Rp 450.000/hari' }, { label: 'Luar Kota', value: 'Rp 550.000/hari' }] },
      { name: 'Grand Innova', image: '/images/mobil/innova-reborn.jpg', capacity: '6-7 org', transmission: 'Manual/Matic', prices: [{ label: 'Dalam Kota', value: 'Rp 550.000/hari' }, { label: 'Luar Kota', value: 'Rp 650.000/hari' }] },
      { name: 'Innova Reborn', image: '/images/mobil/innova-reborn.jpg', capacity: '6-7 org', transmission: 'Manual/Matic', prices: [{ label: 'Dalam Kota', value: 'Rp 600.000/hari' }, { label: 'Luar Kota', value: 'Rp 700.000/hari' }] },
      { name: 'Innova Zenix', image: '/images/mobil/innova-zenix.jpg', capacity: '6-7 org', transmission: 'Hybrid Matic', prices: [{ label: 'Dalam Kota', value: 'Rp 700.000/hari' }, { label: 'Luar Kota', value: 'Rp 850.000/hari' }] },
    ],
  },
  {
    name: 'LUXURY',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    borderColor: 'border-l-primary',
    vehicles: [
      { name: 'Alphard Transformer', image: '/images/mobil/alphard.jpg', capacity: '6-7 org', transmission: 'Matic', prices: [{ label: 'Dalam Kota', value: 'Rp 1.500.000/hari' }, { label: 'Luar Kota', value: 'Rp 1.800.000/hari' }] },
    ],
  },
  {
    name: 'MINIBUS',
    badgeColor: 'bg-primary/10 text-primary border-primary/20',
    borderColor: 'border-l-primary',
    vehicles: [
      { name: 'Toyota Hiace Commuter', image: '/images/mobil/hiace-commuter.jpg', capacity: '14-16 org', transmission: 'Manual', prices: [{ label: 'Dalam Kota', value: 'Rp 1.000.000/hari' }, { label: 'Luar Kota', value: 'Rp 1.200.000/hari' }] },
      { name: 'Toyota Hiace Premio', image: '/images/mobil/hiace-premio.jpg', capacity: '9-12 org', transmission: 'Matic', prices: [{ label: 'Dalam Kota', value: 'Rp 1.200.000/hari' }, { label: 'Luar Kota', value: 'Rp 1.500.000/hari' }] },
      { name: 'Isuzu Elf Long', image: '/images/mobil/elf.jpg', capacity: '16-19 org', transmission: 'Manual', prices: [{ label: 'Dalam Kota', value: 'Rp 1.100.000/hari' }, { label: 'Luar Kota', value: 'Rp 1.350.000/hari' }] },
    ],
  },
  {
    name: 'BUS',
    badgeColor: 'bg-primary/10 text-primary border-primary/20',
    borderColor: 'border-l-primary',
    vehicles: [
      { name: 'Medium Bus', image: '/images/mobil/bus-medium.jpg', capacity: '25-30 org', transmission: 'Manual/Matic', prices: [{ label: 'Dalam Kota', value: 'Rp 1.800.000/hari' }, { label: 'Luar Kota', value: 'Rp 2.200.000/hari' }] },
      { name: 'Big Bus SHD', image: '/images/mobil/bus-big.jpg', capacity: '45-50 org', transmission: 'Matic', prices: [{ label: 'Dalam Kota', value: 'Rp 2.500.000/hari' }, { label: 'Luar Kota', value: 'Rp 3.000.000/hari' }] },
    ],
  },
];

const waLink = 'https://wa.me/6282130205600?text=Halo%20Alterra%20Tour,%20saya%20ingin%20memesan%20';

export function PriceCategories() {
  const [openVehicle, setOpenVehicle] = useState<string | null>(null);

  const toggleVehicle = (name: string) => {
    setOpenVehicle(openVehicle === name ? null : name);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-surface opacity-30 pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {categories.map((category) => (
          <div key={category.name} className="mb-32 last:mb-0">
            <FadeUp direction="left">
                <div className={`border-l-4 ${category.borderColor} pl-6 mb-12`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{category.name}</h3>
                  <p className="text-gray-400 text-sm mt-2">Pilihan kendaraan kategori {category.name.toLowerCase()}</p>
                </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {category.vehicles.map((vehicle) => (
                <FadeUp key={vehicle.name}>
                  <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 group flex flex-col h-full">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className={`absolute top-4 left-4 text-[10px] font-medium px-3 py-1 rounded-lg border ${category.badgeColor}`}>
                        {category.name}
                      </span>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">{vehicle.name}</h4>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-3 pb-5 border-b border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faUsers} className="text-primary text-[11px]" />
                          <span className="text-xs text-gray-500">{vehicle.capacity}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faGear} className="text-primary text-[11px]" />
                          <span className="text-xs text-gray-500">{vehicle.transmission}</span>
                        </div>
                      </div>

                      {/* Accordion */}
                      <button
                        onClick={() => toggleVehicle(vehicle.name)}
                        className="w-full flex items-center justify-between py-5 text-xs font-medium text-primary hover:opacity-70 transition-all"
                      >
                        <span>Lihat Estimasi Harga</span>
                        <motion.div
                          animate={{ rotate: openVehicle === vehicle.name ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openVehicle === vehicle.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden bg-primary/5 rounded-3xl mb-6 shadow-inner"
                          >
                            <div className="p-6 space-y-4">
                              {vehicle.prices.map((price) => (
                                <div
                                  key={price.label}
                                  className="flex justify-between items-center text-[10px]"
                                >
                                  <span className="text-xs text-gray-500">{price.label}</span>
                                  <span className="text-sm font-semibold text-primary">{price.value}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-auto">
                        <a
                          href={`${waLink}${encodeURIComponent(vehicle.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-primary text-white rounded-xl px-8 py-4 text-xs font-semibold tracking-wide text-center shadow-md shadow-primary/20 hover:brightness-110 transition-all hover:-translate-y-0.5"
                        >
                          Pesan Unit Ini
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-32 pt-12 border-t border-gray-100/50">
          <p className="text-xs text-gray-400 text-center">
            *Harga dapat berubah sewaktu-waktu &mdash; Hubungi kami untuk promo eksklusif
          </p>
        </div>
      </div>
    </section>
  );
}
