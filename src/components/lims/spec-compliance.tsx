import * as React from 'react'
import { cn } from '@/lib/utils'
import { SpecRange } from './spec-range'
import { StatusIndicator } from './status-indicator'
import { formatMeasurement, isCompliant } from '@/lib/utils'

export interface SpecComplianceProps {
  parameter: string
  measuredValue: number
  unit: string
  specValue?: number
  specMin?: number
  specMax?: number
  limitType?: 'max' | 'min' | 'range'
  showLabels?: boolean
  className?: string
}

export function SpecCompliance({
  parameter,
  measuredValue,
  unit,
  specValue,
  specMin,
  specMax,
  limitType = 'max',
  showLabels = true,
  className,
}: SpecComplianceProps) {
  const isRange = limitType === 'range'
  const effectiveMax = specMax ?? (limitType === 'max' ? specValue : undefined)
  const effectiveMin = specMin ?? (limitType === 'min' ? specValue : undefined)

  const isPass = isRange
    ? measuredValue >= (effectiveMin ?? -Infinity) && measuredValue <= (effectiveMax ?? Infinity)
    : limitType === 'max'
    ? isCompliant(measuredValue, effectiveMax ?? 0, 'max')
    : isCompliant(measuredValue, effectiveMin ?? 0, 'min')

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className="text-sm font-medium text-foreground">{parameter}</span>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-lg font-semibold tabular-nums" style={{ letterSpacing: '0.02em' }}>
            {formatMeasurement(measuredValue, unit)}
          </span>
          {showLabels && <span className="text-xs text-muted-foreground">Measured</span>}
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">/</div>

        <SpecRange
          min={effectiveMin}
          max={effectiveMax}
          unit={unit}
          label={showLabels ? 'Limit' : undefined}
        />

        <div className="flex items-center gap-2">
          <StatusIndicator status={isPass ? 'pass' : 'fail'} size="lg" />
          {showLabels && (
            <span className={cn('text-sm font-semibold', isPass ? 'text-success' : 'text-destructive')}>
              {isPass ? 'PASS' : 'FAIL'}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
