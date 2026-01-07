import React from 'react';
import { School, Users, Map, BarChart } from 'lucide-react';
import StatCard from '../ui/StatCard';

const StatisticsSection: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Dampak Pantaudidik.id
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform kami telah membantu memetakan dan menyelesaikan berbagai masalah pendidikan
            di seluruh Indonesia melalui kolaborasi pemuda dan pemangku kepentingan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<School size={24} />}
            title="Sekolah Terpantau"
            value="1,250+"
            description="Sekolah telah terpetakan"
            color="blue"
          />
          <StatCard
            icon={<Map size={24} />}
            title="Provinsi Terjangkau"
            value="28"
            description="Dari 34 provinsi di Indonesia"
            color="teal"
          />
          <StatCard
            icon={<Users size={24} />}
            title="Kontributor Aktif"
            value="560"
            description="Pemuda berpartisipasi aktif"
            color="amber"
          />
          <StatCard
            icon={<BarChart size={24} />}
            title="Masalah Terselesaikan"
            value="42%"
            description="Dari total laporan masuk"
            color="indigo"
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;