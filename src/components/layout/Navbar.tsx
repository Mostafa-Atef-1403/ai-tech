'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export default function Navbar() {
  const { t, toggleLocale, isRTL } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-100/95 backdrop-blur-sm border-b border-dark-400'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative">
            <Image
              src="/Ai_Tech_Logo.jpeg"
              alt="Ai Tech"
              fill
              className="object-contain"
            />
          </div>
          <span
            className="text-offwhite text-lg font-semibold tracking-wide group-hover:text-gold transition-colors"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', letterSpacing: '0.05em' }}
          >
            Ai Tech
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-offwhite/60 hover:text-gold transition-colors tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="text-xs text-gold border border-gold/40 hover:border-gold px-3 py-1.5 tracking-widest uppercase transition-colors"
          >
            {t.nav.langToggle}
          </button>
          <a
            href="#contact"
            className="text-xs bg-gold text-dark px-4 py-2 uppercase tracking-widest hover:bg-gold-light transition-colors font-medium"
          >
            {t.hero.cta}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-offwhite"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-100 border-t border-dark-400 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-offwhite/70 hover:text-gold uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button
              onClick={toggleLocale}
              className="text-xs text-gold border border-gold/40 px-3 py-1.5 tracking-widest uppercase"
            >
              {t.nav.langToggle}
            </button>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-xs bg-gold text-dark px-4 py-2 uppercase tracking-widest font-medium"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
