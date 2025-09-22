import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const articles = {
  "react-hook-patterns": {
    title: "React Hook Patterns",
    content: `
      <h2>Pengenalan React Hooks</h2>
      <p>React Hooks telah mengubah cara kita menulis komponen React. Dengan hooks, kita dapat menggunakan state dan lifecycle methods dalam functional components.</p>
      
      <h3>Custom Hooks</h3>
      <p>Custom hooks memungkinkan kita untuk mengekstrak logika komponen ke dalam fungsi yang dapat digunakan kembali. Ini adalah salah satu pattern yang paling powerful dalam React.</p>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Selalu gunakan hooks di level teratas komponen</li>
        <li>Buat custom hooks untuk logika yang kompleks</li>
        <li>Gunakan useCallback dan useMemo untuk optimasi performa</li>
      </ul>
      
      <p>Dengan mengikuti pattern-pattern ini, kode React Anda akan menjadi lebih bersih, mudah dibaca, dan mudah di-maintain.</p>
    `,
  },
  "accessible-ui-design": {
    title: "Accessible UI Design",
    content: `
      <h2>Mengapa Aksesibilitas Penting?</h2>
      <p>Aksesibilitas dalam UI design memastikan bahwa aplikasi web dapat digunakan oleh semua orang, termasuk pengguna dengan disabilitas.</p>
      
      <h3>Prinsip Dasar WCAG</h3>
      <p>Web Content Accessibility Guidelines (WCAG) memberikan standar untuk membuat konten web yang accessible:</p>
      <ul>
        <li><strong>Perceivable:</strong> Informasi harus dapat dipersepsi oleh pengguna</li>
        <li><strong>Operable:</strong> Interface harus dapat dioperasikan</li>
        <li><strong>Understandable:</strong> Informasi dan UI harus dapat dipahami</li>
        <li><strong>Robust:</strong> Konten harus robust untuk berbagai teknologi assistive</li>
      </ul>
      
      <h3>Tips Praktis</h3>
      <p>Beberapa tips sederhana untuk meningkatkan aksesibilitas:</p>
      <ul>
        <li>Gunakan semantic HTML</li>
        <li>Pastikan kontras warna yang cukup</li>
        <li>Tambahkan alt text untuk gambar</li>
        <li>Buat navigasi keyboard yang baik</li>
      </ul>
    `,
  },
  "nextjs-performance": {
    title: "Next.js Performance",
    content: `
      <h2>Optimasi Performa Next.js</h2>
      <p>Next.js menyediakan banyak fitur built-in untuk optimasi performa, namun masih ada beberapa teknik yang dapat kita terapkan untuk meningkatkan performa aplikasi.</p>
      
      <h3>Image Optimization</h3>
      <p>Gunakan komponen Image dari Next.js untuk optimasi gambar otomatis:</p>
      <ul>
        <li>Lazy loading otomatis</li>
        <li>Responsive images</li>
        <li>Format modern (WebP, AVIF)</li>
      </ul>
      
      <h3>Code Splitting</h3>
      <p>Next.js secara otomatis melakukan code splitting, namun kita dapat mengoptimalkannya lebih lanjut dengan dynamic imports.</p>
      
      <h3>Caching Strategies</h3>
      <p>Implementasikan strategi caching yang tepat untuk data dan static assets untuk meningkatkan loading time.</p>
    `,
  },
  "modern-css-techniques": {
    title: "Modern CSS Techniques",
    content: `
      <h2>CSS Modern untuk Layout Responsif</h2>
      <p>CSS telah berkembang pesat dalam beberapa tahun terakhir. Teknik-teknik modern memungkinkan kita membuat layout yang lebih fleksibel dan responsif.</p>
      
      <h3>CSS Grid</h3>
      <p>CSS Grid adalah sistem layout 2D yang powerful untuk membuat layout kompleks dengan mudah.</p>
      
      <h3>Flexbox</h3>
      <p>Flexbox sangat baik untuk layout 1D dan alignment yang fleksibel.</p>
      
      <h3>Custom Properties (CSS Variables)</h3>
      <p>CSS Variables memungkinkan kita membuat sistem design yang konsisten dan mudah di-maintain.</p>
      
      <h3>Container Queries</h3>
      <p>Fitur terbaru yang memungkinkan responsive design berdasarkan ukuran container, bukan viewport.</p>
    `,
  },
}

export default function BacaPage({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/professional-headshot.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium text-foreground">Nama Anda</span>
            </div>
            <Link
              href="/tulisan"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm"
            >
              Kembali ke Tulisan
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <Link href="/tulisan" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{article.title}</h1>
          </div>

          <article className="prose prose-gray max-w-none">
            <div
              className="text-muted-foreground leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}
