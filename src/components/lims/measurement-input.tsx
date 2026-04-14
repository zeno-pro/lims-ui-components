import * as React from 'react'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useI18n } from '@/i18n'
import { MEASUREMENT_UNITS, type MeasurementUnit } from '@/types'

export interface MeasurementInputProps {
  label?: string
  value: number | null
  onChange: (value: number | null) => void
  unit: MeasurementUnit
  units?: MeasurementUnit[]
  onUnitChange?: (unit: MeasurementUnit) => void
  min?: number
  max?: number
  step?: number
  precision?: number
  error?: string
  helperText?: string
  disabled?: boolean
  required?: boolean
  className?: string
  id?: string
}

export function MeasurementInput({
  label,
  value,
  onChange,
  unit,
  units = MEASUREMENT_UNITS,
  onUnitChange,
  min,
  max,
  step = 0.01,
  precision: _precision = 2, // TODO: Implement precision formatting for display
  error,
  helperText,
  disabled,
  required,
  className,
  id,
}: MeasurementInputProps) {
  const { t } = useI18n()
  const uniqueId = React.useId()
  const resolvedId = id || `measurement-${uniqueId}`

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (val === '' || val === '-') {
      onChange(null)
      return
    }
    const num = parseFloat(val)
    if (!isNaN(num)) {
      onChange(num)
    }
  }

  const handleUnitChange = (newUnit: string) => {
    if (onUnitChange) {
      onUnitChange(newUnit as MeasurementUnit)
    }
  }

  const isOutOfRange = value !== null && ((min !== undefined && value < min) || (max !== undefined && value > max))

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <Label htmlFor={resolvedId} className={cn(required && "after:content-['*'] after:text-destructive after:ml-0.5")}>
          {label}
        </Label>
      )}
      <div className="flex rounded-md">
        <input
          id={resolvedId}
          type="number"
          step={step}
          min={min}
          max={max}
          value={value ?? ''}
          onChange={handleValueChange}
          disabled={disabled}
          required={required}
          placeholder="0.00"
          className={cn(
            'flex-1 rounded-l-md border bg-background px-3 py-2 font-mono text-sm tabular-nums',
            'ring-offset-background transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'placeholder:text-muted-foreground',
            error || isOutOfRange ? 'border-destructive focus-visible:ring-destructive' : 'border-input'
          )}
          style={{ letterSpacing: '0.02em' }}
        />
        <Select value={unit} onValueChange={handleUnitChange} disabled={disabled}>
          <SelectTrigger
            className={cn(
              'w-24 rounded-l-none border-l-0',
              error || isOutOfRange ? 'border-destructive' : 'border-input'
            )}
            aria-label="Select unit"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {units.map((u) => (
              <SelectItem key={u} value={u}>
                {u}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {(error || helperText) && (
        <p className={cn('text-xs', error ? 'text-destructive' : 'text-muted-foreground')}>
          {error || helperText}
        </p>
      )}
      {isOutOfRange && !error && (
        <p className="text-xs text-destructive">
          {t.lims.valueMustBeBetween.replace('{min}', String(min)).replace('{max}', String(max))}
        </p>
      )}
    </div>
  )
}
