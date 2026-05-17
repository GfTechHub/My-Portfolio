'use client';

import { SOCIAL_LINKS } from '@/lib/data';
import { GitHubIcon, YouTubeIcon, TikTokIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  { label: 'GitHub',    href: SOCIAL_LINKS.github,    Icon: GitHubIcon },
  { label: 'YouTube',   href: SOCIAL_LINKS.youtube,   Icon: YouTubeIcon },
  { label: 'TikTok',    href: SOCIAL_LINKS.tiktok,    Icon: TikTokIcon },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: 'Facebook',  href: SOCIAL_LINKS.facebook,  Icon: FacebookIcon },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '3rem 0 2rem',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem',
          }}
          className="mob-jc-center"
        >
          {/* Brand */}
          <div className="mob-center">
            <div
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.5rem',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              EZE<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                maxWidth: '260px',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              AI Specialist · Prompt Engineer · Content Creator. Building smarter, faster, together.
            </p>
          </div>

          {/* Nav */}
          <div className="mob-center">
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
                fontWeight: 700,
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }} className="mob-ai-center">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s',
                      fontWeight: 400,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="mob-center">
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
                fontWeight: 700,
              }}
            >
              Follow
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }} className="mob-ai-center">
              {SOCIAL.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')
                  }
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '4px',
                      border: '1px solid var(--border)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <s.Icon size={13} />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div
            style={{
              padding: '1.5rem',
              background: 'var(--accent-dim)',
              border: '1px solid rgba(232,184,109,0.2)',
              borderRadius: '10px',
              maxWidth: '240px',
            }}
          >
            <div
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Ready to work?
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Let's build something great together.
            </p>
            <a
              href="#contact"
              style={{
                display: 'block',
                padding: '0.6rem 1rem',
                background: 'var(--accent)',
                color: '#0a0a0a',
                borderRadius: '4px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textAlign: 'center',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border)',
          }}
          className="mob-jc-center"
        >
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
            }}
          >
            © {new Date().getFullYear()} Ezekiel Olaleye. All rights reserved.
          </p>

          {/* Social icons row */}
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {SOCIAL.map((s) => (
              <a
                key={`foot-${s.href}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                }}
              >
                <s.Icon size={14} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              transition: 'all 0.2s',
            }}
            aria-label="Back to top"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
