'use client'

import { Language, supportedLangs, getInitialLang } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export function LangSwitch() {
  const [lang, setLang] = useState<Language>(getInitialLang)

  useEffect(() => {
    const currentLang = getInitialLang()
    setLang(currentLang)
    document.documentElement.lang = currentLang
  }, [])

  const handleLangChange = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem('preferredLang', newLang)
    document.documentElement.lang = newLang
    
    const url = new URL(window.location.href)
    url.searchParams.set('lang', newLang)
    window.history.replaceState({}, '', url)
    
    window.location.reload()
  }

  return (
    <div className="fixed top-4 right-4 z-50 inline-flex gap-0 p-1 rounded-full bg-black/90 backdrop-blur-sm shadow-lg border border-white/10">
      {supportedLangs.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => handleLangChange(l)}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all min-w-[44px] text-center ${
            lang === l
              ? 'bg-white text-black shadow-md'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
