"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadCV() {
  const handleDownload = () => {
    // Replace with your actual CV file path
    const cvUrl = "/cv/[nama-anda]-cv.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "[Nama-Anda]-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button onClick={handleDownload} className="flex items-center space-x-2">
      <Download size={16} />
      <span>Download CV</span>
    </Button>
  )
}
