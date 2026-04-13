import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SpecRangeProps {
  min?: number
  max?: number
  unit: string
  label?: string
  className?: string
}

export function SpecRange({ min, max, unit, label, className }: SpecRangeProps) {
  return (
    <div className={cn('flex flex-col gap-0.5', className)}>
      {label && <span className="text-xs text-muted-foreground">{label}</span>}
      <div className="flex items-baseline gap-1 font-mono text-sm tabular-nums">
        {min !== undefined && <span>{min}</span>}
        {min !== undefined && max !== undefined && <span className="text-muted-foreground">–</span>}
        {max !== undefined && <span>{max}</span>}
        <span className="text-xs text-muted-foreground">{unit}</span>
      </div>
    </div>
  )
}
