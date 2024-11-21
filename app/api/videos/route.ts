import { Video } from '@/types/video'

// This would typically come from a database
const videos: Video[] = [
  {
    id: 1,
    title: "Building a Modern Web Application",
    description: "Learn how to build modern web applications using Next.js and React",
    channel: "TechTutorials",
    views: "120K views",
    timestamp: "2 days ago",
    thumbnail: "/placeholder.svg?height=180&width=320",
    avatar: "/placeholder-user.jpg",
    likes: 1200,
    dislikes: 30
  },
].concat(
  Array(11).fill(null).map((_, i) => ({
    id: i + 2,
    title: `Sample Video ${i + 2}`,
    description: `Description for video ${i + 2}`,
    channel: `Channel ${i + 2}`,
    views: `${Math.floor(Math.random() * 900 + 100)}K views`,
    timestamp: `${Math.floor(Math.random() * 30 + 1)} days ago`,
    thumbnail: "/placeholder.svg?height=180&width=320",
    avatar: "/placeholder-user.jpg",
    likes: Math.floor(Math.random() * 10000),
    dislikes: Math.floor(Math.random() * 1000)
  }))
)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '12')
  const search = searchParams.get('search') || ''

  // Filter videos based on search term
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase()) ||
    video.channel.toLowerCase().includes(search.toLowerCase())
  )

  // Calculate pagination
  const start = (page - 1) * limit
  const paginatedVideos = filteredVideos.slice(start, start + limit)

  return Response.json({
    videos: paginatedVideos,
    totalCount: filteredVideos.length
  })
} 