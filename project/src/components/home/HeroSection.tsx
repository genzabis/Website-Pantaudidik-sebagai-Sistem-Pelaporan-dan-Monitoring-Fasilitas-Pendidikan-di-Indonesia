import React from 'react';
import { ArrowRight, BookOpen, School } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import fotoanaksekolah from "../../assets/fotoanaksekolah.png";

const HeroSection: React.FC = () => {
  return (
    <div className="relative pt-20 pb-24 md:pt-32 md:pb-32 bg-indigo-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fotoanaksekolah})` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Pantau & Laporkan <br />
              <span className="text-amber-400">Masalah Pendidikan</span> <br />
              di Indonesia
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg md:mx-0 mx-auto">
              Platform kolaborasi pemuda desa, sekolah, dan pemerintah untuk
              membangun pendidikan yang lebih baik melalui data laporan yang
              terorganisir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                to="/report"
                variant="secondary"
                size="lg"
                icon={<School size={18} />}
              >
                Laporkan Masalah
              </Button>
              <Button
                to="/map"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                icon={<ArrowRight size={18} />}
              >
                Lihat Peta Masalah
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src={fotoanaksekolah}
                  alt="Siswa di daerah terpencil"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/90 to-transparent p-6">
                  <p className="text-white font-medium">
                    "Setiap anak Indonesia berhak mendapatkan pendidikan
                    berkualitas"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;