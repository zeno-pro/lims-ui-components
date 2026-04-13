# Proposal: LIMS UI Component Library for Electrical & EMC Testing

## 1. Summary

Create a comprehensive, production-ready React component library specifically designed for Laboratory Information Management Systems (LIMS) in the Electrical & EMC testing domain.

## 2. Motivation

Current UI component libraries (shadcn/ui, Material UI, etc.) are general-purpose and lack domain-specific components for laboratory testing workflows. LIMS applications require:

- **Measurement-focused inputs** with unit support (V, A, Hz, dBμV, etc.)
- **Specification compliance display** (Pass/Fail against limits)
- **Status indicators** designed for lab workflows (calibration status, test states)
- **Domain terminology** embedded in components

Building these from scratch for each LIMS project leads to inconsistency, duplicated effort, and missing accessibility considerations.

## 3. Scope

### In Scope

- Design tokens (colors, typography, spacing) using OKLCH color space
- Base UI components (Button, Card, Input, Badge, Dialog, Table, etc.)
- LIMS domain components:
  - MeasurementInput - Input with unit selector
  - SpecCompliance - Pass/Fail specification display
  - StatusIndicator - Lab status dots
  - SampleCard - Sample summary card
  - EquipmentSelector - Equipment with calibration status
  - CalibrationRecord - Calibration history display
  - ReportGenerator - Report configuration dialog
- Layout components (AppShell, Sidebar, PageHeader)
- Dark mode support
- TypeScript support
- Accessibility (WCAG 2.1 AA)

### Out of Scope

- Backend/API integration
- State management solutions
- Routing
- Data fetching (React Query, SWR, etc.)
- Backend form validation

## 4. Goals

1. Provide drop-in ready components for LIMS development
2. Ensure consistency across LIMS applications
3. Embed EMC/electrical testing domain knowledge
4. Meet accessibility standards
5. Support dark/light themes

## 5. Approach

### Technology Stack

- **React 18+** with TypeScript (strict mode)
- **Tailwind CSS 3.4+** for styling
- **Radix UI** primitives for accessibility
- **class-variance-authority (CVA)** for variant management
- **OKLCH** color space for perceptually uniform colors
- **next-themes** for dark mode

### Architecture

```
lims-ui-components/
├── src/
│   ├── components/
│   │   ├── ui/           # Base components (Button, Card, Input, etc.)
│   │   ├── lims/          # Domain components (MeasurementInput, SpecCompliance, etc.)
│   │   └── layout/        # Layout components (AppShell, Sidebar)
│   ├── lib/
│   │   └── utils.ts      # Utility functions (cn, formatMeasurement, etc.)
│   ├── types/
│   │   └── index.ts      # Shared TypeScript types
│   └── styles/
│       └── globals.css    # CSS variables and base styles
├── openspec/             # OpenSpec workflow artifacts
└── package.json
```

### File Naming

- Components: PascalCase (`MeasurementInput.tsx`)
- Utilities: camelCase (`formatMeasurement.ts`)
- Types: PascalCase (`MeasurementTypes.ts`)

### Component Pattern

Each component will follow this structure:

```tsx
// 1. Variants via CVA
// 2. Radix UI primitive if applicable
// 3. TypeScript props interface
// 4. Default export

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        success: "border-transparent bg-success text-success-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
      }
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
```

## 6. Rollback Plan

If the component library approach proves unsuitable:

1. **Extract individual components** - Each component can be extracted independently
2. **Simplify to utility functions** - Core utilities (cn, formatMeasurement) remain useful
3. **Document patterns only** - If code is too project-specific, preserve the UI/UX spec documentation

## 7. Success Metrics

- All components have TypeScript types
- All components support dark mode
- All interactive components are keyboard accessible
- Documentation includes usage examples
- Components can be tree-shaken
