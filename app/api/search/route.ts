import { type NextRequest, NextResponse } from "next/server"
import { getProjects, getArticles } from "@/lib/data"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.toLowerCase() || ""

    if (!query.trim()) {
      return NextResponse.json({ results: [] })
    }

    const [projects, articles] = await Promise.all([getProjects(), getArticles()])

    const projectResults = projects
      .filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(query)),
      )
      .map((project) => ({
        type: "project" as const,
        id: project.id,
        title: project.title,
        description: project.description,
        slug: project.slug,
        url: `/projects/${project.slug}`,
      }))

    const articleResults = articles
      .filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
      .map((article) => ({
        type: "article" as const,
        id: article.id,
        title: article.title,
        description: article.excerpt,
        slug: article.slug,
        url: `/articles/${article.slug}`,
      }))

    const results = [...projectResults, ...articleResults].sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10) // Limit to 10 results

    return NextResponse.json({ results })
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json({ error: "Search failed" }, { status: 500 })
  }
}
