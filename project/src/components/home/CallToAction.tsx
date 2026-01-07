import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, UserPlus, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <div className="py-16 bg-indigo-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-amber-400 rounded-tl-full"></div>
        <div className="absolute left-0 top-0 w-1/4 h-1/2 bg-teal-400 rounded-br-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Jadilah Bagian dari Perubahan Pendidikan Indonesia
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Bersama-sama kita dapat meningkatkan kualitas pendidikan di seluruh Indonesia. 
              Laporkan masalah yang kamu temui atau bergabunglah sebagai kontributor aktif.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                  <ClipboardList size={32} />
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Laporkan Masalah</h3>
                <p className="text-gray-600">
                  Temukan masalah pendidikan di sekitarmu? Laporkan segera agar dapat diketahui dan ditindaklanjuti.
                </p>
              </div>
              <Button 
                to="/report" 
                variant="secondary" 
                size="lg" 
                fullWidth
                icon={<ArrowRight size={18} />}
              >
                Buat Laporan
              </Button>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4">
                  <UserPlus size={32} />
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Jadi Kontributor</h3>
                <p className="text-gray-600">
                  Bergabunglah sebagai kontributor aktif untuk membantu memvalidasi dan menindaklanjuti laporan.
                </p>
              </div>
              <Button 
                to="/contribute" 
                variant="primary" 
                size="lg" 
                fullWidth
                icon={<ArrowRight size={18} />}
              >
                Gabung Sekarang
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;