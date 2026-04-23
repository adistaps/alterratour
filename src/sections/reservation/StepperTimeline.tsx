import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faCreditCard,
  faCircleCheck,
  faTicket
} from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    number: 1,
    title: 'Hubungi Customer Service',
    icon: faPhone,
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <FontAwesomeIcon icon={faPhone} className="text-primary" />
          <span>Phone/WhatsApp: <strong className="text-gray-900 ml-1">6282130205600</strong></span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
          <span>Email: <strong className="text-gray-900 ml-1">info@alterratour.com</strong></span>
        </div>
      </div>
    ),
  },
  {
    number: 2,
    title: 'Transfer Uang Muka (Min 20%)',
    icon: faCreditCard,
    content: (
      <div className="space-y-2">
        <p className="text-sm text-gray-600"><span className="font-medium text-primary mr-2">Bank BCA:</span>846 531 3133</p>
        <p className="text-sm text-gray-600"><span className="font-medium text-primary mr-2">Bank Mandiri:</span>137 006 665 5503</p>
        <p className="text-sm text-gray-600"><span className="font-medium text-primary mr-2">Bank BNI:</span>370 013 8001</p>
        <p className="text-xs text-gray-400 mt-3">a.n. PT. Alterra Tour Indonesia</p>
      </div>
    ),
  },
  {
    number: 3,
    title: 'Konfirmasi Pembayaran',
    icon: faCircleCheck,
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Setelah transfer, segera konfirmasi ke petugas agar proses pemesanan dapat dilanjutkan secara prioritas.
      </p>
    ),
  },
  {
    number: 4,
    title: 'Kode Booking Eksklusif',
    icon: faTicket,
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Setelah pembayaran dikonfirmasi, Anda akan menerima kode booking digital. Layanan premium kami siap menemani perjalanan Anda.
      </p>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function StepperTimeline() {
  const waLink = 'https://wa.me/6282130205600?text=Halo%20Alterra%20Tour,%20saya%20ingin%20memesan%20kendaraan';

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 rounded-full" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex gap-8 md:gap-12 mb-12 last:mb-0 group"
            >
              {/* Number circle */}
              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-lg md:text-xl shrink-0 shadow-md shadow-primary/25 transition-transform group-hover:scale-105 duration-300">
                {step.number}
              </div>

              {/* Content card */}
              <div className="flex-1 bg-white rounded-3xl border border-gray-100 p-8 md:p-10 hover:shadow-card-hover transition-all duration-500 border-l-[12px] border-l-primary group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <FontAwesomeIcon icon={step.icon} className="text-lg" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                {step.content}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-20">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white rounded-full px-10 py-4 text-sm font-semibold tracking-wide hover:brightness-110 transition-all duration-300 shadow-md shadow-primary/20"
          >
            Pesan Sekarang via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

