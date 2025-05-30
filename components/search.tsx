"use client"

import { useState, useEffect } from "react"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SearchResult {
  type: "project" | "article"
  id: string
  title: string
  description: string
  slug: string
  url: string
}

interface SearchProps {
  isOpen: boolean
  onClose: () => void
}

export function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchContent = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        setResults(data.results || [])
      } catch (error) {
        console.error("Search error:", error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(searchContent, 300)
    return () => clearTimeout(debounceTimer)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl">
          {/* Search Header */}
          <div className="flex items-center p-6 border-b border-slate-200 dark:border-slate-700">
            <SearchIcon size={20} className="text-slate-400 mr-3" />
            <Input
              type="text"
              placeholder="Cari proyek atau artikel..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border-0 focus-visible:ring-0 text-lg"
              autoFocus
            />
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading && (
              <div className="p-6 text-center text-slate-500">
                <div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2" />
                Mencari...
              </div>
            )}

            {!isLoading && query && results.length === 0 && (
              <div className="p-6 text-center text-slate-500">Tidak ada hasil ditemukan untuk "{query}"</div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="p-2">
                {results.map((result) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.url}
                    onClick={onClose}
                    className="block p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          result.type === "project" ? "bg-blue-500" : "bg-purple-500"
                        }`}
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-800 dark:text-slate-100 mb-1">{result.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{result.description}</p>
                        <span className="text-xs text-slate-400 capitalize mt-1 inline-block">
                          {result.type === "project" ? "Proyek" : "Artikel"}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!query && (
              <div className="p-6 text-center text-slate-500">
                <SearchIcon size={48} className="mx-auto mb-4 text-slate-300" />
                <p>Mulai mengetik untuk mencari proyek atau artikel</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
