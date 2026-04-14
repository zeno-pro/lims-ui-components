import * as React from 'react'
import { cn } from '@/lib/utils'
import { NotionButton } from './button'

export interface NavLink {
  label: string
  href: string
}

export interface NotionNavigationProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  links?: NavLink[]
  ctaLabel?: string
  onCtaClick?: () => void
}

const NotionNavigation = React.forwardRef<HTMLElement, NotionNavigationProps>(
  ({ className, logo, links = [], ctaLabel, onCtaClick, ...props }, ref) => {
    return (
      <header
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn('flex items-center justify-between w-full px-6 py-4 bg-white', className)}
        {...props}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">{logo && <div className="w-[34px] h-[34px]">{logo}</div>}</div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[15px] font-semibold text-[var(--notion-black)] hover:text-[var(--notion-link-blue)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        {ctaLabel && (
          <div className="flex items-center">
            <NotionButton variant="primary" size="default" onClick={onCtaClick}>
              {ctaLabel}
            </NotionButton>
          </div>
        )}
      </header>
    )
  }
)
NotionNavigation.displayName = 'NotionNavigation'

export { NotionNavigation }
