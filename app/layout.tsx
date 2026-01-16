import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coffee Addiction Test',
  description: 'How many times do you revive with caffeine in a day?',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Coffee Addiction Test',
    description: 'A fun test that analyzes your daily coffee dependency.',
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
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1204894220949193" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        {children}
      <div
        className="adsense-block"
        style={{ margin: '16px 0', display: 'flex', justifyContent: 'center' , textAlign: 'center'}}
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block', margin: '0 auto' , textAlign: 'center'}}
          data-ad-format="fluid"
          data-ad-layout-key="-6t+ed+2i-1n-4w"
          data-ad-client="ca-pub-1204894220949193"
          data-ad-slot="7300458753"
        ></ins>
      </div>
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>

      </body>
    </html>
  )
}
