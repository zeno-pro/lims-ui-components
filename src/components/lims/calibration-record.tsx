import * as React from 'react'
import { cn } from '@/lib/utils'
import { StatusBadge } from './status-badge'
import type { CalibrationRecordData, CalibrationResult } from '@/types'

export interface CalibrationRecordProps {
  record: CalibrationRecordData
  className?: string
}

const resultLabels: Record<CalibrationResult, string> = {
  satisfactory: 'Satisfactory',
  adjusted: 'Adjusted',
  failed: 'Failed',
}

const resultVariants: Record<CalibrationResult, 'pass' | 'warning' | 'fail'> = {
  satisfactory: 'pass',
  adjusted: 'warning',
  failed: 'fail',
}

export function CalibrationRecord({ record, className }: CalibrationRecordProps) {
  const formattedCalDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(record.calibrationDate)

  const formattedDueDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(record.nextDueDate)

  const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000
  const now = new Date()
  const thirtyDaysFromNow = new Date(now.getTime() + THIRTY_DAYS_MS)

  const isDueSoon =
    record.nextDueDate <= thirtyDaysFromNow &&
    record.nextDueDate > now

  const isOverdue = record.nextDueDate < now

  return (
    <div className={cn('flex flex-col gap-2 rounded-lg border p-3', className)}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">Calibration Record</span>
          <span className="text-xs text-muted-foreground">Certificate: {record.certificateNumber}</span>
        </div>
        <StatusBadge status={resultVariants[record.result]} size="sm" showIcon={false}>
          {resultLabels[record.result]}
        </StatusBadge>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground">Calibrated</span>
          <span className="font-mono tabular-nums">{formattedCalDate}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground">Next Due</span>
          <span
            className={cn(
              'font-mono tabular-nums',
              isOverdue && 'text-destructive',
              isDueSoon && !isOverdue && 'text-warning'
            )}
          >
            {formattedDueDate}
            {isOverdue && ' (Overdue)'}
            {isDueSoon && !isOverdue && ' (Due Soon)'}
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground">Lab</span>
          <span>{record.calibratingLab}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground">Technician</span>
          <span>{record.technician}</span>
        </div>
      </div>
    </div>
  )
}
