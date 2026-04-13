import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui'
import { StatusIndicator } from './status-indicator'
import { formatMeasurement } from '@/lib/utils'
import type { TestResultStatus } from '@/types'

export interface TestResultCardProps {
  testName: string
  testMethod: string
  status: TestResultStatus
  completedAt?: Date
  completedBy?: string
  measurements?: Array<{
    label: string
    value: number
    unit: string
    result: 'pass' | 'fail' | 'pending'
  }>
  onClick?: () => void
  className?: string
}

const statusMap: Record<TestResultStatus, 'pass' | 'fail' | 'pending'> = {
  pass: 'pass',
  fail: 'fail',
  pending: 'pending',
  'in-progress': 'pending',
  'not-applicable': 'pending',
}

export function TestResultCard({
  testName,
  testMethod,
  status,
  completedAt,
  completedBy,
  measurements,
  onClick,
  className,
}: TestResultCardProps) {
  const formattedDate = completedAt
    ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }).format(completedAt)
    : null

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
            <CardTitle className="text-base">{testName}</CardTitle>
            <span className="text-xs text-muted-foreground">{testMethod}</span>
          </div>
          <StatusIndicator status={statusMap[status]} size="lg" showLabel />
        </div>
      </CardHeader>
      <CardContent>
        {measurements && measurements.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {measurements.slice(0, 3).map((m, i) => (
              <div
                key={i}
                className={cn(
                  'rounded px-2 py-1 text-xs font-mono tabular-nums',
                  m.result === 'pass' && 'bg-success/10 text-success',
                  m.result === 'fail' && 'bg-destructive/10 text-destructive',
                  m.result === 'pending' && 'bg-info/10 text-info'
                )}
              >
                {formatMeasurement(m.value, m.unit)}
              </div>
            ))}
            {measurements.length > 3 && (
              <span className="flex items-center text-xs text-muted-foreground">
                +{measurements.length - 3} more
              </span>
            )}
          </div>
        )}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {formattedDate && <span>{formattedDate}</span>}
          {completedBy && <span>by {completedBy}</span>}
        </div>
      </CardContent>
    </Card>
  )
}
