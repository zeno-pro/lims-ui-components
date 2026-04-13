# Layout System - Open Notebook

## Page Architecture

### App Shell Structure

```
┌─────────────────────────────────────────────────────┐
│  [SetupBanner - conditional]                        │
├──────────┬──────────────────────────────────────────┤
│          │                                          │
│  App     │  Main Content Area                       │
│  Sidebar │  (flex-1, flex-col, overflow-hidden)     │
│          │                                          │
│  (fixed  │  ┌────────────────────────────────────┐  │
│  width,  │  │ Page Header (if present)           │  │
│  h-full) │  ├────────────────────────────────────┤  │
│          │  │                                    │  │
│          │  │ Page Content                       │  │
│          │  │ (scrollable)                      │  │
│          │  │                                    │  │
│          │  └────────────────────────────────────┘  │
└──────────┴──────────────────────────────────────────┘
```

### AppShell Component
```tsx
<div className="flex h-screen overflow-hidden">
  <AppSidebar />
  <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
    <SetupBanner />
    {children}
  </main>
</div>
```

## Sidebar Layout

### Dimensions
- **Width**: Fixed (collapsible)
- **Height**: Full viewport height (`h-screen`)
- **Overflow**: Hidden

### Navigation Structure

```typescript
const getNavigation = (t) => [
  {
    title: 'Collect',
    items: [{ name: 'Sources', href: '/sources', icon: FileText }]
  },
  {
    title: 'Process',
    items: [
      { name: 'Notebooks', href: '/notebooks', icon: Book },
      { name: 'Ask & Search', href: '/search', icon: Search }
    ]
  },
  {
    title: 'Create',
    items: [{ name: 'Podcasts', href: '/podcasts', icon: Mic }]
  },
  {
    title: 'Manage',
    items: [
      { name: 'Models', href: '/settings/api-keys', icon: Bot },
      { name: 'Transformations', href: '/transformations', icon: Shuffle },
      { name: 'Settings', href: '/settings', icon: Settings },
      { name: 'Advanced', href: '/advanced', icon: Wrench }
    ]
  }
]
```

### Sidebar States
- **Expanded**: Shows icons + text
- **Collapsed**: Shows icons only with tooltips
- **Active item**: Highlighted with `--sidebar-accent`

## Breakpoints

Using Tailwind default breakpoints:

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## Responsive Patterns

### Container Queries

The project uses `@container` queries for component-level responsiveness:

```css
@container/card-header {
  /* Card header responsive layout */
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}
```

### Responsive Sizing

| Component | Default | Small | Large |
|-----------|---------|-------|-------|
| Button | h-9 px-4 | h-8 px-3 | h-10 px-6 |
| Input | h-9 | h-9 | h-9 |
| Select | h-9 | h-8 | h-9 |

## Layout Patterns by Page Type

### 1. List Page (Notebooks, Sources)
- Search/filter bar at top
- Grid or list of cards
- Pagination or infinite scroll
- Empty state when no items

### 2. Detail Page (Notebook/[id], Source/[id])
- Header with title and actions
- Multi-column layout (collapsible)
- Chat/info panel on side
- Content area for main data

### 3. Form Page (Settings)
- Single column form
- Section groupings
- Save/Cancel actions sticky at bottom

### 4. Dashboard Page (redirects to /notebooks)
- Redirects to notebooks list

## Common Layout Utilities

```css
/* Sticky header */
.sticky top-0 z-20

/* Scrollable container */
.overflow-hidden / .overflow-auto

/* Flex layouts */
.flex .flex-col .items-center .justify-between

/* Grid */
.grid .gap-4 .grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
```
