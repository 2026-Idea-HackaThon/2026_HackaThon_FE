import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function FloatingActionManager() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  // 현재 경로가 전시(explore) 페이지인지 판단
  const isExplorePage = location.pathname.startsWith('/explore')

  // 페이지에 따른 이동 경로 및 라벨 설정
  const config = isExplorePage
    ? {
        label: '전시 등록하기',
        path: '/explore/new',
      }
    : {
        label: '공간 등록하기',
        path: '/spaces/new',
      }

  const handleAction = () => {
    setIsOpen(false)
    navigate(config.path)
  }

  return (
    <div
      className="fixed z-50 flex flex-col items-end"
      style={{ bottom: '36px', right: '36px', gap: '16px' }}
    >
      {/* 확장 메뉴 (등록하기 버튼) */}
      {isOpen && (
        <div
          className="bg-[#131924] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200"
          style={{ padding: '8px', minWidth: '180px', gap: '4px' }}
        >
          <button
            onClick={handleAction}
            className="w-full text-left bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-semibold rounded-xl transition text-sm flex items-center justify-between"
            style={{ padding: '14px 16px' }}
          >
            <span>{config.label}</span>
          </button>
        </div>
      )}

      {/* 메인 플로팅 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl shadow-indigo-600/40 flex items-center justify-center transition transform hover:scale-105 active:scale-95"
        style={{ width: '64px', height: '64px' }}
      >
        <svg
          className={`w-7 h-7 transform transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  )
}
