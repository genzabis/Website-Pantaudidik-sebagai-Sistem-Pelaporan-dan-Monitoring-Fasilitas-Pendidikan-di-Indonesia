import React from 'react';
import { Filter } from 'lucide-react';
import Button from '../ui/Button';

const FilterSidebar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-indigo-900 flex items-center">
          <Filter size={18} className="mr-2" /> Filter Laporan
        </h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">
          Reset
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Provinsi</h4>
          <select className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Semua Provinsi</option>
            <option value="aceh">Aceh</option>
            <option value="sumut">Sumatera Utara</option>
            <option value="sumbar">Sumatera Barat</option>
            <option value="riau">Riau</option>
            <option value="jambi">Jambi</option>
            <option value="sumsel">Sumatera Selatan</option>
            <option value="bengkulu">Bengkulu</option>
            <option value="lampung">Lampung</option>
            <option value="babel">Bangka Belitung</option>
            <option value="kepri">Kepulauan Riau</option>
            <option value="jakarta">DKI Jakarta</option>
            <option value="jabar">Jawa Barat</option>
            <option value="jateng">Jawa Tengah</option>
            <option value="yogya">DI Yogyakarta</option>
            <option value="jatim">Jawa Timur</option>
            <option value="banten">Banten</option>
            <option value="bali">Bali</option>
            <option value="ntb">Nusa Tenggara Barat</option>
            <option value="ntt">Nusa Tenggara Timur</option>
            <option value="kalbar">Kalimantan Barat</option>
            <option value="kalteng">Kalimantan Tengah</option>
            <option value="kalsel">Kalimantan Selatan</option>
            <option value="kaltim">Kalimantan Timur</option>
            <option value="kaltara">Kalimantan Utara</option>
            <option value="sulut">Sulawesi Utara</option>
            <option value="sulteng">Sulawesi Tengah</option>
            <option value="sulsel">Sulawesi Selatan</option>
            <option value="sultengg">Sulawesi Tenggara</option>
            <option value="gorontalo">Gorontalo</option>
            <option value="sulbar">Sulawesi Barat</option>
            <option value="maluku">Maluku</option>
            <option value="malut">Maluku Utara</option>
            <option value="papuabarat">Papua Barat</option>
            <option value="papua">Papua</option>
          </select>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Jenis Sekolah</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">SD/MI</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">SMP/MTs</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">SMA/MA</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">SMK</span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Jenis Masalah</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Fasilitas Sekolah</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Tenaga Pengajar</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Kurikulum</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Akses Pendidikan</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Teknologi & Internet</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Alat Pembelajaran</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Administrasi Sekolah</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Ekstrakurikuler</span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Tingkat Keparahan</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">Tinggi</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-500 rounded" />
              <span className="ml-2 text-sm text-gray-700">Sedang</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-teal-500 rounded" />
              <span className="ml-2 text-sm text-gray-700">Rendah</span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Status</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-500 rounded" />
              <span className="ml-2 text-sm text-gray-700">Menunggu Tindakan</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500 rounded" />
              <span className="ml-2 text-sm text-gray-700">Dalam Proses</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-teal-500 rounded" />
              <span className="ml-2 text-sm text-gray-700">Terselesaikan</span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Rentang Waktu</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500">Dari</label>
              <input
                type="date"
                className="w-full mt-1 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500">Sampai</label>
              <input
                type="date"
                className="w-full mt-1 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          fullWidth
        >
          Terapkan Filter
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;