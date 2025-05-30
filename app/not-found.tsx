"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-slate-300 dark:text-slate-700">404</h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            <Home size={18} className="mr-2" />
            Kembali ke Beranda
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg transition-colors font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  )
}
