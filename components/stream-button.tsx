import { Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function StreamButton() {
  return (
    <Link href="/stream">
      <Button variant="secondary" size="sm" className="flex items-center space-x-2">
        <Video className="h-4 w-4" />
        <span>Go Live</span>
      </Button>
    </Link>
  )
} 