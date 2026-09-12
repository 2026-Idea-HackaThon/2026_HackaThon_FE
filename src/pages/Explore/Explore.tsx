import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// 탐색 페이지 전용 풍부한 전시 더미 데이터
const allExhibitions = [
  {
    id: 1,
    title: '고요한 사유의 방: 빛과 결',
    space: '성수동 연무장길 로프트 공간',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363',
    tag: '회화·설치',
    date: '2026.04.10 - 05.15',
    price: '무료 관람',
  },
  {
    id: 2,
    title: '일상의 파편들을 모아',
    space: '한남동 아뜰리에 루프',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119',
    tag: '사진·오브제',
    date: '2026.04.01 - 04.30',
    price: '5,000원',
  },
  {
    id: 3,
    title: '디지털 네이처의 정원',
    space: '홍대입구 언더그라운드 갤러리',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458',
    tag: '미디어아트',
    date: '2026.04.20 - 05.30',
    price: '8,000원',
  },
  {
    id: 4,
    title: '도시의 밤, 네온사인의 시',
    space: '을지로 블루스퀘어 룸 B',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071',
    tag: '사진·오브제',
    date: '2026.05.01 - 05.25',
    price: '무료 관람',
  },
  {
    id: 5,
    title: '무한한 선의 기록',
    space: '삼청동 한옥 가온 갤러리',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f',
    tag: '회화·설치',
    date: '2026.05.10 - 06.05',
    price: '3,000원',
  },
  {
    id: 6,
    title: '가상과 현실의 경계에서',
    space: '강남구 신사동 스튜디오 파이',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853',
    tag: '미디어아트',
    date: '2026.05.15 - 06.20',
    price: '10,000원',
  },
]

const categories = [
  '전체',
  '회화·설치',
  '사진·오브제',
  '미디어아트',
  '조각·공예',
  '혼합매체',
  '기타',
]

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('전체')
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
  }, [selectedCategory, searchQuery])

  // 카테고리 및 검색 필터링 로직
  const filteredExhibitions = allExhibitions.filter((item) => {
    const matchesCategory = selectedCategory === '전체' || item.tag === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.space.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
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
                Exhibition Discovery
              </span>
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight text-center w-full">
              공간 속 감동을 채우는 <br className="hidden sm:inline" />
              전시 둘러보기
            </h1>

            {/* 설명 글 */}
            <p
              className="text-gray-400 text-sm sm:text-base max-w-lg mb-8 text-center leading-relaxed"
              style={{ marginBottom: '2rem' }}
            >
              일상의 장소에서 펼쳐지는 다양한 아티스트들의 독립 전시를 만나보세요.
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
                  placeholder="전시명 또는 공간 이름을 검색해보세요..."
                  className="w-full h-13 pl-12 pr-4 bg-[#131924]/90 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-gray-500 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition shadow-inner text-left"
                />
              </div>
            </div>

            {/* 카테고리 필터 탭 칩 */}
            <div
              className="flex flex-wrap items-center justify-center gap-2.5 w-full"
              style={{ marginTop: '2rem' }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105 font-semibold'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. 전시 카드 그리드 섹션 (여백을 충분히 주어 쾌적하게 분리) */}
        <section ref={gridRef} className="w-full flex flex-col items-center mt-8">
          {filteredExhibitions.length === 0 ? (
            <div className="text-center py-24 text-gray-500 space-y-3 ">
              <p className="text-base font-semibold text-gray-300">검색 결과가 없습니다</p>
              <p className="text-xs text-gray-500">다른 키워드나 카테고리를 선택해 보세요.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center w-full max-w-6xl mx-auto">
              {filteredExhibitions.map((item, idx) => (
                <div
                  key={item.id}
                  className={`group relative bg-[#131924] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/40 transition-all duration-700 flex flex-col shadow-xl hover:shadow-indigo-500/10 transform w-full max-w-sm ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
                >
                  {/* 카드 상단 이미지 영역 */}
                  <div className="relative h-60 overflow-hidden bg-gray-900 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131924]/60 via-transparent to-transparent pointer-events-none" />

                    <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-indigo-300 border border-white/10 shadow-md">
                      {item.tag}
                    </span>
                    <span className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-xl text-xs font-bold text-white shadow-md border border-white/10">
                      {item.price}
                    </span>
                  </div>

                  {/* 카드 하단 본문 영역 */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4 w-full">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-indigo-400 font-medium tracking-wide">
                        <span className="truncate pr-2">{item.space}</span>
                        <span className="text-gray-400 shrink-0">{item.date}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition line-clamp-1 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* 푸터 버튼 영역 */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-500 font-medium">전시 관람 예약 가능</span>
                      <Link
                        to={`/explore/${item.id}`}
                        className="px-3.5 py-2 bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-xl text-xs font-semibold transition shadow-sm flex items-center gap-1.5"
                      >
                        상세보기
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
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
