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
  ThemeToggle,
  LanguageToggle,
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
import {
  AppShell,
  PageHeader,
  CollapsibleColumn,
  Sidebar,
  ListPageLayout,
  DetailPageLayout,
  SettingsPageLayout,
  FormSection,
  WizardLayout,
  type SidebarNavGroup,
} from '@/components/layout'
import { useI18n } from '@/i18n'
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
  Plus,
  RefreshCw,
  ClipboardList,
  Activity,
  Package,
  FileCheck,
  Truck,
  Calendar,
  Users,
  ShieldCheck,
  Gauge,
  Scan,
  BarChart3,
  ClipboardCheck,
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

const sidebarNavigation: SidebarNavGroup[] = [
  {
    title: 'Samples',
    items: [
      { name: 'Sample Intake', href: '/samples/intake', icon: Truck },
      { name: 'Sample List', href: '/samples', icon: Package },
      { name: 'Sample Tracking', href: '/samples/tracking', icon: Activity },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Test Requests', href: '/tests/requests', icon: ClipboardList },
      { name: 'Test Results', href: '/tests/results', icon: FileCheck },
      { name: 'Test Plans', href: '/tests/plans', icon: ClipboardCheck },
    ],
  },
  {
    title: 'Equipment',
    items: [
      { name: 'Equipment List', href: '/equipment', icon: Gauge },
      { name: 'Calibration', href: '/equipment/calibration', icon: Scan },
      { name: 'Maintenance', href: '/equipment/maintenance', icon: ShieldCheck },
    ],
  },
  {
    title: 'Reports',
    items: [
      { name: 'Test Reports', href: '/reports/tests', icon: FileText },
      { name: 'Compliance', href: '/reports/compliance', icon: ShieldCheck },
      { name: 'Statistics', href: '/reports/statistics', icon: BarChart3 },
    ],
  },
  {
    title: 'Administration',
    items: [
      { name: 'Calendar', href: '/calendar', icon: Calendar },
      { name: 'Users', href: '/users', icon: Users },
      { name: 'Settings', href: '/settings', icon: Settings },
    ],
  },
]

const wizardSteps = [
  { title: 'Sample Info', description: 'Enter sample details' },
  { title: 'Select Tests', description: 'Choose test parameters' },
  { title: 'Assign Equipment', description: 'Select calibration equipment' },
  { title: 'Review & Submit', description: 'Confirm test request' },
]

