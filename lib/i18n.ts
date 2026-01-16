'use client'

export type Language = 'ko' | 'en'

export const defaultLang: Language = 'en'
export const supportedLangs: Language[] = ['ko', 'en']

export function getInitialLang(): Language {
  if (typeof window === 'undefined') return defaultLang
  
  const params = new URLSearchParams(window.location.search)
  const paramLang = params.get('lang') as Language
  if (supportedLangs.includes(paramLang)) return paramLang
  
  const stored = localStorage.getItem('preferredLang') as Language
  if (supportedLangs.includes(stored)) return stored
  
  const browserLang =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language
  
  if (browserLang && browserLang.toLowerCase().startsWith('ko')) {
    return 'ko'
  }
  
  return defaultLang
}

export function formatTemplate(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    return vars[key] !== undefined ? String(vars[key]) : `{${key}}`
  })
}
