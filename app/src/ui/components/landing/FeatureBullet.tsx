import type { ReactNode } from "react"

interface FeatureBulletProps {
  icon: ReactNode
  text: string
}

export function FeatureBullet({ icon, text }: FeatureBulletProps) {
  return (
    <li className="flex items-center gap-3 text-sm text-foreground/70">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta/20 text-primary" aria-hidden>
        {icon}
      </span>
      <span>{text}</span>
    </li>
  )
}

