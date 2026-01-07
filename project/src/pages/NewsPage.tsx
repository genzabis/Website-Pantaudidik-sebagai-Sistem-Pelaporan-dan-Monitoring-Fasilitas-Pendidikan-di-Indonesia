import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import atapbocor from "../assets/atapbocor.png";
import lantaibecek from "../assets/lantaibecek.png";
import lantairusak from "../assets/lantairusak.png";
import atapbolong from "../assets/atapbolong.png";
import bantuanbuku from "../assets/bantuanbuku.png";
import relawanmengajar from "../assets/relawanmengajar.png";



const NewsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Berita & Advokasi - Pantaudidik.id';
  }, []);
  
  // Mock data for news articles
  const newsArticles = [
    {
      id: 1,
      title: "5 Sekolah di Kabupaten Sukabumi Mendapatkan Perbaikan Fasilitas",
      excerpt:
        "Hasil kolaborasi antara pemuda desa, pemerintah daerah, dan donatur lokal berhasil memperbaiki fasilitas di lima sekolah yang sebelumnya dilaporkan melalui Pantaudidik.id.",
      date: "15 Oktober 2024",
      author: "Tim Pantaudidik",
      image: atapbocor,
      category: "Cerita Sukses",
    },
    {
      id: 2,
      title:
        "Tim Pantaudidik Berhasil Memperbaiki Atap yang Bocor dengan Sangat Cepat",
      excerpt:
        "Sebagai tindak lanjut dari laporan, Dinas Pendidikan bekerjasama dengan Pantaudidik.id langsung terjun untuk mengecek keadaan sekolah.",
      date: "8 Oktober 2023",
      author: "Ani Suryani",
      image: lantaibecek,
      category: "Cerita Sukses",
    },
    {
      id: 3,
      title: "Lantai Becek Berhasil Diperbaiki",
      excerpt:
        "Pantaudidik dinilai sangat cepat dalam mengatasi permasalahan yang ada di sekolah dasar.",
      date: "1 Oktober 2023",
      author: "Budi Prakoso",
      image: lantairusak,
      category: "Cerita Sukses",
    },
    {
      id: 4,
      title:
        "Tim Pantaudidik Lagi-lagi Gerak Cepat dalam Menindaklanjuti Laporan",
      excerpt:
        "Pantaudidik.id merilis laporan tahunan yang berisi analisis tentang jenis dan sebaran masalah pendidikan di Indonesia berdasarkan data yang terkumpul.",
      date: "25 September 2023",
      author: "Tim Peneliti Pantaudidik",
      image: atapbolong,
      category: "Cerita Sukses",
    },
    {
      id: 5,
      title: "Program Bantuan Buku untuk Sekolah Terpencil",
      excerpt:
        "Sebagai tindak lanjut dari laporan kekurangan bahan ajar, Pantaudidik.id bekerjasama dengan penerbit buku untuk menyalurkan donasi ke sekolah-sekolah terpencil.",
      date: "18 September 2023",
      author: "Dewi Anggraini",
      image: bantuanbuku,
      category: "Cerita Sukses",
    },
    {
      id: 6,
      title: "Mengajar di Pelosok: Kisah Inspiratif Guru Muda",
      excerpt:
        "Berawal dari laporan kekurangan guru di daerah terpencil, beberapa pemuda desa memutuskan untuk kembali ke kampung halaman dan mengajar di sekolah setempat.",
      date: "10 September 2023",
      author: "Rizki Pratama",
      image: relawanmengajar,
      category: "Cerita Inspiratif",
    },
  ];

  // Featured news (first article)
  const featuredNews = newsArticles[0];
  // Other news
  const otherNews = newsArticles.slice(1);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Berita & Advokasi
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Temukan update terbaru tentang tindak lanjut laporan, cerita sukses sekolah yang dibantu,
            dan kolaborasi dengan berbagai pemangku kepentingan pendidikan.
          </p>
        </div>

        {/* Featured News */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                {featuredNews.category}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-indigo-900 mb-3">
                {featuredNews.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar size={16} className="mr-1" />
                <span className="mr-4">{featuredNews.date}</span>
                <User size={16} className="mr-1" />
                <span>{featuredNews.author}</span>
              </div>
              <Button
                variant="primary"
                to={`/news/${featuredNews.id}`}
                icon={<ArrowRight size={16} />}
              >
                Baca Selengkapnya
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 text-sm font-medium px-4 py-1.5 rounded-full transition-colors">
            Semua
          </button>
          <button className="bg-white text-gray-700 hover:bg-indigo-100 hover:text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full transition-colors">
            Cerita Sukses
          </button>
          <button className="bg-white text-gray-700 hover:bg-indigo-100 hover:text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full transition-colors">
            Program
          </button>
          <button className="bg-white text-gray-700 hover:bg-indigo-100 hover:text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full transition-colors">
            Acara
          </button>
          <button className="bg-white text-gray-700 hover:bg-indigo-100 hover:text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full transition-colors">
            Publikasi
          </button>
          <button className="bg-white text-gray-700 hover:bg-indigo-100 hover:text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full transition-colors">
            Cerita Inspiratif
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {news.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-indigo-900 mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{news.date}</span>
                  <User size={14} className="mr-1" />
                  <span>{news.author}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  to={`/news/${news.id}`}
                  fullWidth
                >
                  Baca Selengkapnya
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
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
    </div>
  );
};

export default NewsPage;