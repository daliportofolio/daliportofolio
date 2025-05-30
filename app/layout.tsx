import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackToTop } from "@/components/back-to-top"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Portfolio Pribadi | [Nama Anda]",
    template: "%s | [Nama Anda]",
  },
  description:
    "Portfolio pribadi [Nama Anda] - Web Developer, Software Engineer. Lihat proyek, artikel, dan pengalaman saya dalam pengembangan software.",
  keywords: ["portfolio", "web developer", "software engineer", "javascript", "python", "react", "next.js"],
  authors: [{ name: "[Nama Anda]" }],
  creator: "[Nama Anda]",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "[URL Website Anda]",
    title: "Portfolio Pribadi | [Nama Anda]",
    description: "Portfolio pribadi [Nama Anda] - Web Developer, Software Engineer",
    siteName: "Portfolio [Nama Anda]",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio [Nama Anda]",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Pribadi | [Nama Anda]",
    description: "Portfolio pribadi [Nama Anda] - Web Developer, Software Engineer",
    images: ["/og-image.jpg"],
    creator: "@[twitter_username]",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            {children}
            <ThemeToggle />
            <BackToTop />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
