# LIMS UI Components / LIMS UI 组件库

[English](#english) | [中文](#中文)

---

## English

LIMS UI Component Library for Electrical & EMC Testing Laboratories

### Installation

```bash
npm install lims-ui-components
```

### Quick Start

```tsx
import 'lims-ui-components/styles'
import { Button, Card, StatusIndicator } from 'lims-ui-components'
```

### Export Entries

| Entry | Description | Path |
|-------|-------------|------|
| `lims-ui-components` | Full library (UI + LIMS + utils) | `dist/index.js` |
| `lims-ui-components/ui` | Base UI components only | `dist/ui.js` |
| `lims-ui-components/lims` | LIMS business components only | `dist/lims.js` |
| `lims-ui-components/styles` | Global CSS styles | `dist/styles.css` |

### UI Components

#### Base Components
- **Button** - Button with variants (default, success, destructive, outline, secondary, ghost, link)
- **Card** - Flexible card container with header, content, footer sections
- **Input** - Text input field
- **Label** - Form label
- **Textarea** - Multi-line text input
- **Badge** - Status badge with variants

#### Dialog & Overlay
- **Dialog** - Modal dialog with overlay
- **Popover** - Popover container
- **Tooltip** - Tooltip component

#### Navigation
- **Tabs** - Tabbed navigation
- **Accordion** - Collapsible accordion

#### Data Display
- **Table** - Data table with header, body, footer
- **Progress** - Progress bar
- **Separator** - Visual divider

#### Selection
- **Select** - Dropdown select
- **Checkbox** - Checkbox input
- **RadioGroup** - Radio button group
- **Switch** - Toggle switch

#### Feedback
- **Alert** - Alert message with title and description
- **DropdownMenu** - Dropdown menu container

### LIMS Components

#### Status Display
- **StatusIndicator** - Visual status indicator (pass/fail/in-progress)
- **StatusBadge** - Status badge with color coding

#### Measurement
- **MeasurementInput** - Input for measurement values with units
- **SpecRange** - Specification range display
- **SpecCompliance** - Specification compliance checker

#### Sample Management
- **SampleCard** - Sample information card
- **SampleTracker** - Sample tracking with event timeline

#### Equipment
- **EquipmentSelector** - Equipment selection dropdown

#### Testing
- **TestResultCard** - Test result display card
- **CalibrationRecord** - Calibration record display

#### Reporting
- **ReportGenerator** - Report generation component

#### Utility
- **KPICard** - Key performance indicator card
- **EmptyState** - Empty state placeholder
- **LoadingState** - Loading state indicator

### Utility Functions

```tsx
import { cn, formatMeasurement, formatDate, isWithinRange, isCompliant } from 'lims-ui-components'

cn('text-red-500', isActive && 'font-bold') // classnames utility
formatMeasurement(1234.56, 'V', 2) // "1,234.56 V"
formatDate(new Date()) // "2024-01-15"
isWithinRange(5, 1, 10) // true
isCompliant(5.1, 5.0, 'max') // false (exceeded limit)
```

### Usage Example

```tsx
import { Button } from 'lims-ui-components/ui'
import { StatusIndicator, MeasurementInput, KPICard } from 'lims-ui-components/lims'

function App() {
  return (
    <div className="p-4 space-y-4">
      <KPICard
        title="Pass Rate"
        value="98.5%"
        trend={{ value: 2.3, direction: 'up' }}
      />

      <StatusIndicator status="pass" label="EMC Test" />

      <MeasurementInput
        label="Input Voltage"
        unit="V"
        value={220}
        onChange={(v) => console.log(v)}
      />

      <Button variant="primary" isLoading={false}>
        Start Test
      </Button>
    </div>
  )
}
```

### Peer Dependencies

```json
{
  "react": ">=18",
  "react-dom": ">=18"
}
```

### Tech Stack

- React 18+
- TypeScript
- Tailwind CSS
- Radix UI (headless components)
- class-variance-authority
- tsup (build tool)

### License

MIT

---

## 中文

LIMS UI 组件库 - 适用于电气与 EMC 测试实验室

### 安装

```bash
npm install lims-ui-components
```

### 快速开始

```tsx
import 'lims-ui-components/styles'
import { Button, Card, StatusIndicator } from 'lims-ui-components'
```

### 导出入口

| 入口 | 说明 | 路径 |
|------|------|------|
| `lims-ui-components` | 完整库 (UI + LIMS + 工具函数) | `dist/index.js` |
| `lims-ui-components/ui` | 基础 UI 组件 | `dist/ui.js` |
| `lims-ui-components/lims` | LIMS 业务组件 | `dist/lims.js` |
| `lims-ui-components/styles` | 全局样式 | `dist/styles.css` |

### UI 基础组件

#### 基础组件
- **Button** - 按钮，支持多种变体 (default, success, destructive, outline, secondary, ghost, link)
- **Card** - 卡片容器，包含 header、content、footer 部分
- **Input** - 文本输入框
- **Label** - 表单标签
- **Textarea** - 多行文本输入框
- **Badge** - 徽章，支持多种样式

#### 对话框与弹出层
- **Dialog** - 模态对话框
- **Popover** - 弹出层容器
- **Tooltip** - 提示工具

#### 导航
- **Tabs** - 标签页导航
- **Accordion** - 可折叠手风琴

#### 数据展示
- **Table** - 数据表格
- **Progress** - 进度条
- **Separator** - 分隔线

#### 选择组件
- **Select** - 下拉选择框
- **Checkbox** - 复选框
- **RadioGroup** - 单选按钮组
- **Switch** - 开关切换

#### 反馈组件
- **Alert** - 警告提示
- **DropdownMenu** - 下拉菜单

### LIMS 业务组件

#### 状态显示
- **StatusIndicator** - 状态指示器 (pass/fail/in-progress)
- **StatusBadge** - 状态徽章

#### 测量相关
- **MeasurementInput** - 测量值输入框
- **SpecRange** - 规格范围显示
- **SpecCompliance** - 规格符合性检查

#### 样品管理
- **SampleCard** - 样品信息卡片
- **SampleTracker** - 样品追踪与时间线

#### 设备
- **EquipmentSelector** - 设备选择下拉框

#### 测试
- **TestResultCard** - 测试结果卡片
- **CalibrationRecord** - 校准记录

#### 报告
- **ReportGenerator** - 报告生成组件

#### 工具组件
- **KPICard** - 关键绩效指标卡片
- **EmptyState** - 空状态占位
- **LoadingState** - 加载状态

### 工具函数

```tsx
import { cn, formatMeasurement, formatDate, isWithinRange, isCompliant } from 'lims-ui-components'

cn('text-red-500', isActive && 'font-bold') // classnames 工具
formatMeasurement(1234.56, 'V', 2) // "1,234.56 V"
formatDate(new Date()) // "2024-01-15"
isWithinRange(5, 1, 10) // true
isCompliant(5.1, 5.0, 'max') // false (超出限值)
```

### 使用示例

```tsx
import { Button } from 'lims-ui-components/ui'
import { StatusIndicator, MeasurementInput, KPICard } from 'lims-ui-components/lims'

function App() {
  return (
    <div className="p-4 space-y-4">
      <KPICard
        title="通过率"
        value="98.5%"
        trend={{ value: 2.3, direction: 'up' }}
      />

      <StatusIndicator status="pass" label="EMC 测试" />

      <MeasurementInput
        label="输入电压"
        unit="V"
        value={220}
        onChange={(v) => console.log(v)}
      />

      <Button variant="primary" isLoading={false}>
        开始测试
      </Button>
    </div>
  )
}
```

### 依赖要求

```json
{
  "react": ">=18",
  "react-dom": ">=18"
}
```

### 技术栈

- React 18+
- TypeScript
- Tailwind CSS
- Radix UI (无头组件)
- class-variance-authority
- tsup (构建工具)

### 许可证

MIT
