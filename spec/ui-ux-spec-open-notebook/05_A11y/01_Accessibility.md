# Accessibility - Open Notebook

## Focus Management

### Focus Visibility

All interactive elements have visible focus states using consistent styling:

```css
focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
```

### Keyboard Navigation

| Component | Keys | Behavior |
|-----------|------|----------|
| Dialog | `Escape` | Close dialog |
| Dropdown | `Escape` | Close dropdown |
| Tooltip | `Escape` | Close tooltip |
| Tabs | `ArrowLeft/Right` | Navigate tabs |
| Command Palette | `Cmd/Ctrl+K` | Open palette |

### Focus Trapping

Radix UI components handle focus trapping within dialogs and popovers automatically.

## Semantic HTML

### Heading Hierarchy

```tsx
<h1> {/* Page title - only one per page */}
<h2> {/* Section headers */}
<h3> {/* Card titles, subsection headers */}
```

### Landmark Regions

```tsx
<header>   {/* Page header */}
<main>     {/* Main content */}
<nav>      {/* Navigation */}
<aside>    {/* Side panels */}
<footer>   {/* Page footer */}
```

### ARIA Labels

**Dialogs**:
```tsx
<Dialog>
  <DialogContent aria-describedby="dialog-description">
    <DialogTitle id="dialog-title">Title</DialogTitle>
    <DialogDescription id="dialog-description">Description</DialogDescription>
  </DialogContent>
</Dialog>
```

**Buttons without text**:
```tsx
<Button variant="ghost" size="icon" aria-label="Delete item">
  <Trash className="size-4" />
</Button>
```

## Color & Contrast

### Contrast Ratios

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Primary text | `oklch(0.141)` on white | `oklch(0.985)` on dark |
| Muted text | `oklch(0.552)` on white | `oklch(0.705)` on dark |
| Primary button | White on `oklch(0.623)` | White on `oklch(0.546)` |

### Destructive Actions

```css
aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
aria-invalid:border-destructive
```

## Form Accessibility

### Labels

All inputs have associated labels:

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>
```

### Error Messages

```tsx
<Input
  id="email"
  aria-invalid={hasError}
  aria-describedby={hasError ? 'email-error' : undefined}
/>
{hasError && (
  <p id="email-error" className="text-sm text-destructive">
    Please enter a valid email
  </p>
)}
```

## Screen Reader Support

### Visually Hidden Content

```tsx
<span className="sr-only">Close menu</span>
```

### Live Regions

Toast notifications use `role="status"`:
```tsx
import { Toaster } from '@/components/ui/sonner'
// Sonner handles aria-live internally
```

## Reduced Motion

### Preference Respect

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Icon Buttons

All icon-only buttons have `aria-label`:

```tsx
<Button variant="ghost" size="icon" aria-label="Settings">
  <Settings className="size-4" />
</Button>
```

## Data Tables

Pattern for accessible tables (not currently implemented):

```tsx
<table role="table">
  <thead>
    <tr>
      <th scope="col">Column 1</th>
      <th scope="col">Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

## Areas for Improvement

### Missing ARIA Descriptions

Components that should have `aria-describedby`:
- [ ] Confirm dialogs
- [ ] Form validation messages
- [ ] Empty states with actions

### Missing Skip Links

Consider adding skip-to-content links:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### Focus Indicators on Custom Components

The `CollapsibleColumn` component may need focus management for keyboard users.
