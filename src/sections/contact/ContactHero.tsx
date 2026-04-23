import { FadeUp } from '@/components/FadeUp';

export function ContactHero() {
  return (
    <section className="pt-40 pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center uppercase">
        <FadeUp>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">
            <span className="text-gray-900">HUBUNGI </span>
            <span className="text-primary">KAMI</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-1.5 bg-primary rounded-full" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-12 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-lg font-bold text-gray-400 mt-8 max-w-xl mx-auto normal-case leading-relaxed">
            Hubungi kami kapan saja, layanan premium kami tersedia 24 jam untuk membantu menyempurnakan perjalanan Anda.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
