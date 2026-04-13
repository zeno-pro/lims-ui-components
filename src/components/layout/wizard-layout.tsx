import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export interface WizardStep {
  title: string
  description?: string
}

export interface WizardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: WizardStep[]
  currentStep: number
  onStepChange?: (step: number) => void
  onBack?: () => void
  onNext?: () => void
  onFinish?: () => void
  isNextDisabled?: boolean
  isBackDisabled?: boolean
  isFinishDisabled?: boolean
  isFinishing?: boolean
}

const WizardLayout = React.forwardRef<HTMLDivElement, WizardLayoutProps>(
  (
    {
      className,
      steps,
      currentStep,
      onStepChange,
      onBack,
      onNext,
      onFinish,
      isNextDisabled,
      isBackDisabled,
      isFinishDisabled,
      isFinishing,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn('flex flex-col h-full', className)} {...props}>
        <div className="flex items-center gap-2 p-4 border-b">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div
                  className={cn(
                    'w-8 h-px',
                    index <= currentStep ? 'bg-primary' : 'bg-border'
                  )}
                />
              )}
              <button
                type="button"
                onClick={() => onStepChange?.(index)}
                disabled={index > currentStep}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium transition-colors',
                  index === currentStep && 'text-primary',
                  index < currentStep && 'text-primary cursor-pointer',
                  index > currentStep && 'text-muted-foreground cursor-not-allowed'
                )}
              >
                <span
                  className={cn(
                    'flex size-6 items-center justify-center rounded-full text-xs',
                    index === currentStep && 'bg-primary text-primary-foreground',
                    index < currentStep && 'bg-primary text-primary-foreground',
                    index > currentStep && 'bg-muted text-muted-foreground'
                  )}
                >
                  {index < currentStep ? (
                    <Check className="size-3" />
                  ) : (
                    index + 1
                  )}
                </span>
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            </React.Fragment>
          ))}
        </div>

        <div className="flex-1 overflow-auto p-6">{children}</div>

        <div className="flex justify-between p-4 border-t">
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isBackDisabled || currentStep === 0}
          >
            Back
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button onClick={onNext} disabled={isNextDisabled}>
              Next
            </Button>
          ) : (
            <Button onClick={onFinish} disabled={isFinishDisabled}>
              {isFinishing ? 'Finishing...' : 'Finish'}
            </Button>
          )}
        </div>
      </div>
    )
  }
)
WizardLayout.displayName = 'WizardLayout'

export { WizardLayout }
