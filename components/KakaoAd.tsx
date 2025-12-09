'use client'

import { useEffect, useRef } from 'react'

interface KakaoAdProps {
  width?: string
  height?: string
  className?: string
}

declare global {
  interface Window {
    kakaoAdFit?: {
      display: () => void
    }
  }
}

export default function KakaoAd({ 
  width = '300', 
  height = '250',
  className = ''
}: KakaoAdProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 카카오 애드핏 스크립트가 로드될 때까지 대기
    const checkAdFit = () => {
      if (window.kakaoAdFit && adRef.current) {
        window.kakaoAdFit.display()
      } else {
        // 아직 스크립트가 로드되지 않았으면 조금 후에 다시 시도
        setTimeout(checkAdFit, 100)
      }
    }

    // 즉시 한 번 확인하고, 계속 체크
    const timer = setInterval(() => {
      if (window.kakaoAdFit) {
        window.kakaoAdFit.display()
        clearInterval(timer)
      }
    }, 100)

    // 최대 5초 대기
    setTimeout(() => {
      clearInterval(timer)
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div ref={adRef} className={`flex justify-center my-6 ${className}`}>
      <ins 
        className="kakao_ad_area" 
        style={{ display: 'none' }}
        data-ad-unit="DAN-LE1piWNRLutf5ysr"
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  )
}

