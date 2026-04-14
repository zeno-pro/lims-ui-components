import * as React from 'react'
import { cn } from '@/lib/utils'
import { Sun, Moon } from 'lucide-react'

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'light' | 'dark'
}

const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, ...props }, ref) => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

    const toggleTheme = () => {
      const root = document.documentElement
      if (theme === 'light') {
        root.classList.remove('light')
        root.classList.add('dark')
        setTheme('dark')
      } else {
        root.classList.remove('dark')
        root.classList.add('light')
        setTheme('light')
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={toggleTheme}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
          'size-10',
          className
        )}
        {...props}
      >
        {theme === 'light' ? (
          <Moon className="size-5" />
        ) : (
          <Sun className="size-5" />
        )}
      </button>
    )
  }
)
ThemeToggle.displayName = 'ThemeToggle'

export { ThemeToggle }