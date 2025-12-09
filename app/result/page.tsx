'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import coffeeData from '@/data/coffee.json'
import KakaoAd from '@/components/KakaoAd'

function ResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const scoreParam = searchParams.get('score')
  const parsedScore = scoreParam ? parseInt(scoreParam, 10) : NaN
  const score = isNaN(parsedScore) ? 0 : parsedScore
  
  const [copied, setCopied] = useState(false)

  // score가 없으면 메인으로 리다이렉트
  useEffect(() => {
    if (!scoreParam || isNaN(parsedScore)) {
      router.push('/')
    }
  }, [scoreParam, parsedScore, router])

  if (!scoreParam || isNaN(parsedScore)) {
    return null
  }

  // 점수 구간별 결과 메시지
  const getResultMessage = (score: number): string => {
    if (score <= 10) return coffeeData.resultMessages[0]
    if (score <= 30) return coffeeData.resultMessages[1]
    if (score <= 55) return coffeeData.resultMessages[2]
    if (score <= 80) return coffeeData.resultMessages[3]
    return coffeeData.resultMessages[4]
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
    if (score <= 10) return '물 같은 커피인간 💧'
    if (score <= 30) return '일반 커피 애호가 ☕'
    if (score <= 55) return '커피 의존형 인간 ☕☕'
    if (score <= 80) return '준-커피인간 ☕☕☕'
    return '카페인 고래 ☕☕☕☕☕'
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
      console.error('공유하기 실패:', err)
    }
  }

  const handleRetest = () => {
    localStorage.removeItem('coffeeTestAnswers')
    router.push('/')
  }

  // 카카오톡 공유하기 (OG 태그 활용)
  const handleKakaoShare = () => {
    if (typeof window !== 'undefined' && (window as any).Kakao) {
      (window as any).Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: coffeeData.title,
          description: resultMessage,
          imageUrl: `${window.location.origin}${coffeeData.shareImage}`,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      })
    } else {
      // 카카오 SDK 없을 경우 일반 공유
      handleShare()
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
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
            <p className="text-sm text-gray-600 mb-1">당신의 커피 중독 점수</p>
            <p className="text-5xl font-bold text-coffee-700">{score}점</p>
          </div>

          {/* 결과 메시지 */}
          <div className="bg-gray-50 rounded-2xl p-6 text-lg text-gray-700 leading-relaxed">
            {resultMessage}
          </div>

          {/* 카카오 애드핏 광고 */}
          <KakaoAd />

          {/* 공유 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleShare}
              className="flex-1 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl transition-all transform hover:scale-105"
            >
              {copied ? '✅ 복사 완료!' : '🔗 링크 복사하기'}
            </button>
            <button
              onClick={handleKakaoShare}
              className="flex-1 py-4 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold rounded-xl transition-all transform hover:scale-105"
            >
              💬 카카오톡 공유
            </button>
          </div>

          {/* 다시 테스트하기 버튼 */}
          <button
            onClick={handleRetest}
            className="w-full py-4 bg-gradient-to-r from-coffee-500 to-coffee-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:from-coffee-600 hover:to-coffee-700 transition-all transform hover:scale-105"
          >
            🔄 다시 테스트하기
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
          <p className="text-gray-600">결과를 불러오는 중...</p>
        </div>
      </main>
    }>
      <ResultContent />
    </Suspense>
  )
}

