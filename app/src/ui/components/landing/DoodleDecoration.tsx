interface DoodleDecorationProps {
  className?: string
  variant?: "curve" | "zigzag"
  width?: number
  height?: number
}

const doodlePaths = {
  curve: "M10,40 C40,10 80,10 110,40 C140,70 180,70 210,40",
  zigzag: "M10,30 L40,10 L70,40 L100,20 L130,50 L160,30 L190,60",
}

export function DoodleDecoration({
  className = "text-primary/30",
  variant = "curve",
  width = 220,
  height = 80,
}: DoodleDecorationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 80"
      className={`pointer-events-none absolute ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d={doodlePaths[variant]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-doodle-draw"
      />
    </svg>
  )
}
