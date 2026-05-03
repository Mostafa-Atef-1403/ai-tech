'use client'

interface SectionLabelProps {
  text: string
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-gold" />
      <span
        className="text-gold text-xs uppercase tracking-[0.2em] font-medium"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {text}
      </span>
    </div>
  )
}
