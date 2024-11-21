import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

interface SidebarItemProps {
  icon?: LucideIcon
  label?: string
  href?: string
  isActive?: boolean
  type?: 'item' | 'separator'
}

export function SidebarItem({ icon: Icon, label, href = '#', isActive, type = 'item' }: SidebarItemProps) {
  if (type === 'separator') {
    return <Separator className="my-4" />
  }

  return (
    <Link href={href}>
      <Button 
        variant={isActive ? "secondary" : "ghost"} 
        className="w-full justify-start"
      >
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {label}
      </Button>
    </Link>
  )
} 