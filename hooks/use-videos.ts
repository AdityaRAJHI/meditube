import { useState, useEffect } from 'react'
import { Video, VideoResponse } from '@/types/video'

interface UseVideosProps {
  page?: number
  limit?: number
  search?: string
}

export function useVideos({ page = 1, limit = 12, search = '' }: UseVideosProps = {}) {
  const [data, setData] = useState<VideoResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true)
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          search: search
        })
        
        const response = await fetch(`/api/videos?${params}`)
        if (!response.ok) throw new Error('Failed to fetch videos')
        
        const data = await response.json()
        setData(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [page, limit, search])

  return { data, isLoading, error }
} 