export interface Video {
  id: number
  title: string
  description: string
  channel: string
  views: string
  timestamp: string
  thumbnail: string
  avatar: string
  likes: number
  dislikes: number
}

export interface VideoResponse {
  videos: Video[]
  totalCount: number
} 