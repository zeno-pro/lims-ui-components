export type SampleStatus =
  | 'received'
  | 'in-progress'
  | 'completed'
  | 'reported'
  | 'on-hold'
  | 'cancelled'

export type TestResultStatus =
  | 'pending'
  | 'in-progress'
  | 'pass'
  | 'fail'
  | 'not-applicable'

export type EquipmentStatus =
  | 'calibrated'
  | 'calibration-due'
  | 'maintenance'
  | 'retired'

export type CalibrationResult =
  | 'satisfactory'
  | 'adjusted'
  | 'failed'

export interface Sample {
  id: string
  productName: string
  customerName: string
  receivedAt: Date
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: SampleStatus
  testProgress?: {
    completed: number
    total: number
  }
}

export interface TestResult {
  id: string
  testName: string
  testMethod: string
  status: TestResultStatus
  completedAt?: Date
  completedBy?: string
  measurements?: MeasurementSummary[]
}

export interface Equipment {
  id: string
  name: string
  model: string
  serialNumber: string
  calibrationDate: Date
  nextCalibrationDate: Date
  calibrationInterval: number
  status: EquipmentStatus
}

export interface CalibrationRecordData {
  calibrationDate: Date
  nextDueDate: Date
  certificateNumber: string
  calibratingLab: string
  result: CalibrationResult
  technician: string
}

export interface MeasurementSummary {
  label: string
  value: string
  unit: string
  result: 'pass' | 'fail' | 'pending'
}

export interface SpecLimit {
  type: 'max' | 'min' | 'range'
  value?: number
  min?: number
  max?: number
}
