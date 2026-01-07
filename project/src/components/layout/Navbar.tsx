import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, AlertTriangle } from 'lucide-react';
import logopantau from "../../assets/logopantau.png";



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Peta Interaktif', path: '/map' },
    { name: 'Laporkan', path: '/report' },
    { name: 'Cari Laporan', path: '/search' },
    { name: 'Berita & Advokasi', path: '/news' },
    { name: 'Tentang Kami', path: '/about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="flex items-center text-indigo-900"></div>
            <span className="flex items-center">
              <img
                src={logopantau}
                alt="Pantaudidik Logo"
                className="h-5 w-auto"
              />
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-indigo-700 ${
                    isActive ? "text-indigo-700" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contribute"
              className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-indigo-900 rounded-md font-medium text-sm transition-colors"
            >
              Jadi Kontributor
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-indigo-700"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-md shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium py-2 transition-colors hover:text-indigo-700 ${
                      isActive ? "text-indigo-700" : "text-gray-700"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contribute"
                className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-indigo-900 rounded-md font-medium text-sm transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Jadi Kontributor
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;