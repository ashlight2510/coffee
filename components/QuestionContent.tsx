'use client'

import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { LangSwitch } from './LangSwitch'
import { getInitialLang, formatTemplate, Language } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import { coffeeQuestions } from '@/data/coffee-questions'

export default function QuestionContent() {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const questionIndex = parseInt(params.index as string, 10)
  const [lang, setLang] = useState<Language>(getInitialLang)
  const questions = coffeeQuestions[lang]
  const question = questions[questionIndex]
  
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])

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

  useEffect(() => {
    // 로컬 스토리지에서 기존 답변 불러오기
    const savedAnswers = localStorage.getItem('coffeeTestAnswers')
    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers)
      setAnswers(parsedAnswers)
      // 현재 질문에 대한 기존 답변이 있으면 선택
      if (parsedAnswers[questionIndex] !== undefined) {
        setSelectedValue(parsedAnswers[questionIndex])
      }
    }
  }, [questionIndex])

  if (!question) {
    router.push('/')
    return null
  }

  const t = (key: keyof typeof translations.ko, vars?: Record<string, string | number>) => {
    const template = translations[lang]?.[key] || translations.en[key] || key
    return formatTemplate(template, vars || {})
  }

  const handleChoiceSelect = (value: number) => {
    setSelectedValue(value)
  }

  const handleNext = () => {
    if (selectedValue === null) return

    const newAnswers = [...answers]
    newAnswers[questionIndex] = selectedValue
    setAnswers(newAnswers)
    localStorage.setItem('coffeeTestAnswers', JSON.stringify(newAnswers))

    if (questionIndex < questions.length - 1) {
      router.push(`/test/${questionIndex + 1}?lang=${lang}`)
    } else {
      // 모든 질문 완료 - 결과 계산
      const totalScore = newAnswers.reduce((sum, val) => sum + (val || 0), 0)
      router.push(`/result?score=${totalScore}&lang=${lang}`)
    }
  }

  const progress = ((questionIndex + 1) / questions.length) * 100

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <LangSwitch />
      <div className="max-w-2xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 space-y-6">
          {/* 진행률 바 */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{t('questionProgress', { current: questionIndex + 1, total: questions.length })}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-coffee-400 to-coffee-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* 질문 */}
          <h2 className="text-2xl md:text-3xl font-bold text-coffee-800 mb-6">
            {question.title}
          </h2>

          {/* 선택지 */}
          <div className="space-y-3">
            {question.choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoiceSelect(choice.value)}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  selectedValue === choice.value
                    ? 'bg-coffee-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 hover:bg-coffee-100 text-gray-800 hover:shadow-md'
                }`}
              >
                <span className="text-lg font-medium">{choice.label}</span>
              </button>
            ))}
          </div>

          {/* 다음 버튼 */}
          <button
            onClick={handleNext}
            disabled={selectedValue === null}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              selectedValue !== null
                ? 'bg-gradient-to-r from-coffee-500 to-coffee-600 text-white shadow-lg hover:shadow-xl hover:from-coffee-600 hover:to-coffee-700 transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {questionIndex < questions.length - 1 ? t('nextQuestion') : t('viewResult')}
          </button>

        </div>
      </div>
    </main>
  )
}
