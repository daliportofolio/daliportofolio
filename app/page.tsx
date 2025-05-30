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
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">Portfolio Saya</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            Selamat datang di portfolio pribadi saya. Jelajahi perjalanan, proyek, dan pemikiran saya.
          </p>

          {/* Contact Info */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Mail size={18} className="text-blue-600 dark:text-blue-400" />
            <a
              href="mailto:your.email@example.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
            >
              your.email@example.com
            </a>
          </div>

          {/* Search Button */}
          <Button onClick={() => setIsSearchOpen(true)} variant="outline" className="mb-8">
            <SearchIcon size={16} className="mr-2" />
            Cari proyek atau artikel...
          </Button>
        </div>
      </header>

      {/* Main Navigation */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Link
                key={index}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div
                    className={`${item.color} p-4 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 mx-auto mb-4 w-fit`}
                  >
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>
                  <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
                    Lihat Detail
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            )
          })}
        </div>
      </main>

      {/* Footer with Contact */}
      <footer className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Mari Terhubung!</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Punya pertanyaan, ide kolaborasi, atau sekadar ingin ngobrol? Jangan ragu untuk menghubungi saya.
          </p>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">Email</h3>
                <a
                  href="mailto:your.email@example.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Biasanya saya membalas email dalam 24 jam</p>
          </div>

          <p className="text-slate-500 dark:text-slate-400">© 2024 Portfolio Pribadi. Dibuat dengan ❤️</p>
        </div>
      </footer>

      {/* Search Modal */}
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  )
}
