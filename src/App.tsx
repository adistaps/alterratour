import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { PricePage } from '@/pages/PricePage';
import { ReservationPage } from '@/pages/ReservationPage';
import { TermsPage } from '@/pages/TermsPage';
import { ContactPage } from '@/pages/ContactPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
