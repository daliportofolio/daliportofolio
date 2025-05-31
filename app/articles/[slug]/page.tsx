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
                  [Paragraf pembuka artikel - mulai dengan hook yang menarik untuk menarik perhatian pembaca. Tulis
                  dengan gaya bercerita yang mengalir natural seperti sedang berbagi pengalaman.]
                </p>

                <p>
                  [Lanjutkan cerita dengan pengalaman pribadi atau observasi yang relevan. Hindari penggunaan subjudul
                  dan buat alur yang mengalir seperti bercerita kepada teman.]
                </p>

                <p>
                  [Bagikan insight atau pembelajaran yang didapat. Gunakan bahasa yang conversational dan personal,
                  seolah-olah sedang berbagi cerita di kafe.]
                </p>

                <p>
                  [Ceritakan proses belajar, tantangan yang dihadapi, atau discovery moment yang menarik. Buat pembaca
                  merasa terhubung dengan pengalaman yang dibagikan.]
                </p>

                <p>
                  [Berikan contoh konkret atau analogi yang mudah dipahami. Tetap pertahankan tone personal dan
                  authentic dalam penyampaian.]
                </p>

                <p>
                  [Bagikan tips praktis atau actionable insights yang bisa diterapkan pembaca. Sampaikan dengan cara
                  yang humble dan tidak menggurui.]
                </p>

                <p>
                  [Paragraf penutup yang merangkum pembelajaran dan memberikan refleksi personal. Akhiri dengan note
                  yang warm dan encouraging untuk pembaca.]
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
                  Daftar Pustaka
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
