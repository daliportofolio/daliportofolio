// Data management functions for the portfolio

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  category: string
  technologies: string[]
  date: string
  slug: string
  demoUrl?: string
  githubUrl?: string
  features?: string[]
  status?: string
  duration?: string
  team?: string
}

export interface Article {
  id: string
  title: string
  excerpt: string
  content?: string
  category: string
  tags: string[]
  date: string
  readTime: number
  slug: string
}

// Sample data - replace with your actual content
const sampleProjects: Project[] = [
  {
    id: "1",
    title: "[Nama Proyek 1]",
    description: "[Deskripsi singkat proyek pertama Anda]",
    longDescription: "[Deskripsi lengkap proyek pertama]",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python"],
    date: "2024",
    slug: "proyek-1",
    demoUrl: "[URL Demo]",
    githubUrl: "[URL GitHub]",
    features: ["Fitur 1", "Fitur 2", "Fitur 3"],
    status: "Selesai",
    duration: "2 bulan",
    team: "Personal",
  },
  {
    id: "2",
    title: "[Nama Proyek 2]",
    description: "[Deskripsi singkat proyek kedua Anda]",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile App",
    technologies: ["React Native", "JavaScript", "Python"],
    date: "2024",
    slug: "proyek-2",
    demoUrl: "[URL Demo]",
    githubUrl: "[URL GitHub]",
  },
  {
    id: "3",
    title: "[Nama Proyek 3]",
    description: "[Deskripsi singkat proyek ketiga Anda]",
    image: "/placeholder.svg?height=300&width=400",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Matplotlib"],
    date: "2023",
    slug: "proyek-3",
    githubUrl: "[URL GitHub]",
  },
]

const sampleArticles: Article[] = [
  {
    id: "1",
    title: "[Judul Artikel 1]",
    excerpt: "[Ringkasan artikel pertama Anda - 2-3 kalimat yang menarik pembaca]",
    category: "Tutorial",
    tags: ["JavaScript", "Web Development", "Tutorial"],
    date: "15 Januari 2024",
    readTime: 5,
    slug: "artikel-1",
  },
  {
    id: "2",
    title: "[Judul Artikel 2]",
    excerpt: "[Ringkasan artikel kedua Anda - ceritakan tentang pengalaman atau pembelajaran]",
    category: "Pengalaman",
    tags: ["Python", "Data Science", "Learning"],
    date: "10 Januari 2024",
    readTime: 8,
    slug: "artikel-2",
  },
  {
    id: "3",
    title: "[Judul Artikel 3]",
    excerpt: "[Ringkasan artikel ketiga Anda - bagikan tips atau insight menarik]",
    category: "Tips",
    tags: ["Career", "Programming", "Tips"],
    date: "5 Januari 2024",
    readTime: 6,
    slug: "artikel-3",
  },
]

export async function getProjects(): Promise<Project[]> {
  // In a real application, this would fetch from a database or CMS
  // For now, return sample data
  return sampleProjects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find((project) => project.slug === slug) || null
}

export async function getArticles(): Promise<Article[]> {
  // In a real application, this would fetch from a database or CMS
  // For now, return sample data
  return sampleArticles
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles()
  return articles.find((article) => article.slug === slug) || null
}

// Utility functions for data management
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}
