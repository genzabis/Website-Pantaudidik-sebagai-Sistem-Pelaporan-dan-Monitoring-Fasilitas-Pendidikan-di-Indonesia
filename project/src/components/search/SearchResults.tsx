import React from 'react';
import { MapPin, Calendar, User, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

// Placeholder data for demonstration
const mockReports = [
  {
    id: 1,
    schoolName: "SD Negeri 1 Sukamaju",
    address: "Jl. Pendidikan No. 1, Kabupaten Sukamaju, Jawa Barat",
    issueType: "Fasilitas",
    description: "Atap sekolah bocor dan menyebabkan ruang kelas menjadi tidak nyaman saat hujan. Hal ini sudah berlangsung selama hampir satu tahun dan belum ada perbaikan.",
    severity: "high",
    reporter: "Ahmad Sulaiman",
    date: "2023-08-15",
    status: "pending"
  },
  {
    id: 2,
    schoolName: "SMP Negeri 2 Harapan",
    address: "Jl. Merdeka No. 12, Kota Harapan, Sumatera Utara",
    issueType: "Guru",
    description: "Kekurangan guru mata pelajaran Matematika untuk kelas 8 dan 9. Saat ini satu guru harus mengajar lebih dari 6 kelas berbeda.",
    severity: "medium",
    reporter: "Siti Nurhaliza",
    date: "2023-09-05",
    status: "in_progress"
  },
  {
    id: 3,
    schoolName: "SMA Negeri 3 Sejahtera",
    address: "Jl. Jendral Sudirman No. 45, Kabupaten Sejahtera, Sulawesi Selatan",
    issueType: "Teknologi",
    description: "Koneksi internet sangat lambat, menghambat pembelajaran digital. Sekolah memiliki laboratorium komputer tetapi tidak dapat dimanfaatkan maksimal.",
    severity: "low",
    reporter: "Budi Santoso",
    date: "2023-09-20",
    status: "resolved"
  },
  {
    id: 4,
    schoolName: "SDN 4 Mandiri",
    address: "Jl. Pahlawan No. 23, Kabupaten Serang, Banten",
    issueType: "Akses Pendidikan",
    description: "Jalan menuju sekolah rusak parah sehingga sulit diakses saat musim hujan. Banyak siswa yang terpaksa tidak masuk sekolah saat hujan deras.",
    severity: "high",
    reporter: "Dewi Lestari",
    date: "2023-10-10",
    status: "pending"
  },
  {
    id: 5,
    schoolName: "MTs Al-Hidayah",
    address: "Jl. K.H. Ahmad Dahlan No. 7, Kabupaten Banjar, Kalimantan Selatan",
    issueType: "Alat Pembelajaran",
    description: "Kekurangan buku paket untuk mata pelajaran IPA dan Matematika. Rasio buku dan siswa adalah 1:3 sehingga siswa harus bergantian menggunakan buku.",
    severity: "medium",
    reporter: "Muhammad Rizki",
    date: "2023-10-25",
    status: "in_progress"
  }
];

const SearchResults: React.FC = () => {
  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'high':
        return { text: 'Tinggi', color: 'bg-red-100 text-red-800' };
      case 'medium':
        return { text: 'Sedang', color: 'bg-amber-100 text-amber-800' };
      case 'low':
        return { text: 'Rendah', color: 'bg-teal-100 text-teal-800' };
      default:
        return { text: 'Tidak Diketahui', color: 'bg-gray-100 text-gray-800' };
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">Menampilkan {mockReports.length} hasil</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Urutkan:</span>
          <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="newest">Terbaru</option>
            <option value="oldest">Terlama</option>
            <option value="severity_high">Keparahan: Tinggi-Rendah</option>
            <option value="severity_low">Keparahan: Rendah-Tinggi</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {mockReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-start">
                    <h3 className="text-lg font-semibold text-indigo-900">{report.schoolName}</h3>
                    <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${getSeverityLabel(report.severity).color}`}>
                      {getSeverityLabel(report.severity).text}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mt-1">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span className="ml-1 text-sm">{report.address}</span>
                  </div>
                  
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{report.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      <span>{report.reporter}</span>
                    </div>
                    <div className="flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      <span>{report.issueType}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex-shrink-0">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusLabel(report.status).color}`}>
                    {getStatusLabel(report.status).text}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-600 line-clamp-2">{report.description}</p>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  to={`/report/${report.id}`}
                >
                  Lihat Detail
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <nav className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
          >
            Sebelumnya
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 border-t border-b border-gray-300"
          >
            1
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
          >
            2
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
          >
            3
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            Selanjutnya
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SearchResults;