export function DemoPage() {
  const { t } = useI18n()
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [switchChecked, setSwitchChecked] = React.useState(false)
  const [radioValue, setRadioValue] = React.useState('opt1')
  const [checkboxChecked, setCheckboxChecked] = React.useState(false)
  const [popoverOpen, setPopoverOpen] = React.useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)
  const [leftColumnOpen, setLeftColumnOpen] = React.useState(true)
  const [rightColumnOpen, setRightColumnOpen] = React.useState(true)
  const [wizardStep, setWizardStep] = React.useState(0)
  const [listSearch, setListSearch] = React.useState('')

  const translatedWizardSteps = [
    { title: t.demo.enterSampleDetails, description: t.demo.chooseTestParameters },
    { title: t.demo.chooseTestParameters, description: t.demo.selectCalibrationEquipment },
    { title: t.demo.selectCalibrationEquipment, description: t.demo.confirmTestRequest },
    { title: t.demo.confirmTestRequest, description: t.demo.confirmAndSubmit },
  ]

  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{t.demo.title}</h1>
        <p className="text-muted-foreground">
          {t.demo.subtitle}
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.buttons}</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>{t.demo.default}</Button>
            <Button variant="success">{t.demo.success}</Button>
            <Button variant="destructive">{t.demo.destructive}</Button>
            <Button variant="outline">{t.demo.outline}</Button>
            <Button variant="secondary">{t.demo.secondary}</Button>
            <Button variant="ghost">{t.demo.ghost}</Button>
            <Button variant="link">{t.demo.link}</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">{t.demo.small}</Button>
            <Button size="default">{t.demo.default}</Button>
            <Button size="lg">{t.demo.large}</Button>
            <Button size="icon"><Bell className="size-4" /></Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button isLoading>{t.demo.loading}</Button>
            <Button disabled>{t.demo.disabled}</Button>
            <Button asChild><a href="#">{t.demo.link} as Child</a></Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.badges}</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="default">{t.demo.default}</Badge>
            <Badge variant="success">{t.demo.pass}</Badge>
            <Badge variant="destructive">{t.demo.fail}</Badge>
            <Badge variant="warning">{t.common.warning}</Badge>
            <Badge variant="info">{t.demo.pending}</Badge>
            <Badge variant="outline">{t.demo.outline}</Badge>
            <Badge variant="secondary">{t.demo.secondary}</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm">{t.demo.small}</Badge>
            <Badge size="default">{t.demo.default}</Badge>
            <Badge size="lg">{t.demo.large}</Badge>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.statusIndicators}</h2>
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
        <h2 className="text-xl font-semibold">{t.demo.statusBadges}</h2>
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
        <h2 className="text-xl font-semibold">{t.demo.alerts}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Alert variant="default">
            <AlertTitle>{t.demo.defaultAlert}</AlertTitle>
            <AlertDescription>{t.demo.alertInfoDescription}</AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>{t.demo.successAlert}</AlertTitle>
            <AlertDescription>{t.demo.alertSuccessDescription}</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>{t.demo.errorAlert}</AlertTitle>
            <AlertDescription>{t.demo.valueExceeds}</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>{t.demo.warningAlert}</AlertTitle>
            <AlertDescription>{t.demo.alertCalibrationDescription}</AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.formInputs}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="input">{t.demo.textInput}</Label>
            <Input id="input" placeholder={t.demo.enterValue} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-error">{t.demo.inputError}</Label>
            <Input id="input-error" placeholder={t.demo.enterValue} error />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-disabled">{t.demo.disabledInput}</Label>
            <Input id="input-disabled" placeholder={t.demo.disabledInput} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="textarea">{t.demo.textarea}</Label>
            <Textarea id="textarea" placeholder={t.demo.enterDescription} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="textarea-error">{t.demo.textareaError}</Label>
            <Textarea id="textarea-error" placeholder={t.demo.enterDescription} error />
          </div>
          <div className="space-y-2">
            <Label>{t.demo.checkbox}</Label>
            <div className="flex items-center gap-2">
              <Checkbox id="checkbox" checked={checkboxChecked} onCheckedChange={(checked) => setCheckboxChecked(Boolean(checked))} />
              <Label htmlFor="checkbox" className="font-normal">{t.demo.acceptTerms}</Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label>{t.demo.switch}</Label>
            <div className="flex items-center gap-2">
              <Switch id="switch" checked={switchChecked} onCheckedChange={setSwitchChecked} />
              <Label htmlFor="switch" className="font-normal">{t.demo.enableNotifications}</Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label>{t.demo.radioGroup}</Label>
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt1" id="r1" />
                <Label htmlFor="r1" className="font-normal">{t.demo.option1}</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt2" id="r2" />
                <Label htmlFor="r2" className="font-normal">{t.demo.option2}</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt3" id="r3" />
                <Label htmlFor="r3" className="font-normal">{t.demo.option3}</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="select">{t.demo.select}</Label>
            <Select>
              <SelectTrigger id="select">
                <SelectValue placeholder={t.demo.selectOption} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="opt1">{t.demo.option1}</SelectItem>
                <SelectItem value="opt2">{t.demo.option2}</SelectItem>
                <SelectItem value="opt3">{t.demo.option3}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.measurementInput}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MeasurementInput
            label={t.demo.conductedEmission}
            value={23.5}
            unit="dBμV"
            precision={2}
            onChange={() => {}}
          />
          <MeasurementInput
            label={t.demo.inputError}
            value={35.2}
            unit="dBμV"
            precision={2}
            onChange={() => {}}
            error={t.demo.valueExceeds}
          />
          <MeasurementInput
            label={t.demo.disabledInput}
            value={null}
            unit="dBμV"
            onChange={() => {}}
            disabled
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.progress}</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{t.demo.progress}</span>
              <span>45%</span>
            </div>
            <Progress value={45} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{t.demo.success}</span>
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.tabs}</h2>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">{t.nav.testResults}</TabsTrigger>
            <TabsTrigger value="tab2">{t.nav.samples}</TabsTrigger>
            <TabsTrigger value="tab3">{t.nav.reports}</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-sm text-muted-foreground py-4">{t.demo.tabsTestResultsContent}</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-sm text-muted-foreground py-4">{t.demo.tabsSamplesContent}</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-sm text-muted-foreground py-4">{t.demo.tabsReportsContent}</p>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.accordion}</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t.demo.conductedEmissionsTest}</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                This test measures electromagnetic disturbances conducted along power lines...
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t.demo.radiatedEmissionsTest}</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                This test measures electromagnetic emissions radiated through space...
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{t.demo.esdTest}</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                This test evaluates the immunity of devices to electrostatic discharge...
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.dialog}</h2>
        <Button onClick={() => setDialogOpen(true)}>{t.demo.confirmAction}</Button>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.demo.confirmAction}</DialogTitle>
              <DialogDescription>
                {t.demo.confirmMessage}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                {t.common.cancel}
              </Button>
              <Button variant="success" onClick={() => setDialogOpen(false)}>
                {t.common.confirm}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.popoverTooltip}</h2>
        <div className="flex flex-wrap gap-4">
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline">{t.demo.openPopover}</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-medium">{t.demo.popoverTitle}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.demo.popoverContent}
                </p>
              </div>
            </PopoverContent>
          </Popover>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">{t.demo.hoverTooltip}</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t.demo.tooltipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.dropdownMenu}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{t.demo.openMenu} <ChevronDown className="ml-2 size-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem><User className="mr-2 size-4" /> {t.demo.profile}</DropdownMenuItem>
            <DropdownMenuItem><Settings className="mr-2 size-4" /> {t.demo.settings}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Download className="mr-2 size-4" /> {t.demo.export}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 size-4" /> {t.common.delete}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.table}</h2>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.demo.sampleId}</TableHead>
                <TableHead>{t.demo.product}</TableHead>
                <TableHead>{t.demo.status}</TableHead>
                <TableHead>{t.demo.result}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">SAM-2024-001</TableCell>
                <TableCell>Industrial Power Supply</TableCell>
                <TableCell><StatusBadge status="pass" size="sm" /></TableCell>
                <TableCell className="text-success">{t.demo.pass}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">SAM-2024-002</TableCell>
                <TableCell>Medical Device Controller</TableCell>
                <TableCell><StatusBadge status="pending" size="sm" /></TableCell>
                <TableCell className="text-info">{t.demo.pending}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">SAM-2024-003</TableCell>
                <TableCell>Automotive ECU Module</TableCell>
                <TableCell><StatusBadge status="fail" size="sm" /></TableCell>
                <TableCell className="text-destructive">{t.demo.fail}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.separator}</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>{t.demo.sampleCards}</span>
            <Separator orientation="vertical" className="h-6" />
            <span>{t.demo.testResultCards}</span>
            <Separator orientation="vertical" className="h-6" />
            <span>{t.demo.equipmentSelector}</span>
          </div>
          <Separator />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.scrollArea}</h2>
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
        <h2 className="text-xl font-semibold">{t.demo.cards}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{t.demo.sampleCards}</CardTitle>
              <CardDescription>{t.demo.sampleCardsDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a sample card component with various slots and states.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">{t.page.viewAll}</Button>
            </CardFooter>
          </Card>
          <Card interactive>
            <CardHeader>
              <CardTitle>{t.demo.testResultCards}</CardTitle>
              <CardDescription>{t.demo.clickToInteract}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t.demo.hoverElevationEffect}
              </p>
            </CardContent>
          </Card>
          <KPICard
            title={t.page.totalSamples}
            value={128}
            change={12}
            changeLabel={t.demo.vsLastMonth}
            icon={<FileText className="size-6" />}
          />
          <KPICard
            title={t.demo.passRate}
            value="94.2%"
            status="success"
            icon={<FileText className="size-6" />}
          />
          <KPICard
            title={t.demo.calibrationAlerts}
            value={3}
            status="warning"
            icon={<AlertCircle className="size-6" />}
          />
          <KPICard
            title={t.demo.failedTests}
            value={2}
            status="destructive"
            icon={<AlertCircle className="size-6" />}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.specCompliance}</h2>
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
        <h2 className="text-xl font-semibold">{t.demo.specRange}</h2>
        <div className="flex flex-wrap gap-6">
          <SpecRange min={0} max={30} unit="dBμV" label="Limit Range" />
          <SpecRange min={3} max={10} unit="V/m" label="Acceptable Range" />
          <SpecRange max={40} unit="dBμV/m" label="Maximum Limit" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.sampleCards}</h2>
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
        <h2 className="text-xl font-semibold">{t.demo.testResultCards}</h2>
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
        <h2 className="text-xl font-semibold">{t.demo.sampleTracker}</h2>
        <Card>
          <CardContent className="pt-6">
            <SampleTracker events={trackerEvents} />
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.equipmentSelector}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EquipmentSelector
            label={t.demo.equipmentSelector}
            value="eq-1"
            onChange={() => {}}
            equipment={sampleEquipment}
          />
          <EquipmentSelector
            label={t.demo.calibrationAlerts}
            value="eq-2"
            onChange={() => {}}
            equipment={sampleEquipment}
          />
          <EquipmentSelector
            label={t.demo.disabledInput}
            value="eq-1"
            onChange={() => {}}
            equipment={sampleEquipment}
            disabled
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.states}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <EmptyState
            icon={<AlertCircle className="size-8" />}
            title={t.demo.sampleTracker}
            description={t.demo.noSamplesMatchCriteria}
            action={{
              label: t.page.refresh,
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
          <LoadingState variant="full" text={t.common.loading} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.pageHeader}</h2>
        <Card>
          <PageHeader
            title={t.demo.laboratoryName}
            description={t.page.laboratoryOverview}
            actions={
              <>
                <LanguageToggle />
                <ThemeToggle />
                <Button variant="outline" size="icon"><RefreshCw className="size-4" /></Button>
                <Button><Plus className="size-4 mr-1" /> {t.page.createNew}</Button>
              </>
            }
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.sidebar}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="flex h-[300px]">
              <Sidebar
                navigation={sidebarNavigation}
                collapsed={sidebarCollapsed}
                activeHref="/notebooks"
              />
              <div className="flex-1 p-4 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">{t.demo.sidebarState}: {sidebarCollapsed ? t.demo.collapsed : t.demo.expanded}</p>
                <Button variant="outline" size="sm" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                  {sidebarCollapsed ? t.demo.expand : t.demo.collapse} {t.demo.sidebar}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.collapsibleColumn}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="flex h-[200px]">
              <CollapsibleColumn
                open={leftColumnOpen}
                onOpenChange={setLeftColumnOpen}
                side="left"
                defaultWidth={200}
              >
                <div className="p-4">
                  <p className="text-sm font-medium">{t.demo.leftPanel}</p>
                  <p className="text-xs text-muted-foreground">{t.demo.toggleVisibility}</p>
                </div>
              </CollapsibleColumn>
              <div className="flex-1 p-4">
                <p className="text-sm">{t.demo.mainContentArea}</p>
              </div>
              <CollapsibleColumn
                open={rightColumnOpen}
                onOpenChange={setRightColumnOpen}
                side="right"
                defaultWidth={200}
              >
                <div className="p-4">
                  <p className="text-sm font-medium">{t.demo.rightPanel}</p>
                  <p className="text-xs text-muted-foreground">{t.demo.toggleVisibility}</p>
                </div>
              </CollapsibleColumn>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.appShell}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="flex h-[300px]">
              <AppShell
                fullHeight={false}
                sidebar={
                  <Sidebar
                    navigation={sidebarNavigation}
                    collapsed={sidebarCollapsed}
                    activeHref="/samples"
                  />
                }
              >
                <PageHeader
                  title={t.page.dashboard}
                  description={t.page.laboratoryOverview}
                  actions={<Button size="sm">{t.page.viewAll}</Button>}
                />
                <div className="flex-1 overflow-auto p-4">
                  <div className="grid gap-4 grid-cols-3">
                    <KPICard title={t.page.totalSamples} value="156" change={12} changeLabel={t.demo.vsLastMonth} />
                    <KPICard title={t.page.testsInProgress} value="23" change={5} changeLabel={t.demo.vsLastWeek} status="warning" />
                    <KPICard title={t.page.pendingReports} value="8" change={-3} changeLabel={t.demo.vsLastWeek} status="success" />
                  </div>
                </div>
              </AppShell>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.listPageLayout}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="h-[400px]">
              <ListPageLayout
                title={t.demo.sampleList}
                description={t.demo.manageSamples}
                searchPlaceholder={t.demo.searchSamples}
                searchValue={listSearch}
                onSearchChange={setListSearch}
                isEmpty={false}
                onCreate={() => console.log('Create clicked')}
                onRefresh={() => console.log('Refresh clicked')}
              >
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
              </ListPageLayout>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.detailPageLayout}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="h-[300px]">
              <DetailPageLayout
                title={t.demo.sampleCards}
                description="SAM-2024-001"
                headerActions={<Button size="sm">{t.common.edit} Sample</Button>}
                leftColumn={<div className="p-4"><p className="text-sm font-medium">{t.nav.testResults}</p><p className="text-xs text-muted-foreground mt-1">3 tests completed</p></div>}
                rightColumn={<div className="p-4"><p className="text-sm font-medium">{t.nav.equipment}</p><p className="text-xs text-muted-foreground mt-1">Spectrum Analyzer</p></div>}
                leftColumnOpen={leftColumnOpen}
                onLeftColumnOpenChange={setLeftColumnOpen}
                rightColumnOpen={rightColumnOpen}
                onRightColumnOpenChange={setRightColumnOpen}
              >
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">{t.demo.product}</p>
                        <p className="text-sm font-medium">Industrial Power Supply</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Customer</p>
                        <p className="text-sm font-medium">Acme Corp</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <StatusBadge status="pending" />
                    </div>
                  </div>
                </div>
              </DetailPageLayout>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.settingsPageLayout}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="h-[350px] overflow-auto">
              <SettingsPageLayout
                title={t.demo.systemSettings}
                description={t.demo.configureLaboratorySettings}
                onSave={() => console.log('Save clicked')}
                onCancel={() => console.log('Cancel clicked')}
              >
                <FormSection title={t.demo.laboratoryInfo} description={t.demo.basicLaboratoryInfo}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>{t.demo.laboratoryName}</Label>
                      <Input placeholder={t.demo.enterProductName} />
                    </div>
                    <div className="space-y-2">
                      <Label>{t.demo.laboratoryId}</Label>
                      <Input placeholder="LAB-001" />
                    </div>
                  </div>
                </FormSection>
                <FormSection title={t.demo.calibrationAlerts}>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>{t.demo.calibrationAlerts}</Label>
                      <p className="text-sm text-muted-foreground">{t.demo.calibrationAlerts}</p>
                    </div>
                    <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />
                  </div>
                </FormSection>
              </SettingsPageLayout>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.demo.wizardLayout}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="h-[300px]">
              <WizardLayout
                steps={translatedWizardSteps}
                currentStep={wizardStep}
                onStepChange={setWizardStep}
                onBack={() => setWizardStep(Math.max(0, wizardStep - 1))}
                onNext={() => setWizardStep(Math.min(wizardSteps.length - 1, wizardStep + 1))}
                onFinish={() => console.log('Wizard finished')}
              >
                <div className="space-y-4">
                  {wizardStep === 0 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>{t.demo.sampleId}</Label>
                        <Input placeholder={t.demo.sampleId} />
                      </div>
                      <div className="space-y-2">
                        <Label>{t.demo.product}</Label>
                        <Input placeholder={t.demo.enterProductName} />
                      </div>
                      <div className="space-y-2">
                        <Label>{t.demo.additionalNotes}</Label>
                        <Textarea placeholder={t.demo.enterDescription} />
                      </div>
                    </div>
                  )}
                  {wizardStep === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>{t.demo.testType}</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder={t.demo.selectOption} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emc">EMC Emission Test</SelectItem>
                            <SelectItem value=" immunity">Immunity Test</SelectItem>
                            <SelectItem value="safety">Safety Test</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>{t.demo.testType}</Label>
                        <div className="flex items-center gap-2">
                          <Checkbox id="param1" />
                          <Label htmlFor="param1" className="font-normal">{t.demo.conductedEmissionsTest}</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="param2" />
                          <Label htmlFor="param2" className="font-normal">{t.demo.radiatedEmissionsTest}</Label>
                        </div>
                      </div>
                    </div>
                  )}
                  {wizardStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>{t.demo.equipmentSelector}</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder={t.demo.selectOption} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eq1">Spectrum Analyzer RSA5065</SelectItem>
                            <SelectItem value="eq2">Oscilloscope DSO-X3034A</SelectItem>
                            <SelectItem value="eq3">Signal Generator SMW200A</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>{t.demo.calibrationDueDate}</Label>
                        <Input type="date" />
                      </div>
                    </div>
                  )}
                  {wizardStep === 3 && (
                    <div className="space-y-4">
                      <Alert>
                        <AlertTitle>{t.demo.reviewTestRequest}</AlertTitle>
                        <AlertDescription>{t.demo.verifyInfoBeforeSubmit}</AlertDescription>
                      </Alert>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t.demo.sample}:</span>
                          <span>DEMO-001</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t.demo.testType}:</span>
                          <span>EMC Emission Test</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t.demo.equipment}:</span>
                          <span>Spectrum Analyzer</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </WizardLayout>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}