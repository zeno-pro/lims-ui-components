# Common Components - Open Notebook

## Overview

Common components are application-specific patterns built on top of Base UI Components. They encapsulate frequently used patterns and business logic.

---

## EmptyState

**Path**: `components/common/EmptyState.tsx`

**Purpose**: Display when a list/collection has no items.

**Props**:
```typescript
interface EmptyStateProps {
  icon: LucideIcon        // Lucide icon component
  title: string           // Heading text
  description: string    // Supporting description
  action?: React.ReactNode // Optional CTA button
}
```

**Structure**:
```tsx
<div className="text-center py-12">
  <Icon className="h-12 w-12 mx-auto text-muted-foreground/60 mb-4" />
  <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
  <p className="text-muted-foreground mb-4">{description}</p>
  {action}
</div>
```

**Usage**:
```tsx
<EmptyState
  icon={FileText}
  title="No sources yet"
  description="Add your first source to get started"
  action={<Button>Add Source</Button>}
/>
```

---

## ConfirmDialog

**Path**: `components/common/ConfirmDialog.tsx`

**Purpose**: Confirmation dialog for destructive actions.

**Props**:
```typescript
interface ConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  confirmText?: string
  confirmVariant?: 'default' | 'destructive'
  onConfirm: () => void
  isLoading?: boolean
}
```

**Pattern**: Built on AlertDialog with loading state support.

**Footer Layout**:
```tsx
<AlertDialogFooter>
  <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
  <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
</AlertDialogFooter>
```

**Usage**:
```tsx
<ConfirmDialog
  open={deleteDialogOpen}
  onOpenChange={setDeleteDialogOpen}
  title="Delete notebook?"
  description="This will permanently delete the notebook and all its notes."
  confirmVariant="destructive"
  onConfirm={handleDelete}
  isLoading={isDeleting}
/>
```

---

## LoadingSpinner

**Path**: `components/common/LoadingSpinner.tsx`

**Purpose**: Loading indicator for async operations.

**Structure**:
```tsx
// Based on lucide-react Loader2 with spin animation
<Loader2 className="animate-spin" />
```

**Usage**:
```tsx
<LoadingSpinner />
// or inline with text
<div className="flex items-center gap-2">
  <LoadingSpinner />
  <span>Loading...</span>
</div>
```

---

## InlineEdit

**Path**: `components/common/InlineEdit.tsx`

**Purpose**: Editable text that switches between display and edit modes.

**Props**:
```typescript
interface InlineEditProps {
  value: string
  onSave: (value: string) => void
  // ... other styling/validation props
}
```

**Behavior**:
- Click to edit
- Enter to save
- Escape to cancel

---

## ModelSelector

**Path**: `components/common/ModelSelector.tsx`

**Purpose**: Dropdown for selecting AI models.

**Pattern**: Uses Select component with model options.

**Usage**:
```tsx
<ModelSelector
  value={selectedModel}
  onChange={setSelectedModel}
  models={availableModels}
/>
```

---

## LanguageToggle

**Path**: `components/common/LanguageToggle.tsx`

**Purpose**: Switch UI language.

**Pattern**: Dropdown or toggle button with language codes.

---

## ThemeToggle

**Path**: `components/common/ThemeToggle.tsx`

**Purpose**: Switch between light/dark/system themes.

**Pattern**: Dropdown or icon button cycling through themes.

**Implementation Note**: Uses `useThemeStore` for state management.

---

## ConnectionGuard

**Path**: `components/common/ConnectionGuard.tsx`

**Purpose**: Wraps content to check backend connectivity.

**Pattern**: Shows ConnectionErrorOverlay when disconnected.

---

## ErrorBoundary

**Path**: `components/common/ErrorBoundary.tsx`

**Purpose**: Catches React errors and displays fallback UI.

**Structure**:
```tsx
<ErrorBoundary fallback={<ErrorFallback />}>
  {children}
</ErrorBoundary>
```

---

## ContextIndicator & ContextToggle

**Path**: `components/common/ContextIndicator.tsx`
**Path**: `components/common/ContextToggle.tsx`

**Purpose**: Display and toggle AI context/RAG mode.

---

## LanguageLoadingOverlay

**Path**: `components/common/LanguageLoadingOverlay.tsx`

**Purpose**: Full-screen loading overlay during language/i18n initialization.

---

## CommandPalette

**Path**: `components/common/CommandPalette.tsx`

**Purpose**: Keyboard-driven command interface.

**Pattern**: Uses `cmdk` library wrapped in Command component.

**Components**:
```tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Navigation">
      <CommandItem>Go to Notebooks</CommandItem>
      <CommandItem>Go to Sources</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

---

## ConnectionErrorOverlay

**Path**: `components/errors/ConnectionErrorOverlay.tsx`

**Purpose**: Full-screen overlay when backend is unreachable.

**Structure**:
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80">
  <Card>
    <CardContent>
      <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
      <h2>Connection Error</h2>
      <p>Unable to connect to the server.</p>
      <Button onClick={retry}>Retry</Button>
    </CardContent>
  </Card>
</div>
```

---

## SetupBanner

**Path**: `components/layout/SetupBanner.tsx`

**Purpose**: Banner shown when initial setup is required.

**Behavior**: Shows at top of AppShell when API keys not configured.

---

## CollapsibleColumn

**Path**: `components/notebooks/CollapsibleColumn.tsx`

**Purpose**: Resizable/collapsible panel for notebook detail view.

**Layout**: Used in 3-column notebook layout (Chat | Notes | Sources).
