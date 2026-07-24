'use client'

import { Package, Zap, Radio, Shield, Network, Globe } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/ui/ServiceCard'

const icons = [
  <Package size={28} strokeWidth={1.5} key="package" />,
  <Zap size={28} strokeWidth={1.5} key="zap" />,
  <Radio size={28} strokeWidth={1.5} key="radio" />,
  <Shield size={28} strokeWidth={1.5} key="shield" />,
  <Network size={28} strokeWidth={1.5} key="network" />,
  <Globe size={28} strokeWidth={1.5} key="globe" />,
]

export default function Services() {
  const { t, isRTL } = useI18n()

  return (
    <section id="services" className="py-28 bg-dark relative">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 50%, var(--gold) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div>
          <SectionLabel text={t.services.sectionLabel} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2
              className="text-offwhite leading-none"
              style={{
                fontFamily: isRTL ? 'var(--font-arabic)' : 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                letterSpacing: isRTL ? 0 : '0.02em',
                fontWeight: isRTL ? 700 : undefined,
              }}
            >
              {t.services.headline}
            </h2>
            <p className="text-offwhite/40 text-sm max-w-xs leading-relaxed md:text-right">
              {t.services.subtext}
            </p>
          </div>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark-400">
          {t.services.items.slice(0, 3).map((item, i) => (
            <div key={item.id} className="bg-dark">
              <ServiceCard
                index={i + 1}
                title={item.title}
                description={item.description}
                details={item.details}
                extendedDetails={item.extendedDetails}
                icon={icons[i]}
              />
            </div>
          ))}
        </div>

        {/* Bottom row: 3 cards full width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark-400 mt-px">
          {t.services.items.slice(3).map((item, i) => (
            <div key={item.id} className="bg-dark">
              <ServiceCard
                index={i + 4}
                title={item.title}
                description={item.description}
                details={item.details}
                extendedDetails={item.extendedDetails}
                icon={icons[i + 3]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
