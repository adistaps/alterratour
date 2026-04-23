import { PageHeader } from '@/components/PageHeader';
import { ServicesGrid } from '@/sections/services/ServicesGrid';

export function ServicesPage() {
  return (
    <main>
      <PageHeader 
        title="LAYANAN TERBAIK" 
        subtitle="Solusi transportasi terpadu untuk berbagai kebutuhan perjalanan Anda di Yogyakarta." 
        bgImage="/images/backgroundpage/services.jpg" 
      />
      <ServicesGrid />
    </main>
  );
}
