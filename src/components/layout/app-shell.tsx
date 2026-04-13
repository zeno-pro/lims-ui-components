import * as React from 'react'
import { cn } from '@/lib/utils'

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode
  setupBanner?: React.ReactNode
}

const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  ({ className, sidebar, setupBanner, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex h-screen overflow-hidden', className)}
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
