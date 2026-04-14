# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在本代码仓库中工作时提供指导。

## 项目概述

LIMS UI 组件库，适用于电气与 EMC 测试实验室。基于 React 19、TypeScript、Tailwind CSS 和 Radix UI 无头组件构建。

## 开发命令

```bash
npm run dev        # tsup 监听模式构建
npm run build      # 生产环境构建（输出到 dist/）
npm run lint       # ESLint 检查
npm run typecheck  # TypeScript 类型检查
npm run test       # 运行 vitest 测试
npm run test -- --watch  # 监听模式运行测试
npm run preview    # 预览 Demo 页面（localhost:3000）
```

**运行单个测试文件：**
```bash
npm test -- src/components/ui/button.test.tsx
```

## 架构

### 组件组织结构

```
src/components/
├── ui/          # 基础 UI 组件（Button、Card、Dialog 等）
├── lims/        # 领域特定组件（StatusIndicator、MeasurementInput 等）
└── layout/      # 布局组件（AppShell、Sidebar、PageHeader 等）
```

### 导出入口（tsup）

| 入口 | 内容 | 路径 |
|------|------|------|
| `lims-ui-components` | 完整库 | `dist/index.js` |
| `lims-ui-components/ui` | 基础 UI 组件 | `dist/ui.js` |
| `lims-ui-components/lims` | LIMS 业务组件 | `dist/lims.js` |
| `lims-ui-components/layout` | 布局组件 | `dist/layout.js` |
| `lims-ui-components/i18n` | 国际化 | `dist/i18n.js` |
| `lims-ui-components/styles` | CSS 变量 + Tailwind | `dist/styles.css` |

### 关键模式

**组件变体**：使用 `class-variance-authority`（CVA）管理变体。参考 `button.tsx` 中的 `buttonVariants` 作为标准模式。

**样式**：CSS 自定义属性（`var(--primary)`、`var(--background)`）定义在 `globals.css` 的 `:root`、`.dark` 和 `.light` 选择器下。组件使用引用这些变量的 Tailwind 工具类。

**类型导出**：所有类型从 `src/types/index.ts` 导出。LIMS 相关类型在 `src/types/lims.ts`。

**国际化**：基于 Context 的 `useI18n()` hook。翻译文件位于 `src/i18n/en.ts` 和 `src/i18n/zh.ts`。用户可见的字符串应使用 `t()` 而非硬编码。

## 行为准则

**权衡**：这些准则偏向谨慎而非速度。对于简单任务，请自行判断。

### 1. 编码前先思考

- 明确声明你的假设。不确定时，主动提问。
- 存在多种解释时，明确呈现而非默默选择。
- 有更简单的方案时，指出它。有理由时据理力争。
- 有不清楚之处，停下来。说出困惑点并提问。

### 2. 简洁优先

- 不添加需求之外的功能。
- 不为一次性使用的代码创建抽象。
- 不要添加未被要求的"灵活性"或"可配置性"。
- 不处理不可能发生的异常场景。
- 如果 200 行能完成而你写了 50 行，重写。

自问："资深工程师会觉得这过度复杂吗？"如果是，简化它。

### 3. 精准修改

- 不"改进"相邻代码、注释或格式。
- 不重构没有问题的部分。
- 匹配现有风格，即使你可能会不同写法。
- 发现无关的死代码时，指出它——不要擅自删除。
- 自己修改产生的无用导入/变量/函数要移除。
- 未经要求不删除预先存在的死代码。

检验标准：每一行修改都应能追溯到用户的请求。

### 4. 目标驱动执行

将任务转化为可验证的目标：
- "添加验证" → "为无效输入编写测试，然后使其通过"
- "修复 bug" → "编写复现测试，然后使其通过"
- "重构 X" → "确保重构前后测试都通过"

对于多步骤任务，先简述执行计划：
```
1. [步骤] → 验证：[检查方式]
2. [步骤] → 验证：[检查方式]
3. [步骤] → 验证：[检查方式]
```

**准则有效时表现为：** diff 中不必要改动更少，由于过度复杂导致的返工更少，以及问题在实施前被提出而非实施后被暴露。
