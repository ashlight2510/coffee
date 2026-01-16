import { Language } from '@/lib/i18n'

export interface QuestionChoice {
  label: string
  value: number
}

export interface Question {
  id: string
  title: string
  choices: QuestionChoice[]
}

export const coffeeQuestions: Record<Language, Question[]> = {
  ko: [
    {
      id: 'dailyCups',
      title: 'Q1. 하루 평균 커피 몇 잔 마시나요?',
      choices: [
        { label: '0잔 (커피 비음용 인간)', value: 0 },
        { label: '1잔', value: 1 },
        { label: '2잔', value: 2 },
        { label: '3잔', value: 4 },
        { label: '4잔 이상 (혈중 커피 농도↑)', value: 7 },
      ],
    },
    {
      id: 'morningDependency',
      title: 'Q2. 아침에 커피 없으면?',
      choices: [
        { label: '괜찮음', value: 0 },
        { label: '약간 멍함', value: 2 },
        { label: '일이 안 됨', value: 5 },
        { label: '존재 자체가 불가', value: 8 },
      ],
    },
    {
      id: 'latteOrAmericano',
      title: 'Q3. 커피 취향은?',
      choices: [
        { label: '디카페인', value: 0 },
        { label: '라떼 계열', value: 2 },
        { label: '아메리카노(기본형)', value: 3 },
        { label: '샷 추가가 국룰', value: 5 },
        { label: '트리플샷 / 쿼드샷', value: 8 },
      ],
    },
    {
      id: 'cafeVisit',
      title: 'Q4. 카페 방문 빈도',
      choices: [
        { label: '일주일에 1번 이하', value: 1 },
        { label: '일주일에 2~3번', value: 3 },
        { label: '거의 매일', value: 6 },
        { label: '하루 2번 이상', value: 10 },
      ],
    },
    {
      id: 'instantOrBrand',
      title: 'Q5. 어떤 커피를 주로 마시나요?',
      choices: [
        { label: '인스턴트(맥심/카누)', value: 1 },
        { label: '편의점 커피', value: 2 },
        { label: '프랜차이즈(스타벅스/투썸)', value: 4 },
        { label: '스페셜티/원두 까다롭게 고름', value: 7 },
      ],
    },
    {
      id: 'nightCoffee',
      title: 'Q6. 밤에 커피 마시는 편인가요?',
      choices: [
        { label: '아예 안 마심', value: 0 },
        { label: '가끔 (야근용)', value: 2 },
        { label: '자주 (밤샘의 파트너)', value: 5 },
        { label: '잠이 이겨볼 생각을 못함', value: 8 },
      ],
    },
    {
      id: 'sleepEffect',
      title: 'Q7. 커피 마시면 잠이?',
      choices: [
        { label: '바로 잘 잠', value: 0 },
        { label: '조금 힘듦', value: 2 },
        { label: '카페인 민감해서 힘듦', value: 4 },
        { label: '잠? 그런 건 사치입니다', value: 7 },
      ],
    },
    {
      id: 'coffeeBudget',
      title: 'Q8. 월 커피 지출',
      choices: [
        { label: '0~1만원', value: 1 },
        { label: '1~3만원', value: 3 },
        { label: '3~5만원', value: 5 },
        { label: '5~10만원', value: 10 },
        { label: '10만원 이상 (커피에 인생 투자)', value: 15 },
      ],
    },
    {
      id: 'withdrawal',
      title: 'Q9. 커피 못 마셨을 때 금단 증상?',
      choices: [
        { label: '없음', value: 0 },
        { label: '살짝 짜증', value: 3 },
        { label: '두통 옴', value: 6 },
        { label: '모든 게 거슬림', value: 10 },
      ],
    },
    {
      id: 'collection',
      title: 'Q10. 커피 관련 물건(텀블러/드립포트/원두) 보유량',
      choices: [
        { label: '전혀 없음', value: 0 },
        { label: '텀블러 정도', value: 1 },
        { label: '캡슐/원두 조금 보유', value: 3 },
        { label: '가정용 머신 있음', value: 6 },
        { label: '드립+머신+원두 컬렉션 다 있음', value: 12 },
      ],
    },
    {
      id: 'cupsAtOnce',
      title: 'Q11. 가장 많이 마셔본 커피 양?',
      choices: [
        { label: '1잔', value: 1 },
        { label: '2잔', value: 3 },
        { label: '3~4잔', value: 6 },
        { label: '5잔 이상', value: 12 },
      ],
    },
  ],
  en: [
    {
      id: 'dailyCups',
      title: 'Q1. How many cups of coffee do you drink per day on average?',
      choices: [
        { label: '0 cups (non-coffee human)', value: 0 },
        { label: '1 cup', value: 1 },
        { label: '2 cups', value: 2 },
        { label: '3 cups', value: 4 },
        { label: '4+ cups (blood coffee concentration ↑)', value: 7 },
      ],
    },
    {
      id: 'morningDependency',
      title: 'Q2. Without coffee in the morning?',
      choices: [
        { label: 'Fine', value: 0 },
        { label: 'A bit foggy', value: 2 },
        { label: "Can't work", value: 5 },
        { label: 'Existence itself is impossible', value: 8 },
      ],
    },
    {
      id: 'latteOrAmericano',
      title: 'Q3. What is your coffee preference?',
      choices: [
        { label: 'Decaf', value: 0 },
        { label: 'Latte series', value: 2 },
        { label: 'Americano (basic)', value: 3 },
        { label: 'Extra shot is standard', value: 5 },
        { label: 'Triple shot / Quad shot', value: 8 },
      ],
    },
    {
      id: 'cafeVisit',
      title: 'Q4. How often do you visit cafes?',
      choices: [
        { label: 'Once a week or less', value: 1 },
        { label: '2-3 times a week', value: 3 },
        { label: 'Almost every day', value: 6 },
        { label: '2+ times a day', value: 10 },
      ],
    },
    {
      id: 'instantOrBrand',
      title: 'Q5. What type of coffee do you mainly drink?',
      choices: [
        { label: 'Instant (Maxim/Kanu)', value: 1 },
        { label: 'Convenience store coffee', value: 2 },
        { label: 'Franchise (Starbucks/Twosome)', value: 4 },
        { label: 'Specialty/Selective about beans', value: 7 },
      ],
    },
    {
      id: 'nightCoffee',
      title: 'Q6. Do you drink coffee at night?',
      choices: [
        { label: 'Never', value: 0 },
        { label: 'Sometimes (for overtime)', value: 2 },
        { label: 'Often (partner of all-nighters)', value: 5 },
        { label: "Sleep doesn't stand a chance", value: 8 },
      ],
    },
    {
      id: 'sleepEffect',
      title: 'Q7. How does coffee affect your sleep?',
      choices: [
        { label: 'Sleep right away', value: 0 },
        { label: 'A bit difficult', value: 2 },
        { label: 'Difficult due to caffeine sensitivity', value: 4 },
        { label: 'Sleep? That is a luxury', value: 7 },
      ],
    },
    {
      id: 'coffeeBudget',
      title: 'Q8. Monthly coffee spending',
      choices: [
        { label: '0~10,000 KRW', value: 1 },
        { label: '10,000~30,000 KRW', value: 3 },
        { label: '30,000~50,000 KRW', value: 5 },
        { label: '50,000~100,000 KRW', value: 10 },
        { label: '100,000+ KRW (investing life in coffee)', value: 15 },
      ],
    },
    {
      id: 'withdrawal',
      title: 'Q9. Withdrawal symptoms when you can\'t drink coffee?',
      choices: [
        { label: 'None', value: 0 },
        { label: 'Slightly irritated', value: 3 },
        { label: 'Headache comes', value: 6 },
        { label: 'Everything is annoying', value: 10 },
      ],
    },
    {
      id: 'collection',
      title: 'Q10. Coffee-related items (tumbler/drip pot/beans) you own',
      choices: [
        { label: 'None at all', value: 0 },
        { label: 'Just a tumbler', value: 1 },
        { label: 'Some capsules/beans', value: 3 },
        { label: 'Have a home machine', value: 6 },
        { label: 'Have everything: drip + machine + bean collection', value: 12 },
      ],
    },
    {
      id: 'cupsAtOnce',
      title: 'Q11. Maximum amount of coffee you\'ve had at once?',
      choices: [
        { label: '1 cup', value: 1 },
        { label: '2 cups', value: 3 },
        { label: '3-4 cups', value: 6 },
        { label: '5+ cups', value: 12 },
      ],
    },
  ],
}
