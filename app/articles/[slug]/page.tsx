import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { getArticleBySlug, getArticles } from "@/lib/data"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SocialShare } from "@/components/social-share"

interface ArticleDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"}/articles/${article.slug}`

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
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />

          {/* Article Header */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                <Calendar size={16} className="mr-2" />
                {article.date}
              </div>
              <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                <Clock size={16} className="mr-2" />
                {article.readTime} menit baca
              </div>
              <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                <User size={16} className="mr-2" />
                [Nama Anda]
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">{article.title}</h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{article.excerpt}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Social Share */}
            <SocialShare title={article.title} url={currentUrl} description={article.excerpt} />
          </div>

          {/* Article Content */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
                <p>[Paragraf pembuka artikel - mulai dengan hook yang menarik untuk menarik perhatian pembaca]</p>

                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">[Subjudul 1]</h2>
                <p>[Konten paragraf pertama - jelaskan poin utama dengan detail dan contoh yang relevan]</p>
                <p>[Konten paragraf kedua - lanjutkan pembahasan dengan informasi pendukung]</p>

                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">[Subjudul 2]</h2>
                <p>[Konten paragraf ketiga - berikan insight atau analisis mendalam]</p>

                <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                  <p className="text-slate-700 dark:text-slate-300 italic">
                    "[Quote atau kutipan penting yang mendukung artikel]"
                  </p>
                </blockquote>

                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">[Subjudul 3]</h2>
                <p>[Konten paragraf keempat - berikan tips praktis atau langkah-langkah]</p>

                <ul className="list-disc list-inside space-y-2 my-6">
                  <li>[Poin penting 1]</li>
                  <li>[Poin penting 2]</li>
                  <li>[Poin penting 3]</li>
                  <li>[Poin penting 4]</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">Kesimpulan</h2>
                <p>[Paragraf penutup - rangkum poin-poin utama dan berikan call-to-action atau ajakan untuk pembaca]</p>
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mt-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Terima kasih telah membaca!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Jika artikel ini bermanfaat, jangan lupa untuk membagikannya.
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Link
                  href="/articles"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Baca Artikel Lain
                </Link>
                <Link
                  href="/projects"
                  className="border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-lg transition-colors"
                >
                  Lihat Proyek Saya
                </Link>
              </div>

              {/* Share Again */}
              <div className="flex justify-center">
                <SocialShare title={article.title} url={currentUrl} description={article.excerpt} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
