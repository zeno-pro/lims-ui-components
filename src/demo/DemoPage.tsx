import React from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Label,
  Textarea,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Checkbox,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Progress,
  Separator,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Alert,
  AlertTitle,
  AlertDescription,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  ScrollArea,
} from '@/components/ui'
import {
  StatusIndicator,
  StatusBadge,
  MeasurementInput,
  SpecCompliance,
  SampleCard,
  KPICard,
  EmptyState,
  LoadingState,
  SpecRange,
  TestResultCard,
  SampleTracker,
  EquipmentSelector,
} from '@/components/lims'
import type { Equipment } from '@/types'
import {
  FileText,
  AlertCircle,
  Bell,
  ChevronDown,
  Download,
  Settings,
  User,
  Trash2,
} from 'lucide-react'

const sampleEquipment: Equipment[] = [
  { id: 'eq-1', name: 'Spectrum Analyzer', model: 'RSA5065', serialNumber: 'SN12345', calibrationDate: new Date('2024-01-15'), nextCalibrationDate: new Date('2025-01-15'), calibrationInterval: 12, status: 'calibrated' as const },
  { id: 'eq-2', name: 'Oscilloscope', model: 'DSO-X3034A', serialNumber: 'SN67890', calibrationDate: new Date('2023-06-20'), nextCalibrationDate: new Date('2024-06-20'), calibrationInterval: 12, status: 'calibration-due' as const },
  { id: 'eq-3', name: 'Signal Generator', model: 'SMW200A', serialNumber: 'SN11111', calibrationDate: new Date('2024-02-10'), nextCalibrationDate: new Date('2025-02-10'), calibrationInterval: 12, status: 'maintenance' as const },
  { id: 'eq-4', name: 'EMC Receiver', model: 'ESR3', serialNumber: 'SN22222', calibrationDate: new Date('2024-03-01'), nextCalibrationDate: new Date('2025-03-01'), calibrationInterval: 12, status: 'calibrated' as const },
]

const trackerEvents = [
  { status: 'pending' as const, timestamp: new Date('2024-03-18T09:00:00'), user: 'John Doe' },
  { status: 'in-progress' as const, timestamp: new Date('2024-03-18T10:30:00'), user: 'Jane Smith', note: 'Test started' },
  { status: 'pass' as const, timestamp: new Date('2024-03-18T14:00:00'), user: 'Jane Smith' },
]

