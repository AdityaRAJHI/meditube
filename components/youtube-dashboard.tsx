'use client'

import { useState } from 'react'
import { 
  Bell, Home, Library, Menu, Search, ThumbsUp, TrendingUp,
  ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper,
  Trophy, Shirt, Podcast, GraduationCap, Youtube, FileText, Info
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useVideos } from '@/hooks/use-videos'
import { SidebarItem } from './sidebar-item'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'

const sidebarItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: TrendingUp, label: 'Trending', href: '/trending' },
  { icon: ShoppingBag, label: 'Shopping', href: '/shopping' },
  { icon: Music2, label: 'Music', href: '/music' },
  { icon: Film, label: 'Movies', href: '/movies' },
  { icon: Radio, label: 'Live', href: '/live' },
  { icon: Gamepad2, label: 'Gaming', href: '/gaming' },
  { icon: Newspaper, label: 'News', href: '/news' },
  { icon: Trophy, label: 'Sports', href: '/sports' },
  { icon: Shirt, label: 'Fashion & Beauty', href: '/fashion' },
  { icon: Podcast, label: 'Podcasts', href: '/podcasts' },
  { icon: GraduationCap, label: 'Courses', href: '/courses' },
  { type: 'separator' },
  { icon: FileText, label: 'Terms & Conditions', href: '/terms' },
  { icon: Info, label: 'About Us', href: '/about' },
]

export function YoutubeDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')
  const { data, isLoading, error } = useVideos({ search })

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-card shadow-lg transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="flex h-16 items-center px-4 justify-between">
          <div className="flex items-center">
            <Button variant="ghost" className="lg:hidden p-0" onClick={() => setSidebarOpen(false)}>
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center ml-2">
              <Youtube className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-lg font-semibold">YouTube</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden lg:flex"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)] px-3">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                {sidebarItems.map((item) => (
                  <SidebarItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    isActive={item.href === '/'}
                  />
                ))}
              </div>
            </div>
            <div className="mt-auto px-3 py-4">
              <p className="text-xs text-muted-foreground text-center">
                © 2024 MediTube 🎥 All rights reserved.
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b px-4 lg:px-6">
          <Button variant="ghost" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <form className="flex flex-1 items-center space-x-2 lg:ml-4" onSubmit={(e) => {
            e.preventDefault()
            setSearch(e.currentTarget.search.value)
          }}>
            <Input 
              name="search"
              className="flex-1" 
              placeholder="Search videos..." 
              type="search" 
            />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <div className="ml-auto flex items-center space-x-4">
            <NotificationMenu />
            <div className="flex items-center space-x-2">
              <Avatar className="h-9 w-9">
                <AvatarImage 
                  src="/profile-image.jpg" 
                  alt="@rajkumarsinha"
                  className="object-cover"
                />
                <AvatarFallback className="bg-gray-100 text-gray-600">
                  RS
                </AvatarFallback>
              </Avatar>
              <div className="hidden lg:block">
                <p className="text-sm font-medium">Rajkumarsinha</p>
                <p className="text-xs text-muted-foreground">@rajkumarsinha</p>
              </div>
            </div>
          </div>
        </header>

        {/* Video Grid */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          ) : error ? (
            <div className="text-center text-destructive">
              {error.message}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data?.videos.map((video) => (
                <Link href={`/watch/${video.id}`} key={video.id}>
                  <div className="group cursor-pointer space-y-2">
                    <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={320}
                        height={180}
                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex space-x-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage 
                          src="/profile-image.jpg" 
                          alt="@rajkumarsinha"
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-gray-100 text-gray-600">
                          RS
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="font-medium leading-tight">{video.title}</h3>
                        <div className="text-sm text-muted-foreground">
                          <div>{video.channel}</div>
                          <div>{video.views} • {video.timestamp}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-y-auto">
          {/* Example notifications */}
          <DropdownMenuItem>
            <div className="flex flex-col space-y-1">
              <p className="text-sm">New video from TechTutorials</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </DropdownMenuItem>
          {/* Add more notifications as needed */}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}