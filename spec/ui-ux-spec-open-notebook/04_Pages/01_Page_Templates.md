# Page Templates - Open Notebook

## Page Type Patterns

### 1. List Page Pattern

**Pages**: `/notebooks`, `/sources`, `/transformations`

**Structure**:
```tsx
export default function ListPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data: items, isLoading, refetch } = useItems()

  const filteredItems = useMemo(() => {
    if (!items) return undefined
    const normalized = searchTerm.trim().toLowerCase()
    if (!normalized) return items
    return items.filter(item =>
      item.name.toLowerCase().includes(normalized)
    )
  }, [items, searchTerm])

  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-semibold">Title</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => refetch()}>
            <RefreshCw className="size-4" />
          </Button>
          <Button onClick={() => setCreateOpen(true)}>
            <Plus className="size-4" />
            Create New
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 pb-4">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <LoadingSpinner />
          </div>
        ) : filteredItems?.length === 0 ? (
          <EmptyState
            icon={Icon}
            title="No items"
            description="Get started by creating your first item."
            action={<Button onClick={() => setCreateOpen(true)}>Create</Button>}
          />
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {filteredItems?.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* Create Dialog */}
      <CreateDialog open={createOpen} onOpenChange={setCreateOpen} />
    </div>
  )
}
```

**Key Features**:
- Header with title + action buttons
- Search input with filtering
- Loading state with spinner
- Empty state with CTA
- Responsive grid of cards
- Create dialog

---

### 2. Detail Page Pattern (with Chat)

**Pages**: `/notebooks/[id]`, `/sources/[id]`

**Structure**:
```tsx
export default function DetailPage({ params }: { params: { id: string } }) {
  const [leftColumnOpen, setLeftColumnOpen] = useState(true)
  const [rightColumnOpen, setRightColumnOpen] = useState(true)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <DetailHeader />

      {/* 3-Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column - Chat */}
        <CollapsibleColumn open={leftColumnOpen} onOpenChange={setLeftColumnOpen}>
          <ChatColumn />
        </CollapsibleColumn>

        {/* Center Column - Main Content */}
        <div className="flex-1 overflow-auto">
          <NotebookContent />
        </div>

        {/* Right Column - Sources/Notes */}
        <CollapsibleColumn open={rightColumnOpen} onOpenChange={setRightColumnOpen}>
          <SourcesColumn />
        </CollapsibleColumn>
      </div>
    </div>
  )
}
```

**Key Features**:
- Sticky header with title + actions
- 3-column collapsible layout
- Chat panel on one side
- Scrollable content area
- Side panel for contextual info

---

### 3. Form/Settings Page Pattern

**Pages**: `/settings`, `/settings/api-keys`

**Structure**:
```tsx
export default function SettingsPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto p-6 space-y-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Settings</h1>
            <p className="text-muted-foreground">Configure your application.</p>
          </div>

          <FormSection title="API Configuration">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>API Key</Label>
                <Input type="password" placeholder="sk-..." />
              </div>
            </div>
          </FormSection>

          <FormSection title="Preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable Feature X</Label>
                  <p className="text-sm text-muted-foreground">Description</p>
                </div>
                <Switch />
              </div>
            </div>
          </FormSection>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
```

**Key Features**:
- Centered single-column layout
- Section groupings
- Form with labels and descriptions
- Sticky footer with save/cancel

---

### 4. Wizard/Multi-Step Pattern

**Pages**: Add source flow

**Structure**:
```tsx
export default function AddSourcePage() {
  const [step, setStep] = useState(0)

  const steps = [
    { title: 'Select Type', component: <SourceTypeStep /> },
    { title: 'Configure', component: <ProcessingStep /> },
    { title: 'Notebooks', component: <NotebooksStep /> }
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 p-4 border-b">
        {steps.map((s, i) => (
          <div key={i} className={i <= step ? 'text-primary' : 'text-muted'}>
            {i + 1}. {s.title}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="flex-1 overflow-auto p-6">
        <WizardContainer>
          {steps[step].component}
        </WizardContainer>
      </div>

      {/* Navigation */}
      <div className="flex justify-between p-4 border-t">
        <Button
          variant="outline"
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          Back
        </Button>
        {step < steps.length - 1 ? (
          <Button onClick={() => setStep(s => s + 1)}>
            Next
          </Button>
        ) : (
          <Button onClick={handleFinish}>
            Finish
          </Button>
        )}
      </div>
    </div>
  )
}
```

---

### 5. Tabs Page Pattern

**Pages**: `/podcasts`

**Structure**:
```tsx
export default function TabsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-6">
        <h1 className="text-2xl font-semibold mb-4">Podcasts</h1>
        <Tabs defaultValue="episodes">
          <TabsList>
            <TabsTrigger value="episodes">Episodes</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="profiles">Profiles</TabsTrigger>
          </TabsList>

          <TabsContent value="episodes">
            <EpisodesTab />
          </TabsContent>
          <TabsContent value="templates">
            <TemplatesTab />
          </TabsContent>
          <TabsContent value="profiles">
            <SpeakerProfilesPanel />
            <EpisodeProfilesPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
```

---

## Common Page Layout Elements

### Loading State
```tsx
{isLoading ? (
  <div className="flex items-center justify-center h-full">
    <LoadingSpinner />
  </div>
) : null}
```

### Error State
```tsx
{error ? (
  <div className="p-6">
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  </div>
) : null}
```

### Permission Denied
Pattern not explicitly implemented but recommended:
```tsx
{!hasPermission ? (
  <EmptyState
    icon={Lock}
    title="Access Denied"
    description="You don't have permission to view this page."
  />
) : null}
```
