'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export default function Hero() {
  const { t, isRTL } = useI18n()
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--gold) 1px, transparent 1px),
            linear-gradient(90deg, var(--gold) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, var(--gold) 100%)',
        }}
      />

      {/* Vertical gold line left */}
      <div className="absolute left-6 top-1/4 bottom-1/4 w-px bg-gold/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Tagline */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{ animation: 'fadeIn 0.6s ease 0.1s both' }}
        >
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs uppercase tracking-[0.25em]">{t.hero.tagline}</span>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className={`font-heading leading-none mb-8 ${isRTL ? '' : 'uppercase'}`}
          style={{
            fontFamily: isRTL ? 'var(--font-arabic)' : 'var(--font-heading)',
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            lineHeight: isRTL ? '1.2' : '0.95',
            fontWeight: isRTL ? '700' : undefined,
          }}
        >
          <span className="text-offwhite/20 block">{t.hero.headline1}</span>
          <span className="gold-shimmer block">{t.hero.headline2}</span>
          <span className="text-offwhite block">{t.hero.headline3}</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-offwhite/50 max-w-xl text-lg leading-relaxed mb-10"
          style={{ animation: 'fadeIn 0.8s ease 0.5s both' }}
        >
          {t.hero.subtext}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: 'fadeIn 0.8s ease 0.7s both' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-dark text-sm uppercase tracking-widest px-6 py-3 hover:bg-gold-light transition-colors font-medium group"
          >
            {t.hero.cta}
            <ArrowRight
              size={16}
              className={`transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`}
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-offwhite/20 text-offwhite/60 hover:border-gold hover:text-gold text-sm uppercase tracking-widest px-6 py-3 transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex gap-12 mt-20 pt-8 border-t border-dark-400"
          style={{ animation: 'fadeIn 1s ease 0.9s both' }}
        >
          {[
            { num: '3', label: isRTL ? 'مجالات تخصص' : 'Domains' },
            { num: '∞', label: isRTL ? 'التزام بالجودة' : 'Commitment' },
            { num: '24h', label: isRTL ? 'وقت الاستجابة' : 'Response Time' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="gold-shimmer text-4xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}
              >
                {stat.num}
              </div>
              <div className="text-offwhite/40 text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-xs uppercase tracking-widest text-offwhite">Scroll</span>
        <ChevronDown size={14} className="text-gold animate-bounce" />
      </div>
    </section>
  )
}
