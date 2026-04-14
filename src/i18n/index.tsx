import * as React from 'react'
import { zh } from './zh'
import { en } from './en'

export type Language = 'zh' | 'en'

const translations = { zh, en }

type TranslationKeys = typeof zh

interface I18nContextValue {
  language: Language
  t: TranslationKeys
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const I18nContext = React.createContext<I18nContextValue | undefined>(undefined)

export interface I18nProviderProps {
  children: React.ReactNode
  defaultLanguage?: Language
}

export function I18nProvider({ children, defaultLanguage = 'zh' }: I18nProviderProps) {
  const [language, setLanguage] = React.useState<Language>(defaultLanguage)

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'zh' ? 'en' : 'zh'))
  }

  const value = React.useMemo(
    () => ({
      language,
      t: translations[language],
      setLanguage,
      toggleLanguage,
    }),
    [language]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = React.useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export { zh, en }
export type { TranslationKeys }