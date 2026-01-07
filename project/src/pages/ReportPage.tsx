import React, { useEffect } from 'react';
import ReportForm from '../components/report/ReportForm';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

const ReportPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Laporkan Masalah - Pantaudidik.id';
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              Laporkan Masalah Pendidikan
            </h1>
            <p className="text-gray-600">
              Bantu kami memetakan masalah pendidikan di Indonesia dengan melaporkan masalah yang Anda temui.
              Laporan Anda akan menjadi bagian penting dalam advokasi perbaikan sistem pendidikan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <div className="flex items-center mb-3">
                <AlertTriangle size={20} className="text-amber-600 mr-2" />
                <h3 className="text-amber-800 font-semibold">Penting Diperhatikan</h3>
              </div>
              <ul className="text-sm text-amber-700 space-y-2">
                <li>Pastikan informasi yang diberikan akurat dan dapat diverifikasi</li>
                <li>Sertakan bukti pendukung bila memungkinkan (foto, dokumen)</li>
                <li>Fokus pada masalah yang spesifik dan konkret</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
              <div className="flex items-center mb-3">
                <ShieldCheck size={20} className="text-indigo-600 mr-2" />
                <h3 className="text-indigo-800 font-semibold">Perlindungan Data</h3>
              </div>
              <ul className="text-sm text-indigo-700 space-y-2">
                <li>Identitas pelapor dilindungi dan dapat dirahasiakan</li>
                <li>Data pribadi tidak akan dibagikan kepada pihak ketiga</li>
                <li>Anda dapat melaporkan secara anonim</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-5 rounded-lg border border-teal-200">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-teal-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                <h3 className="text-teal-800 font-semibold">Tindak Lanjut</h3>
              </div>
              <ul className="text-sm text-teal-700 space-y-2">
                <li>Setiap laporan akan diverifikasi oleh tim kami</li>
                <li>Laporan valid akan ditindaklanjuti dengan pemangku kepentingan terkait</li>
                <li>Anda akan mendapatkan notifikasi tentang status laporan</li>
              </ul>
            </div>
          </div>

          <ReportForm />
        </div>
      </div>
    </div>
  );
};

export default ReportPage;