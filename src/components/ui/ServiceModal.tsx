'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

interface ServiceModalProps {
  title: string
  description: string
  extendedDetails: string[]
  icon: React.ReactNode
  onClose: () => void
}

export default function ServiceModal({
  title,
  description,
  extendedDetails,
  icon,
  onClose,
}: ServiceModalProps) {
  const { isRTL } = useI18n()

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-dark-200 border border-dark-400"
        style={{ animation: 'fadeUp 0.3s ease both' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Header */}
        <div className="flex items-start justify-between p-8 pb-6">
          <div className="flex items-center gap-4">
            <div className="text-gold">{icon}</div>
            <h3
              className="text-offwhite"
              style={{
                fontFamily: isRTL ? 'var(--font-arabic)' : 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                letterSpacing: isRTL ? 0 : '0.05em',
                fontWeight: isRTL ? 700 : undefined,
              }}
            >
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-offwhite/40 hover:text-gold transition-colors flex-shrink-0 ms-4"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Description */}
        <div className="px-8 pb-6">
          <p className="text-offwhite/60 leading-relaxed text-sm border-b border-dark-400 pb-6">
            {description}
          </p>
        </div>

        {/* Extended details */}
        <div className="px-8 pb-8">
          <p
            className="text-gold text-xs uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {isRTL ? 'تفاصيل الخدمة' : 'Service Details'}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {extendedDetails.map((detail, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-offwhite/70"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5"
                />
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="px-8 pb-8">
          <div className="h-px bg-dark-400 mb-6" />
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-gold text-dark text-xs uppercase tracking-widest px-6 py-3 hover:bg-gold-light transition-colors font-medium"
          >
            {isRTL ? 'اطلب عرض سعر' : 'Request a Quote'}
          </a>
        </div>
      </div>
    </div>
  )
}
