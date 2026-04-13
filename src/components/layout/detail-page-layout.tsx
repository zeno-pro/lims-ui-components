import * as React from 'react'
import { cn } from '@/lib/utils'
import { PageHeader } from './page-header'
import { CollapsibleColumn } from './collapsible-column'

export interface DetailPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  headerActions?: React.ReactNode
  leftColumn?: React.ReactNode
  rightColumn?: React.ReactNode
  leftColumnOpen?: boolean
  onLeftColumnOpenChange?: (open: boolean) => void
  rightColumnOpen?: boolean
  onRightColumnOpenChange?: (open: boolean) => void
  leftColumnWidth?: number
  rightColumnWidth?: number
}

const DetailPageLayout = React.forwardRef<HTMLDivElement, DetailPageLayoutProps>(
  (
    {
      className,
      title,
      description,
      headerActions,
      leftColumn,
      rightColumn,
      leftColumnOpen = true,
      onLeftColumnOpenChange,
      rightColumnOpen = true,
      onRightColumnOpenChange,
      leftColumnWidth = 320,
      rightColumnWidth = 320,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn('flex flex-col h-full', className)} {...props}>
        <PageHeader
          title={title}
          description={description}
          actions={headerActions}
        />

        <div className="flex-1 flex overflow-hidden">
          {leftColumn && onLeftColumnOpenChange && (
            <CollapsibleColumn
              open={leftColumnOpen}
              onOpenChange={onLeftColumnOpenChange}
              side="left"
              defaultWidth={leftColumnWidth}
            >
              {leftColumn}
            </CollapsibleColumn>
          )}

          <div className="flex-1 overflow-auto">{children}</div>

          {rightColumn && onRightColumnOpenChange && (
            <CollapsibleColumn
              open={rightColumnOpen}
              onOpenChange={onRightColumnOpenChange}
              side="right"
              defaultWidth={rightColumnWidth}
            >
              {rightColumn}
            </CollapsibleColumn>
          )}
        </div>
      </div>
    )
  }
)
DetailPageLayout.displayName = 'DetailPageLayout'

export { DetailPageLayout }
