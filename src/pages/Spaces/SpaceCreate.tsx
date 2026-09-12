import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function SpaceCreatePage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    size: '',
    tag: '',
    description: '',
    amenities: '',
  })

  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [isCompleted, setIsCompleted] = useState(false) // 등록 완료 모달 상태

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const filesArray = Array.from(e.target.files)

    const totalFiles = [...imageFiles, ...filesArray].slice(0, 8)
    setImageFiles(totalFiles)

    const newPreviewUrls = totalFiles.map((file) => URL.createObjectURL(file))
    setPreviewUrls(newPreviewUrls)

    e.target.value = ''
  }

  const handleRemoveImage = (index: number) => {
    const updatedFiles = imageFiles.filter((_, i) => i !== index)
    const updatedPreviews = previewUrls.filter((_, i) => i !== index)

    setImageFiles(updatedFiles)
    setPreviewUrls(updatedPreviews)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (imageFiles.length === 0) {
      alert('최소 1장 이상의 공간 이미지를 업로드해주세요.')
      return
    }
    // 등록 완료 처리 -> 완료 모달 노출
    setIsCompleted(true)
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white overflow-x-hidden flex flex-col items-center">
      <div
        className="w-full max-w-3xl flex flex-col"
        style={{
          paddingTop: '96px',
          paddingBottom: '140px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ marginBottom: '40px' }}>
          <Link
            to="/spaces"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition group"
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

        <div
          className="bg-[#131924] border border-white/10 rounded-3xl shadow-2xl flex flex-col"
          style={{ padding: '48px', gap: '36px' }}
        >
          <div className="border-b border-white/10" style={{ paddingBottom: '24px' }}>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              대여 공간 등록하기
            </h1>
            <p className="text-gray-400 text-sm" style={{ marginTop: '8px' }}>
              크리에이터들과 공유할 멋진 공간 정보를 입력해주세요.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '28px' }}>
            <div className="flex flex-col" style={{ gap: '10px' }}>
              <label className="text-xs font-semibold text-gray-300">공간 이름</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="예) 화이트 큐브 랩 성수"
                className="w-full bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                style={{ padding: '16px 18px' }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '20px' }}>
              <div className="flex flex-col" style={{ gap: '10px' }}>
                <label className="text-xs font-semibold text-gray-300">상세 주소 / 위치</label>
                <input
                  required
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="예) 서울 성동구 성수동 2가"
                  className="w-full bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                  style={{ padding: '16px 18px' }}
                />
              </div>
              <div className="flex flex-col" style={{ gap: '10px' }}>
                <label className="text-xs font-semibold text-gray-300">공간 규모</label>
                <input
                  required
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="예) 약 35평"
                  className="w-full bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                  style={{ padding: '16px 18px' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '20px' }}>
              <div className="flex flex-col" style={{ gap: '10px' }}>
                <label className="text-xs font-semibold text-gray-300">대여 요금</label>
                <input
                  required
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="예) 시간당 45,000원"
                  className="w-full bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                  style={{ padding: '16px 18px' }}
                />
              </div>
              <div className="flex flex-col" style={{ gap: '10px' }}>
                <label className="text-xs font-semibold text-gray-300">대표 태그 (지역명 등)</label>
                <input
                  required
                  type="text"
                  name="tag"
                  value={formData.tag}
                  onChange={handleChange}
                  placeholder="예) 성수동"
                  className="w-full bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                  style={{ padding: '16px 18px' }}
                />
              </div>
            </div>

            <div className="flex flex-col" style={{ gap: '10px' }}>
              <label className="text-xs font-semibold text-gray-300">
                편의시설 및 특징 (쉼표로 구분)
              </label>
              <input
                type="text"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
                placeholder="예) 와이파이, 냉난방기, 주차 1대 가능, 음향 장비"
                className="w-full bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                style={{ padding: '16px 18px' }}
              />
            </div>

            {/* 이미지 가로 스크롤 미리보기 영역 */}
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-300">
                  공간 이미지 업로드 (최대 8장)
                </label>
                <span className="text-xs text-indigo-400 font-medium">
                  {imageFiles.length} / 8장
                </span>
              </div>

              {previewUrls.length > 0 && (
                <div
                  className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                  style={{ scrollSnapType: 'x mandatory' }}
                >
                  {previewUrls.map((url, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-36 h-36 rounded-2xl overflow-hidden border border-white/10 bg-black/40 group shadow-md"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <img
                        src={url}
                        alt={`미리보기 ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 bg-black/70 hover:bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center transition shadow-md"
                        title="삭제"
                      >
                        ✕
                      </button>
                      <span className="absolute bottom-2 left-2 bg-black/60 text-[10px] text-gray-200 px-2 py-0.5 rounded font-medium">
                        {index === 0 ? '대표 사진' : `${index + 1}번째`}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {imageFiles.length < 8 && (
                <div
                  className="w-full bg-white/5 border border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition"
                  style={{ padding: '24px' }}
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFilesChange}
                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
                  />
                  <p className="text-[11px] text-gray-400 mt-2">
                    우측으로 넘겨가며 확인할 수 있습니다. (남은 장수: {8 - imageFiles.length}장)
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col" style={{ gap: '10px' }}>
              <label className="text-xs font-semibold text-gray-300">상세 소개</label>
              <textarea
                required
                rows={5}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="공간의 분위기, 추천 용도 등 상세한 설명을 적어주세요."
                className="w-full bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition resize-none"
                style={{ padding: '16px 18px', lineHeight: '1.6' }}
              />
            </div>

            <div style={{ paddingTop: '12px' }}>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition shadow-lg shadow-indigo-600/30 text-base"
                style={{ padding: '18px 0' }}
              >
                공간 등록 완료하기
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 등록 완료 안내 및 문의 안내 모달 */}
      {isCompleted && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#131924] border border-white/10 rounded-3xl max-w-md w-full p-8 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in duration-200">
            <h2 className="text-2xl font-bold text-white mb-2">공간 등록 신청 완료</h2>
            <p
              className="text-sm text-gray-300 leading-relaxed mb-6"
              style={{ marginBottom: '24px' }}
            >
              제출해주신 공간 정보는 영업일 기준 <strong className="text-indigo-400">3일 내</strong>
              에 검토 후 합격 여부 및 승인 결과를 안내해 드립니다.
            </p>
            <div
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 text-left"
              style={{ gap: '4px', marginBottom: '24px' }}
            >
              <p className="text-xs text-gray-400 mb-1">관련 문의 사항 안내</p>
              <p className="text-sm text-indigo-300 font-medium">support@BangJeon.com</p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl py-3.5 transition shadow-lg shadow-indigo-600/30 text-sm"
            >
              확인 및 홈으로 돌아가기
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
