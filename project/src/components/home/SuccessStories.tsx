import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import atapbocor from "../../assets/atapbocor.png";
import lantaibecek from "../../assets/lantaibecek.png";
import lantairusak from "../../assets/lantairusak.png";

interface SuccessStoryProps {
  image: string;
  title: string;
  location: string;
  description: string;
  index: number;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ image, title, location, description, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-teal-500 text-white py-1 px-3 rounded-full text-xs font-medium flex items-center">
          <CheckCircle size={14} className="mr-1" />
          Terselesaikan
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-indigo-900 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{location}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const SuccessStories: React.FC = () => {
  const stories = [
    {
      image: atapbocor,
      title: "Renovasi Atap Sekolah SD Maju Bersama",
      location: "Kabupaten Manggarai, NTT",
      description:
        "Laporan tentang atap bocor yang mengganggu proses belajar berhasil ditindaklanjuti dengan kolaborasi pemuda desa dan pemerintah setempat.",
    },
    {
      image: lantaibecek,
      title: "Perbaikan Atap Sekolah Dasar",
      location: "Kecamatan Ciseeng, Bogor",
      description:
        "Masalah atap bocor saat hujan sudah teratasi, demi kenyamanan belajar bersama.",
    },
    {
      image: lantairusak,
      title: "Renovasi Lantai Rusak Sekolah Dasar",
      location: "Kabupaten Pesisir Selatan, Sumbar",
      description:
        "Perbaikan lantai sekolah dasar sudah terealisasi dengan secepat mungkin.",
    },
  ];
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Cerita Sukses Pantaudidik.id
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beberapa contoh masalah pendidikan yang berhasil diselesaikan
            melalui kolaborasi berbagai pihak setelah dilaporkan melalui
            platform kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <SuccessStory
              key={index}
              image={story.image}
              title={story.title}
              location={story.location}
              description={story.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;