import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TentangPage() {
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
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Tentang Saya</h1>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Halo, saya [Nama Anda]</h2>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Saya adalah developer yang passionate tentang menciptakan antarmuka pengguna yang dapat diakses dan
                sempurna piksel demi piksel. Pekerjaan favorit saya terletak di persimpangan desain dan development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Saat ini bekerja sebagai Senior Front-End Engineer, mengkhususkan diri dalam aksesibilitas dan performa
                web. Di waktu luang, saya menulis dan mengerjakan projek sampingan.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Saya percaya bahwa teknologi terbaik adalah yang tidak terlihat - yang bekerja dengan mulus dan intuitif
                untuk semua pengguna, terlepas dari kemampuan atau perangkat yang mereka gunakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
