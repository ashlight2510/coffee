'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import { LangSwitch } from '@/components/LangSwitch'
import { getInitialLang, formatTemplate, Language } from '@/lib/i18n'
import { translations } from '@/lib/translations'

const OTHER_TEST_URL = 'https://funnyfunny.cloud';

function ResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const scoreParam = searchParams.get('score')
  const parsedScore = scoreParam ? parseInt(scoreParam, 10) : NaN
  const score = isNaN(parsedScore) ? 0 : parsedScore
  const [lang, setLang] = useState<Language>(getInitialLang)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const paramLang = searchParams.get('lang') as Language
    if (paramLang && ['ko', 'en'].includes(paramLang)) {
      setLang(paramLang)
      document.documentElement.lang = paramLang
    } else {
      const currentLang = getInitialLang()
      setLang(currentLang)
      document.documentElement.lang = currentLang
    }
  }, [searchParams])

  // score가 없으면 메인으로 리다이렉트
  useEffect(() => {
    if (!scoreParam || isNaN(parsedScore)) {
      router.push('/')
    }
  }, [scoreParam, parsedScore, router])

  const t = (key: keyof typeof translations.ko, vars?: Record<string, string | number>) => {
    const template = translations[lang]?.[key] || translations.en[key] || key
    return formatTemplate(template, vars || {})
  }

  if (!scoreParam || isNaN(parsedScore)) {
    return null
  }

  // 점수 구간별 결과 메시지
  const getResultMessage = (score: number): string => {
    if (score <= 10) return t('resultMessage1')
    if (score <= 30) return t('resultMessage2')
    if (score <= 55) return t('resultMessage3')
    if (score <= 80) return t('resultMessage4')
    return t('resultMessage5')
  }

  // 점수 구간별 이모지
  const getResultEmoji = (score: number): string => {
    if (score <= 10) return '💧'
    if (score <= 30) return '☕'
    if (score <= 55) return '☕☕'
    if (score <= 80) return '☕☕☕'
    return '☕☕☕☕☕'
  }

  // 점수 구간별 제목
  const getResultTitle = (score: number): string => {
    if (score <= 10) return t('resultTitle1')
    if (score <= 30) return t('resultTitle2')
    if (score <= 55) return t('resultTitle3')
    if (score <= 80) return t('resultTitle4')
    return t('resultTitle5')
  }

  const resultMessage = getResultMessage(score)
  const resultEmoji = getResultEmoji(score)
  const resultTitle = getResultTitle(score)

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Share failed:', err)
    }
  }

  const handleRetest = () => {
    localStorage.removeItem('coffeeTestAnswers')
    router.push(`/?lang=${lang}`)
  }

  // 카카오톡 공유하기 (OG 태그 활용)
  // 카카오톡 공유하기 대신 기본 공유로 처리 (SDK 미사용)
  const handleKakaoShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
    const shareData = {
      title: t('title'),
      text: resultMessage,
      url: shareUrl,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch (error) {
        console.error('Web share failed', error)
      }
    }

    // Web Share API 미지원 시 링크 복사
    handleShare()
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <LangSwitch />
      <div className="max-w-2xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 text-center space-y-8">
          {/* 결과 이모지 */}
          <div className="text-7xl md:text-8xl mb-4">{resultEmoji}</div>

          {/* 결과 제목 */}
          <h1 className="text-3xl md:text-4xl font-bold text-coffee-800 mb-4">
            {resultTitle}
          </h1>

          {/* 점수 */}
          <div className="bg-gradient-to-r from-coffee-100 to-amber-100 rounded-2xl p-6 inline-block">
            <p className="text-sm text-gray-600 mb-1">{t('yourScore')}</p>
            <p className="text-5xl font-bold text-coffee-700">{score}{lang === 'ko' ? '점' : ' pts'}</p>
          </div>

          {/* 결과 메시지 */}
          <div className="bg-gray-50 rounded-2xl p-6 text-lg text-gray-700 leading-relaxed">
            {resultMessage}
          </div>


          {/* 공유 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleShare}
              className="flex-1 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl transition-all transform hover:scale-105"
            >
              {copied ? t('linkCopied') : t('linkCopy')}
            </button>
            <button
              onClick={handleKakaoShare}
              className="flex-1 py-4 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold rounded-xl transition-all transform hover:scale-105"
            >
              {t('kakaoShare')}
            </button>
            <a
              href={OTHER_TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-white border border-coffee-200 text-coffee-800 font-bold rounded-xl shadow hover:shadow-lg transition-all transform hover:scale-105 text-center"
            >
              {t('otherTests')}
            </a>
          </div>

          {/* 다시 테스트하기 버튼 */}
          <button
            onClick={handleRetest}
            className="w-full py-4 bg-gradient-to-r from-coffee-500 to-coffee-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:from-coffee-600 hover:to-coffee-700 transition-all transform hover:scale-105"
          >
            {t('retest')}
          </button>

        </div>
      </div>
    </main>
  )
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-4xl mb-4">☕</div>
          <p className="text-gray-600">Loading result...</p>
        </div>
      </main>
    }>
      <ResultContent />
    </Suspense>
  )
}
