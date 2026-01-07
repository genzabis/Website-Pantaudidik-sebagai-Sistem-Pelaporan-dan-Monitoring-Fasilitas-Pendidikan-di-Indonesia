import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, BookOpen, AlertTriangle } from 'lucide-react';
import logopantaudidikid from "../../assets/logopantaudidikid.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="flex items-center">
                <img
                  src={logopantaudidikid}
                  alt="Pantaudidik Logo"
                  className="h-8 w-auto"
                />
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Platform digital untuk memetakan dan melaporkan masalah pendidikan
              lokal di Indonesia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-teal-300 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-300 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/map"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Peta Interaktif
                </Link>
              </li>
              <li>
                <Link
                  to="/report"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Laporkan Masalah
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cari & Filter Laporan
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Berita & Advokasi
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Pendidikan No. 123, Jakarta Pusat, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@pantaudidik.id"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@pantaudidik.id
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="tel:+62212345678"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +62 21 2345 678
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Berlangganan</h3>
            <p className="text-gray-300 mb-4">
              Dapatkan update terbaru tentang laporan dan advokasi pendidikan.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 rounded-md bg-indigo-800 text-white placeholder-gray-400 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Pantaudidik.id. Semua hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;