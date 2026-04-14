import * as React from 'react'
import { cn } from '@/lib/utils'

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode
  setupBanner?: React.ReactNode
  fullHeight?: boolean
}

const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  ({ className, sidebar, setupBanner, fullHeight = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex overflow-hidden', fullHeight ? 'h-screen' : 'h-full', className)}
        {...props}
      >
        {sidebar}
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {setupBanner}
          {children}
        </main>
      </div>
    )
  }
)
AppShell.displayName = 'AppShell'

export { AppShell }
