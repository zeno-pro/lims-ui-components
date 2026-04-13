# Specs: LIMS UI Component Library

## Design Tokens

### Requirement: Color System
The system SHALL use OKLCH color space for perceptually uniform colors across all components.

#### Scenario: Primary Color Usage
- GIVEN a user viewing the application
- WHEN the primary color (teal) is used for buttons and active states
- THEN the color SHALL be `oklch(0.52 0.12 195)` in light mode and `oklch(0.48 0.10 195)` in dark mode

#### Scenario: Status Colors
- GIVEN test results or equipment status
- WHEN displaying pass/fail/warning states
- THEN the system SHALL use:
  - Success: `oklch(0.65 0.15 145)` (green)
  - Destructive: `oklch(0.55 0.22 25)` (red)
  - Warning: `oklch(0.75 0.15 85)` (amber)
  - Info: `oklch(0.65 0.12 240)` (blue)

### Requirement: Typography
The system SHALL use Inter for UI text and JetBrains Mono for measurement values.

#### Scenario: Measurement Display
- GIVEN a measurement value like "230.5 V"
- WHEN rendered in the application
- THEN it SHALL use monospace font (JetBrains Mono) for precise alignment
- AND use tabular-nums for consistent digit spacing

### Requirement: Spacing System
The system SHALL use a 4px base unit for all spacing.

#### Scenario: Consistent Spacing
- GIVEN any spacing value in the design
- WHEN implementing the component
- THEN spacing SHALL be in multiples of 4px (4, 8, 12, 16, 24, 32, 48px)

---

## Base UI Components

### Requirement: Button Component
The Button component SHALL support multiple variants and sizes for different actions.

#### Scenario: Default Button
- GIVEN a user clicks a default button
- WHEN the button is in default state
- THEN it SHALL have teal background with white text
- AND support hover, active, disabled, and loading states

#### Scenario: Success Button
- GIVEN a "Mark as Pass" action
- WHEN the button is rendered
- THEN it SHALL have green background indicating positive action

#### Scenario: Destructive Button
- GIVEN a "Delete" action
- WHEN the button is rendered
- THEN it SHALL have red background indicating destructive action

#### Scenario: Button with Loading State
- GIVEN a button performing an async action
- WHEN the action is in progress
- THEN the button SHALL show a loading spinner
- AND be disabled to prevent double-submission

---

### Requirement: Card Component
The Card component SHALL provide a consistent container for content grouping.

#### Scenario: Sample Card
- GIVEN displaying a sample summary in a list
- WHEN the card is rendered
- THEN it SHALL support Header, Title, Description, Content, Footer, and Action slots
- AND support hover state for clickable cards

#### Scenario: Interactive Card
- GIVEN a card that navigates on click
- WHEN the user hovers over the card
- THEN the card SHALL have subtle elevation change and border highlight

---

### Requirement: Input Component
The Input component SHALL support text, number, and file inputs with consistent styling.

#### Scenario: Text Input
- GIVEN a text input field
- WHEN the user focuses the input
- THEN it SHALL show a visible focus ring using the primary color

#### Scenario: Measurement Input
- GIVEN an input for measurement values
- WHEN the user enters a number
- THEN the input SHALL support optional unit suffix display
- AND use monospace font for the value

#### Scenario: Error State
- GIVEN an invalid input
- WHEN validation fails
- THEN the input SHALL show red border
- AND display an error message below the field

---

### Requirement: Badge Component
The Badge component SHALL display status information with appropriate colors.

#### Scenario: Status Badges
- GIVEN displaying sample or test status
- WHEN rendering a "Pass" badge
- THEN it SHALL use green background with white text
- WHEN rendering a "Fail" badge
- THEN it SHALL use red background with white text
- WHEN rendering a "Pending" badge
- THEN it SHALL use blue background with white text

---

### Requirement: Dialog Component
The Dialog component SHALL display modal content with proper focus management.

#### Scenario: Opening a Dialog
- GIVEN a user triggers a dialog
- WHEN the dialog opens
- THEN focus SHALL be trapped within the dialog
- AND pressing Escape SHALL close the dialog

#### Scenario: Dialog with Form
- GIVEN a dialog containing a form
- WHEN the user submits the form
- THEN the dialog SHALL handle validation errors appropriately

---

## LIMS Domain Components

### Requirement: MeasurementInput Component
The MeasurementInput component SHALL allow entering values with associated units.

#### Scenario: Entering a Measurement
- GIVEN a measurement field for "Conducted Emission"
- WHEN the user enters "23.5"
- AND selects unit "dBμV"
- THEN the displayed value SHALL be "23.50 dBμV"
- AND use monospace font

#### Scenario: Measurement Validation
- GIVEN a measurement input with min/max constraints
- WHEN the user enters a value outside the range
- THEN the input SHALL show an error state
- AND display the valid range

#### Scenario: Measurement with Specification
- GIVEN a measurement input with a specification limit
- WHEN the value is entered
- THEN the component SHALL visually indicate Pass/Fail status
- AND show the limit value

---

### Requirement: SpecCompliance Component
The SpecCompliance component SHALL display whether a measurement meets specifications.

#### Scenario: Compliant Measurement
- GIVEN a measurement of 23.5 dBμV with a limit of 30 dBμV (max)
- WHEN rendered
- THEN it SHALL display a green checkmark
- AND show "Pass" status

