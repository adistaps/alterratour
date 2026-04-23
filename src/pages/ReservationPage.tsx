import { PageHeader } from '@/components/PageHeader';
import { StepperTimeline } from '@/sections/reservation/StepperTimeline';

export function ReservationPage() {
  return (
    <main>
      <PageHeader 
        title="RESERVASI" 
        subtitle="Hanya dalam beberapa langkah mudah, amankan kendaraan pilihan Anda untuk petualangan berikutnya." 
        bgImage="/images/backgroundpage/reservasi.jpg" 
      />
      <StepperTimeline />
    </main>
  );
}
