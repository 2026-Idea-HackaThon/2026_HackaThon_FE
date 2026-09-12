import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B0F17]/80 border-b border-white/10 transition-all">
      <nav className="max-w-9xl mx-auto flex items-center justify-between px-4 h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Logo"
            className="w-30 h-30 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* 우측: 네비게이션 링크 및 액션 */}
        <div className="flex items-center gap-6 text-sm">
          <Link to="/spaces" className="text-gray-300 hover:text-white font-medium transition">
            공간 둘러보기
          </Link>
          <Link to="/explore" className="text-gray-300 hover:text-white font-medium transition">
            진행중인 전시
          </Link>
          <div className="w-px h-4 bg-gray-700 mx-1"></div>
          <Link
            to="/my"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600/30 text-indigo-300 font-semibold transition"
          >
            마이페이지
          </Link>
        </div>
      </nav>
    </header>
  )
}
