import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

const taglines = [
  '방(공간)을 빌려 하는 전시, 지친 일상에 예술을 충전하다',
  '당신의 빈 벽에 새로운 이야기를 채워보세요',
  '일상 속 공간에서 시작되는 나만의 작은 미술관',
  '가장 가까운 곳에서 만나는 감동적인 개인전',
]

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // 사라지기
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % taglines.length)
        setFade(true) // 나타나기
      }, 400) // 전환 딜레이 단축으로 더 자연스럽게 연결
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#0B0F17]">
      {/* 좌측 브랜딩 영역 */}
      <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center p-8 md:p-8 relative overflow-hidden">
        <div className="z-10 text-center max-w-xl flex flex-col items-center">
          {/* 둥둥 떠다니는(Floating) 애니메이션이 적용된 로고 */}
          <style>{`
            @keyframes floatLogo {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
            }
            .animate-float {
              animation: floatLogo 3.5s ease-in-out infinite;
            }
          `}</style>

          {/* 로고 크기 확대 (max-w-[340px]) */}
          <img
            src={logo}
            alt="Logo"
            className="w-full max-w-[2500px] h-auto object-contain mb-8 filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] animate-float"
          />

          {/* 롤링 텍스트 영역 (부드러운 상하 모션 추가) */}
          <div className="h-16 flex items-center justify-center overflow-hidden">
            <p
              className={`mt-3 text-indigo-100 text-base md:text-lg font-medium tracking-wide transition-all duration-500 transform ${
                fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'
              }`}
            >
              {taglines[currentIndex].split(', ').map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx === 0 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* 우측 로그인 폼 영역 */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-9 sm:p-14 md:p-20">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col gap-1">
            <span className="inline-block text-sm font-semibold text-indigo-400">
              대여 공간을 찾고 있다면?
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight ">로그인</h2>
            <p className="text-base text-gray-300">서비스 이용을 위해 계정에 로그인해 주세요.</p>
          </div>

          <form className="flex flex-col gap-4">
            {/* 이메일 입력 그룹 */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block text-sm font-semibold text-white">
                아이디
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="아이디를 입력하세요"
                className="w-full h-11 px-3 rounded-xl bg-white text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* 비밀번호 입력 그룹 */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="block text-sm font-semibold text-white">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full h-11 px-3 rounded-xl bg-white text-base text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500 hover:bg-gray-50"
              />
            </div>

            {/* 로그인 상태 유지 및 비밀번호 찾기 */}
            <div className="flex items-center justify-between text-base px-1 pt-0.5">
              <label className="flex items-center text-gray-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-600 rounded focus:ring-indigo-500 bg-gray-800"
                />
                <span className="ml-2 text-sm font-medium text-gray-200">로그인 상태 유지</span>
              </label>
              <a
                href="#forgot-password"
                className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
              >
                비밀번호 찾기
              </a>
            </div>
          </form>

          {/* 구분선 */}
          <div className="flex flex-1 items-center justify-center relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-400 font-medium bg-[#0B0F17]">
                SNS 계정으로 시작하기
              </span>
            </div>
          </div>

          {/* 소셜 로그인 버튼 */}
          <div className="grid grid-cols-3 gap-5">
            <button
              type="button"
              className="flex items-center justify-center gap-2 h-11 py-2 px-2 bg-[#FEE500] hover:bg-[#FADA00] active:scale-[0.98] text-[#191919] font-bold rounded-full text-sm transition shadow-md"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.122.49.178.483.376.352.157-.103 2.5-1.7 3.52-2.395.532.077 1.077.119 1.634.119 4.97 0 9-3.186 9-7.115S16.97 3 12 3z" />
              </svg>
              카카오
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 h-11 py-2 px-2 bg-[#03C75A] hover:bg-[#02b351] active:scale-[0.98] text-white font-bold rounded-full text-sm transition shadow-md"
            >
              <span className="font-black text-sm leading-none shrink-0">N</span>
              네이버
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 h-11 py-2 px-2 bg-white hover:bg-gray-100 active:scale-[0.98] text-gray-800 font-bold rounded-full text-sm transition shadow-md"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Google
            </button>
          </div>

          {/* 회원가입 링크 */}
          <p className="text-center text-sm text-gray-300 pt-2">
            아직 회원이 아니신가요?{' '}
            <a
              href="#signup"
              className="font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-4 ml-1.5 transition"
            >
              회원가입하기
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
