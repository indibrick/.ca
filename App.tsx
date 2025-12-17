import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PreConstruction from './pages/PreConstruction';
import Tools from './pages/Tools';
import Services from './pages/Services';
import Admin from './pages/Admin';
import PartnerLanding from './pages/PartnerLanding';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LeadForm from './components/LeadForm';
import RenovationFinancing from './pages/RenovationFinancing';
import KnowledgeHub from './pages/KnowledgeHub';
import ArticlePage from './pages/ArticlePage';
import Careers from './pages/Careers';
import CityLandingPage from './pages/CityLandingPage';
import PreConCityPage from './pages/PreConCityPage';
import { MapPin, Phone, Mail } from 'lucide-react';
import { RateProvider } from './RateContext';
import { AdminProvider } from './AdminContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {!isAdmin && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
};

const ContactPage = () => (
  <div className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-black mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Ready to get started? Reach out to us directly or fill out the form for a free consultation.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-lg shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Visit Us</h3>
                <p className="text-gray-600 leading-relaxed">60 Pippin Rd Unit 34<br/>Vaughan, ON L4K 4M8</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-lg shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Call Us</h3>
                <p className="text-gray-600 text-lg">(437) 241-6392</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-lg shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Email Us</h3>
                <a href="mailto:muditchhura@gopineapple.com" className="text-gray-600 hover:text-black transition">muditchhura@gopineapple.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-1 rounded-2xl shadow-sm">
           <LeadForm title="Send a Message" subtitle="We'll get back to you within 24 hours." />
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <AdminProvider>
      <RateProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/pre-construction" element={<PreConstruction />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/renovation-financing" element={<RenovationFinancing />} />
              <Route path="/learn" element={<KnowledgeHub />} />
              <Route path="/learn/:slug" element={<ArticlePage />} />
              <Route path="/partner/:id" element={<PartnerLanding />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/admin" element={<Admin />} />
              {/* Dynamic SEO Routes */}
              <Route path="/mortgage-real-estate-:city" element={<CityLandingPage />} />
              <Route path="/pre-construction-condos-:city" element={<PreConCityPage />} />
            </Routes>
          </Layout>
        </Router>
      </RateProvider>
    </AdminProvider>
  );
};

export default App;
