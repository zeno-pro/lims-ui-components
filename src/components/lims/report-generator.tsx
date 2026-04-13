import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export interface ReportGeneratorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  samples: Array<{ id: string; name: string }>
  onGenerate: (config: ReportConfig) => void
  className?: string
}

export interface ReportConfig {
  reportType: 'test-report' | 'certificate' | 'summary'
  format: 'pdf' | 'excel' | 'word'
  sampleIds: string[]
  includePhotos: boolean
  includeRawData: boolean
}

export function ReportGenerator({ open, onOpenChange, samples, onGenerate, className }: ReportGeneratorProps) {
  const [reportType, setReportType] = React.useState<'test-report' | 'certificate' | 'summary'>('test-report')
  const [format, setFormat] = React.useState<'pdf' | 'excel' | 'word'>('pdf')
  const [selectedSamples, setSelectedSamples] = React.useState<string[]>([])
  const [includePhotos, setIncludePhotos] = React.useState(false)
  const [includeRawData, setIncludeRawData] = React.useState(false)

  const handleGenerate = () => {
    onGenerate({
      reportType,
      format,
      sampleIds: selectedSamples,
      includePhotos,
      includeRawData,
    })
    onOpenChange(false)
  }

  const toggleSample = (id: string) => {
    setSelectedSamples((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const selectAll = () => {
    setSelectedSamples(samples.map((s) => s.id))
  }

  const selectNone = () => {
    setSelectedSamples([])
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('max-w-md', className)}>
        <DialogHeader>
          <DialogTitle>Generate Report</DialogTitle>
          <DialogDescription>
            Configure and generate a report for your selected samples.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label>Report Type</Label>
            <RadioGroup value={reportType} onValueChange={(v) => setReportType(v as typeof reportType)}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="test-report" id="test-report" />
                <Label htmlFor="test-report" className="font-normal">Test Report</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="certificate" id="certificate" />
                <Label htmlFor="certificate" className="font-normal">Certificate</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="summary" id="summary" />
                <Label htmlFor="summary" className="font-normal">Summary</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label>Format</Label>
            <RadioGroup value={format} onValueChange={(v) => setFormat(v as typeof format)}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="pdf" id="pdf" />
                <Label htmlFor="pdf" className="font-normal">PDF</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="excel" id="excel" />
                <Label htmlFor="excel" className="font-normal">Excel</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="word" id="word" />
                <Label htmlFor="word" className="font-normal">Word</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label>Samples</Label>
              <div className="flex gap-2 text-xs">
                <button type="button" onClick={selectAll} className="text-primary hover:underline">
                  Select All
                </button>
                <button type="button" onClick={selectNone} className="text-primary hover:underline">
                  Clear
                </button>
              </div>
            </div>
            <div className="max-h-32 overflow-y-auto rounded-md border p-2">
              {samples.length === 0 ? (
                <p className="text-sm text-muted-foreground">No samples available</p>
              ) : (
                <div className="flex flex-col gap-2">
                  {samples.map((sample) => (
                    <div key={sample.id} className="flex items-center gap-2">
                      <Checkbox
                        id={sample.id}
                        checked={selectedSamples.includes(sample.id)}
                        onCheckedChange={() => toggleSample(sample.id)}
                      />
                      <Label htmlFor={sample.id} className="font-normal text-sm">
                        {sample.name}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Options</Label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="include-photos"
                  checked={includePhotos}
                  onCheckedChange={(c) => setIncludePhotos(!!c)}
                />
                <Label htmlFor="include-photos" className="font-normal">
                  Include photos
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="include-raw-data"
                  checked={includeRawData}
                  onCheckedChange={(c) => setIncludeRawData(!!c)}
                />
                <Label htmlFor="include-raw-data" className="font-normal">
                  Include raw data
                </Label>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleGenerate} disabled={selectedSamples.length === 0}>
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
