# Global Styles - Open Notebook

## CSS Architecture

### Framework Stack
- **Tailwind CSS** with `@tailwindcss/typography` plugin
- **OKLCH Color Space** for all colors (better perceptually uniform)
- **CSS Custom Properties** for theme tokens
- **tw-animate-css** for animations

### Theme Provider Strategy

Uses `next-themes` with custom store implementation:

```typescript
// Theme values: 'light' | 'dark' | 'system'
// Resolved on mount via ThemeProvider
// Applied via class="light|dark" on <html> and data-theme attribute
```

### CSS Layer Order

```css
@layer base      /* Reset, tokens, global defaults */
@layer components /* Component-specific styles */
@layer utilities  /* Helper classes */
```

### Global Reset

```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  
  html {
    @apply antialiased;
  }
  
  body {
    @apply bg-background text-foreground transition-colors;
  }
}
```

## Color Scheme Handling

```css
/* Light mode */
:root {
  color-scheme: light;
}

/* Dark mode */
.dark {
  color-scheme: dark;
}
```

## Component Inheritance

Radix UI components inherit theme via:
```css
[data-radix-popper-content-wrapper] {
  @apply z-50;
}
```

Portaled content in dark mode:
```css
.dark [data-radix-popper-content-wrapper],
.dark [data-overlay-container] {
  color-scheme: dark;
}
```

## Focus Management

### Focus Visible Ring

All interactive elements use consistent focus styling:
```css
focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
```

### Error State Focus
```css
aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
aria-invalid:border-destructive
```

## Enhanced Interaction Patterns

### Sidebar Menu Items
```css
.sidebar-menu-item {
  @apply transition-all duration-200 ease-out;
}
.sidebar-menu-item:hover {
  @apply scale-[1.02];
  background-color: var(--sidebar-accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
```

### Card Hover Effects
```css
.card-hover {
  @apply transition-all duration-200 cursor-pointer;
}
.card-hover:hover {
  background-color: var(--muted);
  border-color: var(--border);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

### Clickable Cards
```css
.clickable-card {
  cursor: pointer !important;
}
.clickable-card * {
  cursor: pointer !important;
}
```

## Scrollbar Styling

Uses native scrollbar styling with Radix ScrollArea:
```tsx
import { ScrollArea } from '@/components/ui/scroll-area'
```

## Selection Styling

```css
::selection {
  background-color: var(--primary);
  color: var(--primary-foreground);
}
```

## Link Styles

- Default: `text-primary underline-offset-4 hover:underline`
- In buttons: inherit parent styling

## Form Defaults

- Input height: `h-9` (36px) default, `h-8` (32px) small
- Border radius: `rounded-md`
- Focus ring on all form elements
- Disabled state: `disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`

## Utility Classes

### Data Attributes Pattern
Uses `data-slot="component-name"` for styling hooks:
- `data-slot="button"`
- `data-slot="card"`
- `data-slot="card-header"`
- `data-slot="input"`
- `data-slot="dialog"`
- etc.

### Animation Classes

```css
/* Dialog/Overlay animations */
data-[state=open]:animate-in
data-[state=closed]:animate-out
data-[state=closed]:fade-out-0
data-[state=open]:fade-in-0
data-[state=closed]:pointer-events-none

/* Default overlay */
bg-black/50
```
