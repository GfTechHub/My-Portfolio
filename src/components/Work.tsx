'use client';

import { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/data';

export default function Work() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section
      id="work"
      style={{ padding: '7rem 0', borderTop: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Label */}
        <div style={{ marginBottom: '4rem' }} className="mob-center">
          <span
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            03 — Portfolio
          </span>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginTop: '1rem',
              letterSpacing: '-0.03em',
            }}
          >
            Featured
            <span style={{ color: 'var(--accent)' }}> Work.</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
          className="mob-jc-center"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: active === cat ? 'var(--accent)' : 'var(--border)',
                background: active === cat ? 'var(--accent-dim)' : 'transparent',
                color: active === cat ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 500,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                if (active !== cat) {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== cat) {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filtered.map((project) => (
            <article
              key={project.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Live iframe preview */}
              <div
                style={{
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border)',
                  background: '#fff',
                }}
              >
                <iframe
                  src={project.link}
                  title={project.title}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '1280px',
                    height: '800px',
                    border: 'none',
                    transformOrigin: 'top left',
                    transform: 'scale(0.265)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Category badge overlay */}
                <div style={{ position: 'absolute', bottom: '0.6rem', left: '0.75rem', zIndex: 2 }}>
                  <span
                    style={{
                      padding: '0.2rem 0.65rem',
                      background: 'rgba(10,10,10,0.75)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(232,184,109,0.3)',
                      borderRadius: '100px',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    ⚡ {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.2rem 0.6rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: 'Syne, sans-serif',
                    color: 'var(--accent)',
                    letterSpacing: '0.04em',
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = '0.7rem')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = '0.4rem')
                  }
                >
                  View Project <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
