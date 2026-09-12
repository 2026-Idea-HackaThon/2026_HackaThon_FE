import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// 공간 대여 페이지 전용 풍부한 공간 더미 데이터
const allSpaces = [
  {
    id: 1,
    name: '화이트 큐브 랩 성수',
    location: '서울 성동구 성수동',
    price: '시간당 45,000원',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    tag: '성수동',
    features: ['높은 층고', '전문 조명 시설', '화이트톤 벽면'],
    size: '약 35평',
  },
  {
    id: 2,
    name: '한옥 아카이브 공간 담',
    location: '서울 종로구 삼청동',
    price: '시간당 60,000원',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    tag: '삼청동/한옥',
    features: ['전통 한옥 감성', '마당 보유', '빔프로젝터 완비'],
    size: '약 40평',
  },
  {
    id: 3,
    name: '아뜰리에 루프 한남',
    location: '서울 용산구 한남동',
    price: '시간당 55,000원',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f',
    tag: '한남동',
    features: ['자연광 채광 우수', '통유리창', '음향 시스템'],
    size: '약 28평',
  },
  {
    id: 4,
    name: '언더그라운드 갤러리 홍대',
    location: '서울 마포구 서교동',
    price: '시간당 40,000원',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    tag: '홍대/합정',
    features: ['빈티지 인테리어', '레일 조명', '독립 쇼룸 공간'],
    size: '약 30평',
  },
  {
    id: 5,
    name: '스튜디오 파이 강남',
    location: '서울 강남구 신사동',
    price: '시간당 70,000원',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
    tag: '강남/청담',
    features: ['하이엔드 인테리어', '주차 3대 가능', '파티션 완비'],
    size: '약 50평',
  },
  {
    id: 6,
    name: '을지로 블루스퀘어 룸',
    location: '서울 중구 을지로',
    price: '시간당 35,000원',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    tag: '을지로/종로',
    features: ['인더스트리얼 감성', '가성비 공간', '역세권 도보 3분'],
    size: '약 25평',
  },
]

const regions = ['전체', '성수동', '한남동', '삼청동/한옥', '홍대/합정', '강남/청담', '을지로/종로']

export default function Spaces() {
  const [selectedRegion, setSelectedRegion] = useState('전체')
  const [searchQuery, setSearchQuery] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => observer.disconnect()
  }, [selectedRegion, searchQuery])

  // 지역 및 검색 필터링 로직
  const filteredSpaces = allSpaces.filter((space) => {
    const matchesRegion = selectedRegion === '전체' || space.tag === selectedRegion
    const matchesSearch =
      space.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      space.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      space.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesRegion && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white overflow-x-hidden flex flex-col items-center">
      {/* 전체 레이아웃 패딩 최적화 */}
      <div className="w-full max-w-7xl pt-16 pb-24 px-6 sm:px-8 flex flex-col items-center">
        {/* 1. 상단 타이틀 및 검색 영역 */}
        <section className="relative pt-8 pb-16 w-full max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
          {/* 배경 블러 효과 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center w-full">
            {/* 상단 서브 뱃지 */}
            <div className="mb-3 flex justify-center w-full">
              <span className="inline-block py-1 px-3.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
                Space Rental Hub
              </span>
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight text-center w-full">
              내 작품을 가장 빛내줄 <br className="hidden sm:inline" />
              전시 공간 대여
            </h1>

            {/* 설명 글 */}
            <p
              className="text-gray-400 text-sm sm:text-base max-w-lg mb-8 text-center leading-relaxed"
              style={{ marginBottom: '2rem' }}
            >
              독립 아티스트와 크리에이터를 위한 맞춤형 대여 공간을 찾아보세요.
            </p>

            {/* 검색바 입력창 */}
            <div className="w-full max-w-lg mb-8 flex justify-center">
              <div className="relative flex items-center shadow-2xl w-full">
                <svg
                  className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="공간명, 지역 또는 특징(예: 높은 층고)을 검색해보세요..."
                  className="w-full h-13 pl-12 pr-4 bg-[#131924]/90 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-gray-500 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition shadow-inner text-left"
                />
              </div>
            </div>

            {/* 지역 필터 탭 칩 */}
            <div
              className="flex flex-wrap items-center justify-center gap-2.5 w-full"
              style={{ marginTop: '2rem' }}
            >
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedRegion === region
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105 font-semibold'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. 공간 카드 그리드 섹션 */}
        <section ref={gridRef} className="w-full flex flex-col items-center mt-8">
          {filteredSpaces.length === 0 ? (
            <div className="text-center py-24 text-gray-500 space-y-3 bg-[#131924]/40 border border-white/5 rounded-3xl max-w-md w-full mx-auto">
              <svg
                className="w-12 h-12 mx-auto text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-base font-semibold text-gray-300">검색된 공간이 없습니다</p>
              <p className="text-xs text-gray-500">다른 지역이나 키워드로 검색해 보세요.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center w-full max-w-6xl mx-auto">
              {filteredSpaces.map((space, idx) => (
                <div
                  key={space.id}
                  className={`group relative bg-[#131924] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/40 transition-all duration-700 flex flex-col shadow-xl hover:shadow-indigo-500/10 transform w-full max-w-sm ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
                >
                  {/* 공간 이미지 영역 */}
                  <div className="relative h-60 overflow-hidden bg-gray-900 w-full">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131924]/60 via-transparent to-transparent pointer-events-none" />

                    <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-indigo-300 border border-white/10 shadow-md">
                      {space.size}
                    </span>
                    <span className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-xl text-xs font-bold text-white shadow-md border border-white/10">
                      {space.price}
                    </span>
                  </div>

                  {/* 공간 정보 영역 */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4 w-full">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-indigo-400 font-medium tracking-wide">
                        <span>{space.location}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition line-clamp-1 leading-snug">
                        {space.name}
                      </h3>

                      {/* 특징 태그 */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {space.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-xs text-gray-300"
                          >
                            #{feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 푸터 버튼 영역 */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-500 font-medium">
                        실시간 대여 신청 가능
                      </span>
                      <Link
                        to={`/spaces/${space.id}`}
                        className="px-3.5 py-2 bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-xl text-xs font-semibold transition shadow-sm"
                      >
                        공간 상세보기
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
