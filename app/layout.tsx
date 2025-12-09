import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '커피 중독도 테스트',
  description: '하루 카페인으로 몇 번이나 부활하시나요?',
  openGraph: {
    title: '커피 중독도 테스트',
    description: '당신의 일상 속 커피 의존도를 재미있게 분석하는 테스트입니다.',
    images: ['/default-og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Script
          src="//t1.daumcdn.net/kas/static/ba.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

