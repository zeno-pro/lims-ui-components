# UI/UX Specification Summary - Open Notebook

## Overview

**Project**: Open Notebook  
**Type**: Privacy-focused research and knowledge management application  
**Tech Stack**: Next.js 16 + React 19 + Tailwind CSS + Radix UI + OKLCH colors

---

## Design Foundations

### Color System

- **Color Space**: OKLCH (perceptually uniform)
- **Theme Strategy**: Class-based dark mode via `next-themes`
- **Primary Color**: Blue-purple (`oklch(0.623 0.214 259.815)`)
- **Destructive Color**: Red (`oklch(0.577 0.245 27.325)`)

### Typography

- **Font**: Inter (sans-serif), Geist Mono (monospace)
- **Base Size**: 16px (body), 14px (secondary)
- **Scale**: xs → 3xl

### Spacing

- **Base Unit**: 4px
- **Common Values**: 4, 8, 12, 16, 24, 32px

### Border Radius

- **Base Radius**: 0.65rem
- **Scale**: sm (0.4rem) → xl (0.9rem)

### Motion

- **Hover**: 200ms ease-out
- **Dialog**: 200ms fade + zoom
- **Pattern**: Subtle scale on hover, lift effect on cards

---

## Component Library

### Base UI Components (in `/components/ui/`)

| Component | Variants | Notes |
|-----------|----------|-------|
| Button | default, destructive, outline, secondary, ghost, link | Icon support via CVA |
| Card | - | Header/Title/Description/Action slots |
| Input | text, email, file | Focus ring + error states |
| Badge | default, secondary, destructive, outline | Small text labels |
| Select | default, sm | Radix-based dropdown |
| Dialog | - | Overlay + content animation |
| Alert Dialog | - | Confirmation patterns |
| Tabs | - | List + Trigger + Content |
| Dropdown Menu | - | Trigger + Content + Items |
| Tooltip | - | Hover popup |
| Checkbox | - | Boolean selection |
| Radio Group | - | Single selection |
| Textarea | - | Multi-line input |
| Label | - | Form labels |
| Progress | - | Progress indicator |
| Scroll Area | - | Custom scrollbar |
| Separator | - | HR/VR dividers |
| Accordion | - | Collapsible sections |
| Alert | - | Status messages |
| Sonner | - | Toast notifications |
| Command | - | Cmd+K palette |
| Markdown Editor | - | @uiw/react-md-editor |

### Common Components (in `/components/common/`)

| Component | Purpose |
|-----------|---------|
| EmptyState | Empty list placeholder with icon + action |
| ConfirmDialog | Destructive action confirmation |
| LoadingSpinner | Async operation indicator |
| InlineEdit | Click-to-edit text |
| ModelSelector | AI model dropdown |
| ThemeToggle | Light/dark/system switch |
| LanguageToggle | i18n language switch |
| CommandPalette | Global command search |

### Layout Components

| Component | Purpose |
|-----------|---------|
| AppShell | Main layout shell (sidebar + content) |
| AppSidebar | Navigation sidebar with collapse |
| SetupBanner | Initial setup required banner |

---

## Page Patterns

### 1. List Page (`/notebooks`, `/sources`)
- Header with title + create button
- Search/filter bar
- Responsive card grid
- Empty state
- Create dialog

### 2. Detail Page (`/notebooks/[id]`, `/sources/[id]`)
- Sticky header with actions
- 3-column collapsible layout
- Chat panel + content + context panel

### 3. Settings Page (`/settings`)
- Single-column centered form
- Section groupings
- Sticky save/cancel footer

### 4. Wizard Page (Add Source)
- Progress indicator
- Multi-step form
- Back/Next navigation

### 5. Tabs Page (`/podcasts`)
- Page-level tabs
- Tab content panels

---

## Interaction Patterns

### Hover Effects
- **Menu items**: `scale-[1.02]` + shadow
- **Cards**: `translateY(-1px)` + shadow increase

### Focus States
- Consistent ring: `ring-ring/50 ring-[3px]`

### Loading States
- Button spinner
- Full-page spinner
- Skeleton (future)

### Error Handling
- Inline error text
- Toast notifications
- Confirm dialogs for destructive actions

---

## Accessibility

### Implemented
- Semantic HTML (landmarks, headings)
- ARIA labels on icon buttons
- Focus visible states
- Keyboard navigation (Radix UI)
- Reduced motion support

### Areas for Improvement
- Skip links
- ARIA descriptions on dialogs
- Focus management in custom components

---

## Key Files Reference

### Source Files
- Design tokens: `frontend/src/app/globals.css`
- Button: `frontend/src/components/ui/button.tsx`
- Card: `frontend/src/components/ui/card.tsx`
- Input: `frontend/src/components/ui/input.tsx`
- Theme: `frontend/src/components/providers/ThemeProvider.tsx`
- Layout: `frontend/src/components/layout/AppShell.tsx`
- Sidebar: `frontend/src/components/layout/AppSidebar.tsx`

### Documentation
- Frontend README: `frontend/src/CLAUDE.md`
- Project README: `README.md`

---

## Migration Notes

When applying this spec to other projects:

1. **Colors**: OKLCH values can be converted to HEX/RGB if needed
2. **Components**: Component patterns are framework-agnostic (CVA + Tailwind)
3. **Layout**: AppShell structure can adapt to any sidebar-based layout
4. **Theme**: Requires `next-themes` or equivalent class-based dark mode
