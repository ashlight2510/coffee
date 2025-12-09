# ☕ 커피 중독도 테스트

하루 카페인으로 몇 번이나 부활하시나요? 당신의 커피 의존도를 재미있게 분석하는 테스트입니다.

## 🚀 시작하기

### 방법 1: 브라우저에서 바로 열기

`index.html` 파일을 브라우저에서 더블클릭하면 바로 실행됩니다!

### 방법 2: 로컬 서버 실행 (권장)

```bash
# Python 3
python3 -m http.server 8000

# 또는 Node.js (http-server 설치 필요)
npx http-server -p 8000
```

브라우저에서 [http://localhost:8000](http://localhost:8000)을 열어 확인하세요.

### 방법 3: VSCode Live Server

VSCode의 Live Server 확장 프로그램을 사용하면 자동으로 브라우저가 열립니다.

## 📁 프로젝트 구조

```
coffee/
├── index.html      # 메인 HTML 파일 (단일 파일로 모든 기능 포함)
├── app.js          # JavaScript 로직
└── data/
    └── coffee.json # 테스트 데이터 (참고용)
```

## 🎨 기능

- ✅ 11문항 선택형 테스트
- ✅ 실시간 진행률 표시
- ✅ 점수 계산 및 결과 표시 (5개 구간)
- ✅ 링크 복사 공유 기능
- ✅ 카카오톡 공유 기능
- ✅ 반응형 디자인 (모바일 최적화)
- ✅ 카카오 애드핏 광고 통합
- ✅ Tailwind CSS CDN 사용 (별도 설치 불필요)

## 📊 점수 구간

- 0~10점: 물 같은 커피인간 💧
- 11~30점: 일반 커피 애호가 ☕
- 31~55점: 커피 의존형 인간 ☕☕
- 56~80점: 준-커피인간 ☕☕☕
- 81점 이상: 카페인 고래 ☕☕☕☕☕

## 🛠️ 기술 스택

- 순수 HTML5
- Tailwind CSS (CDN)
- 순수 JavaScript (Vanilla JS)
- 카카오 애드핏 광고

## 📝 커스터마이징

`app.js` 파일의 `coffeeData` 객체를 수정하여 질문, 선택지, 결과 메시지를 변경할 수 있습니다.

## 🌐 배포

### GitHub Pages

1. GitHub 저장소에 푸시
2. Settings > Pages > Source: main branch 선택
3. `index.html`이 루트에 있으면 자동으로 배포됩니다

### Netlify / Vercel

`index.html` 파일을 드래그 앤 드롭하면 바로 배포됩니다!

### 일반 웹호스팅

`index.html`과 `app.js` 파일만 업로드하면 됩니다.

## 📱 모바일 최적화

모든 디바이스(320px~1080px)에서 완벽하게 동작합니다.
