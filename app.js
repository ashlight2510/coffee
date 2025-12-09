// 테스트 데이터
const coffeeData = {
  id: "coffee-addiction",
  title: "커피 중독도 테스트",
  subtitle: "하루 카페인으로 몇 번이나 부활하시나요?",
  description: "당신의 일상 속 커피 의존도를 재미있게 분석하는 테스트입니다.",
  subDescription: "총 11개의 질문으로 알아보는 커피 중독 레벨!",
  scoringMethod: "coffee_default",
  shareImage: "/default-og.png",
  questions: [
    {
      id: "dailyCups",
      title: "Q1. 하루 평균 커피 몇 잔 마시나요?",
      choices: [
        { label: "0잔 (커피 비음용 인간)", value: 0 },
        { label: "1잔", value: 1 },
        { label: "2잔", value: 2 },
        { label: "3잔", value: 4 },
        { label: "4잔 이상 (혈중 커피 농도↑)", value: 7 }
      ]
    },
    {
      id: "morningDependency",
      title: "Q2. 아침에 커피 없으면?",
      choices: [
        { label: "괜찮음", value: 0 },
        { label: "약간 멍함", value: 2 },
        { label: "일이 안 됨", value: 5 },
        { label: "존재 자체가 불가", value: 8 }
      ]
    },
    {
      id: "latteOrAmericano",
      title: "Q3. 커피 취향은?",
      choices: [
        { label: "디카페인", value: 0 },
        { label: "라떼 계열", value: 2 },
        { label: "아메리카노(기본형)", value: 3 },
        { label: "샷 추가가 국룰", value: 5 },
        { label: "트리플샷 / 쿼드샷", value: 8 }
      ]
    },
    {
      id: "cafeVisit",
      title: "Q4. 카페 방문 빈도",
      choices: [
        { label: "일주일에 1번 이하", value: 1 },
        { label: "일주일에 2~3번", value: 3 },
        { label: "거의 매일", value: 6 },
        { label: "하루 2번 이상", value: 10 }
      ]
    },
    {
      id: "instantOrBrand",
      title: "Q5. 어떤 커피를 주로 마시나요?",
      choices: [
        { label: "인스턴트(맥심/카누)", value: 1 },
        { label: "편의점 커피", value: 2 },
        { label: "프랜차이즈(스타벅스/투썸)", value: 4 },
        { label: "스페셜티/원두 까다롭게 고름", value: 7 }
      ]
    },
    {
      id: "nightCoffee",
      title: "Q6. 밤에 커피 마시는 편인가요?",
      choices: [
        { label: "아예 안 마심", value: 0 },
        { label: "가끔 (야근용)", value: 2 },
        { label: "자주 (밤샘의 파트너)", value: 5 },
        { label: "잠이 이겨볼 생각을 못함", value: 8 }
      ]
    },
    {
      id: "sleepEffect",
      title: "Q7. 커피 마시면 잠이?",
      choices: [
        { label: "바로 잘 잠", value: 0 },
        { label: "조금 힘듦", value: 2 },
        { label: "카페인 민감해서 힘듦", value: 4 },
        { label: "잠? 그런 건 사치입니다", value: 7 }
      ]
    },
    {
      id: "coffeeBudget",
      title: "Q8. 월 커피 지출",
      choices: [
        { label: "0~1만원", value: 1 },
        { label: "1~3만원", value: 3 },
        { label: "3~5만원", value: 5 },
        { label: "5~10만원", value: 10 },
        { label: "10만원 이상 (커피에 인생 투자)", value: 15 }
      ]
    },
    {
      id: "withdrawal",
      title: "Q9. 커피 못 마셨을 때 금단 증상?",
      choices: [
        { label: "없음", value: 0 },
        { label: "살짝 짜증", value: 3 },
        { label: "두통 옴", value: 6 },
        { label: "모든 게 거슬림", value: 10 }
      ]
    },
    {
      id: "collection",
      title: "Q10. 커피 관련 물건(텀블러/드립포트/원두) 보유량",
      choices: [
        { label: "전혀 없음", value: 0 },
        { label: "텀블러 정도", value: 1 },
        { label: "캡슐/원두 조금 보유", value: 3 },
        { label: "가정용 머신 있음", value: 6 },
        { label: "드립+머신+원두 컬렉션 다 있음", value: 12 }
      ]
    },
    {
      id: "cupsAtOnce",
      title: "Q11. 가장 많이 마셔본 커피 양?",
      choices: [
        { label: "1잔", value: 1 },
        { label: "2잔", value: 3 },
        { label: "3~4잔", value: 6 },
        { label: "5잔 이상", value: 12 }
      ]
    }
  ],
  resultMessages: [
    "당신의 혈중 커피 농도는 거의 물 수준! 건강한 삶 유지 중!",
    "커피 없으면 조금 힘든 타입이지만, 아직 중독 단계는 아님.",
    "커피 없이는 업무 불가! 이미 카페인이 당신을 지배하기 시작했습니다.",
    "당신은 준-커피인간! 하루에 샷 몇 개 들어가는지 기억도 안 날 듯.",
    "커피로 돌아가는 생체 에너지 시스템. 거의 카페인 고래 수준입니다."
  ]
}

