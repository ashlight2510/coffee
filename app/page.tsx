'use client'

import Link from 'next/link'
import { LangSwitch } from '@/components/LangSwitch'
import { getInitialLang, formatTemplate } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import { useState, useEffect } from 'react'

export default function Home() {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    const currentLang = getInitialLang()
    setLang(currentLang)
  }, [])

  const t = (key: keyof typeof translations.ko, vars?: Record<string, string | number>) => {
    const template = translations[lang]?.[key] || translations.en[key] || key
    return formatTemplate(template, vars || {})
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <LangSwitch />
      <div className="max-w-2xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 text-center space-y-6">
          <div className="text-6xl md:text-7xl mb-4">☕</div>
          <h1 className="text-3xl md:text-4xl font-bold text-coffee-800 mb-2">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-coffee-600 font-semibold mb-4">
            {t('subtitle')}
          </p>
          <p className="text-gray-600 mb-2">{t('description')}</p>
          <p className="text-sm text-gray-500">{t('subDescription')}</p>
          
          <Link
            href={`/test/0?lang=${lang}`}
            className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-coffee-500 to-coffee-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:from-coffee-600 hover:to-coffee-700 transition-all transform hover:scale-105"
          >
            {t('startTest')}
          </Link>

        </div>
      </div>
    </main>
  )
}
