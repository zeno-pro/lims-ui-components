# Tasks: LIMS UI Component Library

## Implementation Checklist

Mark each task with `[x]` when completed.

---

## Phase 1: Project Foundation

### 1.1 Package Configuration

- [ ] Create `package.json` with dependencies
  - React 18+
  - TypeScript
  - Tailwind CSS
  - Radix UI primitives
  - class-variance-authority
  - clsx + tailwind-merge
  - next-themes (for dark mode)
  - Lucide React (icons)

- [ ] Create `tsconfig.json` with strict mode

- [ ] Create `tailwind.config.js` with custom colors and fonts

- [ ] Create `postcss.config.js` for Tailwind

### 1.2 CSS & Design Tokens

- [ ] Create `src/styles/globals.css`
  - CSS reset
  - CSS variables for light/dark themes
  - Base typography styles
  - Focus ring styles
  - Animation utilities

### 1.3 Utility Functions

- [ ] Create `src/lib/utils.ts`
  - `cn()` - className merger
  - `formatMeasurement()` - format value + unit
  - `formatDate()` - date formatting
  - `formatRelativeTime()` - relative time
  - `isWithinRange()` - range check
  - `isCompliant()` - spec compliance check

### 1.4 Type Definitions

- [ ] Create `src/types/index.ts` - shared types

- [ ] Create `src/types/lims.ts` - LIMS domain types
  - SampleStatus
  - TestResultStatus
  - EquipmentStatus
  - CalibrationResult

- [ ] Create `src/types/measurement.ts` - measurement types
  - MeasurementUnit
  - MeasurementValue
  - Specification

---

## Phase 2: Base UI Components

### 2.1 Button

- [ ] Create `src/components/ui/button.tsx`
- [ ] Variants: default, success, destructive, outline, secondary, ghost, link
- [ ] Sizes: sm, default, lg, icon
- [ ] Loading state with spinner
- [ ] `asChild` support via Slot
- [ ] Export from `src/components/ui/index.ts`

### 2.2 Card

- [ ] Create `src/components/ui/card.tsx`
- [ ] Slots: Header, Title, Description, Action, Content, Footer
- [ ] Hover effect classes for interactive cards
- [ ] Export from `src/components/ui/index.ts`

### 2.3 Input

- [ ] Create `src/components/ui/input.tsx`
- [ ] Types: text, email, password, number, file
- [ ] Focus ring styling
- [ ] Error state styling
- [ ] Disabled state styling
- [ ] Export from `src/components/ui/index.ts`

### 2.4 Badge

- [ ] Create `src/components/ui/badge.tsx`
- [ ] Variants: default, success, destructive, warning, info, outline, secondary
- [ ] Size: default, sm
- [ ] Export from `src/components/ui/index.ts`

### 2.5 Label

- [ ] Create `src/components/ui/label.tsx`
- [ ] Export from `src/components/ui/index.ts`

### 2.6 Textarea

- [ ] Create `src/components/ui/textarea.tsx`
- [ ] Export from `src/components/ui/index.ts`

### 2.7 Dialog

- [ ] Create `src/components/ui/dialog.tsx`
- [ ] Using Radix Dialog primitive
- [ ] Overlay with animation
- [ ] Content with animation
- [ ] Header, Title, Description, Footer slots
- [ ] Close button
- [ ] Export from `src/components/ui/index.ts`

### 2.8 Select

- [ ] Create `src/components/ui/select.tsx`
- [ ] Using Radix Select primitive
- [ ] Trigger, Content, Item, Separator, Group, Value
- [ ] Export from `src/components/ui/index.ts`

### 2.9 Tabs

- [ ] Create `src/components/ui/tabs.tsx`
- [ ] Using Radix Tabs primitive
- [ ] List, Trigger, Content
- [ ] Export from `src/components/ui/index.ts`

### 2.10 Table

- [ ] Create `src/components/ui/table.tsx`
- [ ] Table, Header, Body, Row, Cell, Head
- [ ] Export from `src/components/ui/index.ts`

### 2.11 Progress

- [ ] Create `src/components/ui/progress.tsx`
- [ ] Using Radix Progress primitive
- [ ] Value display
- [ ] Export from `src/components/ui/index.ts`

### 2.12 Separator

