# Interaction Patterns - Open Notebook

## Click & Selection

### Card Click

**Pattern**: Cards that navigate on click
**Classes**: `card-hover clickable-card`

```tsx
<Card className="card-hover clickable-card" onClick={() => router.push(path)}>
```

**Hover Effects**:
```css
.card-hover:hover {
  background-color: var(--muted);
  border-color: var(--border);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

### Button Click

**Pattern**: Standard button press feedback
**Implementation**: Native disabled state during loading

```tsx
<Button disabled={isLoading} onClick={handleClick}>
  {isLoading ? <LoadingSpinner /> : 'Submit'}
</Button>
```

---

## Hover States

### Menu Item Hover

**Pattern**: Sidebar and dropdown menu items
**Classes**: `sidebar-menu-item`

```css
.sidebar-menu-item {
  transition-all duration-200 ease-out;
}
.sidebar-menu-item:hover {
  scale-[1.02];
  background-color: var(--sidebar-accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
```

### Icon Button Hover

**Pattern**: Ghost variant buttons
**Classes**: `hover:bg-accent hover:text-accent-foreground`

---

## Focus Management

### Keyboard Navigation

**Pattern**: Tab through interactive elements
**Focus Ring**: Consistent across all components

```css
focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
```

### Escape to Close

**Pattern**: Close dialogs, dropdowns, tooltips on Escape
**Implementation**: Built into Radix UI primitives

---

## Loading States

### Button Loading

```tsx
<Button disabled={isLoading}>
  {isLoading && <LoadingSpinner />}
  {isLoading ? 'Saving...' : 'Save'}
</Button>
```

### Full Page Loading

```tsx
{isLoading ? (
  <div className="flex items-center justify-center h-full">
    <LoadingSpinner />
  </div>
) : (
  <Content />
)}
```

### Skeleton Loading

Pattern not currently implemented but recommended for future:

```tsx
<div className="animate-pulse">
  <div className="h-4 bg-muted rounded w-3/4" />
  <div className="h-4 bg-muted rounded w-1/2 mt-2" />
</div>
```

---

## Empty States

### Pattern: Centered Icon + Text + Action

```tsx
<EmptyState
  icon={FileText}
  title="No items"
  description="Add your first item to get started"
  action={<Button onClick={handleAdd}>Add Item</Button>}
/>
```

---

## Error Handling

### Inline Error Messages

```tsx
<p className="text-sm text-destructive">Error message here</p>
```

### Toast Errors

```tsx
import { toast } from 'sonner'

toast.error('Failed to save changes', {
  description: 'Please try again later.'
})
```

### Confirmation Before Destructive Action

```tsx
<ConfirmDialog
  open={deleteDialogOpen}
  onOpenChange={setDeleteDialogOpen}
  title="Delete item?"
  confirmVariant="destructive"
  onConfirm={handleDelete}
/>
```

---

## Dialog/Modal Patterns

### Opening a Dialog

```tsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Dialog</Button>
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    {/* content */}
  </DialogContent>
</Dialog>
```

### Form in Dialog

```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create Item</DialogTitle>
      <DialogDescription>Fill in the details below.</DialogDescription>
    </DialogHeader>
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button type="submit">Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Dropdown Menu Patterns

### Trigger + Content

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">...</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Search & Filter

### Search Input with Debounce

```tsx
const [searchTerm, setSearchTerm] = useState('')

const filtered = useMemo(() => {
  const normalized = searchTerm.trim().toLowerCase()
  if (!normalized) return items
  return items.filter(item =>
    item.name.toLowerCase().includes(normalized)
  )
}, [items, searchTerm])

<Input
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

---

## Optimistic Updates

Pattern for immediate UI feedback:

```tsx
const handleToggle = async () => {
  // Optimistic update
  setItems(prev => prev.map(item =>
    item.id === id ? { ...item, done: !item.done } : item
  ))

  try {
    await api.update(id)
  } catch {
    // Revert on error
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ))
    toast.error('Failed to update')
  }
}
```

---

## Responsive Behavior

### Collapsible Sidebar

```tsx
const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

// Sidebar shows icons only when collapsed
<AppSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
```

### Multi-Column to Single Column

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <Card key={item.id}>{/* item */}</Card>
  ))}
</div>
```

---

## Animation Guidelines

### Duration

| Type | Duration |
|------|----------|
| Micro-interactions | 150ms |
| Hover states | 200ms |
| Page transitions | 300ms |
| Modal appear | 200ms |

### Easing

| Animation | Easing |
|-----------|--------|
| Hover scale | `ease-out` |
| Modal zoom | `ease-out` |
| Fade | `ease-in-out` |

### Radix Animations

```css
/* Enter */
data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95

/* Exit */
data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
```
