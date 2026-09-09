interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 82 }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Kite Manja — Off the Beaten Track"
      width={size}
      height={size}
      className={`block flex-shrink-0 object-contain ${className}`}
      style={{ imageRendering: 'auto', display: 'block' }}
      draggable={false}
    />
  )
}
