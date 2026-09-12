import { Link } from 'react-router-dom'

interface ExhibitionCardProps {
  id: number
  title: string
  space: string
  image: string
  tag: string
  isVisible: boolean
  delay?: number
}

export function ExhibitionCard({
  id,
  title,
  space,
  image,
  tag,
  isVisible,
  delay = 0,
}: ExhibitionCardProps) {
  return (
    <div
      className={`group relative bg-[#131924] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/40 transition-all duration-700 flex flex-col transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-indigo-300 border border-white/10">
          {tag}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-xs text-indigo-400 font-medium mb-1.5">{space}</p>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
            {title}
          </h3>
        </div>
        <div className="pt-6 flex items-center justify-between text-sm text-gray-400">
          <span>전시 관람 가능</span>
          <Link
            to={`/explore/${id}`}
            className="font-semibold text-white underline underline-offset-4 hover:text-indigo-300 transition"
          >
            상세보기
          </Link>
        </div>
      </div>
    </div>
  )
}

interface SpaceCardProps {
  id: number
  name: string
  location: string
  price: string
  image: string
  features: string[]
}

export function SpaceCard({ id, name, location, price, image, features }: SpaceCardProps) {
  return (
    <div className="group relative bg-[#131924] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/40 transition-all duration-300 flex flex-col sm:flex-row">
      <div className="sm:w-1/2 h-64 sm:h-auto overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs text-gray-400">{location}</span>
          <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-indigo-300 transition">
            {name}
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {features.map((feature, i) => (
              <span key={i} className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-300">
                #{feature}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-6 flex items-center justify-between">
          <span className="text-indigo-400 font-bold text-lg">{price}</span>
          <Link
            to={`/spaces/${id}`}
            className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-xl text-sm font-semibold transition"
          >
            예약하기
          </Link>
        </div>
      </div>
    </div>
  )
}
