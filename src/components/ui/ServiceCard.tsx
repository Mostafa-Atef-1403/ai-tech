'use client'

import { ReactNode, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import ServiceModal from './ServiceModal'

interface ServiceCardProps {
  index: number
  title: string
  description: string
  details: string[]
  extendedDetails: string[]
  icon: ReactNode
}

export default function ServiceCard({
  index,
  title,
  description,
  details,
  extendedDetails,
  icon,
}: ServiceCardProps) {
  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div
        className="relative group border border-dark-400 bg-dark-200 p-8 transition-all duration-500 hover:border-gold/50 cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Corner accents */}
        <div
          className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 transition-all duration-500"
          style={{ borderColor: hovered ? 'var(--gold)' : 'transparent' }}
        />
        <div
          className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 transition-all duration-500"
          style={{ borderColor: hovered ? 'var(--gold)' : 'transparent' }}
        />

        {/* Index */}
        <div
          className="text-dark-400 mb-6 transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '4rem',
            lineHeight: 1,
            color: hovered ? 'var(--gold-dark)' : undefined,
            opacity: hovered ? 0.3 : 0.15,
          }}
        >
          {String(index).padStart(2, '0')}
        </div>

        {/* Icon */}
        <div
          className="mb-4 transition-colors duration-300"
          style={{ color: hovered ? 'var(--gold)' : 'var(--offwhite)' }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className="text-offwhite text-xl mb-3 transition-colors duration-300 group-hover:text-gold"
          style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', fontSize: '1.4rem' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-offwhite/50 text-sm leading-relaxed mb-6">{description}</p>

        {/* Details list */}
        <ul className="space-y-2">
          {details.map((detail) => (
            <li key={detail} className="flex items-center gap-2 text-xs text-offwhite/40">
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>

        {/* Arrow — clickable */}
        <button
          onClick={() => setModalOpen(true)}
          className="absolute bottom-6 end-6 transition-all duration-300 cursor-pointer hover:scale-110"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translate(0, 0)' : 'translate(-4px, 4px)',
            color: 'var(--gold)',
          }}
          aria-label={`More about ${title}`}
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <ServiceModal
          title={title}
          description={description}
          extendedDetails={extendedDetails}
          icon={icon}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}