export function DemoPage() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [switchChecked, setSwitchChecked] = React.useState(false)
  const [radioValue, setRadioValue] = React.useState('opt1')
  const [checkboxChecked, setCheckboxChecked] = React.useState(false)
  const [popoverOpen, setPopoverOpen] = React.useState(false)

  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">LIMS UI Components Demo</h1>
        <p className="text-muted-foreground">
          Component library for Electrical & EMC Testing Laboratories
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="success">Success</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Bell className="size-4" /></Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button asChild><a href="#">Link as Child</a></Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Pass</Badge>
            <Badge variant="destructive">Fail</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Pending</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="secondary">Secondary</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Status Indicators</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-6">
            <StatusIndicator status="pass" showLabel />
            <StatusIndicator status="fail" showLabel />
            <StatusIndicator status="pending" showLabel />
            <StatusIndicator status="warning" showLabel />
            <StatusIndicator status="calibrated" showLabel />
            <StatusIndicator status="calibration-due" showLabel pulse />
            <StatusIndicator status="maintenance" showLabel />
            <StatusIndicator status="retired" showLabel />
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <StatusIndicator status="pass" size="sm" />
            <StatusIndicator status="pass" size="md" />
            <StatusIndicator status="pass" size="lg" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Status Badges</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="pass" />
            <StatusBadge status="fail" />
            <StatusBadge status="pending" />
            <StatusBadge status="warning" />
            <StatusBadge status="calibrated" />
            <StatusBadge status="calibration-due" />
            <StatusBadge status="maintenance" />
            <StatusBadge status="retired" />
            <StatusBadge status="pass" variant="secondary" />
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="pass" size="sm" />
            <StatusBadge status="pass" size="default" />
            <StatusBadge status="pass" size="lg" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Alerts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Alert variant="default">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is a default alert for general information.</AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>The test completed successfully and all results are within limits.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Failed to complete the test. Please check the equipment calibration status.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Equipment calibration is due in 5 days.</AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Form Inputs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="input">Text Input</Label>
            <Input id="input" placeholder="Enter value" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-error">Input with Error</Label>
            <Input id="input-error" placeholder="Enter value" error />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-disabled">Disabled Input</Label>
            <Input id="input-disabled" placeholder="Disabled" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="textarea">Textarea</Label>
            <Textarea id="textarea" placeholder="Enter description" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="textarea-error">Textarea with Error</Label>
            <Textarea id="textarea-error" placeholder="Enter description" error />
          </div>
          <div className="space-y-2">
            <Label>Checkbox</Label>
            <div className="flex items-center gap-2">
              <Checkbox id="checkbox" checked={checkboxChecked} onCheckedChange={(checked) => setCheckboxChecked(Boolean(checked))} />
              <Label htmlFor="checkbox" className="font-normal">Accept terms and conditions</Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Switch</Label>
            <div className="flex items-center gap-2">
              <Switch id="switch" checked={switchChecked} onCheckedChange={setSwitchChecked} />
              <Label htmlFor="switch" className="font-normal">Enable notifications</Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Radio Group</Label>
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt1" id="r1" />
                <Label htmlFor="r1" className="font-normal">Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt2" id="r2" />
                <Label htmlFor="r2" className="font-normal">Option 2</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt3" id="r3" />
                <Label htmlFor="r3" className="font-normal">Option 3</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="select">Select</Label>
            <Select>
              <SelectTrigger id="select">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="opt1">Option 1</SelectItem>
                <SelectItem value="opt2">Option 2</SelectItem>
                <SelectItem value="opt3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Measurement Input</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MeasurementInput
            label="Conducted Emission"
            value={23.5}
            unit="dBμV"
            precision={2}
            onChange={() => {}}
          />
          <MeasurementInput
            label="With Error"
            value={35.2}
            unit="dBμV"
            precision={2}
            onChange={() => {}}
            error="Value exceeds maximum limit"
          />
          <MeasurementInput
            label="Disabled"
            value={null}
            unit="dBμV"
            onChange={() => {}}
            disabled
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Progress</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>45%</span>
            </div>
            <Progress value={45} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Success</span>
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tabs</h2>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Test Results</TabsTrigger>
            <TabsTrigger value="tab2">Samples</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-sm text-muted-foreground py-4">Test results content goes here.</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-sm text-muted-foreground py-4">Samples content goes here.</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-sm text-muted-foreground py-4">Reports content goes here.</p>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Accordion</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Conducted Emissions Test</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                This test measures electromagnetic disturbances conducted along power lines...
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Radiated Emissions Test</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                This test measures electromagnetic emissions radiated through space...
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Electrostatic Discharge Test</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                This test evaluates the immunity of devices to electrostatic discharge...
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog</h2>
        <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>
                Are you sure you want to proceed with this action? This cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="success" onClick={() => setDialogOpen(false)}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Popover & Tooltip</h2>
        <div className="flex flex-wrap gap-4">
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-medium">Popover Title</h4>
                <p className="text-sm text-muted-foreground">
                  This is a popover with additional information or actions.
                </p>
              </div>
            </PopoverContent>
          </Popover>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover for Tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu <ChevronDown className="ml-2 size-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem><User className="mr-2 size-4" /> Profile</DropdownMenuItem>
            <DropdownMenuItem><Settings className="mr-2 size-4" /> Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Download className="mr-2 size-4" /> Export</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 size-4" /> Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Table</h2>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sample ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">SAM-2024-001</TableCell>
                <TableCell>Industrial Power Supply</TableCell>
                <TableCell><StatusBadge status="pass" size="sm" /></TableCell>
                <TableCell className="text-success">PASS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">SAM-2024-002</TableCell>
                <TableCell>Medical Device Controller</TableCell>
                <TableCell><StatusBadge status="pending" size="sm" /></TableCell>
                <TableCell className="text-info">PENDING</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">SAM-2024-003</TableCell>
                <TableCell>Automotive ECU Module</TableCell>
                <TableCell><StatusBadge status="fail" size="sm" /></TableCell>
                <TableCell className="text-destructive">FAIL</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Separator</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>Section 1</span>
            <Separator orientation="vertical" className="h-6" />
            <span>Section 2</span>
            <Separator orientation="vertical" className="h-6" />
            <span>Section 3</span>
          </div>
          <Separator />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">ScrollArea</h2>
        <ScrollArea className="h-[200px] w-full border rounded-lg p-4">
          <div className="space-y-4">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-sm">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </ScrollArea>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cards</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Sample Card</CardTitle>
              <CardDescription>With interactive hover state</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a sample card component with various slots and states.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">View Details</Button>
            </CardFooter>
          </Card>
          <Card interactive>
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Click to interact</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Hover to see the elevation change effect.
              </p>
            </CardContent>
          </Card>
          <KPICard
            title="Total Samples"
            value={128}
            change={12}
            changeLabel="vs last month"
            icon={<FileText className="size-6" />}
          />
          <KPICard
            title="Pass Rate"
            value="94.2%"
            status="success"
            icon={<FileText className="size-6" />}
          />
          <KPICard
            title="Calibrations Due"
            value={3}
            status="warning"
            icon={<AlertCircle className="size-6" />}
          />
          <KPICard
            title="Failed Tests"
            value={2}
            status="destructive"
            icon={<AlertCircle className="size-6" />}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spec Compliance</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <SpecCompliance
            parameter="Conducted Emission (150kHz-30MHz)"
            measuredValue={23.5}
            unit="dBμV"
            specValue={30}
            limitType="max"
          />
          <SpecCompliance
            parameter="Radiated Emission (30MHz-1GHz)"
            measuredValue={45.2}
            unit="dBμV/m"
            specValue={40}
            limitType="max"
          />
          <SpecCompliance
            parameter="ESD Immunity (Contact)"
            measuredValue={8}
            unit="kV"
            specValue={8}
            limitType="max"
          />
          <SpecCompliance
            parameter="RF Field Strength"
            measuredValue={10}
            unit="V/m"
            specMin={3}
            specMax={10}
            limitType="range"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spec Range</h2>
        <div className="flex flex-wrap gap-6">
          <SpecRange min={0} max={30} unit="dBμV" label="Limit Range" />
          <SpecRange min={3} max={10} unit="V/m" label="Acceptable Range" />
          <SpecRange max={40} unit="dBμV/m" label="Maximum Limit" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sample Cards</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SampleCard
            sampleId="SAM-2024-001"
            productName="Industrial Power Supply"
            customerName="Acme Corp"
            status="in-progress"
            testProgress={{ completed: 3, total: 8 }}
            receivedAt={new Date('2024-03-15')}
          />
          <SampleCard
            sampleId="SAM-2024-002"
            productName="Medical Device Controller"
            customerName="HealthTech Inc"
            status="completed"
            testProgress={{ completed: 8, total: 8 }}
            receivedAt={new Date('2024-03-10')}
          />
          <SampleCard
            sampleId="SAM-2024-003"
            productName="Automotive ECU Module"
            customerName="AutoParts Ltd"
            status="received"
            testProgress={{ completed: 0, total: 12 }}
            receivedAt={new Date('2024-03-18')}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Test Result Cards</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <TestResultCard
            testName="Conducted Emissions"
            testMethod="CISPR 32"
            status="pass"
            completedAt={new Date('2024-03-18T14:00:00')}
            completedBy="Jane Smith"
            measurements={[
              { label: 'Peak', value: 23.5, unit: 'dBμV', result: 'pass' },
              { label: 'Avg', value: 18.2, unit: 'dBμV', result: 'pass' },
              { label: 'QP', value: 25.1, unit: 'dBμV', result: 'pass' },
            ]}
          />
          <TestResultCard
            testName="Radiated Emissions"
            testMethod="CISPR 32"
            status="fail"
            completedAt={new Date('2024-03-18T16:00:00')}
            completedBy="John Doe"
            measurements={[
              { label: 'Peak', value: 55.3, unit: 'dBμV/m', result: 'fail' },
              { label: 'Avg', value: 42.1, unit: 'dBμV/m', result: 'pass' },
              { label: 'QP', value: 48.7, unit: 'dBμV/m', result: 'fail' },
            ]}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sample Tracker</h2>
        <Card>
          <CardContent className="pt-6">
            <SampleTracker events={trackerEvents} />
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Equipment Selector</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EquipmentSelector
            label="Select Equipment"
            value="eq-1"
            onChange={() => {}}
            equipment={sampleEquipment}
          />
          <EquipmentSelector
            label="With Calibration Due Warning"
            value="eq-2"
            onChange={() => {}}
            equipment={sampleEquipment}
          />
          <EquipmentSelector
            label="Disabled"
            value="eq-1"
            onChange={() => {}}
            equipment={sampleEquipment}
            disabled
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <EmptyState
            icon={<AlertCircle className="size-8" />}
            title="No Samples Found"
            description="There are no samples matching your criteria. Try adjusting your filters."
            action={{
              label: 'Clear Filters',
              onClick: () => console.log('Clear filters'),
            }}
          />
          <div className="flex items-center justify-center p-8 border rounded-lg">
            <LoadingState variant="inline" />
          </div>
          <div className="border rounded-lg p-8">
            <LoadingState variant="skeleton" />
          </div>
        </div>
        <div className="border rounded-lg p-12">
          <LoadingState variant="full" text="Loading samples..." />
        </div>
      </section>
    </div>
  )
}