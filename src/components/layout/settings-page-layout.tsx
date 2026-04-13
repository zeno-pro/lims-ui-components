import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export interface SettingsPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  onSave?: () => void
  onCancel?: () => void
  isSaving?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full',
}

const SettingsPageLayout = React.forwardRef<HTMLDivElement, SettingsPageLayoutProps>(
  (
    {
      className,
      title,
      description,
      onSave,
      onCancel,
      isSaving,
      maxWidth = '2xl',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn('flex flex-col h-full', className)} {...props}>
        <div className="flex-1 overflow-auto">
          <div className={cn(maxWidthClasses[maxWidth], 'mx-auto p-6 space-y-6')}>
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">{title}</h1>
              {description && (
                <p className="text-muted-foreground">{description}</p>
              )}
            </div>

            <div className="space-y-6">{children}</div>

            {(onSave || onCancel) && (
              <div className="flex justify-end gap-2 pt-4 border-t">
                {onCancel && (
                  <Button variant="outline" onClick={onCancel}>
                    Cancel
                  </Button>
                )}
                {onSave && (
                  <Button onClick={onSave} disabled={isSaving}>
                    {isSaving ? 'Saving...' : 'Save Changes'}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
SettingsPageLayout.displayName = 'SettingsPageLayout'

export { SettingsPageLayout }

export interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-4', className)} {...props}>
        <div className="space-y-1">
          <h3 className="text-lg font-medium">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="space-y-4">{children}</div>
      </div>
    )
  }
)
FormSection.displayName = 'FormSection'

export { FormSection }
