import React from 'react';
import { motion } from 'framer-motion';
import kemendikbud from "../../assets/kemndikti.png";
import uin from "../../assets/uin.png";
import forumanak from "../../assets/forumanak.png";


const Partners: React.FC = () => {
  const partners = [
    { name: "Kementerian Pendidikan", logo: kemendikbud },
    { name: "Universitas Prof. K. H. Saifuddin Zuhri Purwokerto", logo: uin },
    { name: "Forum Anak Nasional", logo: forumanak },
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Didukung Oleh
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami berkolaborasi dengan berbagai lembaga dan organisasi untuk
            meningkatkan kualitas pendidikan di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto mb-3"
              />
              <p className="text-sm text-gray-600 text-center">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;