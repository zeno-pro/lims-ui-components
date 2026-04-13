export type MeasurementUnit =
  | 'V'
  | 'mV'
  | 'kV'
  | 'A'
  | 'mA'
  | 'μA'
  | 'Hz'
  | 'kHz'
  | 'MHz'
  | 'GHz'
  | 'dB'
  | 'dBμV'
  | 'dBm'
  | 'dBμV/m'
  | 'W'
  | 'mW'
  | 'kW'
  | 'Ω'
  | 'kΩ'
  | 'MΩ'
  | 'μs'
  | 'ms'
  | 'ns'

export interface MeasurementValue {
  value: number
  unit: MeasurementUnit
  timestamp?: Date
}

export interface Specification {
  parameter: string
  unit: MeasurementUnit
  limit?: {
    type: 'max' | 'min' | 'range'
    value?: number
    min?: number
    max?: number
  }
  testMethod?: string
}

export const MEASUREMENT_UNITS: MeasurementUnit[] = [
  'V', 'mV', 'kV',
  'A', 'mA', 'μA',
  'Hz', 'kHz', 'MHz', 'GHz',
  'dB', 'dBμV', 'dBm', 'dBμV/m',
  'W', 'mW', 'kW',
  'Ω', 'kΩ', 'MΩ',
  'μs', 'ms', 'ns'
]

export const VOLTAGE_UNITS: MeasurementUnit[] = ['V', 'mV', 'kV']
export const CURRENT_UNITS: MeasurementUnit[] = ['A', 'mA', 'μA']
export const FREQUENCY_UNITS: MeasurementUnit[] = ['Hz', 'kHz', 'MHz', 'GHz']
export const POWER_UNITS: MeasurementUnit[] = ['W', 'mW', 'kW']
export const RESISTANCE_UNITS: MeasurementUnit[] = ['Ω', 'kΩ', 'MΩ']
export const EMC_UNITS: MeasurementUnit[] = ['dB', 'dBμV', 'dBm', 'dBμV/m']
export const TIME_UNITS: MeasurementUnit[] = ['μs', 'ms', 'ns']
