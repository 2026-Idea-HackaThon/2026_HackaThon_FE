import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ExhibitionCard, SpaceCard } from '../Component/Card'

const popularExhibitions = [
  {
    id: 1,
    title: '고요한 사유의 방: 빛과 결',
    space: '성수동 연무장길 로프트 공간',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363',
    tag: '회화·설치',
  },
  {
    id: 2,
    title: '일상의 파편들을 모아',
    space: '한남동 아뜰리에 루프',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119',
    tag: '사진·오브제',
  },
  {
    id: 3,
    title: '디지털 네이처의 정원',
    space: '홍대입구 언더그라운드 갤러리',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458',
    tag: '미디어아트',
  },
]

const rentableSpaces = [
  {
    id: 1,
    name: '화이트 큐브 랩 성수',
    location: '서울 성동구',
    price: '시간당 45,000원',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    features: ['높은 층고', '전문 조명 시설', '화이트톤 벽면'],
  },
  {
    id: 2,
    name: '한옥 아카이브 공간 담',
    location: '서울 종로구',
    price: '시간당 60,000원',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    features: ['전통 한옥 감성', '마당 보유', '빔프로젝터 완비'],
  },
]

export default function Main() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white overflow-x-hidden">
      {/* 부드러운 등장 애니메이션을 위한 키프레임 스타일 주입 */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      <div className="pt-16">
        {/* 1. 히어로 섹션 (요소별 순차 등장 애니메이션 적용) */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-20 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* 첫 번째: 뱃지 태그 */}
            <div className="mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-semibold tracking-wide">
                공간을 빌려 열리는 감동적인 전시
              </span>
            </div>

            {/* 두 번째: 메인 타이틀 */}
            <h1
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: '250ms' }}
            >
              당신의 빈 벽에 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                새로운 예술을 채우다
              </span>
            </h1>

            {/* 세 번째: 설명 문구 */}
            <p
              className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 animate-fade-in-up"
              style={{ animationDelay: '400ms', marginBottom: '2.5rem' }}
            >
              일상의 공간이 미술관이 되는 순간. 지금 가장 주목받는 독립 전시와 감각적인 대여 공간을
              만나보세요
            </p>

            {/* 네 번째: 버튼 그룹 */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: '550ms' }}
            >
              <Link
                to="/explore"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                전시 둘러보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                to="/spaces"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition flex items-center justify-center gap-2"
              >
                공간 대여하러 가기
              </Link>
            </div>
          </div>
        </section>

        {/* 2. 요즘 뜨는 전시 섹션 */}
        <section ref={sectionRef} className="pt-16 pb-20 px-6 max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 "
            style={{ marginBottom: '20px' }}
          >
            <div>
              <div className="mb-3">
                <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">
                  Hot Exhibitions
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                요즘 뜨는 전시
              </h2>
            </div>
            <Link
              to="/explore"
              className="text-sm font-semibold text-gray-400 hover:text-white transition mt-3 md:mt-0"
            >
              전체보기 &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularExhibitions.map((item, idx) => (
              <ExhibitionCard key={item.id} {...item} isVisible={isVisible} delay={idx * 150} />
            ))}
          </div>
        </section>

        {/* 3. 공간 대여 추천 섹션 */}
        <section className="pt-16 pb-20 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
            style={{ marginBottom: '20px' }}
          >
            <div>
              <div className="mb-3">
                <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">
                  Space Rental
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                내 작품을 걸기 좋은 공간 대여
              </h2>
            </div>
            <Link
              to="/spaces"
              className="text-sm font-semibold text-gray-400 hover:text-white transition mt-3 md:mt-0"
            >
              공간 더보기 &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rentableSpaces.map((space) => (
              <SpaceCard key={space.id} {...space} />
            ))}
          </div>
        </section>

        {/* 하단 푸터 영역 */}
        <footer className="border-t border-white/10 py-16 px-6 text-center text-sm text-gray-500">
          <p>© 2026 방전(BangJeon). All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
