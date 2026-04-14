import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const notionButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--notion-focus-blue)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--notion-blue)] text-white hover:bg-[var(--notion-blue-hover)] active:scale-[0.97] border border-transparent rounded',
        secondary:
          'bg-[rgba(0,0,0,0.05)] text-[var(--notion-black)] hover:bg-[rgba(0,0,0,0.08)] active:scale-[0.97] border border-transparent rounded',
        ghost:
          'bg-transparent text-[var(--notion-black)] hover:underline border-transparent',
        pill:
          'bg-[var(--notion-badge-blue-bg)] text-[var(--notion-badge-blue-text)] hover:bg-[var(--notion-badge-blue-bg)]/80 border-transparent text-[12px] font-semibold tracking-[0.125px] px-2 py-1 rounded-full',
        outline:
          'bg-transparent text-[var(--notion-black)] border-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.02)] rounded',
      },
      size: {
        default: 'h-10 px-4 py-2 text-[15px] font-semibold rounded',
        sm: 'h-8 px-3 text-[14px] rounded',
        lg: 'h-12 px-6 text-[15px] font-semibold rounded',
        icon: 'size-10 rounded',
        pill: 'h-7 px-2 text-[12px] font-semibold rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface NotionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof notionButtonVariants> {
  isLoading?: boolean
}

const NotionButton = React.forwardRef<HTMLButtonElement, NotionButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(notionButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)
NotionButton.displayName = 'NotionButton'

export { NotionButton, notionButtonVariants }
