import * as React from 'react'
import { cn } from '@/lib/utils'
import { NotionCard } from './card'

export interface NotionMetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number
  label?: string
  description?: string
}

const NotionMetricCard = React.forwardRef<HTMLDivElement, NotionMetricCardProps>(
  ({ className, value, label, description, ...props }, ref) => {
    return (
      <NotionCard ref={ref} className={cn('p-6 text-center', className)} {...props}>
        {label && (
          <p className="text-[12px] font-semibold tracking-[0.125px] text-[var(--notion-warm-gray-300)] uppercase mb-2">
            {label}
          </p>
        )}
        <p className="text-[40px] font-bold leading-[1.50] text-[var(--notion-black)] mb-2">{value}</p>
        {description && (
          <p className="text-[16px] font-normal leading-[1.50] text-[var(--notion-warm-gray-500)]">
            {description}
          </p>
        )}
      </NotionCard>
    )
  }
)
NotionMetricCard.displayName = 'NotionMetricCard'

export { NotionMetricCard }
