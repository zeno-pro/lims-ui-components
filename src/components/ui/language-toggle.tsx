import * as React from 'react'
import { cn } from '@/lib/utils'
import { Globe } from 'lucide-react'
import { useI18n } from '@/i18n'

export type LanguageToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const LanguageToggle = React.forwardRef<HTMLButtonElement, LanguageToggleProps>(
  ({ className, ...props }, ref) => {
    const { language, toggleLanguage } = useI18n()

    return (
      <button
        ref={ref}
        type="button"
        onClick={toggleLanguage}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
          'size-10',
          className
        )}
        {...props}
      >
        <Globe className="size-5" />
        <span className="ml-1 text-xs font-medium">{language === 'zh' ? '中' : 'EN'}</span>
      </button>
    )
  }
)
LanguageToggle.displayName = 'LanguageToggle'

export { LanguageToggle }