import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center group cursor-pointer relative ${className}`}>
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image 
          src="/logo-icon.png" 
          alt="Kaswira POS Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white italic leading-none -ml-1 md:-ml-1.5">
        Kas<span className="text-[#FF6600]">wira</span>
      </span>
    </div>
  )
}
