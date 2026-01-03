import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '커피 중독도 테스트',
  description: '하루 카페인으로 몇 번이나 부활하시나요?',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: '커피 중독도 테스트',
    description: '당신의 일상 속 커피 의존도를 재미있게 분석하는 테스트입니다.',
    images: [
      {
        url: '/default-og.png',
        width: 1200,
        height: 630,
        alt: 'Coffee Addiction Test preview',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1204894220949193" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
      <div className="adsense-block" style={{ margin: '16px 0', textAlign: 'center' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-format="fluid"
          data-ad-layout-key="-6t+ed+2i-1n-4w"
          data-ad-client="ca-pub-1204894220949193"
          data-ad-slot="7300458753"
        ></ins>
      </div>
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>

        {children}
      </body>
    </html>
  )
}