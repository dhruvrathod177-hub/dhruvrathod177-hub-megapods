import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Solutions', value: 'solutions' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Contact Us', value: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
  className="
    mx-auto max-w-7xl
    border-b-2 border-gray-200
    rounded-b-xl
    hover:border-orange-500 
    transition-all duration-300
    sticky top-0 z-50 bg-white
    shadow-2xl hover:shadow-2xl
  "
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigate('home')}>
            <img
              src="/img/logo1.JPG"
              alt="Megapods India Logo"
              className="h-20 w-20  object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                       
            />
            <div className="flex flex-col">
              <span className="  text-3xl 
                                 font-bold 
                                 text-gray-900 
                                 hover:text-orange-500
                                 hover:scale-105
                                 transition-all 
                                 duration-300 
                                 cursor-pointe">Megapodsindia</span>
              
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavigate(item.value)}
                className={`relative text-base font-medium transition-all duration-300 transform ${
                  currentPage === item.value
                    ? 'text-orange-600 scale-110 after:w-full'
                    : 'text-gray-700 hover:text-orange-600 hover:scale-110'
                }
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[4px]
                after:bg-orange-600
                after:w-0
                after:transition-all
                after:duration-300
                hover:after:w-full`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-colors hover:scale-105
                                 
                                 duration-300 
                                 cursor-pointe"
            >
              Get Free Consultation
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavigate(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === item.value
                    ? 'bg-orange-50 text-orange-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+918758176693"
              className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <Phone size={20} />
              <span className="font-medium">+918758176693</span>
            </a>
            <a
              href="tel:+919265380907"
              className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <Phone size={20} />
              <span className="font-medium">+919265380907</span>
            </a>
            <button
              onClick={() => handleNavigate('contact')}
              className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
