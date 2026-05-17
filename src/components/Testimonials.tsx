'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const t = TESTIMONIALS[current];

  return (
    <section
      style={{
        padding: '7rem 0',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Label */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
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
            04 — Testimonials
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
            What clients
            <span style={{ color: 'var(--accent)' }}> say.</span>
          </h2>
        </div>

        {/* Main slider */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Quote */}
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '3rem',
              color: 'var(--accent)',
              lineHeight: 1,
              marginBottom: '1.5rem',
              opacity: 0.5,
            }}
          >
            "
          </div>

          <blockquote
            key={current}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 1.8,
              color: 'var(--text-primary)',
              fontWeight: 300,
              fontStyle: 'italic',
              marginBottom: '2.5rem',
              transition: 'opacity 0.3s',
            }}
          >
            {t.text}
          </blockquote>

          {/* Author */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'var(--accent-dim)',
                border: '2px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
              }}
            >
              👤
            </div>
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)',
                }}
              >
                {t.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {t.role}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <button
              onClick={prev}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                cursor: 'pointer',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                transition: 'border-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => ((e.currentTarget).style.borderColor = 'var(--accent)')}
              onMouseLeave={(e) => ((e.currentTarget).style.borderColor = 'var(--border)')}
            >
              ←
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? 'var(--accent)' : 'var(--border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                cursor: 'pointer',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                transition: 'border-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => ((e.currentTarget).style.borderColor = 'var(--accent)')}
              onMouseLeave={(e) => ((e.currentTarget).style.borderColor = 'var(--border)')}
            >
              →
            </button>
          </div>
        </div>

        {/* Thumbnail row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setCurrent(i)}
              style={{
                padding: '0.75rem 1.25rem',
                background: i === current ? 'var(--accent-dim)' : 'var(--bg-card)',
                border: `1px solid ${i === current ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: i === current ? 'var(--accent)' : 'var(--text-primary)',
                }}
              >
                {t.name}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{t.role}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
