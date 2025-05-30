"use client"

import { Share2, Twitter, Facebook, Linkedin, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SocialShareProps {
  title: string
  url: string
  description?: string
}

export function SocialShare({ title, url, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareData = {
    title,
    text: description || title,
    url,
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log("Error sharing:", error)
      }
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.log("Error copying:", error)
    }
  }

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  return (
    <div className="flex items-center space-x-2">
      {/* Native Share (Mobile) */}
      {typeof navigator !== "undefined" && navigator.share && (
        <Button variant="outline" size="sm" onClick={handleNativeShare}>
          <Share2 size={16} className="mr-2" />
          Bagikan
        </Button>
      )}

      {/* Social Media Shares */}
      <Button variant="outline" size="sm" asChild>
        <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter size={16} />
        </a>
      </Button>

      <Button variant="outline" size="sm" asChild>
        <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook size={16} />
        </a>
      </Button>

      <Button variant="outline" size="sm" asChild>
        <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={16} />
        </a>
      </Button>

      {/* Copy Link */}
      <Button variant="outline" size="sm" onClick={handleCopyLink}>
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </Button>
    </div>
  )
}
