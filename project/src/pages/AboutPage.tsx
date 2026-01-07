import React, { useEffect } from 'react';
import { BookOpen, Target, Users, MessageSquare, Medal } from 'lucide-react';
import { motion } from 'framer-motion';
import fototim from "../assets/fototim.png";


const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Tentang Kami - Pantaudidik.id';
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="bg-indigo-900 rounded-xl overflow-hidden mb-16 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('../fotoanaksekolah.png')] bg-cover bg-center"></div>
          </div>
          <div className="relative p-8 md:p-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tentang Pantaudidik.id
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Platform digital yang menjembatani kolaborasi antara pemuda desa,
              sekolah, pemerintah, dan organisasi untuk memetakan dan
              menyelesaikan masalah pendidikan lokal di Indonesia.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              Kisah Kami
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 mb-6 max-w-3xl leading-relaxed text-justify">
                <span className="text-indigo-900 font-semibold">
                  Pantaudidik.id
                </span>{" "}
                Terbentuknya PantauDidik.ID lahir dari keprihatinan terhadap
                ketimpangan fasilitas pendidikan yang masih terjadi di berbagai
                pelosok negeri. Ketika masih ada sekolah yang berdiri di bawah
                atap bocor, tanpa listrik, meja belajar, atau buku yang memadai,
                maka keadilan pendidikan belum benar-benar terwujud.
                <br />
                <br />
                PantauDidik.ID tidak hanya dirancang sebagai sebuah website,
                melainkan sebagai gerakan sosial digital yang mendorong
                partisipasi masyarakat untuk ikut mengawasi dan menyuarakan
                kondisi nyata di lapangan. Melalui pelaporan berbasis bukti dan
                kolaborasi berbagai pihak, platform ini ingin memastikan bahwa
                suara dari daerah terpencil dapat sampai ke pengambil kebijakan.
                <br />
                <br />
                Dengan demikian, PantauDidik.ID merealisasikan keyakinan bahwa
                pendidikan adalah hak fundamental setiap anak, dan pemenuhan hak
                tersebut adalah tanggung jawab bersama yang kini dapat
                diwujudkan melalui kekuatan gotong royong digital.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={fototim}
                alt="Tim Pantaudidik diskusi"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              Visi & Misi
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-indigo-600"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <BookOpen size={24} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-indigo-900">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Menjadi gerakan sosial digital yang mendorong terwujudnya
                pemerataan fasilitas pendidikan secara inklusif dan
                berkelanjutan melalui pemanfaatan teknologi partisipatif,
                pendataan yang akurat dan transparan, serta kolaborasi aktif
                antara masyarakat, pemerintah, lembaga kependidikan, serta
                berbagai pemangku kepentingan.
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-400"
            >
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Target size={24} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-indigo-900">Misi</h3>
              </div>
              <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2 text-justify">
                <li>
                  Menjadi platform pelaporan terbuka yang memfasilitasi
                  partisipasi masyarakat secara langsung dan akurat.
                </li>
                <li>
                  Membangun sistem verifikasi kredibel untuk setiap laporan yang
                  masuk.
                </li>
                <li>
                  Menjadi jembatan penghubung masyarakat dengan pemangku
                  kebijakan dari dinas pendidikan hingga pihak swasta demi
                  intervensi nyata.
                </li>
                <li>
                  Menjalankan seluruh proses dengan transparansi dan
                  akuntabilitas penuh, mempublikasikan progres penanganan
                  laporan sebagai kontrol sosial.
                </li>
                <li>
                  Menjadi ruang advokasi dan edukasi digital tentang pentingnya
                  pemerataan fasilitas pendidikan sebagai bagian dari keadilan
                  sosial.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami dalam
              mewujudkan pendidikan yang lebih baik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Partisipatif
              </h3>
              <p className="text-gray-600">
                Kami percaya bahwa solusi terbaik datang dari keterlibatan aktif
                masyarakat lokal yang paling memahami konteks dan kebutuhan
                mereka.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Transparan
              </h3>
              <p className="text-gray-600">
                Kami menjunjung tinggi keterbukaan dalam pengelolaan data,
                proses pengambilan keputusan, dan penggunaan sumber daya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Medal size={24} className="text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Berorientasi Dampak
              </h3>
              <p className="text-gray-600">
                Setiap tindakan kami selalu diarahkan untuk menciptakan
                perubahan nyata dalam meningkatkan kualitas pendidikan.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              Hubungi Kami
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk
              menghubungi kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                Kirim Pesan
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="contoh@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-indigo-900 font-medium mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Pendidikan No. 123, Jakarta Pusat, Indonesia
                  </p>
                </div>
                <div>
                  <h4 className="text-indigo-900 font-medium mb-1">Email</h4>
                  <a
                    href="mailto:info@pantaudidik.id"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    info@pantaudidik.id
                  </a>
                </div>
                <div>
                  <h4 className="text-indigo-900 font-medium mb-1">Telepon</h4>
                  <a
                    href="tel:+62212345678"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    +62 21 2345 678
                  </a>
                </div>
                <div className="mt-6">
                  <h4 className="text-indigo-900 font-medium mb-3">
                    Ikuti Kami
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-indigo-900 font-medium mb-3">Lokasi</h4>
                <div className="h-56 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500 text-sm">
                    (Peta lokasi akan ditampilkan di sini)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;