import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export interface KPICardProps {
  title: string
  value: string | number
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  status?: 'default' | 'success' | 'warning' | 'destructive'
  className?: string
}

export function KPICard({
  title,
  value,
  change,
  changeLabel,
  icon,
  status = 'default',
  className,
}: KPICardProps) {
  const statusColors = {
    default: 'text-foreground',
    success: 'text-success',
    warning: 'text-warning',
    destructive: 'text-destructive',
  }

  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">{title}</span>
            <span className={cn('text-3xl font-bold tabular-nums', statusColors[status])}>
              {value}
            </span>
            {change !== undefined && (
              <div className="flex items-center gap-1 text-xs">
                {change > 0 ? (
                  <TrendingUp className="size-3 text-success" />
                ) : change < 0 ? (
                  <TrendingDown className="size-3 text-destructive" />
                ) : (
                  <Minus className="size-3 text-muted-foreground" />
                )}
                <span
                  className={cn(
                    change > 0 && 'text-success',
                    change < 0 && 'text-destructive',
                    change === 0 && 'text-muted-foreground'
                  )}
                >
                  {change > 0 ? '+' : ''}
                  {change}%
                </span>
                {changeLabel && <span className="text-muted-foreground">{changeLabel}</span>}
              </div>
            )}
          </div>
          {icon && (
            <div className="rounded-lg bg-muted p-2 text-muted-foreground">{icon}</div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
