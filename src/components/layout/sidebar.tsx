import * as React from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export interface SidebarNavItem {
  name: string
  href: string
  icon: LucideIcon
  onClick?: () => void
}

export interface SidebarNavGroup {
  title: string
  items: SidebarNavItem[]
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  navigation: SidebarNavGroup[]
  collapsed?: boolean
  activeHref?: string
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, navigation, collapsed = false, activeHref, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col h-full border-r bg-background',
          collapsed ? 'w-16' : 'w-64',
          className
        )}
        {...props}
      >
        <div className="flex-1 overflow-auto py-4">
          {navigation.map((group) => (
            <div key={group.title} className="mb-4">
              {!collapsed && (
                <div className="px-4 mb-2">
                  <span className="text-xs font-semibold uppercase text-muted-foreground">
                    {group.title}
                  </span>
                </div>
              )}
              <div className="space-y-1 px-2">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeHref === item.href

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={item.onClick}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                      title={collapsed ? item.name : undefined}
                    >
                      <Icon className="size-5 shrink-0" />
                      {!collapsed && <span>{item.name}</span>}
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
)
Sidebar.displayName = 'Sidebar'

export { Sidebar }
