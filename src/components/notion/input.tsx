import * as React from 'react'
import { cn } from '@/lib/utils'

export interface NotionInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const NotionInput = React.forwardRef<HTMLInputElement, NotionInputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full bg-white border border-[#dddddd] rounded-[4px] px-3 py-2 text-[14px] text-[var(--notion-black)] transition-colors placeholder:text-[var(--notion-warm-gray-300)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--notion-focus-blue)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-[var(--notion-orange)] focus-visible:ring-[var(--notion-orange)]',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
NotionInput.displayName = 'NotionInput'

export { NotionInput }
