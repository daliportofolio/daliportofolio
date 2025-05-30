"use client"

import { useState, useEffect } from "react"

interface Skill {
  name: string
  level: number
  category: string
}

interface SkillsChartProps {
  skills: Skill[]
}

export function SkillsChart({ skills }: SkillsChartProps) {
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([])

  useEffect(() => {
    // Animate skill bars on mount
    const timer = setTimeout(() => {
      setAnimatedSkills(skills)
    }, 500)

    return () => clearTimeout(timer)
  }, [skills])

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500"
    if (level >= 75) return "bg-blue-500"
    if (level >= 60) return "bg-yellow-500"
    return "bg-orange-500"
  }

  return (
    <div className="space-y-8">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">{category}</h3>
          <div className="space-y-4">
            {categorySkills.map((skill) => {
              const animatedSkill = animatedSkills.find((s) => s.name === skill.name)
              const currentLevel = animatedSkill ? animatedSkill.level : 0

              return (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                      style={{ width: `${currentLevel}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
