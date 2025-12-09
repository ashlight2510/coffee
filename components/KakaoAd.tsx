'use client'

import { useEffect, useRef } from 'react'

interface KakaoAdProps {
  width?: string
  height?: string
  className?: string
}

export default function KakaoAd({ 
  width = '300', 
  height = '250',
  className = ''
}: KakaoAdProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 카카오 애드핏은 스크립트가 로드되면 자동으로 모든 ins.kakao_ad_area 요소를 찾아서 광고를 표시합니다
    // 수동으로 display()를 호출할 필요가 없습니다
    
    // 스크립트 로드 확인 및 광고 표시 재시도
    const checkAndDisplay = () => {
      // 카카오 애드핏 스크립트가 로드되었는지 확인
      const scriptLoaded = document.querySelector('script[src*="ba.min.js"]')
      
      if (scriptLoaded && adRef.current) {
        // 스크립트가 로드되었고 광고 요소가 있으면 카카오 애드핏이 자동으로 처리합니다
        // window.kakaoAdFit이 있으면 호출 (있을 경우에만)
        if (typeof window !== 'undefined' && (window as any).kakaoAdFit && typeof (window as any).kakaoAdFit.display === 'function') {
          try {
            (window as any).kakaoAdFit.display()
          } catch (e) {
            // display()가 없거나 에러가 발생하면 무시 (자동으로 처리됨)
            console.log('카카오 애드핏 자동 표시 대기 중')
          }
        }
      }
    }

    // DOM이 준비되면 확인
    const timer = setInterval(() => {
      checkAndDisplay()
    }, 500)

    // 최대 10초 후 정리
    setTimeout(() => {
      clearInterval(timer)
    }, 10000)

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

