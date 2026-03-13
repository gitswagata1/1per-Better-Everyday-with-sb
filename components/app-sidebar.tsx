"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, CheckSquare, Home, Map, Plus, Settings, LogOut, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Habits", href: "/habits", icon: CheckSquare },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Behaviour Map", href: "/behaviour-map", icon: Map },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()
  
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border/60 bg-card shadow-sm">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-border/60 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
          <span className="text-sm font-bold text-white">1%</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">Better</span>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 font-medium transition-all",
                  isActive 
                    ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary hover:from-primary/15 hover:to-accent/15" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <Icon className={cn("h-4 w-4", isActive && "text-primary")} />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>
      
      {/* Quick Add */}
      <div className="border-t border-border/60 p-4">
        <Link href="/habits/new">
          <Button className="w-full gap-2 rounded-xl bg-gradient-to-r from-primary to-accent font-semibold shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30">
            <Plus className="h-4 w-4" />
            New Habit
          </Button>
        </Link>
      </div>
      
      {/* Pro Upgrade Banner */}
      <div className="mx-4 mb-4 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-foreground">Upgrade to Pro</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Unlock AI insights and advanced analytics
        </p>
        <Button variant="outline" size="sm" className="w-full text-xs font-medium">
          Learn More
        </Button>
      </div>
      
      {/* User */}
      <div className="border-t border-border/60 p-4">
        <Link href="/login">
          <Button variant="ghost" className="w-full justify-start gap-3 font-medium text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
        </Link>
      </div>
    </aside>
  )
}
