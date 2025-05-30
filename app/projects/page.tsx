"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ProjectFilter } from "@/components/project-filter"
import { LoadingCard } from "@/components/loading-spinner"
import type { Project } from "@/lib/data"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<string[]>([])
  const [technologies, setTechnologies] = useState<string[]>([])

  useEffect(() => {
    // Simulate API call
    const fetchProjects = async () => {
      try {
        // In real app, this would be an API call
        const response = await fetch("/api/projects")
        const data = await response.json()
        setProjects(data)
        setFilteredProjects(data)

        // Extract unique categories and technologies
        const uniqueCategories = [...new Set(data.map((p: Project) => p.category))]
        const uniqueTechnologies = [...new Set(data.flatMap((p: Project) => p.technologies))]

        setCategories(uniqueCategories)
        setTechnologies(uniqueTechnologies)
      } catch (error) {
        console.error("Error fetching projects:", error)
        // Fallback to sample data
        const sampleProjects = [
          {
            id: "1",
            title: "[Nama Proyek 1]",
            description: "[Deskripsi singkat proyek pertama Anda]",
            image: "/placeholder.svg?height=300&width=400",
            category: "Web Development",
            technologies: ["HTML5", "CSS3", "JavaScript", "Python"],
            date: "2024",
            slug: "proyek-1",
            demoUrl: "[URL Demo]",
            githubUrl: "[URL GitHub]",
          },
        ]
        setProjects(sampleProjects)
        setFilteredProjects(sampleProjects)
        setCategories(["Web Development"])
        setTechnologies(["HTML5", "CSS3", "JavaScript", "Python"])
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleFilterChange = ({
    categories: selectedCategories,
    technologies: selectedTechnologies,
  }: {
    categories: string[]
    technologies: string[]
  }) => {
    let filtered = projects

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((project) => selectedCategories.includes(project.category))
    }

    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter((project) => project.technologies.some((tech) => selectedTechnologies.includes(tech)))
    }

    setFilteredProjects(filtered)
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
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">Proyek Saya</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Koleksi proyek dan karya yang telah saya buat. Klik pada setiap proyek untuk melihat detail lengkap.
            </p>
          </div>

          {/* Filter */}
          {!isLoading && (
            <ProjectFilter categories={categories} technologies={technologies} onFilterChange={handleFilterChange} />
          )}

          {/* Projects Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                      >
                        Lihat Detail
                      </Link>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                          title="Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                          title="GitHub"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📁</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {projects.length === 0 ? "Belum Ada Proyek" : "Tidak Ada Proyek yang Sesuai Filter"}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {projects.length === 0
                  ? "Proyek Anda akan ditampilkan di sini. Edit file data/projects.json untuk menambahkan proyek."
                  : "Coba ubah filter untuk melihat proyek lainnya."}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
