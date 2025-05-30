"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectFilterProps {
  categories: string[]
  technologies: string[]
  onFilterChange: (filters: { categories: string[]; technologies: string[] }) => void
}

export function ProjectFilter({ categories, technologies, onFilterChange }: ProjectFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]

    setSelectedCategories(newCategories)
    onFilterChange({ categories: newCategories, technologies: selectedTechnologies })
  }

  const handleTechnologyToggle = (technology: string) => {
    const newTechnologies = selectedTechnologies.includes(technology)
      ? selectedTechnologies.filter((t) => t !== technology)
      : [...selectedTechnologies, technology]

    setSelectedTechnologies(newTechnologies)
    onFilterChange({ categories: selectedCategories, technologies: newTechnologies })
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedTechnologies([])
    onFilterChange({ categories: [], technologies: [] })
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedTechnologies.length > 0

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
          <Filter size={16} />
          <span>Filter Proyek</span>
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {selectedCategories.length + selectedTechnologies.length}
            </Badge>
          )}
        </Button>

        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X size={16} className="mr-1" />
            Hapus Filter
          </Button>
        )}
      </div>

      {isOpen && (
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium text-slate-800 dark:text-slate-100 mb-3">Kategori</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryToggle(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-100 mb-3">Teknologi</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <Button
                  key={technology}
                  variant={selectedTechnologies.includes(technology) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTechnologyToggle(technology)}
                >
                  {technology}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
