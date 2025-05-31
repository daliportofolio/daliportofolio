"use client"

import Link from "next/link"
import { ArrowRight, User, FolderOpen, PenTool, Mail, SearchIcon } from "lucide-react"
import { useState } from "react"
import { Search } from "@/components/search"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const menuItems = [
    {
      title: "Profil Saya",
      description: "Tentang saya dan perjalanan hidup",
      href: "/profile",
      icon: User,
      color: "bg-blue-500",
    },
    {
      title: "Proyek Saya",
      description: "Koleksi proyek dan karya yang telah dibuat",
      href: "/projects",
      icon: FolderOpen,
      color: "bg-green-500",
    },
    {
      title: "Tulisan Saya",
      description: "Artikel dan pemikiran seputar teknologi",
      href: "/articles",
      icon: PenTool,
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">Eksplorasi Diri Saya</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-4">
            Sebuah catatan digital perjalanan saya menjelajahi dunia IT tempat saya menyimpan, membagikan, dan merefleksikan pengetahuan dan pemikiran pribadi.
          </p>

          {/* Email Contact */}
          <div className="flex items-center justify-center text-slate-600 dark:text-slate-300 mb-8">
            <Mail size={18} className="mr-2" />
            <a href="mailto:email@anda.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              dalisyaputra28@gmail.com
            </a>
          </div>

          {/* Search Button */}
          <Button onClick={() => setIsSearchOpen(true)} variant="outline" className="mb-8">
            <SearchIcon size={16} className="mr-2" />
            Yuk eksplorasi...
          </Button>
        </div>
      </header>

      {/* Main Navigation */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Link
                key={index}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`${item.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      Lihat Detail
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            )
          })}
        </div>
      </main>

      {/* Footer with Email */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 mb-2">© 2024 Portfolio Pribadi. Dibuat dengan ❤️</p>
        <div className="flex items-center justify-center text-slate-500 dark:text-slate-400">
          <Mail size={14} className="mr-1" />
          <a href="mailto:dalisyaputra28@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            dalisyaputra28@gmail.com
          </a>
        </div>
      </footer>

      {/* Search Modal */}
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  )
}
