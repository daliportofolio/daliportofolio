"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter(Boolean)

  if (pathname === "/") return null

  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
      return { label, href }
    }),
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight size={14} className="mx-2" />}
          {index === 0 ? (
            <Link
              href={item.href}
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Home size={14} className="mr-1" />
              {item.label}
            </Link>
          ) : index === breadcrumbItems.length - 1 ? (
            <span className="text-slate-800 dark:text-slate-200 font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
