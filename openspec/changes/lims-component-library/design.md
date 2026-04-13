# Design: LIMS UI Component Library

## 1. Architecture Overview

### Component Structure

Each component follows a consistent pattern:

```typescript
// 1. Variants via CVA
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "variant-classes",
        secondary: "variant-classes",
      },
      size: {
        sm: "size-classes",
        md: "size-classes",
        lg: "size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// 2. Props interface extending VariantProps
export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

// 3. Component implementation
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"
```

### Directory Structure

```
src/
├── components/
│   ├── ui/                    # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   ├── table.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── progress.tsx
│   │   ├── separator.tsx
│   │   ├── accordion.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── tooltip.tsx
│   │   ├── alert.tsx
│   │   ├── sonner.tsx
│   │   └── index.ts           # Barrel export
│   ├── lims/                  # Domain components
│   │   ├── measurement-input.tsx
│   │   ├── spec-compliance.tsx
│   │   ├── spec-range.tsx
│   │   ├── status-indicator.tsx
│   │   ├── status-badge.tsx
│   │   ├── sample-card.tsx
│   │   ├── equipment-selector.tsx
│   │   ├── calibration-record.tsx
│   │   ├── report-generator.tsx
│   │   ├── sample-tracker.tsx
│   │   ├── kpi-card.tsx
│   │   ├── empty-state.tsx
│   │   ├── loading-state.tsx
│   │   └── index.ts           # Barrel export
│   └── layout/                 # Layout components
│       ├── app-shell.tsx
│       ├── app-sidebar.tsx
│       ├── page-header.tsx
│       └── index.ts           # Barrel export
├── lib/
│   ├── utils.ts               # cn, format functions
│   └── constants.ts           # Domain constants
├── types/
│   ├── index.ts               # Shared types
│   ├── lims.ts                # LIMS-specific types
│   └── measurement.ts          # Measurement types
├── hooks/
│   └── use-media-query.ts
└── styles/
    └── globals.css            # CSS variables
```

---

## 2. Design Tokens Implementation

### CSS Variables (globals.css)

```css
@layer base {
  :root {
    /* Primary - Teal */
    --primary: oklch(0.52 0.12 195);
    --primary-foreground: oklch(0.98 0.01 195);
    --primary-hover: oklch(0.48 0.11 195);

    /* Status Colors */
    --success: oklch(0.65 0.15 145);
    --success-foreground: oklch(0.98 0.01 145);
    --warning: oklch(0.75 0.15 85);
    --warning-foreground: oklch(0.20 0.02 85);
    --destructive: oklch(0.55 0.22 25);
    --destructive-foreground: oklch(0.98 0.01 25);
    --info: oklch(0.65 0.12 240);
    --info-foreground: oklch(0.98 0.01 240);

    /* Neutrals */
    --muted: oklch(0.94 0.01 240);
    --muted-foreground: oklch(0.50 0.02 240);
    --background: oklch(0.99 0 0);
    --foreground: oklch(0.15 0.01 240);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0.15 0.01 240);
    --border: oklch(0.90 0.01 240);
    --input: oklch(0.90 0.01 240);
    --ring: oklch(0.52 0.12 195);

    /* Radius */
    --radius: 0.5rem;
  }

  .dark {
    --primary: oklch(0.48 0.10 195);
    --primary-foreground: oklch(0.98 0.01 195);
    --background: oklch(0.14 0.01 240);
    --foreground: oklch(0.98 0 0);
    --card: oklch(0.18 0.01 240);
    --card-foreground: oklch(0.98 0 0);
    --border: oklch(1 0 0 / 12%);
    --muted: oklch(0.22 0.02 240);
    --muted-foreground: oklch(0.65 0.02 240);
  }
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        info: {
          DEFAULT: 'var(--info)',
          foreground: 'var(--info-foreground)',
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
    },
  },
}
```

---

## 3. Component Variants

### Button Variants

| Variant | Purpose | Classes |
|---------|---------|---------|
| `default` | Primary CTA | `bg-primary text-primary-foreground hover:bg-primary-hover` |
| `success` | Approve/Pass | `bg-success text-success-foreground hover:bg-success/90` |
| `destructive` | Delete/Reject | `bg-destructive text-destructive-foreground hover:bg-destructive/90` |
| `outline` | Secondary | `border bg-background hover:bg-accent` |
| `secondary` | Less prominent | `bg-secondary text-secondary-foreground` |
| `ghost` | Subtle | `hover:bg-accent` |
| `link` | Text link | `text-primary underline-offset-4 hover:underline` |

### Badge Variants

