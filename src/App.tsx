import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title = getPageTitle(currentPage);
  }, [currentPage]);

  const getPageTitle = (page: string) => {
    const titles: { [key: string]: string } = {
      home: 'Megapods India - Premium Container Solutions | Cafes, Offices & Custom Designs',
      about: 'About Us - Megapods India | Container Conversion Experts',
      solutions: 'Our Solutions - Container Cafes, Offices & Public Toilets | Megapods India',
      gallery: 'Design Gallery - Container Conversion Concepts | Megapods India',
      contact: 'Contact Us - Get Free Consultation | Megapods India',
    };
    return titles[page] || 'Megapods India';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'solutions':
        return <Solutions onNavigate={setCurrentPage} />;
      case 'gallery':
        return <Gallery onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
      
    </div>
    

  );
}

export default App;
