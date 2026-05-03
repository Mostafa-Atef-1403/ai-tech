'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n/context'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-dark-100 border-t border-dark-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative opacity-80">
              <Image src="/Ai_Tech_Logo.jpeg" alt="Ai Tech" fill className="object-contain" />
            </div>
            <div>
              <p
                className="text-offwhite/80 text-sm"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', letterSpacing: '0.05em' }}
              >
                Ai Tech
              </p>
              <p className="text-offwhite/40 text-xs mt-0.5">{t.footer.tagline}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-xs text-offwhite/40 uppercase tracking-widest">
            <a href="#services" className="hover:text-gold transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-gold transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-gold transition-colors">{t.nav.contact}</a>
          </div>
        </div>

        {/* Gold line */}
        <div className="gold-line my-8" />

        <p className="text-center text-offwhite/30 text-xs tracking-widest">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
