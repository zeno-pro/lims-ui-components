import * as React from 'react'
import { cn } from '@/lib/utils'
import { PageHeader } from './page-header'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RefreshCw, Plus } from 'lucide-react'
import { LoadingState } from '@/components/lims/loading-state'
import { EmptyState } from '@/components/lims/empty-state'

export interface ListPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  searchPlaceholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  isLoading?: boolean
  isEmpty?: boolean
  emptyIcon?: React.ReactNode
  emptyTitle?: string
  emptyDescription?: string
  onCreate?: () => void
  headerActions?: React.ReactNode
  onRefresh?: () => void
  gridClassName?: string
}

const ListPageLayout = React.forwardRef<HTMLDivElement, ListPageLayoutProps>(
  (
    {
      className,
      title,
      description,
      searchPlaceholder = 'Search...',
      searchValue,
      onSearchChange,
      isLoading,
      isEmpty,
      emptyIcon,
      emptyTitle = 'No items',
      emptyDescription = 'Get started by creating your first item.',
      onCreate,
      headerActions,
      onRefresh,
      gridClassName = 'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4',
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
          actions={
            <>
              {headerActions}
              {onRefresh && (
                <Button variant="outline" size="icon" onClick={onRefresh}>
                  <RefreshCw className="size-4" />
                </Button>
              )}
              {onCreate && (
                <Button onClick={onCreate}>
                  <Plus className="size-4" />
                  Create New
                </Button>
              )}
            </>
          }
        />

        {onSearchChange && (
          <div className="px-6 pb-4">
            <Input
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        )}

        <div className="flex-1 overflow-auto px-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingState />
            </div>
          ) : isEmpty ? (
            <EmptyState
              icon={emptyIcon}
              title={emptyTitle}
              description={emptyDescription}
              action={onCreate ? { label: 'Create', onClick: onCreate } : undefined}
            />
          ) : (
            <div className={gridClassName}>{children}</div>
          )}
        </div>
      </div>
    )
  }
)
ListPageLayout.displayName = 'ListPageLayout'

export { ListPageLayout }
