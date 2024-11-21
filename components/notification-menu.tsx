import { Bell, AtSign, MessageSquare, Video } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Video className="mr-2 h-4 w-4" />
                <div className="flex flex-col space-y-1">
                  <p className="text-sm">New video from TechTutorials</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </TabsContent>
          <TabsContent value="mentions">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <AtSign className="mr-2 h-4 w-4" />
                <div className="flex flex-col space-y-1">
                  <p className="text-sm">@rajkumarsinha mentioned you</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </TabsContent>
          <TabsContent value="comments">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                <div className="flex flex-col space-y-1">
                  <p className="text-sm">New comment on your video</p>
                  <p className="text-xs text-muted-foreground">30 minutes ago</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 