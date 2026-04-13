import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { StatusBadge } from './status-badge'
import type { SampleStatus } from '@/types'
import type { Status } from './status-badge'

const sampleStatusToBadgeStatus: Record<SampleStatus, Status> = {
  'received': 'pending',
  'in-progress': 'pending',
  'completed': 'pass',
  'reported': 'pass',
  'on-hold': 'warning',
  'cancelled': 'retired',
}

export interface SampleCardProps {
  sampleId: string
  productName: string
  customerName: string
  status: SampleStatus
  testProgress?: {
    completed: number
    total: number
  }
  receivedAt: Date
  onClick?: () => void
  className?: string
}

export function SampleCard({
  sampleId,
  productName,
  customerName,
  status,
  testProgress,
  receivedAt,
  onClick,
  className,
}: SampleCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(receivedAt)

  return (
    <Card
      interactive={!!onClick}
      onClick={onClick}
      className={cn('cursor-pointer', className)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-sm font-semibold tabular-nums">{sampleId}</span>
            <CardTitle className="text-base">{productName}</CardTitle>
          </div>
          <StatusBadge status={sampleStatusToBadgeStatus[status]} />
        </div>
        <CardDescription className="mt-2">{customerName}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Received: {formattedDate}</span>
          {testProgress && (
            <span>
              {testProgress.completed}/{testProgress.total} tests
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
