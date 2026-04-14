import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

type Status$1 = 'pass' | 'fail' | 'pending' | 'warning' | 'calibrated' | 'calibration-due' | 'maintenance' | 'retired';
declare const statusVariants: (props?: ({
    status?: "warning" | "pass" | "fail" | "pending" | "calibrated" | "calibration-due" | "maintenance" | "retired" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
    pulse?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof statusVariants> {
    status: Status$1;
    showLabel?: boolean;
}
declare function StatusIndicator({ className, status, size, pulse, showLabel, ...props }: StatusIndicatorProps): react_jsx_runtime.JSX.Element;

type Status = 'pass' | 'fail' | 'pending' | 'warning' | 'calibrated' | 'calibration-due' | 'maintenance' | 'retired';

declare const statusBadgeVariants: (props?: ({
    variant?: "secondary" | "warning" | "pass" | "fail" | "pending" | "calibrated" | "calibration-due" | "maintenance" | "retired" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof statusBadgeVariants> {
    status: Status;
    showIcon?: boolean;
}
declare function StatusBadge({ className, status, variant, size, showIcon, ...props }: StatusBadgeProps): react_jsx_runtime.JSX.Element;

type SampleStatus = 'received' | 'in-progress' | 'completed' | 'reported' | 'on-hold' | 'cancelled';
type TestResultStatus = 'pending' | 'in-progress' | 'pass' | 'fail' | 'not-applicable';
type EquipmentStatus = 'calibrated' | 'calibration-due' | 'maintenance' | 'retired';
type CalibrationResult = 'satisfactory' | 'adjusted' | 'failed';
interface Sample {
    id: string;
    productName: string;
    customerName: string;
    receivedAt: Date;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: SampleStatus;
    testProgress?: {
        completed: number;
        total: number;
    };
}
interface TestResult {
    id: string;
    testName: string;
    testMethod: string;
    status: TestResultStatus;
    completedAt?: Date;
    completedBy?: string;
    measurements?: MeasurementSummary[];
}
interface Equipment {
    id: string;
    name: string;
    model: string;
    serialNumber: string;
    calibrationDate: Date;
    nextCalibrationDate: Date;
    calibrationInterval: number;
    status: EquipmentStatus;
}
interface CalibrationRecordData {
    calibrationDate: Date;
    nextDueDate: Date;
    certificateNumber: string;
    calibratingLab: string;
    result: CalibrationResult;
    technician: string;
}
interface MeasurementSummary {
    label: string;
    value: string;
    unit: string;
    result: 'pass' | 'fail' | 'pending';
}
interface SpecLimit {
    type: 'max' | 'min' | 'range';
    value?: number;
    min?: number;
    max?: number;
}

type MeasurementUnit = 'V' | 'mV' | 'kV' | 'A' | 'mA' | 'μA' | 'Hz' | 'kHz' | 'MHz' | 'GHz' | 'dB' | 'dBμV' | 'dBm' | 'dBμV/m' | 'W' | 'mW' | 'kW' | 'Ω' | 'kΩ' | 'MΩ' | 'μs' | 'ms' | 'ns';
interface MeasurementValue {
    value: number;
    unit: MeasurementUnit;
    timestamp?: Date;
}
interface Specification {
    parameter: string;
    unit: MeasurementUnit;
    limit?: {
        type: 'max' | 'min' | 'range';
        value?: number;
        min?: number;
        max?: number;
    };
    testMethod?: string;
}
declare const MEASUREMENT_UNITS: MeasurementUnit[];
declare const VOLTAGE_UNITS: MeasurementUnit[];
declare const CURRENT_UNITS: MeasurementUnit[];
declare const FREQUENCY_UNITS: MeasurementUnit[];
declare const POWER_UNITS: MeasurementUnit[];
declare const RESISTANCE_UNITS: MeasurementUnit[];
declare const EMC_UNITS: MeasurementUnit[];
declare const TIME_UNITS: MeasurementUnit[];

interface MeasurementInputProps {
    label?: string;
    value: number | null;
    onChange: (value: number | null) => void;
    unit: MeasurementUnit;
    units?: MeasurementUnit[];
    onUnitChange?: (unit: MeasurementUnit) => void;
    min?: number;
    max?: number;
    step?: number;
    precision?: number;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    id?: string;
}
declare function MeasurementInput({ label, value, onChange, unit, units, onUnitChange, min, max, step, precision: _precision, // TODO: Implement precision formatting for display
error, helperText, disabled, required, className, id, }: MeasurementInputProps): react_jsx_runtime.JSX.Element;

interface SpecRangeProps {
    min?: number;
    max?: number;
    unit: string;
    label?: string;
    className?: string;
}
declare function SpecRange({ min, max, unit, label, className }: SpecRangeProps): react_jsx_runtime.JSX.Element;

interface SpecComplianceProps {
    parameter: string;
    measuredValue: number;
    unit: string;
    specValue?: number;
    specMin?: number;
    specMax?: number;
    limitType?: 'max' | 'min' | 'range';
    showLabels?: boolean;
    className?: string;
}
declare function SpecCompliance({ parameter, measuredValue, unit, specValue, specMin, specMax, limitType, showLabels, className, }: SpecComplianceProps): react_jsx_runtime.JSX.Element;

interface SampleCardProps {
    sampleId: string;
    productName: string;
    customerName: string;
    status: SampleStatus;
    testProgress?: {
        completed: number;
        total: number;
    };
    receivedAt: Date;
    onClick?: () => void;
    className?: string;
}
declare function SampleCard({ sampleId, productName, customerName, status, testProgress, receivedAt, onClick, className, }: SampleCardProps): react_jsx_runtime.JSX.Element;

interface TestResultCardProps {
    testName: string;
    testMethod: string;
    status: TestResultStatus;
    completedAt?: Date;
    completedBy?: string;
    measurements?: Array<{
        label: string;
        value: number;
        unit: string;
        result: 'pass' | 'fail' | 'pending';
    }>;
    onClick?: () => void;
    className?: string;
}
declare function TestResultCard({ testName, testMethod, status, completedAt, completedBy, measurements, onClick, className, }: TestResultCardProps): react_jsx_runtime.JSX.Element;

interface EquipmentSelectorProps {
    label?: string;
    value?: string;
    onChange: (equipmentId: string) => void;
    equipment: Equipment[];
    disabled?: boolean;
    placeholder?: string;
    className?: string;
}
declare function EquipmentSelector({ label, value, onChange, equipment, disabled, placeholder, className, }: EquipmentSelectorProps): react_jsx_runtime.JSX.Element;

interface CalibrationRecordProps {
    record: CalibrationRecordData;
    className?: string;
}
declare function CalibrationRecord({ record, className }: CalibrationRecordProps): react_jsx_runtime.JSX.Element;

interface SampleTrackerEvent {
    status: TestResultStatus;
    timestamp: Date;
    user?: string;
    note?: string;
}
interface SampleTrackerProps {
    events: SampleTrackerEvent[];
    className?: string;
}
declare function SampleTracker({ events, className }: SampleTrackerProps): react_jsx_runtime.JSX.Element;

interface KPICardProps {
    title: string;
    value: string | number;
    change?: number;
    changeLabel?: string;
    icon?: React.ReactNode;
    status?: 'default' | 'success' | 'warning' | 'destructive';
    className?: string;
}
declare function KPICard({ title, value, change, changeLabel, icon, status, className, }: KPICardProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
}
declare function EmptyState({ icon, title, description, action, className }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface LoadingStateProps {
    variant?: 'full' | 'inline' | 'skeleton';
    text?: string;
    className?: string;
}
declare function LoadingState({ variant, text, className }: LoadingStateProps): react_jsx_runtime.JSX.Element;

interface ReportGeneratorProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    samples: Array<{
        id: string;
        name: string;
    }>;
    onGenerate: (config: ReportConfig) => void;
    className?: string;
}
interface ReportConfig {
    reportType: 'test-report' | 'certificate' | 'summary';
    format: 'pdf' | 'excel' | 'word';
    sampleIds: string[];
    includePhotos: boolean;
    includeRawData: boolean;
}
declare function ReportGenerator({ open, onOpenChange, samples, onGenerate, className }: ReportGeneratorProps): react_jsx_runtime.JSX.Element;

export { SpecCompliance as A, type SpecComplianceProps as B, CURRENT_UNITS as C, type SpecLimit as D, EMC_UNITS as E, FREQUENCY_UNITS as F, SpecRange as G, type SpecRangeProps as H, type Specification as I, StatusBadge as J, KPICard as K, LoadingState as L, MEASUREMENT_UNITS as M, type StatusBadgeProps as N, StatusIndicator as O, POWER_UNITS as P, type StatusIndicatorProps as Q, RESISTANCE_UNITS as R, type Sample as S, TIME_UNITS as T, type TestResult as U, TestResultCard as V, type TestResultCardProps as W, type TestResultStatus as X, VOLTAGE_UNITS as Y, CalibrationRecord as a, type CalibrationRecordData as b, type CalibrationRecordProps as c, type CalibrationResult as d, EmptyState as e, type EmptyStateProps as f, type Equipment as g, EquipmentSelector as h, type EquipmentSelectorProps as i, type EquipmentStatus as j, type KPICardProps as k, type LoadingStateProps as l, MeasurementInput as m, type MeasurementInputProps as n, type MeasurementSummary as o, type MeasurementUnit as p, type MeasurementValue as q, type ReportConfig as r, ReportGenerator as s, type ReportGeneratorProps as t, SampleCard as u, type SampleCardProps as v, type SampleStatus as w, SampleTracker as x, type SampleTrackerEvent as y, type SampleTrackerProps as z };
