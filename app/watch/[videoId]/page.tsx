'use client'

import { useParams } from 'next/navigation'
import ReactPlayer from 'react-player'
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Share, Save } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function WatchPage() {
  const params = useParams()
  const videoId = params.videoId

  // Mock video data - this would come from an API in a real app
  const video = {
    id: videoId,
    title: "Building a Modern Web Application",
    channel: "TechTutorials",
    views: "120K views",
    timestamp: "2 days ago",
    description: "Learn how to build a modern web application using Next.js and React...",
    avatar: "/placeholder-user.jpg",
    subscribers: "500K subscribers"
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player Section */}
        <div className="lg:col-span-2">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height="100%"
              controls
            />
          </div>
          
          <div className="mt-4 space-y-4">
            <h1 className="text-2xl font-bold">{video.title}</h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={video.avatar} alt={video.channel} />
                  <AvatarFallback>{video.channel[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">{video.channel}</h2>
                  <p className="text-sm text-muted-foreground">{video.subscribers}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="secondary" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button variant="secondary" size="sm">
                  <ThumbsDown className="mr-2 h-4 w-4" />
                  Dislike
                </Button>
                <Button variant="secondary" size="sm">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="secondary" size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{video.views}</span>
                <span>•</span>
                <span>{video.timestamp}</span>
              </div>
              <p className="mt-2 text-sm whitespace-pre-line">{video.description}</p>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recommended Videos</h2>
          {/* We'll add recommended videos here later */}
        </div>
      </div>
    </div>
  )
} 