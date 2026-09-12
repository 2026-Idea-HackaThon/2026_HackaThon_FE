import { useParams, Link } from 'react-router-dom'

// 대여 공간 전체 더미 데이터
const allSpaces = [
  {
    id: 1,
    name: '화이트 큐브 랩 성수',
    location: '서울 성동구 성수동 2가 315-4',
    price: '시간당 45,000원',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    tag: '성수동',
    features: ['높은 층고', '전문 조명 시설', '화이트톤 벽면'],
    size: '약 35평',
    description:
      '성수동 연무장길 인근에 위치한 모던하고 깔끔한 화이트 큐브 형태의 독립 전시 공간입니다. 높은 층고와 최신 조명 시설이 구비되어 회화 및 설치 미술 전시에 최적화되어 있습니다.',
    amenities: ['와이파이', '냉난방기', '주차 1대 가능', '음향 장비', '탈의실'],
    host: '랩 성수 크루',
    reviews: [
      {
        id: 1,
        author: '김민지',
        rating: 5,
        date: '2026.05.12',
        comment: '조명이 워낙 좋아서 회화 작품 색감이 정말 잘 살았습니다. 호스트 분도 친절해요!',
      },
      {
        id: 2,
        author: '이준호',
        rating: 5,
        date: '2026.04.28',
        comment:
          '성수동 카페 거리랑 가까워서 관람객들이 찾아오기 너무 편했습니다. 재대여 의사 100%입니다.',
      },
    ],
  },
  {
    id: 2,
    name: '한옥 아카이브 공간 담',
    location: '서울 종로구 삼청로 85',
    price: '시간당 60,000원',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    tag: '삼청동/한옥',
    features: ['전통 한옥 감성', '마당 보유', '빔프로젝터 완비'],
    size: '약 40평',
    description:
      '고즈넉한 삼청동 골목에 위치한 전통과 현대가 어우러진 한옥 공간입니다. 아름다운 마당과 아늑한 실내 분위기를 활용하여 공예, 사진, 전통 매체 전시를 열기 좋습니다.',
    amenities: ['와이파이', '냉난방기', '빔프로젝터', '전통 차 세트 제공', '개별 화장실'],
    host: '공간 담',
    reviews: [
      {
        id: 1,
        author: '박서연',
        rating: 5,
        date: '2026.05.01',
        comment: '마당 공간을 활용한 야외 전시를 같이 진행했는데 반응이 폭발적이었습니다.',
      },
    ],
  },
  {
    id: 3,
    name: '아뜰리에 루프 한남',
    location: '서울 용산구 한남대로 20길',
    price: '시간당 55,000원',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f',
    tag: '한남동',
    features: ['자연광 채광 우수', '통유리창', '음향 시스템'],
    size: '약 28평',
    description:
      '한남동의 트렌디한 감성을 담은 통유리창 스튜디오입니다. 풍부한 자연광이 들어와 사진 및 오브제 전시에 탁월하며 방문객들의 접근성이 뛰어납니다.',
    amenities: ['와이파이', '냉난방기', '블루투스 스피커', '피팅룸'],
    host: '루프 스튜디오',
    reviews: [
      {
        id: 1,
        author: '최도현',
        rating: 4,
        date: '2026.03.15',
        comment: '채광이 장난 아닙니다. 사진 촬영용 전시라면 무조건 여기 추천합니다.',
      },
    ],
  },
  {
    id: 4,
    name: '언더그라운드 갤러리 홍대',
    location: '서울 마포구 와우산로 29길',
    price: '시간당 40,000원',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    tag: '홍대/합정',
    features: ['빈티지 인테리어', '레일 조명', '독립 쇼룸 공간'],
    size: '약 30평',
    description:
      '홍대 인근의 감각적인 지하 언더그라운드 공간입니다. 거칠면서도 세련된 인더스트리얼 인테리어와 레일 조명이 젊고 독창적인 크리에이터들의 작품을 돋보이게 합니다.',
    amenities: ['와이파이', '냉난방기', '레일 조명 다수', '창고 이용 가능'],
    host: '언더그라운드 랩',
    reviews: [
      {
        id: 1,
        author: '정지훈',
        rating: 5,
        date: '2026.02.20',
        comment: '힙한 분위기 원하시면 완벽한 선택입니다. 가성비도 좋아요.',
      },
    ],
  },
  {
    id: 5,
    name: '스튜디오 파이 강남',
    location: '서울 강남구 도산대로',
    price: '시간당 70,000원',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
    tag: '강남/청담',
    features: ['하이엔드 인테리어', '주차 3대 가능', '파티션 완비'],
    size: '약 50평',
    description:
      '프리미엄 감성의 강남 대형 하이엔드 쇼룸 및 전시 공간입니다. 넓은 평수와 고급스러운 마감재로 VIP 초청전이나 대규모 팝업 전시에 적합합니다.',
    amenities: ['발레파킹 지원', '냉난방기', '고급 음향 장비', '보안 시스템'],
    host: '파이 홀딩스',
    reviews: [
      {
        id: 1,
        author: '한예슬',
        rating: 5,
        date: '2026.05.08',
        comment: '고급스러운 팝업 진행했는데 브랜드 이미지랑 찰떡이었습니다.',
      },
    ],
  },
  {
    id: 6,
    name: '을지로 블루스퀘어 룸',
    location: '서울 중구 을지로 12길',
    price: '시간당 35,000원',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    tag: '을지로/종로',
    features: ['인더스트리얼 감성', '가성비 공간', '역세권 도보 3분'],
    size: '약 25평',
    description:
      '을지로 특유의 빈티지한 골목 감성을 느낄 수 있는 아담하고 실속 있는 공간입니다. 합리적인 예산으로 독립 전시를 기획하는 신진 작가분들에게 추천합니다.',
    amenities: ['와이파이', '냉난방기', '멀티탭 및 테이블 지원'],
    host: '을지로 컬렉티브',
    reviews: [
      {
        id: 1,
        author: '오민수',
        rating: 4,
        date: '2026.01.11',
        comment: '예산 아끼면서 아기자기한 전시 열기 정말 좋습니다.',
      },
    ],
  },
]

