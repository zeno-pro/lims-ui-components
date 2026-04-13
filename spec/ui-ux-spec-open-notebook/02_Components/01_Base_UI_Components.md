# UI Component Library - Open Notebook

## Component Overview

### Framework & Libraries
- **Radix UI** for accessible primitive components
- **Tailwind CSS** for styling
- **class-variance-authority (CVA)** for variant management
- **Lucide React** for icons

### Component Categories

1. **Base UI Components** (`/components/ui/`) - Low-level building blocks
2. **Common Components** (`/components/common/`) - Application-specific patterns
3. **Layout Components** (`/components/layout/`) - Shell and navigation
4. **Domain Components** - Feature-specific components

---

## Base UI Components

### Button

**Path**: `components/ui/button.tsx`

**Variants** (via CVA):

| Variant | Purpose | Classes |
|---------|---------|---------|
| `default` | Primary actions | `bg-primary text-primary-foreground shadow-xs hover:bg-primary/90` |
| `destructive` | Destructive actions | `bg-destructive text-white shadow-xs hover:bg-destructive/90` |
| `outline` | Secondary actions | `border bg-background shadow-xs hover:bg-accent` |
| `secondary` | Less prominent | `bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80` |
| `ghost` | Subtle actions | `hover:bg-accent hover:text-accent-foreground` |
| `link` | Text links | `text-primary underline-offset-4 hover:underline` |

**Sizes**:

| Size | Classes |
|------|---------|
| `default` | `h-9 px-4 py-2` |
| `sm` | `h-8 rounded-md px-3` |
| `lg` | `h-10 rounded-md px-6` |
| `icon` | `size-9` (square) |

**States**:
- Disabled: `disabled:pointer-events-none disabled:opacity-50`
- Focus visible: `focus-visible:ring-ring/50 focus-visible:ring-[3px]`
- Error: `aria-invalid:ring-destructive/20 aria-invalid:border-destructive`
- Loading: Via `disabled` + external spinner

**Slots**:
- Icon support: `[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4`
- `asChild` prop for composition with Radix Slot

**Usage**:
```tsx
<Button variant="default" size="default">Save</Button>
<Button variant="destructive" size="sm">Delete</Button>
<Button variant="ghost" size="icon"><Trash className="size-4" /></Button>
```

---

### Card

**Path**: `components/ui/card.tsx`

**Structure**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardAction>Action</CardAction>
  </CardHeader>
  <CardContent>Children</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

**Slots**:

| Slot | Purpose | Classes |
|------|---------|---------|
| `card` | Root container | `bg-card text-card-foreground rounded-xl border py-6 shadow-sm` |
| `card-header` | Header area | Grid layout with action support |
| `card-title` | Title text | `leading-none font-semibold` |
| `card-description` | Subtitle | `text-muted-foreground text-sm` |
| `card-action` | Action buttons | Positioned in top-right |
| `card-content` | Main content | `px-6` padding |
| `card-footer` | Footer actions | `px-6 pt-0` |

**Card Header Grid**:
```css
grid-template-columns: 1fr auto; /* title area + action */
grid-template-rows: auto auto;
```

**Usage**:
```tsx
<Card className="card-hover clickable-card">
  <CardHeader>
    <CardTitle>Notebook Name</CardTitle>
    <CardDescription>3 sources, 12 notes</CardDescription>
    <CardAction><Button variant="ghost" size="icon">...</Button></CardAction>
  </CardHeader>
</Card>
```

---

### Input

**Path**: `components/ui/input.tsx`

**Classes**:
```css
file:text-foreground
placeholder:text-muted-foreground
selection:bg-primary selection:text-primary-foreground
border-input bg-transparent
flex h-9 w-full rounded-md border px-3 py-1
focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
aria-invalid:ring-destructive/20 aria-invalid:border-destructive
disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
```

**Variants**:
- Default: transparent background
- Dark mode: `dark:bg-input/30`

**File Input**:
- Uses `file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium`

**Usage**:
```tsx
<Input type="text" placeholder="Search..." />
<Input type="email" placeholder="email@example.com" />
<Input type="file" />
```

---

### Badge

**Path**: `components/ui/badge.tsx`

**Variants**:

| Variant | Purpose | Classes |
|---------|---------|---------|
| `default` | Primary | `border-transparent bg-primary text-primary-foreground` |
| `secondary` | Secondary | `border-transparent bg-secondary text-secondary-foreground` |
| `destructive` | Error/warning | `border-transparent bg-destructive text-white` |
| `outline` | Neutral | `text-foreground` (hover shows accent) |

**Classes**:
```css
inline-flex items-center justify-center rounded-md border
px-2 py-0.5 text-xs font-medium w-fit
gap-1 shrink-0
transition-[color,box-shadow]
overflow-hidden
```

**Usage**:
```tsx
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Warning</Badge>
```

---

### Select

**Path**: `components/ui/select.tsx`

**Components**:
- `Select` - Root provider
- `SelectGroup` - Group wrapper
- `SelectValue` - Selected value display
- `SelectTrigger` - Dropdown button
- `SelectContent` - Dropdown panel
- `SelectItem` - Individual option
- `SelectSeparator` - Divider

