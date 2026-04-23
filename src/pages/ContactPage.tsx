import { PageHeader } from '@/components/PageHeader';
import { ContactContent } from '@/sections/contact/ContactContent';

export function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="HUBUNGI KAMI" 
        subtitle="Siap melayani kebutuhan transportasi Anda 24/7. Silakan hubungi kami kapan saja." 
        bgImage="/images/backgroundpage/contact.jpg" 
      />
      <ContactContent />
    </main>
  );
}