- [ ] Create `src/components/ui/separator.tsx`
- [ ] Using Radix Separator primitive
- [ ] Export from `src/components/ui/index.ts`

### 2.13 Accordion

- [ ] Create `src/components/ui/accordion.tsx`
- [ ] Using Radix Accordion primitive
- [ ] Item, Trigger, Content
- [ ] Export from `src/components/ui/index.ts`

### 2.14 Dropdown Menu

- [ ] Create `src/components/ui/dropdown-menu.tsx`
- [ ] Using Radix DropdownMenu primitive
- [ ] Trigger, Content, Item, Separator, Group
- [ ] Export from `src/components/ui/index.ts`

### 2.15 Tooltip

- [ ] Create `src/components/ui/tooltip.tsx`
- [ ] Using Radix Tooltip primitive
- [ ] Provider, Trigger, Content, Side, Align
- [ ] Export from `src/components/ui/index.ts`

### 2.16 Alert

- [ ] Create `src/components/ui/alert.tsx`
- [ ] Variants: default, success, destructive, warning
- [ ] Title, Description
- [ ] Export from `src/components/ui/index.ts`

### 2.17 Toast (Sonner)

- [ ] Create `src/components/ui/sonner.tsx`
- [ ] Toaster component
- [ ] Export from `src/components/ui/index.ts`

### 2.18 ScrollArea

- [ ] Create `src/components/ui/scroll-area.tsx`
- [ ] Using Radix ScrollArea primitive
- [ ] Export from `src/components/ui/index.ts`

### 2.19 Switch

- [ ] Create `src/components/ui/switch.tsx`
- [ ] Using Radix Switch primitive
- [ ] Export from `src/components/ui/index.ts`

### 2.20 Barrel Export

- [ ] Create `src/components/ui/index.ts`
- [ ] Export all base components

---

## Phase 3: LIMS Domain Components

### 3.1 StatusIndicator

- [ ] Create `src/components/lims/status-indicator.tsx`
- [ ] Statuses: pass, fail, pending, warning, calibrated, calibration-due, maintenance
- [ ] Sizes: sm (8px), md (12px), lg (16px)
- [ ] Pulse animation for pending/warning
- [ ] `showLabel` prop
- [ ] Export from `src/components/lims/index.ts`

### 3.2 StatusBadge

- [ ] Create `src/components/lims/status-badge.tsx`
- [ ] Sample/Test/Equipment status badges
- [ ] Icon + text
- [ ] Export from `src/components/lims/index.ts`

### 3.3 MeasurementInput

- [ ] Create `src/components/lims/measurement-input.tsx`
- [ ] Value input with number type
- [ ] Unit selector dropdown
- [ ] Min/max validation
- [ ] Error display
- [ ] Monospace font for value
- [ ] Precision support
- [ ] Export from `src/components/lims/index.ts`

### 3.4 SpecRange

- [ ] Create `src/components/lims/spec-range.tsx`
- [ ] Display min/max specification
- [ ] Monospace font
- [ ] Unit display
- [ ] Export from `src/components/lims/index.ts`

### 3.5 SpecCompliance

- [ ] Create `src/components/lims/spec-compliance.tsx`
- [ ] Measured value vs specification
- [ ] Pass/Fail indicator
- [ ] Color-coded result
- [ ] Show/hide labels
- [ ] Export from `src/components/lims/index.ts`

### 3.6 SampleCard

- [ ] Create `src/components/lims/sample-card.tsx`
- [ ] Sample ID (monospace)
- [ ] Product name, customer
- [ ] Status badge
- [ ] Test progress (optional)
- [ ] Click handler
- [ ] Export from `src/components/lims/index.ts`

### 3.7 TestResultCard

- [ ] Create `src/components/lims/test-result-card.tsx`
- [ ] Test name and method
- [ ] Status indicator
- [ ] Completed at/by
- [ ] Measurement summary
- [ ] Export from `src/components/lims/index.ts`

### 3.8 EquipmentSelector

- [ ] Create `src/components/lims/equipment-selector.tsx`
- [ ] Equipment list with status indicators
- [ ] Disabled state for calibration-due
- [ ] Export from `src/components/lims/index.ts`

### 3.9 CalibrationRecord

