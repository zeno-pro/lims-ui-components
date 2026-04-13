import * as React from 'react'
import { PanelLeft, PanelRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface CollapsibleColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onOpenChange: (open: boolean) => void
  side?: 'left' | 'right'
  defaultWidth?: number
}

const CollapsibleColumn = React.forwardRef<HTMLDivElement, CollapsibleColumnProps>(
  ({ className, open, onOpenChange, side = 'left', defaultWidth = 320, children, ...props }, ref) => {
    return (
      <>
        {open && (
          <div
            ref={ref}
            className={cn(
              'flex flex-col overflow-hidden border-r',
              side === 'left' && 'border-r',
              side === 'right' && 'border-l',
              className
            )}
            style={{ width: defaultWidth }}
            {...props}
          >
            {children}
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => onOpenChange(!open)}
        >
          {side === 'left' ? (
            <PanelLeft className="size-4" />
          ) : (
            <PanelRight className="size-4" />
          )}
        </Button>
      </>
    )
  }
)
CollapsibleColumn.displayName = 'CollapsibleColumn'

export { CollapsibleColumn }
