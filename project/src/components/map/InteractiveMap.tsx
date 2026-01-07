import React, { useState } from 'react';
import { Search, Filter, Map as MapIcon } from 'lucide-react';
import Button from '../ui/Button';

// Placeholder data for demonstration
const mockData = [
  {
    id: 1,
    schoolName: "SD Negeri 1 Sukamaju",
    address: "Jl. Pendidikan No. 1, Kabupaten Sukamaju, Jawa Barat",
    issueType: "Fasilitas",
    description: "Atap sekolah bocor dan menyebabkan ruang kelas menjadi tidak nyaman saat hujan.",
    severity: "high",
    lat: -6.2,
    lng: 106.8,
    reporter: "Ahmad Sulaiman",
    date: "2023-08-15",
    status: "pending"
  },
  {
    id: 2,
    schoolName: "SMP Negeri 2 Harapan",
    address: "Jl. Merdeka No. 12, Kota Harapan, Sumatera Utara",
    issueType: "Guru",
    description: "Kekurangan guru mata pelajaran Matematika untuk kelas 8 dan 9.",
    severity: "medium",
    lat: -6.3,
    lng: 106.9,
    reporter: "Siti Nurhaliza",
    date: "2023-09-05",
    status: "in_progress"
  },
  {
    id: 3,
    schoolName: "SMA Negeri 3 Sejahtera",
    address: "Jl. Jendral Sudirman No. 45, Kabupaten Sejahtera, Sulawesi Selatan",
    issueType: "Teknologi",
    description: "Koneksi internet sangat lambat, menghambat pembelajaran digital.",
    severity: "low",
    lat: -6.15,
    lng: 106.85,
    reporter: "Budi Santoso",
    date: "2023-09-20",
    status: "resolved"
  }
];

const InteractiveMap: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIssues, setFilteredIssues] = useState(mockData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === '') {
      setFilteredIssues(mockData);
      return;
    }
    
    const filtered = mockData.filter(
      issue => issue.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
               issue.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredIssues(filtered);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-amber-500';
      case 'low':
        return 'bg-teal-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return { text: 'Menunggu Tindakan', color: 'text-amber-600 bg-amber-100' };
      case 'in_progress':
        return { text: 'Dalam Proses', color: 'text-blue-600 bg-blue-100' };
      case 'resolved':
        return { text: 'Terselesaikan', color: 'text-teal-600 bg-teal-100' };
      default:
        return { text: 'Tidak Diketahui', color: 'text-gray-600 bg-gray-100' };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden h-[500px] md:h-[700px] relative">
        {/* Map placeholder - In a real implementation, this would be an actual map component */}
        <div className="absolute inset-0 bg-indigo-50 flex items-center justify-center">
          <div className="text-center">
            <MapIcon size={64} className="mx-auto text-indigo-300 mb-4" />
            <p className="text-indigo-900 font-medium">Peta Interaktif Indonesia</p>
            <p className="text-gray-500 text-sm">(Implementasi peta akan menggunakan Google Maps atau Leaflet)</p>
          </div>
        </div>
        
        {/* Map markers placeholder */}
        {filteredIssues.map((issue) => (
          <div 
            key={issue.id}
            className={`absolute cursor-pointer transition-all transform hover:scale-110 ${
              selectedIssue === issue.id ? 'z-10 scale-110' : 'z-0'
            }`}
            style={{ 
              left: `${(issue.lng - 106.7) * 500 + 50}px`, 
              top: `${(issue.lat + 6.3) * -500 + 350}px` 
            }}
            onClick={() => setSelectedIssue(issue.id)}
          >
            <div className={`w-5 h-5 rounded-full ${getSeverityColor(issue.severity)} shadow-lg`}>
              <span className="sr-only">{issue.schoolName}</span>
            </div>
            
            {selectedIssue === issue.id && (
              <div className="absolute left-6 top-0 w-64 bg-white rounded-lg shadow-lg p-4 text-sm z-20">
                <h4 className="font-semibold text-indigo-900">{issue.schoolName}</h4>
                <p className="text-gray-500 text-xs mb-2">{issue.address}</p>
                <div className="flex items-center mb-2">
                  <span className={`inline-block w-3 h-3 rounded-full ${getSeverityColor(issue.severity)} mr-2`}></span>
                  <span className="text-gray-700">{issue.issueType}</span>
                </div>
                <p className="text-gray-700 mb-2">{issue.description}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">Dilaporkan: {issue.date}</span>
                  <span className={`px-2 py-1 rounded-full ${getStatusLabel(issue.status).color}`}>
                    {getStatusLabel(issue.status).text}
                  </span>
                </div>
                <div className="mt-3">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    to={`/report/${issue.id}`}
                    fullWidth
                  >
                    Lihat Detail
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="h-full">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Pencarian & Filter</h2>
          
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari sekolah atau lokasi..."
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-700"
              >
                <Search size={18} />
              </button>
            </div>
          </form>
          
          <div className="mb-6">
            <h3 className="flex items-center text-md font-semibold text-gray-700 mb-3">
              <Filter size={18} className="mr-2" /> Filter Laporan
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="">Semua Provinsi</option>
                  <option value="jawa-barat">Jawa Barat</option>
                  <option value="jawa-tengah">Jawa Tengah</option>
                  <option value="jawa-timur">Jawa Timur</option>
                  <option value="sumatera-utara">Sumatera Utara</option>
                  <option value="sulawesi-selatan">Sulawesi Selatan</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Masalah</label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="">Semua Masalah</option>
                  <option value="fasilitas">Fasilitas</option>
                  <option value="guru">Guru</option>
                  <option value="kurikulum">Kurikulum</option>
                  <option value="teknologi">Teknologi & Internet</option>
                  <option value="akses">Akses Pendidikan</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tingkat Keparahan</label>
                <div className="flex space-x-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500" />
                    <span className="ml-2 text-sm text-gray-700">Tinggi</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-500" />
                    <span className="ml-2 text-sm text-gray-700">Sedang</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-teal-500" />
                    <span className="ml-2 text-sm text-gray-700">Rendah</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <div className="flex space-x-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-500" />
                    <span className="ml-2 text-sm text-gray-700">Menunggu</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Proses</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-teal-500" />
                    <span className="ml-2 text-sm text-gray-700">Selesai</span>
                  </label>
                </div>
              </div>
              
              <Button variant="secondary" size="sm" fullWidth>
                Terapkan Filter
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Legenda</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 rounded-full bg-red-500 mr-2"></span>
                <span className="text-gray-700">Masalah Tingkat Tinggi</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-gray-700">Masalah Tingkat Sedang</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 rounded-full bg-teal-500 mr-2"></span>
                <span className="text-gray-700">Masalah Tingkat Rendah</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;