// 전역 변수
let currentQuestionIndex = 0
let answers = []
let selectedValue = null

// 페이지 표시/숨김
function showPage(pageId) {
  document.getElementById('main-page').classList.add('hidden')
  document.getElementById('test-page').classList.add('hidden')
  document.getElementById('result-page').classList.add('hidden')
  document.getElementById(pageId).classList.remove('hidden')
}

// 테스트 시작
function startTest() {
  currentQuestionIndex = 0
  answers = []
  selectedValue = null
  
  // 로컬 스토리지에서 기존 답변 불러오기
  const savedAnswers = localStorage.getItem('coffeeTestAnswers')
  if (savedAnswers) {
    answers = JSON.parse(savedAnswers)
  }
  
  showPage('test-page')
  loadQuestion(currentQuestionIndex)
  
  // 카카오 애드핏 광고 표시
  if (window.kakaoAdFit) {
    window.kakaoAdFit.display()
  }
}

// 질문 로드
function loadQuestion(index) {
  if (index >= coffeeData.questions.length) {
    calculateResult()
    return
  }
  
  const question = coffeeData.questions[index]
  selectedValue = answers[index] || null
  
  // 진행률 업데이트
  const progress = ((index + 1) / coffeeData.questions.length) * 100
  document.getElementById('progress-text').textContent = `질문 ${index + 1} / ${coffeeData.questions.length}`
  document.getElementById('progress-percent').textContent = `${Math.round(progress)}%`
  document.getElementById('progress-bar').style.width = `${progress}%`
  
  // 질문 표시
  document.getElementById('question-title').textContent = question.title
  
  // 선택지 표시
  const choicesContainer = document.getElementById('choices-container')
  choicesContainer.innerHTML = ''
  
  question.choices.forEach((choice, idx) => {
    const button = document.createElement('button')
    button.className = selectedValue === choice.value
      ? 'w-full p-4 rounded-xl text-left transition-all bg-coffee-500 text-white shadow-lg transform scale-105'
      : 'w-full p-4 rounded-xl text-left transition-all bg-gray-50 hover:bg-coffee-100 text-gray-800 hover:shadow-md'
    button.innerHTML = `<span class="text-lg font-medium">${choice.label}</span>`
    button.onclick = () => selectChoice(choice.value, button)
    choicesContainer.appendChild(button)
  })
  
  // 다음 버튼 업데이트
  const nextButton = document.getElementById('next-button')
  if (selectedValue !== null) {
    nextButton.disabled = false
    nextButton.className = 'w-full py-4 rounded-xl font-bold text-lg transition-all bg-gradient-to-r from-coffee-500 to-coffee-600 text-white shadow-lg hover:shadow-xl hover:from-coffee-600 hover:to-coffee-700 transform hover:scale-105'
  } else {
    nextButton.disabled = true
    nextButton.className = 'w-full py-4 rounded-xl font-bold text-lg transition-all bg-gray-300 text-gray-500 cursor-not-allowed'
  }
  
  nextButton.textContent = index < coffeeData.questions.length - 1 ? '다음 질문 ➡️' : '결과 보기 ✨'
}

// 선택지 선택
function selectChoice(value, buttonElement) {
  selectedValue = value
  
  // 모든 버튼 스타일 초기화
  const buttons = document.querySelectorAll('#choices-container button')
  buttons.forEach(btn => {
    btn.className = 'w-full p-4 rounded-xl text-left transition-all bg-gray-50 hover:bg-coffee-100 text-gray-800 hover:shadow-md'
  })
  
  // 선택된 버튼 스타일 적용
  buttonElement.className = 'w-full p-4 rounded-xl text-left transition-all bg-coffee-500 text-white shadow-lg transform scale-105'
  
  // 다음 버튼 활성화
  const nextButton = document.getElementById('next-button')
  nextButton.disabled = false
  nextButton.className = 'w-full py-4 rounded-xl font-bold text-lg transition-all bg-gradient-to-r from-coffee-500 to-coffee-600 text-white shadow-lg hover:shadow-xl hover:from-coffee-600 hover:to-coffee-700 transform hover:scale-105'
}

