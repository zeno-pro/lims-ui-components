import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { StatusIndicator } from './status-indicator'
import { useI18n } from '@/i18n'

type Status = 'pass' | 'fail' | 'pending' | 'warning' | 'calibrated' | 'calibration-due' | 'maintenance' | 'retired'

export type { Status }

const statusBadgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        pass: 'border-success/30 bg-success/10 text-success',
        fail: 'border-destructive/30 bg-destructive/10 text-destructive',
        pending: 'border-info/30 bg-info/10 text-info',
        warning: 'border-warning/30 bg-warning/10 text-warning',
        calibrated: 'border-success/30 bg-success/10 text-success',
        'calibration-due': 'border-warning/30 bg-warning/10 text-warning',
        maintenance: 'border-warning/30 bg-warning/10 text-warning',
        retired: 'border-muted/30 bg-muted/10 text-muted-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
      },
      size: {
        default: 'px-2 py-1 text-xs',
        sm: 'px-1.5 py-0.5 text-[10px]',
        lg: 'px-3 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  status: Status
  showIcon?: boolean
}

export function StatusBadge({
  className,
  status,
  variant,
  size,
  showIcon = true,
  ...props
}: StatusBadgeProps) {
  const { t } = useI18n()
  const resolvedVariant = variant ?? status

  return (
    <div className={cn(statusBadgeVariants({ variant: resolvedVariant, size }), className)} {...props}>
      {showIcon && (
        <StatusIndicator status={status} size="sm" />
      )}
      <span>{t.status[status]}</span>
    </div>
  )
}
