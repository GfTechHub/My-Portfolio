'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_ITEMS = [
  { label: 'About',    href: '#about',    num: '01' },
  { label: 'Skills',   href: '#skills',   num: '02' },
  { label: 'Work',     href: '#work',     num: '03' },
  { label: 'Contact',  href: '#contact',  num: '04' },
];

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1"  y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('');
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setActive(href);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 60);
  };

  // Bar inline styles — state-driven, no class toggling
  const barBase: React.CSSProperties = {
    display: 'block',
    width: '20px',
    height: '2px',
    background: 'var(--text-primary)',
    borderRadius: '2px',
    transformOrigin: 'center',
    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease',
    pointerEvents: 'none',
  };

  return (
    <>
      {/* ─── NAV BAR ─────────────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '0.65rem 0' : '1.1rem 0',
        background: scrolled ? 'var(--nav-scrolled-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'padding 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s ease, border-color 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        }}>

          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.25rem',
              letterSpacing: '-0.04em', color: 'var(--text-primary)',
              flexShrink: 0, userSelect: 'none',
            }}>
            EZE<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop nav — CSS hides on mobile */}
          <ul className="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} style={{ listStyle: 'none' }}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={`nav-link${active === item.href ? ' is-active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>

            {/* Theme toggle — always visible, pure CSS class, no inline display override */}
            <button
              type="button"
              onClick={toggle}
              className="theme-icon-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hire Me — CSS hides on mobile, shows on desktop */}
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="hire-btn"
            >
              Hire Me
            </a>

            {/* Hamburger — CSS hides on desktop, shows on mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="ham-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {/* Bars: transforms driven by state via inline styles */}
              <span style={{
                ...barBase,
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'translateY(0) rotate(0)',
              }} />
              <span style={{
                ...barBase,
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
              }} />
              <span style={{
                ...barBase,
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'translateY(0) rotate(0)',
              }} />
            </button>

          </div>
        </div>
      </nav>

      {/* Overlay + Panel: only mounted when open — removes from DOM entirely  */}
      {/* when closed. This is the only 100% reliable fix for iOS Safari      */}
      {/* which routes touches to fixed elements regardless of pointer-events  */}
      {menuOpen && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
            style={{
              position: 'fixed', inset: 0, zIndex: 998,
              background: 'rgba(0,0,0,0.6)',
            }}
          />

          {/* MOBILE PANEL */}
          <div
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
              background: 'var(--bg)',
              borderBottom: '1px solid var(--border)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
              paddingTop: '72px',
              paddingBottom: '2rem',
            }}
          >
            <div style={{ padding: '0 1.5rem' }}>

              {NAV_ITEMS.map((item, i) => (
                <div
                  key={item.href}
                  style={{ borderBottom: i < NAV_ITEMS.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <button
                    type="button"
                    onClick={() => handleNav(item.href)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', background: 'none',
                      border: 'none', cursor: 'pointer', padding: '1.1rem 0',
                      color: 'inherit',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                      <span style={{
                        fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 700,
                        color: 'var(--accent)', letterSpacing: '0.1em', opacity: 0.65,
                      }}>
                        {item.num}
                      </span>
                      <span style={{
                        fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: active === item.href ? 'var(--accent)' : 'var(--text-primary)',
                      }}>
                        {item.label}
                      </span>
                    </div>
                    <span style={{ color: active === item.href ? 'var(--accent)' : 'var(--text-muted)', fontSize: '1rem' }}>
                      →
                    </span>
                  </button>
                </div>
              ))}

              {/* Footer: theme + Hire Me */}
              <div style={{
                marginTop: '1.75rem', display: 'flex',
                alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
              }}>
                <button
                  type="button"
                  onClick={toggle}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.65rem',
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: '8px', padding: '0.55rem 0.9rem',
                    cursor: 'pointer', color: 'var(--text-primary)',
                  }}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                  <span style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.8rem',
                    fontWeight: 500, color: 'var(--text-secondary)', whiteSpace: 'nowrap',
                  }}>
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                  </span>
                </button>

                <a href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                  style={{
                    display: 'inline-block', padding: '0.65rem 1.5rem',
                    background: 'var(--accent)', color: '#0a0a0a',
                    borderRadius: '4px', fontFamily: 'Syne, sans-serif',
                    fontWeight: 800, fontSize: '0.78rem',
                    letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}
                >
                  Hire Me
                </a>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
}