export default function SpacesDetail() {
  const { id } = useParams<{ id: string }>()
  const spaceId = Number(id)
  const space = allSpaces.find((s) => s.id === spaceId)

  if (!space) {
    return (
      <div
        className="min-h-screen bg-[#0B0F17] text-white flex flex-col items-center justify-center text-center"
        style={{ padding: '32px' }}
      >
        <h2 className="text-2xl font-bold" style={{ marginBottom: '20px' }}>
          존재하지 않거나 삭제된 공간입니다.
        </h2>
        <p className="text-gray-400 text-sm" style={{ marginBottom: '36px' }}>
          요청하신 공간 정보를 찾을 수 없습니다.
        </p>
        <Link
          to="/spaces"
          className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition"
          style={{ padding: '14px 28px' }}
        >
          공간 목록으로 돌아가기
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
            to="/spaces"
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
            공간 목록으로
          </Link>
        </div>

        {/* 메인 콘텐츠 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: '56px' }}>
          {/* 좌측: 이미지 및 상세 설명 / 리뷰 블록들 */}
          <div className="lg:col-span-7 flex flex-col" style={{ gap: '56px' }}>
            {/* 대표 이미지 블록 */}
            <div
              className="relative rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl"
              style={{ height: '440px' }}
            >
              <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
              <span
                className="absolute bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-indigo-300 border border-white/10 shadow-md"
                style={{ top: '20px', left: '20px', padding: '10px 18px' }}
              >
                {space.tag}
              </span>
            </div>

            {/* 공간 소개 블록 */}
            <div
              className="bg-[#131924]/60 rounded-3xl border border-white/5 shadow-xl flex flex-col"
              style={{ padding: '40px', gap: '24px' }}
            >
              <h2 className="text-xl font-bold text-white tracking-tight">공간 소개</h2>
              <p
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
                style={{ lineHeight: '1.8' }}
              >
                {space.description}
              </p>
            </div>

            {/* 편의시설 및 특징 블록 */}
            <div
              className="bg-[#131924]/60 rounded-3xl border border-white/5 shadow-xl flex flex-col"
              style={{ padding: '40px', gap: '28px' }}
            >
              <h2 className="text-xl font-bold text-white tracking-tight">편의시설 및 특징</h2>
              <div className="flex flex-wrap" style={{ gap: '14px' }}>
                {space.features.map((f, i) => (
                  <span
                    key={i}
                    className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-xl text-xs sm:text-sm font-medium"
                    style={{ padding: '12px 18px' }}
                  >
                    #{f}
                  </span>
                ))}
                {space.amenities.map((a, i) => (
                  <span
                    key={i}
                    className="bg-white/5 border border-white/5 text-gray-300 rounded-xl text-xs sm:text-sm"
                    style={{ padding: '12px 18px' }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* 방문자 리뷰 섹션 블록 */}
            <div
              className="bg-[#131924]/60 rounded-3xl border border-white/5 shadow-xl flex flex-col"
              style={{ padding: '40px', gap: '32px' }}
            >
              <div
                className="flex items-center justify-between border-b border-white/10"
                style={{ paddingBottom: '24px' }}
              >
                <h2 className="text-xl font-bold text-white tracking-tight">
                  이용 후기{' '}
                  <span className="text-indigo-400 text-lg" style={{ marginLeft: '10px' }}>
                    ({space.reviews.length})
                  </span>
                </h2>
              </div>

              <div className="flex flex-col" style={{ gap: '28px' }}>
                {space.reviews.length > 0 ? (
                  space.reviews.map((review) => (
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
                    아직 작성된 이용 후기가 없습니다.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 우측: 예약 카드 (Sticky 블록) */}
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
                  {space.location}
                </span>
                <h1
                  className="text-2xl sm:text-3xl font-extrabold text-white leading-snug"
                  style={{ lineHeight: '1.4' }}
                >
                  {space.name}
                </h1>
                <div
                  className="flex items-center justify-between text-sm text-gray-400"
                  style={{ paddingTop: '10px' }}
                >
                  <span>규모: {space.size}</span>
                  <span>호스트: {space.host}</span>
                </div>
              </div>

              {/* 가격 표시 */}
              <div className="flex items-center justify-between" style={{ padding: '8px 0' }}>
                <span className="text-gray-400 text-sm">대여 요금</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-300">
                  {space.price}
                </span>
              </div>

              {/* 예약 신청 버튼들 */}
              <div className="flex flex-col" style={{ gap: '16px', paddingTop: '8px' }}>
                <button
                  onClick={() =>
                    alert('실시간 예약 시스템 준비 중입니다. 문의하기를 이용해주세요.')
                  }
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 text-base"
                  style={{ padding: '20px 0' }}
                >
                  대여 예약 신청하기
                </button>
                <button
                  onClick={() => alert('호스트에게 문의가 전달되었습니다.')}
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-semibold rounded-2xl transition text-sm"
                  style={{ padding: '20px 0' }}
                >
                  호스트에게 문의하기
                </button>
              </div>

              <div className="border-t border-white/5 text-center" style={{ paddingTop: '24px' }}>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  안전한 거래를 위해 플랫폼을 통해 결제 및 예약을 진행하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
