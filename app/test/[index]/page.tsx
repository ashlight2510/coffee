import QuestionContent from '@/components/QuestionContent'
import coffeeData from '@/data/coffee.json'

// 정적 생성을 위한 파라미터 생성
export function generateStaticParams() {
  // 0부터 10까지 (총 11개 질문)의 인덱스 생성
  return Array.from({ length: coffeeData.questions.length }, (_, i) => ({
    index: i.toString(),
  }))
}

export default function QuestionPage() {
  return <QuestionContent />
}