#### Scenario: Non-Compliant Measurement
- GIVEN a measurement of 35.2 dBμV with a limit of 30 dBμV (max)
- WHEN rendered
- THEN it SHALL display a red X
- AND show "Fail" status

#### Scenario: Specification Range Display
- GIVEN displaying a specification range "1 MHz - 30 MHz"
- WHEN rendered
- THEN it SHALL use monospace font
- AND clearly show min and max values

---

### Requirement: StatusIndicator Component
The StatusIndicator component SHALL provide visual status indication with optional animation.

#### Scenario: Pass Status
- GIVEN a completed test marked as "pass"
- WHEN the indicator is rendered
- THEN it SHALL show a solid green dot
- AND display "Pass" label if showLabel is true

#### Scenario: Pending Status with Animation
- GIVEN an incomplete test marked as "pending"
- WHEN the indicator is rendered with pulse enabled
- THEN it SHALL show a blue dot with subtle pulse animation
- TO DRAW attention to incomplete items

#### Scenario: Calibration Due Warning
- GIVEN equipment with calibration due
- WHEN the indicator is rendered
- THEN it SHALL show an amber dot with pulse animation
- TO alert users to overdue calibration

---

### Requirement: SampleCard Component
The SampleCard component SHALL display sample summary information.

#### Scenario: Sample Card Display
- GIVEN a sample with ID "SAM-2024-001"
- WHEN the card is rendered
- THEN it SHALL display:
  - Sample ID (monospace)
  - Product name
  - Customer name
  - Status badge
  - Test progress (if applicable)

#### Scenario: Clickable Sample Card
- GIVEN a sample card in a list
- WHEN the user hovers over the card
- THEN the card SHALL have hover elevation
- AND clicking SHALL navigate to sample detail

---

### Requirement: EquipmentSelector Component
The EquipmentSelector component SHALL allow selecting equipment with calibration status.

#### Scenario: Equipment with Valid Calibration
- GIVEN equipment with status "calibrated"
- WHEN displayed in the dropdown
- THEN it SHALL show a green indicator
- AND be selectable

#### Scenario: Equipment with Overdue Calibration
- GIVEN equipment with status "calibration-due"
- WHEN displayed in the dropdown
- THEN it SHALL show a warning indicator
- AND be disabled to prevent use

---

### Requirement: CalibrationRecord Component
The CalibrationRecord component SHALL display equipment calibration history.

#### Scenario: Calibration History Display
- GIVEN calibration records for equipment
- WHEN the component renders
- THEN it SHALL show:
  - Calibration date
  - Certificate number
  - Next due date
  - Result (satisfactory/adjusted/failed)

#### Scenario: Upcoming Calibration Due
- GIVEN equipment with calibration due within 30 days
- WHEN displayed
- THEN it SHALL show a warning indicator

---

### Requirement: ReportGenerator Component
The ReportGenerator component SHALL provide a dialog for configuring report generation.

#### Scenario: Generate Test Report
- GIVEN user wants to generate a test report
- WHEN the dialog is opened
- THEN user SHALL be able to select:
  - Report type (test-report, certificate, summary)
  - Format (PDF, Excel, Word)
  - Samples to include
  - Options (include photos, raw data)

---

## Accessibility

### Requirement: Keyboard Navigation
The system SHALL support full keyboard navigation.

#### Scenario: Tab Navigation
- GIVEN a form with multiple inputs
- WHEN the user presses Tab
- THEN focus SHALL move to the next input in logical order

#### Scenario: Focus Visibility
- GIVEN any interactive element
- WHEN focused
- THEN it SHALL show a visible focus ring

### Requirement: Screen Reader Support
The system SHALL be accessible to screen reader users.

#### Scenario: Status Announcements
- GIVEN a test result changes to "Pass"
- WHEN the change occurs
- THEN screen readers SHALL announce the new status

#### Scenario: Measurement Values
- GIVEN a measurement display
- WHEN read by a screen reader
- THEN it SHALL read the full value including unit

### Requirement: Color Contrast
The system SHALL meet WCAG 2.1 AA contrast requirements.

#### Scenario: Text Contrast
- GIVEN primary text on background
- THEN the contrast ratio SHALL be at least 4.5:1

#### Scenario: Status Colors
- GIVEN status colors (Pass/Fail indicators)
- THEN color SHALL NOT be the only indicator - text/icons MUST accompany color

---

## Technical Requirements

### Requirement: TypeScript Support
All components SHALL have complete TypeScript type definitions.

#### Scenario: Props Interface
- GIVEN a component with props
- WHEN consuming the component
- THEN TypeScript SHALL provide full autocomplete for props
- AND validate prop types at compile time

### Requirement: Dark Mode Support
All components SHALL support dark mode via CSS variables.

#### Scenario: Dark Mode Toggle
- GIVEN a component in light mode
- WHEN the theme switches to dark
- THEN all colors SHALL update via CSS variables
- WITHOUT requiring component changes

### Requirement: Tree-Shaking
Components SHALL be tree-shakable for optimal bundle size.

#### Scenario: Import Single Component
- GIVEN importing only the Button component
- WHEN bundled
- THEN only Button code SHALL be included
- AND other components SHALL be excluded
