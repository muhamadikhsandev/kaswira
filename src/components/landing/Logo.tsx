import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center group cursor-pointer relative ${className}`}>
      <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image 
          src="/logo-icon.png" 
          alt="Kaswira POS Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white italic leading-none -ml-0.5 md:-ml-1">
        Kas<span className="text-[#FF6600]">wira</span>
      </span>
    </div>
  )
}
