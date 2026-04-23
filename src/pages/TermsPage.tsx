import { PageHeader } from '@/components/PageHeader';
import { TermsCards } from '@/sections/terms/TermsCards';

export function TermsPage() {
  return (
    <main>
      <PageHeader 
        title="SYARAT & KETENTUAN" 
        subtitle="Informasi penting mengenai prosedur sewa dan kebijakan layanan Alterra Tour." 
        bgImage="/images/backgroundpage/terms.jpg" 
      />
      <TermsCards />
    </main>
  );
}
