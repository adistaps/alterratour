import { FadeUp } from '@/components/FadeUp';
import { SectionHeader } from '@/components/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const waLink = 'https://wa.me/6282130205600?text=Halo%20Alterra%20Tour,%20saya%20ingin%20bertanya';

export function LokasiKamiSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="LOKASI KAMI"
          subtitle="Kunjungi kantor kami atau hubungi untuk informasi lebih lanjut."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Google Maps */}
          <FadeUp direction="left">
            <div className="rounded-3xl shadow-card-hover overflow-hidden aspect-video lg:aspect-auto lg:h-full border-8 border-gray-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d109.9!3d-7.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa0!2sWonosobo!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
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
              <div className="bg-white rounded-3xl border border-gray-50 p-8 hover:shadow-card-hover transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 border-none">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary group-hover:text-white transition-colors text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Alamat Kantor</h4>
                    <p className="text-base font-medium text-gray-800 leading-relaxed">
                      Ngariboyo, Sindupaten, Kertek, Wonosobo 56371, Jawa Tengah
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-50 p-8 hover:shadow-card-hover transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 border-none">
                    <FontAwesomeIcon icon={faPhone} className="text-primary group-hover:text-white transition-colors text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Telepon / WhatsApp</h4>
                    <p className="text-xl font-semibold text-gray-900 tracking-tight">6282130205600</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-50 p-8 hover:shadow-card-hover transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 border-none">
                    <FontAwesomeIcon icon={faClock} className="text-primary group-hover:text-white transition-colors text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Jam Operasional</h4>
                    <p className="text-base font-semibold text-gray-900">Senin – Minggu / 24 Jam</p>
                    <p className="text-sm text-gray-400 mt-1">Layanan non-stop termasuk hari libur</p>
                  </div>
                </div>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-center hover:brightness-110 transition-all duration-300 shadow-md shadow-primary/20"
              >
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
