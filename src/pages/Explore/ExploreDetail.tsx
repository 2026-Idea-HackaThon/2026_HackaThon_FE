import { useParams, Link } from 'react-router-dom'

// 탐색/전시 공간 전체 더미 데이터 (풍부한 콘텐츠 및 리뷰 추가)
const allExplores = [
  {
    id: 1,
    name: '디지털 아트 웨이브 성수',
    location: '서울 성동구 연무장길 20',
    category: '미디어 아트',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853',
    tag: '기획전시',
    period: '2026.05.01 - 2026.06.30',
    operatingHours: '매일 10:00 - 20:00 (입장 마감 19:00)',
    ticketPrice: '성인 18,000원 / 청소년 14,000원',
    description:
      '최첨단 미디어 기술과 순수예술이 결합된 몰입형 디지털 아트 전시입니다. 관람객의 움직임에 반응하는 인터랙티브 작품들을 직접 체험할 수 있으며, 공간 전체를 채우는 웅장한 사운드와 시각 효과가 압도적인 몰입감을 선사합니다.',
    curator: '아트랩 서울 크리에이티브 디렉터 김도진',
    highlights: [
      '인터랙티브 미디어',
      '360도 서라운드 룸',
      '포토존 다수',
      '무료 오디오 가이드 제공',
    ],
    facilities: ['물품 보관함', '휠체어 대여', '기념품 샵', '주차 지원 (유료)'],
    reviews: [
      {
        id: 1,
        author: '이지은',
        rating: 5,
        date: '2026.05.14',
        comment: '빛과 소리가 어우러지는 연출이 정말 미쳤습니다. 인생샷도 건지고 가요!',
      },
      {
        id: 2,
        author: '박민수',
        rating: 5,
        date: '2026.05.08',
        comment: '아이들과 함께 방문했는데 인터랙티브 요소 덕분에 지루할 틈이 없었습니다.',
      },
      {
        id: 3,
        author: '강서윤',
        rating: 4,
        date: '2026.05.03',
        comment: '주말이라 사람이 조금 많았지만 전시 퀄리티 자체는 대만족입니다.',
      },
    ],
  },
  {
    id: 2,
    name: '모던 아키텍처 아카이브',
    location: '서울 종로구 자하문로 40',
    category: '건축/디자인',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    tag: '특별전',
    period: '2026.04.15 - 2026.05.31',
    operatingHours: '화-일 11:00 - 19:00 (월요일 휴관)',
    ticketPrice: '무료 관람 (사전 예약 필수)',
    description:
      '현대 건축의 흐름을 조명하는 아카이브 전시입니다. 국내외 유명 건축가들의 스케치, 모형, 그리고 철학이 담긴 도면들을 한자리에서 만나보실 수 있으며 도시와 공간의 관계를 깊이 있게 고찰합니다.',
    curator: '공간건축연구소 수석 큐레이터 한지영',
    highlights: [
      '실물 모형 전시',
      '아키텍트 토크 운영',
      '한정판 도록 판매',
      '아카이브 도서관 이용',
    ],
    facilities: ['카페테리아', '와이파이', '개인 락커'],
    reviews: [
      {
        id: 1,
        author: '오정훈',
        rating: 5,
        date: '2026.04.25',
        comment: '건축을 사랑하는 사람이라면 놓치지 말아야 할 깊이 있는 전시입니다.',
      },
      {
        id: 2,
        author: '최유진',
        rating: 4,
        date: '2026.04.18',
        comment: '공간 자체가 주는 고즈넉함과 전시 내용이 너무 잘 어울려요.',
      },
    ],
  },
]

