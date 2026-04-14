import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const notionBadgeVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[var(--notion-badge-blue-bg)] text-[var(--notion-badge-blue-text)]',
        success: 'bg-[var(--notion-teal)]/10 text-[var(--notion-teal)]',
        warning: 'bg-[var(--notion-orange)]/10 text-[var(--notion-orange)]',
        destructive: 'bg-[var(--notion-orange)]/15 text-[var(--notion-orange)]',
        outline: 'bg-transparent border border-[rgba(0,0,0,0.1)] text-[var(--notion-warm-gray-500)]',
      },
      size: {
        default: 'px-2.5 py-1 text-[12px] font-semibold tracking-[0.125px]',
        sm: 'px-2 py-0.5 text-[10px] font-semibold tracking-[0.125px]',
        lg: 'px-3 py-1 text-[14px] font-semibold tracking-[0.125px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface NotionBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notionBadgeVariants> {}

function NotionBadge({ className, variant, size, ...props }: NotionBadgeProps) {
  return <div className={cn(notionBadgeVariants({ variant, size }), className)} {...props} />
}

export { NotionBadge, notionBadgeVariants }
