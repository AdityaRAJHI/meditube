'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown, MessageSquare, Share } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ShortsPage() {
  const [currentShort] = useState(0)
  
  const shorts = [
    {
      id: 1,
      url: '/short1.mp4',
      title: 'Amazing Short',
      likes: '10K',
      comments: '500',
    },
    // Add more shorts data
  ]

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="relative h-full max-w-md w-full">
        <video
          src={shorts[currentShort].url}
          className="h-full w-full object-cover"
          loop
          autoPlay
          muted
        />
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
          <Button variant="ghost" size="icon" className="text-white">
            <ThumbsUp className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <ThumbsDown className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <MessageSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Share className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
} 