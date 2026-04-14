import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const notionCardVariants = cva(
  'bg-white rounded-[12px] border border-[rgba(0,0,0,0.1)] transition-all duration-150',
  {
    variants: {
      variant: {
        default: 'shadow-[var(--notion-shadow-card)]',
        featured: 'shadow-[var(--notion-shadow-deep)]',
        warm: 'bg-[var(--notion-warm-white)]',
      },
      interactive: {
        true: 'cursor-pointer hover:shadow-[var(--notion-shadow-deep)] hover:-translate-y-0.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface NotionCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notionCardVariants> {}

const NotionCard = React.forwardRef<HTMLDivElement, NotionCardProps>(
  ({ className, variant, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(notionCardVariants({ variant, interactive }), className)}
      {...props}
    />
  )
)
NotionCard.displayName = 'NotionCard'

const NotionCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
)
NotionCardHeader.displayName = 'NotionCardHeader'

const NotionCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-[22px] font-bold leading-[1.27] tracking-[-0.25px] text-[var(--notion-black)]',
        className
      )}
      {...props}
    />
  )
)
NotionCardTitle.displayName = 'NotionCardTitle'

const NotionCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-[16px] font-normal leading-[1.50] text-[var(--notion-warm-gray-500)]',
        className
      )}
      {...props}
    />
  )
)
NotionCardDescription.displayName = 'NotionCardDescription'

const NotionCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
)
NotionCardContent.displayName = 'NotionCardContent'

const NotionCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0 flex items-center', className)} {...props} />
  )
)
NotionCardFooter.displayName = 'NotionCardFooter'

export {
  NotionCard,
  NotionCardHeader,
  NotionCardTitle,
  NotionCardDescription,
  NotionCardContent,
  NotionCardFooter,
  notionCardVariants,
}
