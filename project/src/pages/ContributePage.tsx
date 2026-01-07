import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, CheckCircle, Clock, Users, BookOpen, Map } from 'lucide-react';
import Button from '../components/ui/Button';

const ContributePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Jadi Kontributor - Pantaudidik.id';
  }, []);

  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: '',
    district: '',
    occupation: '',
    organization: '',
    motivation: '',
    experience: '',
    role: '',
    timeCommitment: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const nextStep = () => {
    window.scrollTo(0, 0);
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log(formData);
    
    // Move to success step
    nextStep();
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Gabung Menjadi Kontributor
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jadilah bagian dari gerakan yang memetakan dan menyelesaikan masalah pendidikan di Indonesia.
            Kontribusimu akan membantu menciptakan pendidikan yang lebih baik untuk semua.
          </p>
        </div>

        {/* Why Become a Contributor */}
        {formStep === 1 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                  Mengapa Menjadi Kontributor?
                </h2>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle size={24} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-900 mb-1">Dampak Nyata</h3>
                      <p className="text-gray-600">
                        Kontribusimu akan secara langsung membantu memperbaiki kualitas pendidikan di daerah-daerah yang membutuhkan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                      <Users size={24} className="text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-900 mb-1">Jaringan Luas</h3>
                      <p className="text-gray-600">
                        Terhubung dengan pemuda, pendidik, dan pemangku kepentingan pendidikan dari seluruh Indonesia.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen size={24} className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-900 mb-1">Pengembangan Diri</h3>
                      <p className="text-gray-600">
                        Kembangkan keterampilan baru dalam analisis data, advokasi, dan manajemen proyek sosial.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Clock size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-900 mb-1">Fleksibel</h3>
                      <p className="text-gray-600">
                        Berkontribusi sesuai dengan waktu dan kapasitas yang kamu miliki, dari mana saja.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={nextStep}
                    icon={<UserPlus size={20} />}
                  >
                    Daftar Sekarang
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-indigo-900 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Peran Kontributor</h3>
                    <p className="text-indigo-200">
                      Pilih peran yang sesuai dengan minat dan keahlianmu
                    </p>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex">
                      <Map size={20} className="text-amber-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-indigo-900 mb-1">Pemetaan & Verifikasi</h4>
                        <p className="text-gray-600 text-sm">
                          Membantu mengumpulkan dan memverifikasi laporan masalah pendidikan di daerahmu.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <svg className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-indigo-900 mb-1">Advokasi & Kolaborasi</h4>
                        <p className="text-gray-600 text-sm">
                          Memfasilitasi diskusi dan kolaborasi antara sekolah, pemerintah, dan organisasi untuk menyelesaikan masalah.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-indigo-900 mb-1">Dokumentasi & Cerita</h4>
                        <p className="text-gray-600 text-sm">
                          Mendokumentasikan dan membagikan cerita sukses serta pembelajaran dari proses penyelesaian masalah.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <svg className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-indigo-900 mb-1">Teknologi & Analisis</h4>
                        <p className="text-gray-600 text-sm">
                          Membantu mengembangkan platform dan menganalisis data untuk mengidentifikasi pola masalah pendidikan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50 border-t">
                    <p className="text-gray-600 text-sm italic">
                      "Bergabunglah dengan 500+ kontributor dari seluruh Indonesia yang telah membantu memetakan lebih dari 1.200 masalah pendidikan dan berkontribusi pada 300+ solusi."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Registration Form */}
        {formStep === 2 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-indigo-900">Formulir Pendaftaran Kontributor</h2>
                <p className="text-gray-600 mt-1">Lengkapi formulir berikut untuk bergabung sebagai kontributor</p>
              </div>

              <div className="p-6">
                {/* Progress Bar */}
                <div className="relative mb-8">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-100">
                    <div 
                      style={{ width: '50%' }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-indigo-800 mt-2">
                    <div className="font-semibold">Informasi Pribadi</div>
                    <div>Keahlian & Minat</div>
                  </div>
                </div>

                <form>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Masukkan nama lengkap Anda"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="contoh@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nomor Telepon <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Contoh: 08123456789"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Provinsi <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="province"
                          required
                          value={formData.province}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="">Pilih Provinsi</option>
                          <option value="aceh">Aceh</option>
                          <option value="sumut">Sumatera Utara</option>
                          <option value="sumbar">Sumatera Barat</option>
                          <option value="jabar">Jawa Barat</option>
                          <option value="jateng">Jawa Tengah</option>
                          <option value="jatim">Jawa Timur</option>
                          <option value="bali">Bali</option>
                          <option value="ntb">Nusa Tenggara Barat</option>
                          <option value="ntt">Nusa Tenggara Timur</option>
                          <option value="kalsel">Kalimantan Selatan</option>
                          <option value="sulsel">Sulawesi Selatan</option>
                          <option value="papua">Papua</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Kabupaten/Kota <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="district"
                        required
                        value={formData.district}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Masukkan kabupaten/kota tempat tinggal Anda"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pekerjaan/Profesi <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          required
                          value={formData.occupation}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Contoh: Guru, Mahasiswa, Karyawan"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Organisasi/Institusi (Opsional)
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Tempat Anda bekerja/bersekolah"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={nextStep}
                      >
                        Lanjutkan
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Form Step 3: Skills and Interests */}
        {formStep === 3 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-indigo-900">Keahlian & Minat</h2>
                <p className="text-gray-600 mt-1">Beritahu kami lebih lanjut tentang keahlian dan minat Anda</p>
              </div>

              <div className="p-6">
                {/* Progress Bar */}
                <div className="relative mb-8">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-100">
                    <div 
                      style={{ width: '100%' }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-indigo-800 mt-2">
                    <div className="font-semibold">Informasi Pribadi</div>
                    <div className="font-semibold">Keahlian & Minat</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Peran yang Diminati <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Pilih Peran</option>
                        <option value="mapper">Pemetaan & Verifikasi</option>
                        <option value="advocate">Advokasi & Kolaborasi</option>
                        <option value="documenter">Dokumentasi & Cerita</option>
                        <option value="technologist">Teknologi & Analisis</option>
                        <option value="multiple">Beberapa Peran</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Komitmen Waktu <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="timeCommitment"
                        required
                        value={formData.timeCommitment}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Pilih Komitmen Waktu</option>
                        <option value="low">1-3 jam per minggu</option>
                        <option value="medium">4-6 jam per minggu</option>
                        <option value="high">7+ jam per minggu</option>
                        <option value="flexible">Fleksibel/sesuai kebutuhan</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Motivasi <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="motivation"
                        required
                        value={formData.motivation}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ceritakan mengapa Anda tertarik menjadi kontributor Pantaudidik.id"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pengalaman Relevan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ceritakan pengalaman Anda dalam bidang pendidikan, teknologi, atau advokasi sosial (jika ada)"
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          required
                          checked={formData.agreeTerms}
                          onChange={handleCheckboxChange}
                          className="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <span className="ml-2 text-gray-700 text-sm">
                          Saya menyetujui <a href="#" className="text-indigo-600 hover:text-indigo-800">syarat dan ketentuan</a> serta bersedia mengikuti kode etik kontributor Pantaudidik.id <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                      >
                        Kembali
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                      >
                        Kirim Pendaftaran
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {formStep === 4 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">Pendaftaran Berhasil!</h2>
                <p className="text-gray-600 mb-6">
                  Terima kasih telah mendaftar sebagai kontributor Pantaudidik.id. Kami sangat menghargai minat dan kesediaan Anda untuk bergabung dengan kami dalam meningkatkan kualitas pendidikan di Indonesia.
                </p>
                <div className="bg-indigo-50 p-4 rounded-md text-left mb-6">
                  <h3 className="text-indigo-900 font-semibold mb-2">Langkah Selanjutnya:</h3>
                  <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                    <li>Kami akan meninjau pendaftaran Anda dalam 2-3 hari kerja</li>
                    <li>Anda akan menerima email konfirmasi dengan informasi selanjutnya</li>
                    <li>Tim kami akan menghubungi Anda untuk sesi orientasi singkat</li>
                    <li>Setelah orientasi, Anda akan mendapatkan akses ke platform kontributor</li>
                  </ol>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    variant="primary"
                    to="/"
                  >
                    Kembali ke Beranda
                  </Button>
                  <Button
                    variant="outline"
                    to="/about"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials - Only shown in first step */}
        {formStep === 1 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
                Apa Kata Kontributor Kami
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rina Wijaya",
                  role: "Guru SMP, Bandung",
                  quote: "Menjadi kontributor Pantaudidik.id membuat saya bisa berkontribusi lebih luas dari sekadar mengajar di kelas. Saya bisa membantu sekolah-sekolah lain yang membutuhkan.",
                  image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  delay: 0
                },
                {
                  name: "Arif Santoso",
                  role: "Mahasiswa, Yogyakarta",
                  quote: "Platform ini memberi saya kesempatan untuk melakukan advokasi pendidikan dengan data yang akurat. Keterampilan yang saya pelajari juga sangat bermanfaat untuk karir saya.",
                  image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  delay: 0.1
                },
                {
                  name: "Maya Kusuma",
                  role: "Pemuda Desa, Lombok",
                  quote: "Sebagai pemuda desa, Pantaudidik.id memberikan saya platform untuk menyuarakan masalah pendidikan di desa saya. Sekarang sekolah kami mendapat perhatian yang layak.",
                  image: "https://images.pexels.com/photos/6551153/pexels-photo-6551153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  delay: 0.2
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: testimonial.delay + 0.5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-indigo-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContributePage;