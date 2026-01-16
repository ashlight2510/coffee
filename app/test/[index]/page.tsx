import QuestionContent from '@/components/QuestionContent'
import { coffeeQuestions } from '@/data/coffee-questions'
import { Suspense } from 'react'

// 정적 생성을 위한 파라미터 생성
export function generateStaticParams() {
  // 0부터 10까지 (총 11개 질문)의 인덱스 생성
  const questions = coffeeQuestions.en // 기본 언어로 생성
  return Array.from({ length: questions.length }, (_, i) => ({
    index: i.toString(),
  }))
}

export default function QuestionPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-4xl mb-4">☕</div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </main>
    }>
      <QuestionContent />
    </Suspense>
  )
}
