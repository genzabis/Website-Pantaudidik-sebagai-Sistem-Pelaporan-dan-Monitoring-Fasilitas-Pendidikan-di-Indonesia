import React, { useEffect, useState } from 'react';
import FilterSidebar from '../components/search/FilterSidebar';
import SearchResults from '../components/search/SearchResults';
import { Search, SlidersHorizontal } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = 'Cari Laporan - Pantaudidik.id';
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would trigger a search
    console.log('Searching for:', searchTerm);
  };

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Cari & Filter Laporan
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Temukan laporan masalah pendidikan berdasarkan lokasi, jenis masalah, atau kata kunci tertentu.
            Gunakan filter untuk mempersempit hasil pencarian Anda.
          </p>
        </div>

        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex w-full max-w-3xl">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Cari berdasarkan nama sekolah, lokasi, atau kata kunci..."
                className="w-full px-4 py-3 pl-12 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-md transition-colors"
            >
              Cari
            </button>
          </form>
        </div>

        <button
          onClick={toggleFilters}
          className="md:hidden flex items-center mb-4 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md"
        >
          <SlidersHorizontal size={18} className="mr-2" />
          {showFilters ? 'Sembunyikan Filter' : 'Tampilkan Filter'}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`md:block ${showFilters ? 'block' : 'hidden'}`}>
            <FilterSidebar />
          </div>
          
          <div className="md:col-span-2">
            <SearchResults />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;