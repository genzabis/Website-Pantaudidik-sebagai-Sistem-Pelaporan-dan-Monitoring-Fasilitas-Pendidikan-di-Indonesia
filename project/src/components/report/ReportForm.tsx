import React, { useState } from 'react';
import { Upload, MapPin, User, School, AlertTriangle } from 'lucide-react';
import Button from '../ui/Button';

const ReportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    address: '',
    province: '',
    issueType: '',
    description: '',
    severity: '',
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    anonymous: false,
    agreeTerms: false
  });

  const [formStep, setFormStep] = useState(1);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log(formData);
    console.log(attachments);
    
    // Simulate success
    setFormStep(4);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-indigo-900">
          Form Pelaporan Masalah Pendidikan
        </h2>
        <p className="text-gray-600 mt-1">
          Isilah form berikut dengan lengkap dan akurat
        </p>
      </div>

      <div className="p-6">
        {/* Progress Bar */}
        <div className="relative mb-8">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-100">
            <div
              style={{ width: `${(formStep / 4) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 transition-all duration-500"
            ></div>
          </div>
          <div className="flex justify-between text-xs text-indigo-800 mt-2">
            <div className={`${formStep >= 1 ? "font-semibold" : ""}`}>
              Informasi Sekolah
            </div>
            <div className={`${formStep >= 2 ? "font-semibold" : ""}`}>
              Detail Masalah
            </div>
            <div className={`${formStep >= 3 ? "font-semibold" : ""}`}>
              Informasi Pelapor
            </div>
            <div className={`${formStep >= 4 ? "font-semibold" : ""}`}>
              Selesai
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: School Information */}
          {formStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <School size={24} className="text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-indigo-900">
                  Informasi Sekolah
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Sekolah <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    required
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Contoh: SDN 1 Sukamaju"
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
                  Alamat Lengkap <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Masukkan alamat lengkap sekolah"
                  ></textarea>
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 text-indigo-600 hover:text-indigo-800"
                    title="Gunakan lokasi saat ini"
                  >
                    <MapPin size={18} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Pastikan alamat sekolah lengkap dengan kecamatan,
                  kabupaten/kota
                </p>
              </div>

              <div className="flex justify-end">
                <Button type="button" variant="primary" onClick={nextStep}>
                  Lanjutkan
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Issue Details */}
          {formStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <AlertTriangle size={24} className="text-amber-500 mr-2" />
                <h3 className="text-lg font-semibold text-indigo-900">
                  Detail Masalah
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Masalah <span className="text-red-500">*</span>
                </label>
                <select
                  name="issueType"
                  required
                  value={formData.issueType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Pilih Jenis Masalah</option>
                  <option value="fasilitas">Fasilitas Sekolah</option>
                  <option value="guru">Tenaga Pengajar</option>
                  <option value="kurikulum">Kurikulum</option>
                  <option value="akses">Akses Pendidikan</option>
                  <option value="teknologi">Teknologi & Internet</option>
                  <option value="alat">Alat Pembelajaran</option>
                  <option value="administrasi">Administrasi Sekolah</option>
                  <option value="ekstrakurikuler">Ekstrakurikuler</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tingkat Keparahan <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="severity"
                      value="high"
                      checked={formData.severity === "high"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-red-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Tinggi (Darurat)
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="severity"
                      value="medium"
                      checked={formData.severity === "medium"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-amber-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Sedang</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="severity"
                      value="low"
                      checked={formData.severity === "low"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-teal-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Rendah</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi Masalah <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Jelaskan secara detail masalah yang dihadapi"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Minimal 50 karakter. Jelaskan dengan detail agar masalah dapat
                  dipahami dengan baik.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lampiran Foto/Dokumen* (Wajib)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Unggah file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">atau seret dan lepas</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, atau PDF hingga 10MB
                    </p>
                  </div>
                </div>

                {attachments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">
                      Files yang diunggah:
                    </h4>
                    <ul className="mt-2 divide-y divide-gray-200">
                      {attachments.map((file, index) => (
                        <li
                          key={index}
                          className="py-2 flex justify-between items-center"
                        >
                          <div className="flex items-center">
                            <span className="text-sm text-gray-800">
                              {file.name}
                            </span>
                            <span className="ml-2 text-xs text-gray-500">
                              ({(file.size / 1024).toFixed(1)} KB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Hapus
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Kembali
                </Button>
                <Button type="button" variant="primary" onClick={nextStep}>
                  Lanjutkan
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Reporter Information */}
          {formStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <User size={24} className="text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-indigo-900">
                  Informasi Pelapor
                </h3>
              </div>

              {!formData.anonymous && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="reporterName"
                      required={!formData.anonymous}
                      value={formData.reporterName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                </div>
              )}
              {!formData.anonymous && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      NIK <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nik"
                      required={!formData.anonymous}
                      value={formData.nik}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Masukkan NIK Anda"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="reporterEmail"
                    required
                    value={formData.reporterEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="contoh@email.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Kami akan mengirimkan notifikasi status laporan ke email ini
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Telepon (Opsional)
                  </label>
                  <input
                    type="tel"
                    name="reporterPhone"
                    value={formData.reporterPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Contoh: 08123456789"
                  />
                </div>
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
                  <span className="ml-2 text-gray-700">
                    Saya menyatakan bahwa informasi yang diberikan adalah benar
                    dan dapat dipertanggungjawabkan{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Kembali
                </Button>
                <Button type="submit" variant="primary">
                  Kirim Laporan
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {formStep === 4 && (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Laporan Berhasil Dikirim!
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Terima kasih atas kontribusi Anda dalam meningkatkan kualitas
                pendidikan di Indonesia. Laporan Anda akan kami proses dan
                tindaklanjuti.
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-700">
                  ID Laporan:{" "}
                  <span className="text-indigo-600">#LP12345678</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Simpan ID ini untuk melacak status laporan Anda
                </p>
              </div>
              <div className="mt-6 space-y-2">
                <Button variant="primary" to="/map">
                  Lihat di Peta
                </Button>
                <div>
                  <Button variant="outline" to="/report" className="mt-2">
                    Buat Laporan Baru
                  </Button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ReportForm;