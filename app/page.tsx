import { Github, Instagram } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
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

      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4 text-xs sm:text-sm">Selamat datang.</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
            Saya membangun pengalaman digital yang thoughtful.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Developer & penulis yang fokus pada aksesibilitas dan performa.
          </p>
        </div>
      </section>

      <footer className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">© 2024 Nama Anda</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
