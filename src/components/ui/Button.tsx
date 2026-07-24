'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium transition-all duration-300 px-6 py-3'

  const variants = {
    primary:
      'bg-gold text-dark hover:bg-gold-light active:scale-95',
    outline:
      'border border-gold text-gold hover:bg-gold hover:text-dark active:scale-95',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
