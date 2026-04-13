import * as React from 'react'
import { cn } from '@/lib/utils'
import { StatusIndicator } from './status-indicator'
import type { TestResultStatus } from '@/types'

export interface SampleTrackerEvent {
  status: TestResultStatus
  timestamp: Date
  user?: string
  note?: string
}

export interface SampleTrackerProps {
  events: SampleTrackerEvent[]
  className?: string
}

const statusLabels: Record<TestResultStatus, string> = {
  pending: 'Pending',
  'in-progress': 'In Progress',
  pass: 'Pass',
  fail: 'Fail',
  'not-applicable': 'N/A',
}

export function SampleTracker({ events, className }: SampleTrackerProps) {
  return (
    <div className={cn('flex flex-col gap-0', className)}>
      {events.map((event, index) => {
        const formattedTime = new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }).format(event.timestamp)

        const isLast = index === events.length - 1

        return (
          <div key={index} className="flex gap-3 pb-4 last:pb-0">
            <div className="flex flex-col items-center">
              <StatusIndicator
                status={event.status === 'pass' ? 'pass' : event.status === 'fail' ? 'fail' : 'pending'}
                size="md"
              />
              {!isLast && <div className="h-full w-px bg-border" style={{ minHeight: '24px' }} />}
            </div>
            <div className="flex flex-1 flex-col gap-0.5 pt-0.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium">{statusLabels[event.status]}</span>
                <span className="text-xs text-muted-foreground">{formattedTime}</span>
              </div>
              {event.user && (
                <span className="text-xs text-muted-foreground">by {event.user}</span>
              )}
              {event.note && (
                <p className="text-xs text-muted-foreground">{event.note}</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
