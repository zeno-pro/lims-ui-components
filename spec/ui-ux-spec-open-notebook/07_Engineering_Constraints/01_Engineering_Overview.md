# Engineering Constraints - Open Notebook

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 16.x |
| UI Library | React | 19.x |
| Styling | Tailwind CSS | 4.x |
| Component Primitives | Radix UI | Latest |
| State Management | Zustand | Latest |
| Data Fetching | TanStack Query | 5.x |
| Forms | React Hook Form + Zod | Latest |
| Icons | Lucide React | Latest |
| i18n | i18next | 25.x |
| Theming | next-themes | 0.4.x |

## File Structure

```
frontend/src/
├── app/                      # Next.js App Router
│   ├── (auth)/               # Auth route group
│   ├── (dashboard)/          # Main app route group
│   │   ├── notebooks/
│   │   ├── sources/
│   │   ├── podcasts/
│   │   ├── settings/
│   │   ├── search/
│   │   ├── transformations/
│   │   ├── advanced/
│   │   └── layout.tsx        # Dashboard layout
│   ├── globals.css
│   └── layout.tsx            # Root layout
├── components/
│   ├── ui/                   # Base UI components (shadcn-style)
│   ├── common/               # Shared app components
│   ├── layout/               # AppShell, Sidebar
│   ├── providers/            # Context providers
│   └── [feature]/            # Feature-specific components
├── lib/
│   ├── hooks/                # Custom React hooks
│   ├── stores/               # Zustand stores
│   ├── utils.ts              # cn() helper
│   └── locales/              # i18n translations
└── types/                    # TypeScript types
```

## CSS Architecture

### Tailwind Configuration

The project uses Tailwind CSS 4.x with:
- `@tailwindcss/typography` plugin
- OKLCH color syntax
- CSS-first configuration via `@theme`

### Theme Variables

All design tokens are defined as CSS custom properties in `globals.css`:

```css
:root {
  --primary: oklch(0.623 0.214 259.815);
  --radius: 0.65rem;
  /* ... */
}
```

### Dark Mode

Dark mode is handled via `next-themes`:
- Class-based: `dark` class on `<html>`
- Script injection to prevent flash
- Hydration-safe with `suppressHydrationWarning`

## Component Development

### Component Pattern

All UI components use this structure:

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

function Component({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="component"
      className={cn("base-classes", className)}
      {...props}
    />
  )
}

export { Component }
```

### Variants with CVA

```tsx
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "variant-classes",
      secondary: "secondary-classes",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Component({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof componentVariants>) {
  return (
    <div
      data-slot="component"
      className={cn(componentVariants({ variant }), className)}
      {...props}
    />
  )
}
```

### Data Attributes Pattern

Use `data-slot` for styling hooks:
```tsx
<div data-slot="card-header" className={cn(...)} />
```

## Naming Conventions

### Files
- Components: PascalCase (`Button.tsx`, `CardHeader.tsx`)
- Utilities: camelCase (`useAuth.ts`, `cn.ts`)
- CSS: kebab-case (rarely, via Tailwind)

### Classes
- Tailwind: kebab-case (`text-primary`, `bg-background`)
- CSS variables: kebab-case (`--sidebar-primary`)
- TypeScript interfaces: PascalCase

### CSS Custom Properties
- Design tokens: `--{category}-{property}` (e.g., `--primary`)
- Component-specific: `--{component}-{property}` (e.g., `--card-padding`)

## State Management

### Client State (Zustand)

```typescript
// lib/stores/theme-store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeStore {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'theme-storage' }
  )
)
```

### Server State (TanStack Query)

```typescript
// lib/hooks/use-notebooks.ts
export function useNotebooks(archived = false) {
  return useQuery({
    queryKey: ['notebooks', { archived }],
    queryFn: () => api.getNotebooks({ archived }),
  })
}
```

## Form Handling

Uses `react-hook-form` with `zod` resolver:

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

function MyForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input {...form.register('name')} />
      <input {...form.register('email')} />
    </form>
  )
}
```

## i18n Pattern

```typescript
// lib/hooks/use-translation.ts
import { useTranslation } from 'react-i18next'
import type { TranslationKeys } from '@/lib/locales'

// lib/locales/index.ts
export type TranslationKeys = typeof import('./en')

// Component usage
const { t } = useTranslation()
const label = t('common.save')
```

## Performance Considerations

### Dynamic Imports

```typescript
// For heavy components
import dynamic from 'next/dynamic'

const MarkdownEditor = dynamic(
  () => import('@/components/ui/markdown-editor'),
  { ssr: false, loading: () => <LoadingSpinner /> }
)
```

### Image Optimization

```typescript
import Image from 'next/image'

<Image src={src} alt={alt} width={w} height={h} />
```

### Font Optimization

```typescript
// In layout.tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

## Testing

| Type | Tool |
|------|------|
| Unit | Vitest |
| Component | Vitest + React Testing Library |
| E2E | (not specified in codebase) |

```bash
npm run test        # Run tests
npm run test:watch  # Watch mode
npm run test:ui     # UI mode
```

## Linting

```bash
npm run lint  # ESLint
```

## Build

```bash
npm run build  # Next.js build
```
