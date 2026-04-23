import { PageHeader } from '@/components/PageHeader';
import { PriceCategories } from '@/sections/price/PriceCategories';

export function PricePage() {
  return (
    <main>
      <PageHeader 
        title="DAFTAR HARGA" 
        subtitle="Tarif sewa mobil transparan dan kompetitif untuk kanyamanan perjalanan Anda." 
        bgImage="/images/backgroundpage/price.jpg" 
      />
      <PriceCategories />
    </main>
  );
}
