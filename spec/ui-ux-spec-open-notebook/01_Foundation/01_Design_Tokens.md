# Design Tokens - Open Notebook

## Color Palette

### Primary Colors (OKLCH)

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | `oklch(0.623 0.214 259.815)` | `oklch(0.546 0.245 262.881)` | Main brand color, CTAs, active states |
| `--primary-foreground` | `oklch(0.97 0.014 254.604)` | `oklch(0.985 0 0)` | Text on primary backgrounds |

### Secondary Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--secondary` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Secondary buttons, backgrounds |
| `--secondary-foreground` | `oklch(0.21 0.006 285.885)` | `oklch(0.985 0 0)` | Text on secondary backgrounds |

### Muted Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--muted` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Subdued backgrounds |
| `--muted-foreground` | `oklch(0.552 0.016 285.938)` | `oklch(0.705 0.015 286.067)` | Secondary text, placeholders |

### Accent Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--accent` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Hover states, highlights |
| `--accent-foreground` | `oklch(0.21 0.006 285.885)` | `oklch(0.985 0 0)` | Text on accent backgrounds |

### Destructive Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Delete actions, errors |

### Background Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--background` | `oklch(1 0 0)` | `oklch(0.141 0.005 285.823)` | Page background |
| `--foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` | Primary text |
| `--card` | `oklch(1 0 0)` | `oklch(0.21 0.006 285.885)` | Card backgrounds |
| `--card-foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` | Text on cards |
| `--popover` | `oklch(1 0 0)` | `oklch(0.21 0.006 285.885)` | Dropdown/menu backgrounds |
| `--popover-foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` | Text in popovers |

### Border & Input Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--border` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` | Card/list borders |
| `--input` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 15%)` | Input field borders |
| `--ring` | `oklch(0.623 0.214 259.815)` | `oklch(0.488 0.243 264.376)` | Focus rings |

### Chart Colors

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `--chart-1` | `oklch(0.646 0.222 41.116)` | `oklch(0.488 0.243 264.376)` |
| `--chart-2` | `oklch(0.6 0.118 184.704)` | `oklch(0.696 0.17 162.48)` |
| `--chart-3` | `oklch(0.398 0.07 227.392)` | `oklch(0.769 0.188 70.08)` |
| `--chart-4` | `oklch(0.828 0.189 84.429)` | `oklch(0.627 0.265 303.9)` |
| `--chart-5` | `oklch(0.769 0.188 70.08)` | `oklch(0.645 0.246 16.439)` |

### Sidebar Colors

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `--sidebar` | `oklch(0.985 0 0)` | `oklch(0.21 0.006 285.885)` |
| `--sidebar-foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` |
| `--sidebar-primary` | `oklch(0.623 0.214 259.815)` | `oklch(0.546 0.245 262.881)` |
| `--sidebar-primary-foreground` | `oklch(0.97 0.014 254.604)` | `oklch(0.985 0 0)` |
| `--sidebar-accent` | `oklch(0.92 0.01 286.375)` | `oklch(0.35 0.01 286.033)` |
| `--sidebar-accent-foreground` | `oklch(0.21 0.006 285.885)` | `oklch(0.985 0 0)` |
| `--sidebar-border` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` |
| `--sidebar-ring` | `oklch(0.623 0.214 259.815)` | `oklch(0.488 0.243 264.376)` |

## Typography

### Font Stack

- **Sans-serif**: `var(--font-sans)` → Inter with `latin` subset
- **Monospace**: `var(--font-mono)` → Geist Mono

### Font Sizes

| Token | Size | Usage |
|-------|------|-------|
| `text-xs` | 0.75rem (12px) | Badges, timestamps |
| `text-sm` | 0.875rem (14px) | Secondary text, inputs |
| `text-base` | 1rem (16px) | Body text |
| `text-lg` | 1.125rem (18px) | Emphasized body |
| `text-xl` | 1.25rem (20px) | Card titles |
| `text-2xl` | 1.5rem (24px) | Section headers |
| `text-3xl` | 1.875rem (30px) | Page titles |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Normal | 400 | Body text |
| Medium | 500 | Emphasized text |
| Semibold | 600 | Subheadings |
| Bold | 700 | Headings, CTAs |

## Spacing System

Base unit: 4px (0.25rem)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 0.25rem (4px) | Tight spacing |
| `space-2` | 0.5rem (8px) | Component internal |
| `space-3` | 0.75rem (12px) | Small gaps |
| `space-4` | 1rem (16px) | Default gaps |
| `space-6` | 1.5rem (24px) | Section spacing |
| `space-8` | 2rem (32px) | Large gaps |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | calc(0.65rem - 4px) = 0.4rem | Small elements, badges |
| `--radius-md` | calc(0.65rem - 2px) = 0.5rem | Inputs, buttons |
| `--radius-lg` | 0.65rem | Cards, modals |
| `--radius-xl` | calc(0.65rem + 4px) = 0.9rem | Large containers |

Base radius: `--radius: 0.65rem`

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-xs` | 0 1px 2px rgba(0,0,0,0.05) | Subtle elevation |
| `shadow-sm` | 0 1px 3px rgba(0,0,0,0.1) | Cards at rest |
| `shadow-md` | 0 4px 6px rgba(0,0,0,0.1) | Dropdowns |
| `shadow-lg` | 0 10px 15px rgba(0,0,0,0.1) | Modals |

## Animation & Transitions

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `duration-150` | 150ms | Micro-interactions |
| `duration-200` | 200ms | Hover states |
| `duration-300` | 300ms | Page transitions |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| `ease-out` | cubic-bezier(0.33, 1, 0.68, 1) | Enter animations |
| `ease-in` | cubic-bezier(0.32, 0, 0.67, 0) | Exit animations |
| `ease-in-out` | cubic-bezier(0.65, 0, 0.35, 1) | State changes |

### Motion Patterns

- **Hover scale**: `scale-[1.02]` with `transition-all duration-200 ease-out`
- **Card hover lift**: `translateY(-1px)` with shadow increase
- **Fade transitions**: `animate-in fade-in-0` / `animate-out fade-out-0`
- **Overlay fade**: 200ms ease-out for dialog/modal overlays

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `z-0` | 0 | Default stacking |
| `z-10` | 10 | Dropdowns |
| `z-20` | 20 | Sticky headers |
| `z-30` | 30 | Modals |
| `z-40` | 40 | Command palette |
| `z-50` | 50 | Tooltips, overlays |

Note: Radix UI portaled content uses `data-radix-popper-content-wrapper` with `z-50`.
