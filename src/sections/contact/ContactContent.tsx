import { FadeUp } from '@/components/FadeUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export function ContactContent() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Google Maps */}
          <FadeUp direction="left">
            <div className="rounded-3xl shadow-card-hover overflow-hidden h-full min-h-[450px] border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d109.9!3d-7.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa0!2sWonosobo!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alterra Tour Location"
                className="w-full h-full"
              />
            </div>
          </FadeUp>

          {/* Info Cards */}
          <FadeUp direction="right">
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 hover:shadow-card-hover transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FontAwesomeIcon icon={faPhone} className="text-primary group-hover:text-white transition-colors text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Panggil Kami</h4>
                    <p className="text-xl font-semibold text-gray-900 tracking-tight">6282130205600</p>
                    <p className="text-sm text-gray-500 mt-1">Tersedia Telp & WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 hover:shadow-card-hover transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FontAwesomeIcon icon={faClock} className="text-primary group-hover:text-white transition-colors text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Jam Layanan</h4>
                    <p className="text-xl font-semibold text-gray-900">Buka 24 Jam</p>
                    <p className="text-sm text-gray-500 mt-1">Senin sampai Minggu</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 hover:shadow-card-hover transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary group-hover:text-white transition-colors text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Lokasi Kantor</h4>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Ngariboyo, Sindupaten, Kecamatan Kertek, Wonosobo, Jawa Tengah 56371
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
