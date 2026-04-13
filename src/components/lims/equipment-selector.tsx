import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { StatusIndicator } from './status-indicator'
import type { Equipment, EquipmentStatus } from '@/types'

export interface EquipmentSelectorProps {
  label?: string
  value?: string
  onChange: (equipmentId: string) => void
  equipment: Equipment[]
  disabled?: boolean
  placeholder?: string
  className?: string
}

const statusLabels: Record<EquipmentStatus, string> = {
  calibrated: 'Calibrated',
  'calibration-due': 'Cal. Due',
  maintenance: 'Maintenance',
  retired: 'Retired',
}

export function EquipmentSelector({
  label,
  value,
  onChange,
  equipment,
  disabled,
  placeholder = 'Select equipment',
  className,
}: EquipmentSelectorProps) {
  const selectedEquipment = equipment.find((e) => e.id === value)

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className={cn(!selectedEquipment && 'text-muted-foreground')}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {equipment.map((eq) => (
            <SelectItem
              key={eq.id}
              value={eq.id}
              disabled={eq.status === 'calibration-due' || eq.status === 'retired'}
              className="flex items-center gap-2"
            >
              <span className="flex items-center gap-2">
                <StatusIndicator status={eq.status} size="sm" />
                <span>{eq.name}</span>
                <span className="text-xs text-muted-foreground">({statusLabels[eq.status]})</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedEquipment?.status === 'calibration-due' && (
        <p className="text-xs text-warning">
          Equipment calibration is due. Results may not be valid for compliance.
        </p>
      )}
    </div>
  )
}