export default function ExploreDetail() {
  const { id } = useParams<{ id: string }>()
  const exploreId = Number(id)
  const item = allExplores.find((e) => e.id === exploreId)

  if (!item) {
    return (
      <div
        className="min-h-screen bg-[#0B0F17] text-white flex flex-col items-center justify-center text-center"
        style={{ padding: '32px' }}
      >
        <h2 className="text-2xl font-bold" style={{ marginBottom: '20px' }}>
          존재하지 않거나 종료된 전시입니다.
        </h2>
        <p className="text-gray-400 text-sm" style={{ marginBottom: '36px' }}>
          요청하신 콘텐츠 정보를 찾을 수 없습니다.
        </p>
        <Link
          to="/explore"
          className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition"
          style={{ padding: '14px 28px' }}
        >
          탐색 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white overflow-x-hidden flex flex-col items-center">
      <div
        className="w-full max-w-5xl flex flex-col"
        style={{
          paddingTop: '110px',
          paddingBottom: '140px',
          paddingLeft: '28px',
          paddingRight: '28px',
        }}
      >
        {/* 상단 네비게이션 */}
        <div style={{ marginBottom: '56px' }}>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition group"
            style={{ padding: '8px 0' }}
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            탐색 목록으로
          </Link>
        </div>

        {/* 메인 콘텐츠 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: '56px' }}>
          {/* 좌측: 이미지 및 상세 설명 / 특징 / 리뷰 */}
          <div className="lg:col-span-7 flex flex-col" style={{ gap: '56px' }}>
            {/* 대표 이미지 */}
            <div
              className="relative rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl"
              style={{ height: '440px' }}
            >
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              <span
                className="absolute bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-indigo-300 border border-white/10 shadow-md"
                style={{ top: '20px', left: '20px', padding: '10px 18px' }}
              >
                {item.tag}
              </span>
            </div>

            {/* 전시 소개 */}
            <div
              className="bg-[#131924]/60 rounded-3xl border border-white/5 shadow-xl flex flex-col"
              style={{ padding: '40px', gap: '24px' }}
            >
              <h2 className="text-xl font-bold text-white tracking-tight">전시 소개</h2>
              <p
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
                style={{ lineHeight: '1.8' }}
              >
                {item.description}
              </p>
            </div>

            {/* 주요 하이라이트 및 편의시설 */}
            <div
              className="bg-[#131924]/60 rounded-3xl border border-white/5 shadow-xl flex flex-col"
              style={{ padding: '40px', gap: '28px' }}
            >
              <h2 className="text-xl font-bold text-white tracking-tight">주요 특징 및 편의시설</h2>
              <div className="flex flex-wrap" style={{ gap: '14px' }}>
                {item.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-xl text-xs sm:text-sm font-medium"
                    style={{ padding: '12px 18px' }}
                  >
                    #{h}
                  </span>
                ))}
                {item.facilities.map((f, i) => (
                  <span
                    key={i}
                    className="bg-white/5 border border-white/5 text-gray-300 rounded-xl text-xs sm:text-sm"
                    style={{ padding: '12px 18px' }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* 관람객 리뷰 섹션 */}
            <div
              className="bg-[#131924]/60 rounded-3xl border border-white/5 shadow-xl flex flex-col"
              style={{ padding: '40px', gap: '32px' }}
            >
              <div
                className="flex items-center justify-between border-b border-white/10"
                style={{ paddingBottom: '24px' }}
              >
                <h2 className="text-xl font-bold text-white tracking-tight">
                  관람 후기{' '}
                  <span className="text-indigo-400 text-lg" style={{ marginLeft: '10px' }}>
                    ({item.reviews.length})
                  </span>
                </h2>
              </div>

              <div className="flex flex-col" style={{ gap: '28px' }}>
                {item.reviews.length > 0 ? (
                  item.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white/5 rounded-2xl border border-white/5 flex flex-col"
                      style={{ padding: '28px', gap: '18px' }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center" style={{ gap: '14px' }}>
                          <span className="font-semibold text-white text-sm">{review.author}</span>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex text-yellow-400 text-xs" style={{ gap: '3px' }}>
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                      <p
                        className="text-gray-300 text-sm leading-relaxed"
                        style={{ lineHeight: '1.7' }}
                      >
                        {review.comment}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm text-center" style={{ padding: '40px 0' }}>
                    아직 작성된 관람 후기가 없습니다.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 우측: 정보 및 액션 카드 (Sticky) */}
          <div className="lg:col-span-5">
            <div
              className="sticky top-28 bg-[#131924] border border-white/10 rounded-3xl shadow-2xl flex flex-col"
              style={{ padding: '40px', gap: '36px' }}
            >
              <div
                className="border-b border-white/10 flex flex-col"
                style={{ paddingBottom: '32px', gap: '20px' }}
              >
                <span className="text-xs text-indigo-400 font-semibold tracking-wider uppercase">
                  {item.category}
                </span>
                <h1
                  className="text-2xl sm:text-3xl font-extrabold text-white leading-snug"
                  style={{ lineHeight: '1.4' }}
                >
                  {item.name}
                </h1>
                <div
                  className="flex flex-col text-sm text-gray-400"
                  style={{ paddingTop: '10px', gap: '12px' }}
                >
                  <span>장소: {item.location}</span>
                  <span>주관: {item.curator}</span>
                </div>
              </div>

              {/* 일정 및 관람 시간 */}
              <div className="flex flex-col" style={{ gap: '24px' }}>
                <div className="flex flex-col" style={{ gap: '10px' }}>
                  <span className="text-gray-400 text-xs">전시 일정</span>
                  <p className="text-base font-bold text-white">{item.period}</p>
                </div>
                <div className="flex flex-col" style={{ gap: '10px' }}>
                  <span className="text-gray-400 text-xs">운영 시간</span>
                  <p className="text-sm text-gray-300">{item.operatingHours}</p>
                </div>
              </div>

              {/* 가격 표시 */}
              <div
                className="flex items-center justify-between border-t border-white/5"
                style={{ paddingTop: '24px' }}
              >
                <span className="text-gray-400 text-sm">관람 요금</span>
                <span className="text-base sm:text-lg font-extrabold text-indigo-300">
                  {item.ticketPrice}
                </span>
              </div>

              {/* 액션 버튼 */}
              <div className="flex flex-col" style={{ gap: '18px', paddingTop: '12px' }}>
                <button
                  onClick={() => alert('예매 시스템 준비 중입니다.')}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 text-base"
                  style={{ padding: '20px 0' }}
                >
                  관람 예매하기
                </button>
                <button
                  onClick={() => alert('공유 링크가 클립보드에 복사되었습니다.')}
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-semibold rounded-2xl transition text-sm"
                  style={{ padding: '20px 0' }}
                >
                  전시 공유하기
                </button>
              </div>

              <div className="border-t border-white/5 text-center" style={{ paddingTop: '24px' }}>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  안전하고 원활한 관람을 위해 사전 예약을 권장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
