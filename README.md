# ☕ 커피 중독도 테스트

하루 카페인으로 몇 번이나 부활하시나요? 당신의 커피 의존도를 재미있게 분석하는 테스트입니다.

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
coffee/
├── app/
│   ├── layout.tsx          # 레이아웃
│   ├── page.tsx            # 메인 페이지
│   ├── globals.css         # 전역 스타일
│   ├── test/
│   │   └── [index]/
│   │       └── page.tsx    # 질문 페이지
│   └── result/
│       └── page.tsx        # 결과 페이지
├── data/
│   └── coffee.json         # 테스트 데이터
└── package.json
```

## 🎨 기능

- ✅ 11문항 선택형 테스트
- ✅ 실시간 진행률 표시
- ✅ 점수 계산 및 결과 표시 (5개 구간)
- ✅ 링크 복사 공유 기능
- ✅ 카카오톡 공유 기능 (OG 태그 활용)
- ✅ 반응형 디자인 (모바일 최적화)
- ✅ 재사용 가능한 구조 (JSON 기반)

## 📊 점수 구간

- 0~10점: 물 같은 커피인간 💧
- 11~30점: 일반 커피 애호가 ☕
- 31~55점: 커피 의존형 인간 ☕☕
- 56~80점: 준-커피인간 ☕☕☕
- 81점 이상: 카페인 고래 ☕☕☕☕☕

## 🛠️ 기술 스택

- Next.js 14 (App Router)
- React 18
- TypeScript
- TailwindCSS
- JSON 기반 데이터 구조

## 📝 커스터마이징

`/data/coffee.json` 파일을 수정하여 질문, 선택지, 결과 메시지를 변경할 수 있습니다.

## 🖼️ OG 이미지

카카오톡 공유 시 사용할 OG 이미지를 `/public/default-og.png` 경로에 추가하세요.
권장 크기: 1200x630px

## 🚀 배포

### Vercel 배포

```bash
npm run build
vercel
```

### 다른 플랫폼

```bash
npm run build
npm start
```

