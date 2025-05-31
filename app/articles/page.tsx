import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import { getArticles } from "@/lib/data"

export default async function ArticlesPage() {
  let articles = []

  try {
    articles = await getArticles()
  } catch (error) {
    console.error("Error loading articles:", error)
    articles = []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Beranda
        </Link>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">Tulisan Saya</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
             Sebuah dokumentasi tulisan yang saya buat untuk belajar, mencatat pemahaman pribadi, dan berbagi informasi dengan sesama yang tertarik di dunia IT.
            </p>
          </div>

          {/* Articles List */}
          {articles && articles.length > 0 ? (
            <div className="space-y-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Clock size={14} className="mr-1" />
                        {article.readTime} menit baca
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Belum Ada Artikel</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Artikel Anda akan ditampilkan di sini. Edit file lib/data.ts untuk menambahkan artikel.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
