import React from 'react';
import { ClipboardEdit, Map, UserCheck, Users, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, number }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-amber-400 text-indigo-900 flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      <div className="flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-400">
          <div className="flex items-center mb-3">
            <div className="mr-3 text-indigo-700">{icon}</div>
            <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardEdit size={24} />,
      title: "Laporkan Masalah",
      description: "Pemuda desa atau pihak sekolah melaporkan masalah pendidikan yang dihadapi di daerahnya melalui formulir online yang mudah diakses.",
      number: 1
    },
    {
      icon: <Map size={24} />,
      title: "Visualisasi Data",
      description: "Laporan masuk akan ditampilkan pada peta interaktif berdasarkan lokasi dan kategori masalah, sehingga memudahkan identifikasi pola masalah.",
      number: 2
    },
    {
      icon: <UserCheck size={24} />,
      title: "Validasi & Verifikasi",
      description: "Tim kami memvalidasi laporan yang masuk untuk memastikan keakuratan data sebelum ditindaklanjuti dengan pemangku kepentingan terkait.",
      number: 3
    },
    {
      icon: <Users size={24} />,
      title: "Kolaborasi Solusi",
      description: "Fasilitasi kolaborasi antara pemuda desa, sekolah, pemerintah desa, dan dinas pendidikan untuk merumuskan solusi bersama.",
      number: 4
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Pemantauan & Evaluasi",
      description: "Pantau perkembangan penyelesaian masalah dan dokumentasikan hasil perubahan sebagai pembelajaran bersama.",
      number: 5
    }
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Bagaimana Pantaudidik.id Bekerja
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kami menyediakan alur kerja yang sederhana namun efektif untuk memastikan
            setiap masalah pendidikan dapat terdokumentasi dan terselesaikan dengan baik
          </motion.p>
        </div>

        <div className="space-y-6 md:space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Step
                icon={step.icon}
                title={step.title}
                description={step.description}
                number={step.number}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;