import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react"
import Image from "next/image"
import { getProjectBySlug, getProjects } from "@/lib/data"
import { notFound } from "next/navigation"

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Proyek
        </Link>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Project Image */}
            <div className="relative h-64 md:h-80 bg-slate-200 dark:bg-slate-700">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {/* Project Info */}
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {project.date}
                </div>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                  <User size={16} className="mr-2" />
                  Personal Project
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{project.description}</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Lihat Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    <Github size={18} className="mr-2" />
                    Lihat Kode
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Tentang Proyek</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.longDescription ||
                      "[Deskripsi lengkap proyek - jelaskan latar belakang, tujuan, dan proses pembuatan proyek ini]"}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    [Jelaskan tantangan yang dihadapi selama pengembangan dan bagaimana Anda mengatasinya]
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    [Bagikan pembelajaran yang didapat dari proyek ini dan rencana pengembangan ke depan]
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Fitur Utama</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(project.features || ["[Fitur 1]", "[Fitur 2]", "[Fitur 3]", "[Fitur 4]"]).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
                  <Tag size={18} className="mr-2" />
                  Teknologi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Detail Proyek</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Status:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      {project.status || "Selesai"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Durasi:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      {project.duration || "[Durasi Pengerjaan]"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Tim:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{project.team || "Personal"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
