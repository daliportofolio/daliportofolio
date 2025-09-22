import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"

const projects = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern yang dibangun dengan Next.js dan Stripe untuk pembayaran yang aman.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    features: [
      "Sistem pembayaran terintegrasi dengan Stripe",
      "Dashboard admin untuk manajemen produk",
      "Sistem autentikasi pengguna",
      "Responsive design untuk semua perangkat",
      "SEO optimized",
    ],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  "task-management-app": {
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur real-time collaboration menggunakan Socket.io.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: [
      "Real-time collaboration antar pengguna",
      "Drag & drop interface untuk task management",
      "Sistem notifikasi real-time",
      "Dashboard analytics untuk produktivitas",
      "Mobile-friendly design",
    ],
    github: "https://github.com/username/task-app",
    demo: "https://task-app-demo.vercel.app",
  },
  "weather-dashboard": {
    title: "Weather Dashboard",
    description: "Dashboard cuaca interaktif dengan forecast 7 hari menggunakan OpenWeather API.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuex", "SCSS"],
    features: [
      "Forecast cuaca 7 hari ke depan",
      "Visualisasi data dengan charts interaktif",
      "Geolocation untuk deteksi lokasi otomatis",
      "Pencarian kota dengan autocomplete",
      "Dark/light mode toggle",
    ],
    github: "https://github.com/username/weather-app",
    demo: "https://weather-dashboard-demo.vercel.app",
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description: "Website portofolio responsif dengan animasi smooth dan performa optimal.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX", "Vercel"],
    features: [
      "Animasi smooth dengan Framer Motion",
      "Blog system dengan MDX",
      "SEO optimized dengan Next.js",
      "Perfect Lighthouse scores",
      "Fully responsive design",
    ],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio-demo.vercel.app",
  },
}

export default function ProjekDetailPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
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
              href="/projek"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm"
            >
              Kembali ke Projek
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <Link href="/projek" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{project.title}</h1>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Deskripsi</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.description}</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Teknologi</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted text-muted-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Fitur Utama</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm border border-border rounded hover:bg-muted transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-foreground text-background rounded hover:bg-foreground/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
