import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, ExternalLink, BookOpen } from "lucide-react"
import { getArticleBySlug, getArticles } from "@/lib/data"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"

interface ArticleDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const articles = await getArticles()
    return articles.map((article) => ({
      slug: article.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  let article = null

  try {
    article = await getArticleBySlug(params.slug)
  } catch (error) {
    console.error("Error loading article:", error)
  }

  if (!article) {
    notFound()
  }

  // Sample data - replace with actual article data
  const caseStudyLinks = article.caseStudyLinks || []
  const references = article.references || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Artikel
        </Link>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs />

          {/* Article Header */}
          <div className="text-center mb-12">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium mb-4 inline-block">
              {article.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 italic">{article.excerpt}</p>

            <div className="flex justify-center gap-6 text-slate-500 dark:text-slate-400 text-sm mb-8">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {article.readTime} menit baca
              </div>
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                Dali
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 text-justify">
                <p className="text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-slate-800 dark:first-letter:text-slate-100 first-letter:mr-1 first-letter:float-left first-letter:leading-none">
                  Belakangan ini ramai dibicarakan soal pemindaian retina mata yang dibayar ratusan ribu rupiah.
                  Buat sebagian orang, hal ini mungkin terasa biasa saja “cuma scan mata, apa sih bahayanya?” Tapi, tahu nggak sih kalau retina mata itu menyimpan data biometrik yang sangat pribadi dan sensitif?
                  Kalau sampai data ini bocor atau disalahgunakan, masalahnya bisa jadi jauh lebih besar dari yang kita kira.
                </p>

                <p>
                  Di dunia yang makin digital, kita sering berpikir ancaman terbesar datang dari hacker jagoan atau virus canggih.
                  Padahal kenyataannya, penyebab kebocoran data yang paling sering justru berasal dari kita sendiri.
                  Yup, human error alias kesalahan manusia sering jadi pintu masuk utama terjadinya kebocoran data baik itu di level individu, perusahaan, bahkan pemerintahan.
                </p>

                <p>
                 Sebelum lanjut, yuk kita pahami dulu apa itu sebenarnya kebocoran data.
                 Kebocoran data, atau data leakage, terjadi ketika data pribadi atau informasi penting tanpa sengaja terekspos ke publik atau diakses oleh pihak yang nggak berhak.
                 Data yang bocor ini nggak cuma bikin repot, tapi juga bisa disalahgunakan, diperjualbelikan, atau dipakai untuk serangan kejahatan seperti phishing dan rekayasa sosial.
                </p>

                <p>
                  Masalahnya, banyak dari kita belum sadar bahwa kesalahan kecil—misalnya lupa logout akun, salah kirim email, atau asal klik link—bisa jadi celah besar buat kebocoran data.
                  Bahkan perusahaan dengan sistem keamanan canggih pun tetap rentan kalau ada satu orang saja yang lengah.
                </p>

                <p>
                  Ngomong-ngomong soal human error, ini sebenarnya apa sih? Singkatnya, human error adalah tindakan yang dilakukan manusia, baik disengaja atau tidak, yang membuat data penting jadi terekspos atau kurang terlindungi.
                  Kesalahannya bisa kecil, seperti salah klik tombol, atau besar yang berakibat fatal terhadap keamanan data.
                </p>

                <p>
                  Fakta menariknya, menurut laporan Verizon Data Breach Investigations Report (DBIR) 2024, human error menyumbang sekitar 68% dari seluruh kasus kebocoran data.
                  Dari angka itu, 28% di antaranya berasal dari kesalahan internal seperti konfigurasi sistem yang salah, kehilangan perangkat berisi data, atau pengiriman data ke orang yang salah.
                  Sedangkan 40% lainnya terkait dengan serangan phishing dan rekayasa sosial, di mana korban jadi sasaran penipuan dan manipulasi psikologis.
                  Rekayasa sosial ini sangat licik, karena memanfaatkan kelengahan dan kurangnya kesadaran manusia.
                  Contohnya, email palsu yang terlihat sangat meyakinkan, sehingga kita tanpa sadar memberikan informasi penting secara sukarela.
                </p>

                <p>
                  Kasus nyata pernah terjadi pada sebuah rumah sakit besar di Amerika Serikat.
                  Seorang pegawai secara tidak sengaja mengunggah file yang berisi ribuan data pasien ke situs internal tanpa enkripsi, yang akhirnya bisa diakses publik karena pengaturan akses tidak dikonfigurasi dengan benar.
                  Kebocoran ini tidak terjadi karena peretasan, melainkan karena kurangnya pelatihan dan pengawasan terhadap staf.
                  Akibatnya, rumah sakit harus menghadapi denda besar dan kehilangan kepercayaan publik.
                </p>

                <p>
                  Contoh lainnya terjadi di Indonesia, saat seorang pegawai instansi pemerintahan tidak sengaja membagikan dokumen sensitif ke grup WhatsApp yang salah.
                  Dokumen tersebut tersebar dan viral di media sosial. Meski tidak ada niat jahat, kesalahan tersebut cukup fatal karena menyangkut data ribuan warga yang seharusnya dilindungi.
                </p>

                <p>
                  Dari sini kita bisa belajar bahwa teknologi sehebat apapun tidak akan cukup jika tidak dibarengi dengan kesadaran dan kehati-hatian dari penggunanya.
                  Solusi untuk meminimalisir human error bukan hanya tentang memasang software keamanan yang mahal, tapi justru dimulai dari diri kita sendiri. 
                  Sederhana saja: lebih teliti sebelum mengirim file, hati-hati saat mengklik tautan, dan pastikan kita paham risiko dari setiap tindakan digital yang kita lakukan. 
                  Pelatihan keamanan siber juga penting, tidak hanya untuk orang IT, tapi untuk semua pihak yang bersentuhan dengan data dari level staf sampai pimpinan.
                  Dan yang paling penting, biasakan untuk selalu bertanya: “Apakah data ini aman? Apakah saya sudah melindunginya dengan benar?”
                </p>

                <p>
                  Kesadaran adalah kunci utama.
                  Kita semua adalah penjaga dari data kita masing-masing. 
                  Jika setiap orang mulai peduli dan waspada dari hal-hal kecil, maka kebocoran besar pun bisa dicegah.
                  Jadi, sebelum menunjuk hacker sebagai biang kerok, yuk kita cek lagi: jangan-jangan, celahnya justru datang dari kita sendiri.
                </p>
              </div>
            </div>

            {/* Optional Case Studies Section */}
            {caseStudyLinks.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
                  <ExternalLink size={18} className="mr-2" />
                  Studi Kasus Terkait
                </h3>
                <div className="space-y-2">
                  {caseStudyLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                    >
                      <span className="text-blue-600 dark:text-blue-400 hover:underline">{link.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Optional References Section */}
            {references.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
                  <BookOpen size={18} className="mr-2" />
                  Sumber Informasi
                </h3>
                <div className="space-y-2">
                  {references.map((reference, index) => (
                    <p key={index} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {index + 1}. {reference}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Article Footer */}
          <div className="text-center mt-12">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Terima kasih telah membaca!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Semoga tulisan ini bermanfaat untuk perjalanan belajar kita bersama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/articles"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Baca Tulisan Lain
                </Link>
                <Link
                  href="/projects"
                  className="border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Lihat Proyek Saya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
