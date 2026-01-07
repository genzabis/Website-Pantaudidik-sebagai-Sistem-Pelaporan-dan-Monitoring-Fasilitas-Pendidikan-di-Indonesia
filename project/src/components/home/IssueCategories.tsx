import React from 'react';
import { BookOpen, School, Users, Lightbulb, Building, Wifi, BookText, PencilRuler } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600 hover:shadow-lg transition-shadow"
    >
      <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4 text-indigo-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

const IssueCategories: React.FC = () => {
  const categories = [
    {
      icon: <Building size={24} />,
      title: "Fasilitas Sekolah",
      description: "Masalah terkait gedung, ruang kelas, toilet, dan infrastruktur fisik lainnya",
      delay: 0
    },
    {
      icon: <Users size={24} />,
      title: "Tenaga Pengajar",
      description: "Kekurangan guru, distribusi tidak merata, atau kualifikasi yang tidak sesuai",
      delay: 1
    },
    {
      icon: <BookText size={24} />,
      title: "Kurikulum",
      description: "Kesulitan implementasi kurikulum, bahan ajar, dan metode pembelajaran",
      delay: 2
    },
    {
      icon: <BookOpen size={24} />,
      title: "Akses Pendidikan",
      description: "Hambatan akses sekolah seperti jarak, transportasi, dan biaya pendidikan",
      delay: 3
    },
    {
      icon: <Wifi size={24} />,
      title: "Teknologi & Internet",
      description: "Akses internet, ketersediaan perangkat, dan kesiapan pembelajaran digital",
      delay: 4
    },
    {
      icon: <PencilRuler size={24} />,
      title: "Alat Pembelajaran",
      description: "Ketersediaan buku, alat peraga, dan media pembelajaran lainnya",
      delay: 5
    },
    {
      icon: <School size={24} />,
      title: "Administrasi Sekolah",
      description: "Masalah terkait manajemen sekolah, administrasi, dan tata kelola",
      delay: 6
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Ekstrakurikuler",
      description: "Kegiatan penunjang pendidikan di luar jam pelajaran formal",
      delay: 7
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Kategori Masalah yang Dapat Dilaporkan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pantaudidik.id membantu memetakan berbagai masalah pendidikan dalam kategori berikut untuk memudahkan identifikasi dan penyelesaian
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IssueCategories;