**Sizes**:
| Size | Classes |
|------|---------|
| `default` | `h-9` |
| `sm` | `h-8` |

**Trigger Classes**:
```css
border-input data-[placeholder]:text-muted-foreground
focus-visible:border-ring focus-visible:ring-ring/50
flex items-center justify-between gap-2 rounded-md border
bg-transparent px-3 py-2 text-sm shadow-xs
disabled:cursor-not-allowed disabled:opacity-50
```

**Usage**:
```tsx
<Select onValueChange={handleChange}>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

---

### Dialog

**Path**: `components/ui/dialog.tsx`

**Components**:
- `Dialog` - Root provider
- `DialogTrigger` - Opening trigger
- `DialogPortal` - Portal wrapper
- `DialogClose` - Close button
- `DialogOverlay` - Backdrop
- `DialogContent` - Modal container
- `DialogHeader` - Title area
- `DialogFooter` - Action buttons
- `DialogTitle` - Heading
- `DialogDescription` - Subtitle

**Overlay Animation**:
```css
data-[state=open]:animate-in data-[state=closed]:animate-out
data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
fixed inset-0 z-50 bg-black/50
```

**Content Animation**:
```css
data-[state=open]:animate-in data-[state=closed]:animate-out
data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
```

**Usage**:
```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <div>Content</div>
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={handleConfirm}>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### Alert Dialog

**Path**: `components/ui/alert-dialog.tsx`

Extends Dialog pattern for confirmation dialogs.

**Components**:
- `AlertDialog` - Root
- `AlertDialogContent` - Modal
- `AlertDialogHeader` - Title area
- `AlertDialogFooter` - Actions
- `AlertDialogTitle` - Heading
- `AlertDialogDescription` - Message
- `AlertDialogAction` - Confirm button
- `AlertDialogCancel` - Cancel button

**Usage**:
```tsx
<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

### Tabs

**Path**: `components/ui/tabs.tsx`

**Components**:
- `Tabs` - Root container
- `TabsList` - Tab buttons container
- `TabsTrigger` - Individual tab
- `TabsContent` - Tab panel

**Styles**:
```css
/* TabsList */
inline-flex h-9 items-center justify-center rounded-lg

/* TabsTrigger */
inline-flex items-center justify-center whitespace-nowrap
px-3 py-1 text-sm transition-all
focus-visible:ring-ring/50 focus-visible:ring-[3px]
disabled:pointer-events-none disabled:opacity-50

/* Active state */
data-[state=active]:bg-background data-[state=active]:shadow
```

**Usage**:
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

---

### Dropdown Menu

**Path**: `components/ui/dropdown-menu.tsx`

**Components**:
- `DropdownMenu` - Root
- `DropdownMenuTrigger` - Trigger button
- `DropdownMenuContent` - Menu panel
- `DropdownMenuItem` - Menu item
- `DropdownMenuGroup` - Item group
- `DropdownMenuSeparator` - Divider
- `DropdownMenuLabel` - Section label

**Content Animation**:
```css
data-[state=open]:animate-in data-[state=closed]:animate-out
data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
```

**Usage**:
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">...</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

### Tooltip

**Path**: `components/ui/tooltip.tsx`

**Components** (from Radix):
- `TooltipProvider` - Wrapper for multiple tooltips
- `Tooltip` - Root
- `TooltipTrigger` - Hover target
- `TooltipContent` - Tooltip text

**Content Classes**:
```css
bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs
animate-in fade-in-0 zoom-in-95
```

**Usage**:
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">?</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Help text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

### Other Base Components

| Component | Path | Purpose |
|-----------|------|---------|
| `Checkbox` | `components/ui/checkbox.tsx` | Boolean selection |
| `RadioGroup` | `components/ui/radio-group.tsx` | Single selection from options |
| `Switch` | N/A (use checkbox pattern) | Toggle on/off |
| `Textarea` | `components/ui/textarea.tsx` | Multi-line text input |
| `Label` | `components/ui/label.tsx` | Form field labels |
| `Progress` | `components/ui/progress.tsx` | Progress indicator |
| `ScrollArea` | `components/ui/scroll-area.tsx` | Custom scroll container |
| `Separator` | `components/ui/separator.tsx` | Horizontal/vertical dividers |
| `Accordion` | `components/ui/accordion.tsx` | Collapsible sections |
| `Collapsible` | `components/ui/collapsible.tsx` | Expandable content |
| `Alert` | `components/ui/alert.tsx` | Status messages |
| `CheckboxList` | `components/ui/checkbox-list.tsx` | List of checkboxes |
| `FormSection` | `components/ui/form-section.tsx` | Form grouping |
| `MarkdownEditor` | `components/ui/markdown-editor.tsx` | Markdown input |
| `WizardContainer` | `components/ui/wizard-container.tsx` | Multi-step wizard |
| `Sonner` | `components/ui/sonner.tsx` | Toast notifications |
| `Command` | `components/ui/command.tsx` | Command palette (cmdk) |
