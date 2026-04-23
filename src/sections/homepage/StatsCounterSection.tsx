import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

const stats = [
  { target: 15, suffix: 'K+', label: 'Pelanggan Puas' },
  { target: 98, suffix: '%', label: 'Kepuasan' },
  { target: 100, suffix: '%', label: 'Tersedia' },
  { target: 20, suffix: '+', label: 'Armada' },
];

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useAnimatedCounter(target, 1500);

  return (
    <div ref={ref} className="text-center py-8 md:py-12">
      <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
        {count}
        {suffix}
      </div>
      <div className="text-xs font-black tracking-widest text-gray-400 mt-2 uppercase italic">{label}</div>
    </div>
  );
}

export function StatsCounterSection() {
  return (
    <section className="bg-white border-y border-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
