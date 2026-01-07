import React, { useEffect } from 'react';
import InteractiveMap from '../components/map/InteractiveMap';

const MapPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Peta Interaktif - Pantaudidik.id';
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Peta Interaktif Masalah Pendidikan
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Lihat sebaran masalah pendidikan di seluruh Indonesia. Klik pada titik untuk melihat
            detail laporan dan status penyelesaiannya. Gunakan filter untuk menemukan laporan berdasarkan
            jenis masalah, lokasi, atau tingkat keparahan.
          </p>
        </div>

        <InteractiveMap />
      </div>
    </div>
  );
};

export default MapPage;