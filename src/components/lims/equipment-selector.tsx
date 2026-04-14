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
import { StatusIndicator } from './status-indicator'
import { useI18n } from '@/i18n'
import type { Equipment } from '@/types'

export interface EquipmentSelectorProps {
  label?: string
  value?: string
  onChange: (equipmentId: string) => void
  equipment: Equipment[]
  disabled?: boolean
  placeholder?: string
  className?: string
}

export function EquipmentSelector({
  label,
  value,
  onChange,
  equipment,
  disabled,
  placeholder,
  className,
}: EquipmentSelectorProps) {
  const { t } = useI18n()
  const selectedEquipment = equipment.find((e) => e.id === value)

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && <Label>{label}</Label>}
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className={cn(!selectedEquipment && 'text-muted-foreground')}>
          <SelectValue placeholder={placeholder ?? t.lims.selectEquipment} />
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
                <span className="text-xs text-muted-foreground">({t.status[eq.status]})</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedEquipment?.status === 'calibration-due' && (
        <p className="text-xs text-warning">
          {t.lims.equipmentCalibrationDue}
        </p>
      )}
    </div>
  )
}
