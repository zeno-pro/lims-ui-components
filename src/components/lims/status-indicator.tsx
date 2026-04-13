import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type Status = 'pass' | 'fail' | 'pending' | 'warning' | 'calibrated' | 'calibration-due' | 'maintenance' | 'retired'

const statusVariants = cva('inline-flex shrink-0', {
  variants: {
    status: {
      pass: 'text-success',
      fail: 'text-destructive',
      pending: 'text-info',
      warning: 'text-warning',
      calibrated: 'text-success',
      'calibration-due': 'text-warning',
      maintenance: 'text-warning',
      retired: 'text-muted-foreground',
    },
    size: {
      sm: 'size-2',
      md: 'size-3',
      lg: 'size-4',
    },
    pulse: {
      true: 'animate-pulse',
    },
  },
  defaultVariants: {
    size: 'md',
    pulse: false,
  },
})

const statusLabels: Record<Status, string> = {
  pass: 'Pass',
  fail: 'Fail',
  pending: 'Pending',
  warning: 'Warning',
  calibrated: 'Calibrated',
  'calibration-due': 'Cal. Due',
  maintenance: 'Maintenance',
  retired: 'Retired',
}

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusVariants> {
  status: Status
  showLabel?: boolean
}

export function StatusIndicator({
  className,
  status,
  size,
  pulse,
  showLabel,
  ...props
}: StatusIndicatorProps) {
  const shouldPulse = pulse ?? (status === 'pending' || status === 'calibration-due')

  return (
    <span className={cn('inline-flex items-center gap-1.5', className)} {...props}>
      <span className={cn(statusVariants({ status, size, pulse: shouldPulse }))}>
        <svg viewBox="0 0 4 4" fill="currentColor" aria-hidden="true">
          <circle cx="2" cy="2" r="2" />
        </svg>
      </span>
      {showLabel && (
        <span className="text-sm font-medium text-foreground">{statusLabels[status]}</span>
      )}
    </span>
  )
}