- [ ] Create `src/components/lims/calibration-record.tsx`
- [ ] Calibration date
- [ ] Certificate number
- [ ] Next due date
- [ ] Result badge
- [ ] Export from `src/components/lims/index.ts`

### 3.10 SampleTracker

- [ ] Create `src/components/lims/sample-tracker.tsx`
- [ ] Timeline visualization
- [ ] Status dots with timestamps
- [ ] User attribution
- [ ] Export from `src/components/lims/index.ts`

### 3.11 KPICard

- [ ] Create `src/components/lims/kpi-card.tsx`
- [ ] Title and value
- [ ] Optional change indicator
- [ ] Optional icon
- [ ] Optional status coloring
- [ ] Export from `src/components/lims/index.ts`

### 3.12 EmptyState

- [ ] Create `src/components/lims/empty-state.tsx`
- [ ] Icon slot
- [ ] Title and description
- [ ] Optional action button
- [ ] Export from `src/components/lims/index.ts`

### 3.13 LoadingState

- [ ] Create `src/components/lims/loading-state.tsx`
- [ ] Variants: full, inline, skeleton
- [ ] Export from `src/components/lims/index.ts`

### 3.14 ReportGenerator

- [ ] Create `src/components/lims/report-generator.tsx`
- [ ] Dialog wrapper
- [ ] Report type selector
- [ ] Format selector
- [ ] Sample selector (multi-select)
- [ ] Options checkboxes
- [ ] Generate/Cancel actions
- [ ] Export from `src/components/lims/index.ts`

### 3.15 DateRangePicker

- [ ] Create `src/components/lims/date-range-picker.tsx`
- [ ] Start/end date selection
- [ ] Preset options
- [ ] Export from `src/components/lims/index.ts`

### 3.16 Barrel Export

- [ ] Create `src/components/lims/index.ts`
- [ ] Export all LIMS components

---

## Phase 4: Layout Components

### 4.1 AppShell

- [ ] Create `src/components/layout/app-shell.tsx`
- [ ] Sidebar + main content layout
- [ ] Responsive collapse
- [ ] Export from `src/components/layout/index.ts`

### 4.2 AppSidebar

- [ ] Create `src/components/layout/app-sidebar.tsx`
- [ ] Navigation structure
- [ ] Active state highlighting
- [ ] Collapse/expand toggle
- [ ] LIMS-specific menu items
- [ ] Export from `src/components/layout/index.ts`

### 4.3 PageHeader

- [ ] Create `src/components/layout/page-header.tsx`
- [ ] Title and description
- [ ] Breadcrumbs slot
- [ ] Actions slot
- [ ] Export from `src/components/layout/index.ts`

### 4.4 Barrel Export

- [ ] Create `src/components/layout/index.ts`
- [ ] Export all layout components

---

## Phase 5: Hooks & Constants

### 5.1 Hooks

- [ ] Create `src/hooks/use-media-query.ts`
  - Responsive design support

### 5.2 Constants

- [ ] Create `src/lib/constants.ts`
  - Measurement units
  - Status mappings
  - EMC test types

---

## Phase 6: Testing & Documentation

### 6.1 Unit Tests

- [ ] Test utility functions
- [ ] Test variant generation
- [ ] Test validation logic

### 6.2 Component Tests

- [ ] Test each component renders correctly
- [ ] Test variant props
- [ ] Test interaction states

### 6.3 Storybook (optional)

- [ ] Create stories for key components
- [ ] Document usage examples

---

## Phase 7: Package Preparation

### 7.1 Build Configuration

- [ ] Configure build script
- [ ] Configure TypeScript for library output
- [ ] Set up path aliases

### 7.2 README

- [ ] Installation instructions
- [ ] Usage examples
- [ ] Component documentation
- [ ] Dark mode setup

### 7.3 License

- [ ] Add MIT license

---

## Progress Summary

| Phase | Tasks | Completed |
|-------|-------|-----------|
| 1. Foundation | 15 | 0 |
| 2. Base UI Components | 80 | 0 |
| 3. LIMS Components | 50 | 0 |
| 4. Layout Components | 10 | 0 |
| 5. Hooks & Constants | 5 | 0 |
| 6. Testing & Docs | 10 | 0 |
| 7. Package Prep | 5 | 0 |
| **Total** | **175** | **0** |
