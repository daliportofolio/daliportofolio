import Link from "next/link"
import { ArrowLeft, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Simple Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Beranda
        </Link>
      </nav>

      {/* Main Story Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Story Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden mx-auto">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Foto Profil"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">👋</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">Dali</h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">IT Student</p>

            <div className="flex justify-center gap-6 text-slate-600 dark:text-slate-300 mb-6">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Cikarang, Bekasi
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                Mahasiswa IT
              </div>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
              "Saya bukan ahli, hanya seseorang yang penasaran dan nggak pernah berhenti nyari tahu. Setiap baris kode
              dan artikel di sini adalah bukti kalau belajar itu nggak harus nunggu jago"
            </p>
          </div>

          {/* Story Content */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
                Perjalanan Saya
              </h2>

              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p className="text-lg">
                  Hidup saya dimulai dari rasa penasaran yang sederhana. Sejak kecil, saya selalu bertanya-tanya
                  bagaimana sesuatu bekerja - dari mainan yang bisa bergerak hingga komputer yang bisa menampilkan
                  gambar. Rasa penasaran inilah yang membawa saya ke dunia teknologi.
                </p>

                <p>
                  Perjalanan belajar saya tidak selalu mulus. Ada kalanya saya merasa stuck, frustrasi dengan kode yang
                  tidak berjalan, atau merasa tertinggal dari teman-teman. Tapi justru dari momen-momen sulit itulah
                  saya belajar bahwa proses belajar itu tidak linear - kadang naik, kadang turun, tapi yang penting
                  terus bergerak maju.
                </p>

                <p>
                  Setiap proyek yang saya kerjakan, setiap artikel yang saya tulis, adalah refleksi dari perjalanan
                  belajar saya. Saya percaya bahwa berbagi pengetahuan, meskipun masih dalam tahap belajar, bisa
                  membantu orang lain yang mungkin mengalami hal serupa.
                </p>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 my-8">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Yang Saya Sukai</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="mb-2">🎮 Gaming dan eksplorasi dunia virtual</p>
                      <p className="mb-2">📚 Membaca artikel teknologi dan tutorial</p>
                      <p className="mb-2">🎵 Mendengarkan musik sambil coding</p>
                      <p>🌱 Belajar hal-hal baru setiap hari</p>
                    </div>
                    <div>
                      <p className="mb-2">"Progress over perfection"</p>
                      <p className="mb-2">"Belajar dari siapa saja, kapan saja"</p>
                      <p className="mb-2">"Berbagi itu memperkaya"</p>
                      <p>"Gagal itu normal, menyerah itu pilihan"</p>
                    </div>
                  </div>
                </div>

                <p>
                  Hari ini, saya masih dalam perjalanan yang sama - belajar, bereksperimen, dan berbagi. Karena menurut
                  saya, menjadi ahli bukan tentang tahu segalanya, tapi tentang tidak pernah berhenti belajar dan mau
                  berbagi apa yang sudah dipelajari.
                </p>

                <p className="text-center italic text-slate-500 dark:text-slate-400 mt-8">
                  Terima kasih sudah menyempatkan waktu untuk membaca cerita saya. Mari kita belajar bersama! 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Lihat Proyek Saya
              </Link>
              <Link
                href="/articles"
                className="border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Baca Tulisan Saya
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
