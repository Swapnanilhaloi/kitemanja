interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 54 }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Kite Manja — Off the Beaten Track"
      width={size}
      height={Math.round(size * 260 / 240)}  /* preserve SVG aspect ratio 240×260 */
      className={`flex-shrink-0 object-contain ${className}`}
      style={{ imageRendering: 'crisp-edges' }}
      draggable={false}
    />
  )
}
