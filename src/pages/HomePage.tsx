import { HeroSection } from '@/sections/homepage/HeroSection';
import { ArmadaUnggulanSection } from '@/sections/homepage/ArmadaUnggulanSection';
import { StatsCounterSection } from '@/sections/homepage/StatsCounterSection';
import { LayananTerbaikSection } from '@/sections/homepage/LayananTerbaikSection';
import { KenapaAlterraSection } from '@/sections/homepage/KenapaAlterraSection';
import { TestimoniSection } from '@/sections/homepage/TestimoniSection';
import { ArmadaKamiSection } from '@/sections/homepage/ArmadaKamiSection';
import { LokasiKamiSection } from '@/sections/homepage/LokasiKamiSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ArmadaUnggulanSection />
      <StatsCounterSection />
      <LayananTerbaikSection />
      <KenapaAlterraSection />
      <TestimoniSection />
      <ArmadaKamiSection />
      <LokasiKamiSection />
    </main>
  );
}
