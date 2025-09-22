import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Instagram, Github } from "lucide-react"

export default function TulisanPage() {
  const tulisan = [
    {
      id: "react-hook-patterns",
      title: "React Hook Patterns",
    },
    {
      id: "accessible-ui-design",
      title: "Accessible UI Design",
    },
    {
      id: "nextjs-performance",
      title: "Next.js Performance",
    },
    {
      id: "modern-css-techniques",
      title: "Modern CSS Techniques",
    },
  ]

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
            <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
              <a
                href="/tentang"
                className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm"
              >
                Tentang
              </a>
              <div className="relative group">
                <span className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm cursor-pointer">
                  Karya
                </span>
                <div className="absolute top-full right-0 sm:left-0 mt-2 w-40 sm:w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a
                      href="/tulisan"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      Tulisan
                    </a>
                    <a
                      href="/projek"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      Projek
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <span className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm cursor-pointer">
                  Contact
                </span>
                <div className="absolute top-full right-0 sm:left-0 mt-2 w-40 sm:w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Tulisan</h1>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {tulisan.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-border pb-3 sm:pb-4 last:border-b-0"
              >
                <h3 className="font-medium text-foreground text-sm sm:text-base">{item.title}</h3>
                <Link
                  href={`/baca/${item.id}`}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-2 sm:px-3 py-1 rounded hover:bg-muted"
                >
                  Baca
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