// 다음 질문
function handleNext() {
  if (selectedValue === null) return
  
  answers[currentQuestionIndex] = selectedValue
  localStorage.setItem('coffeeTestAnswers', JSON.stringify(answers))
  
  currentQuestionIndex++
  if (currentQuestionIndex < coffeeData.questions.length) {
    loadQuestion(currentQuestionIndex)
  } else {
    calculateResult()
  }
}

// 결과 계산
function calculateResult() {
  const totalScore = answers.reduce((sum, val) => sum + (val || 0), 0)
  
  // 결과 메시지
  let resultMessage
  let resultEmoji
  let resultTitle
  
  if (totalScore <= 10) {
    resultMessage = coffeeData.resultMessages[0]
    resultEmoji = '💧'
    resultTitle = '물 같은 커피인간 💧'
  } else if (totalScore <= 30) {
    resultMessage = coffeeData.resultMessages[1]
    resultEmoji = '☕'
    resultTitle = '일반 커피 애호가 ☕'
  } else if (totalScore <= 55) {
    resultMessage = coffeeData.resultMessages[2]
    resultEmoji = '☕☕'
    resultTitle = '커피 의존형 인간 ☕☕'
  } else if (totalScore <= 80) {
    resultMessage = coffeeData.resultMessages[3]
    resultEmoji = '☕☕☕'
    resultTitle = '준-커피인간 ☕☕☕'
  } else {
    resultMessage = coffeeData.resultMessages[4]
    resultEmoji = '☕☕☕☕☕'
    resultTitle = '카페인 고래 ☕☕☕☕☕'
  }
  
  // 결과 표시
  document.getElementById('result-emoji').textContent = resultEmoji
  document.getElementById('result-title').textContent = resultTitle
  document.getElementById('result-score').textContent = `${totalScore}점`
  document.getElementById('result-message').textContent = resultMessage
  
  // URL에 점수 추가 (공유용)
  window.history.pushState({}, '', `?score=${totalScore}`)
  
  showPage('result-page')
  
  // 카카오 애드핏 광고 표시
  if (window.kakaoAdFit) {
    window.kakaoAdFit.display()
  }
}

// 공유하기
async function handleShare() {
  const url = window.location.href
  try {
    await navigator.clipboard.writeText(url)
    const shareButton = document.getElementById('share-button')
    shareButton.textContent = '✅ 복사 완료!'
    setTimeout(() => {
      shareButton.textContent = '🔗 링크 복사하기'
    }, 2000)
  } catch (err) {
    console.error('공유하기 실패:', err)
    alert('링크 복사에 실패했습니다.')
  }
}

// 카카오톡 공유
function handleKakaoShare() {
  if (window.Kakao && window.Kakao.Share) {
    const score = answers.reduce((sum, val) => sum + (val || 0), 0)
    let resultMessage
    if (score <= 10) resultMessage = coffeeData.resultMessages[0]
    else if (score <= 30) resultMessage = coffeeData.resultMessages[1]
    else if (score <= 55) resultMessage = coffeeData.resultMessages[2]
    else if (score <= 80) resultMessage = coffeeData.resultMessages[3]
    else resultMessage = coffeeData.resultMessages[4]
    
    window.Kakao.Share.sendDefault({
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
    handleShare()
  }
}

// 다시 테스트하기
function handleRetest() {
  localStorage.removeItem('coffeeTestAnswers')
  currentQuestionIndex = 0
  answers = []
  selectedValue = null
  showPage('main-page')
}

// 페이지 로드 시
window.addEventListener('DOMContentLoaded', () => {
  // URL 파라미터로 결과 페이지 직접 접근 시
  const urlParams = new URLSearchParams(window.location.search)
  const score = urlParams.get('score')
  
  if (score) {
    // 점수로 결과 계산
    const savedAnswers = localStorage.getItem('coffeeTestAnswers')
    if (savedAnswers) {
      answers = JSON.parse(savedAnswers)
      calculateResult()
    } else {
      showPage('main-page')
    }
  } else {
    showPage('main-page')
  }
  
  // 카카오 애드핏 광고 초기화
  if (window.kakaoAdFit) {
    window.kakaoAdFit.display()
  }
})