| Variant | Purpose | Classes |
|---------|---------|---------|
| `default` | Primary | `bg-primary text-primary-foreground` |
| `success` | Pass | `bg-success text-success-foreground` |
| `destructive` | Fail | `bg-destructive text-destructive-foreground` |
| `warning` | Warning | `bg-warning text-warning-foreground` |
| `info` | Pending | `bg-info text-info-foreground` |
| `outline` | Neutral | `border text-foreground` |
| `secondary` | Subtle | `bg-secondary text-secondary-foreground` |

---

## 4. LIMS Component Designs

### MeasurementInput

```
┌─────────────────────────────────────┐
│ Label                               │
│ ┌─────────────────────┬──────────┐ │
│ │ 23.50                │ dBμV  ▼ │ │
│ └─────────────────────┴──────────┘ │
│ Helper text                          │
└─────────────────────────────────────┘
```

**Props:**
```typescript
interface MeasurementInputProps {
  label: string
  value: number | null
  onChange: (value: number) => void
  unit: MeasurementUnit
  units?: MeasurementUnit[]
  min?: number
  max?: number
  step?: number
  precision?: number
  error?: string
  helperText?: string
  disabled?: boolean
  required?: boolean
}

type MeasurementUnit =
  | 'V' | 'mV' | 'kV'
  | 'A' | 'mA' | 'μA'
  | 'Hz' | 'kHz' | 'MHz' | 'GHz'
  | 'dB' | 'dBμV' | 'dBm' | 'dBμV/m'
  | 'W' | 'mW' | 'kW'
  | 'Ω' | 'kΩ' | 'MΩ'
  | 'μs' | 'ms' | 'ns'
```

### SpecCompliance

```
┌─────────────────────────────────────┐
│ Parameter: Conducted Emission       │
│                                     │
│ ┌─────────┐  ┌─────────┐  ┌──────┐ │
│ │ 23.50   │  │ ≤ 30    │  │ ✓    │ │
│ │ dBμV    │  │ dBμV    │  │ PASS │ │
│ └─────────┘  └─────────┘  └──────┘ │
│   Measured   Limit      Result     │
└─────────────────────────────────────┘
```

**Props:**
```typescript
interface SpecComplianceProps {
  parameter: string
  measuredValue: number
  unit: string
  specValue?: number
  specMin?: number
  specMax?: number
  limitType?: 'max' | 'min' | 'range'
  showLabels?: boolean
}
```

### StatusIndicator

```
┌──────────┐
│ ● Pass   │  (green dot, solid)
├──────────┤
│ ● Fail   │  (red dot, solid)
├──────────┤
│ ● Pending│  (blue dot, pulsing)
├──────────┤
│ ● Cal.Due│  (amber dot, pulsing)
└──────────┘
```

**Props:**
```typescript
interface StatusIndicatorProps {
  status: Status
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  pulse?: boolean
}

type Status =
  | 'pass' | 'fail' | 'pending'
  | 'warning' | 'calibrated' | 'calibration-due'
  | 'maintenance' | 'retired'
```

---

## 5. Animation Specifications

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `duration-100` | 100ms | Micro-interactions |
| `duration-150` | 150ms | Hover states |
| `duration-200` | 200ms | State changes |
| `duration-300` | 300ms | Page transitions |

### Status Animations

**Pulse Animation (Pending/Warning):**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

**Success Check Animation:**
```css
@keyframes check {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
```

---

## 6. Accessibility Implementation

### Focus Rings

```css
.focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-ring
```

### ARIA Attributes

| Component | ARIA Pattern |
|-----------|--------------|
| StatusBadge | `role="status"` + `aria-label` |
| Dialog | `aria-modal="true"`, `aria-labelledby` |
| Form errors | `aria-invalid="true"`, `aria-describedby` |
| Loading | `aria-busy="true"` |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Component | PascalCase | `MeasurementInput.tsx` |
| Props Interface | ComponentName + Props | `MeasurementInputProps` |
| Variant Function | componentName + Variants | `measurementInputVariants` |
| Types | PascalCase | `MeasurementTypes.ts` |
| Hooks | camelCase, use prefix | `useMediaQuery.ts` |
| Utils | camelCase | `formatMeasurement.ts` |

---

## 8. Export Strategy

### Barrel Exports (index.ts)

```typescript
// src/components/ui/index.ts
export { Button, type ButtonProps } from './button'
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction, type CardProps } from './card'
export { Input, type InputProps } from './input'
// ... etc
```

### Usage

```typescript
// Clean imports
import { Button, Card, MeasurementInput } from '@/components/ui'
import { SpecCompliance, StatusIndicator } from '@/components/lims'
```
