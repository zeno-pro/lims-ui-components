import * as React from 'react'
import { cn } from '@/lib/utils'
import { NotionCard } from './card'

export interface NotionFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  illustration?: React.ReactNode
  title: string
  description: string
  variant?: 'default' | 'warm'
}

const NotionFeatureCard = React.forwardRef<HTMLDivElement, NotionFeatureCardProps>(
  ({ className, illustration, title, description, variant = 'default', ...props }, ref) => {
    return (
      <NotionCard
        ref={ref}
        variant={variant === 'warm' ? 'warm' : 'default'}
        className={cn('overflow-hidden', className)}
        {...props}
      >
        {illustration && (
          <div className="w-full aspect-[16/9] bg-[var(--notion-warm-white)] flex items-center justify-center rounded-t-[12px]">
            {illustration}
          </div>
        )}
        <div className="p-6">
          <h3 className="text-[22px] font-bold leading-[1.27] tracking-[-0.25px] text-[var(--notion-black)] mb-2">
            {title}
          </h3>
          <p className="text-[16px] font-normal leading-[1.50] text-[var(--notion-warm-gray-500)]">
            {description}
          </p>
        </div>
      </NotionCard>
    )
  }
)
NotionFeatureCard.displayName = 'NotionFeatureCard'

export { NotionFeatureCard }
