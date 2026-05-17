'use client';

import { useEffect, useRef, useState } from 'react';
import { ABOUT_STATS } from '@/lib/data';

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function AnimatedBar({ level, inView, delay = 0 }: { level: number; inView: boolean; delay?: number }) {
  return (
    <div
      style={{
        height: '3px',
        background: 'var(--border)',
        borderRadius: '2px',
        overflow: 'hidden',
        marginTop: '0.4rem',
      }}
    >
      <div
        style={{
          height: '100%',
          width: inView ? `${level}%` : '0%',
          background: 'linear-gradient(90deg, var(--accent), rgba(232,184,109,0.5))',
          borderRadius: '2px',
          transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        }}
      />
    </div>
  );
}

const EXPERTISE = [
  { label: 'Prompt Engineering', level: 95 },
  { label: 'AI Tool Mastery', level: 92 },
  { label: 'Content Creation', level: 88 },
  { label: 'Graphics Design', level: 85 },
  { label: 'Virtual Assistance', level: 90 },
  { label: 'Video Production', level: 82 },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '7rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        {/* Section label */}
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
            01 — About
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
          }}
          className="lg:!grid-cols-2"
        >
          {/* Left */}
          <div className="mob-center">
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Building at the
              <br />
              <span style={{ color: 'var(--accent)' }}>intersection</span>
              <br />
              of AI and creativity.
            </h2>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '1.25rem',
                fontWeight: 300,
              }}
            >
              I specialize in using AI tools and creative technology to solve
              problems, create engaging content, improve workflows, and help
              brands scale efficiently.
            </p>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              My expertise spans{' '}
              <span style={{ color: 'var(--text-primary)' }}>prompt engineering</span>,{' '}
              <span style={{ color: 'var(--text-primary)' }}>AI-powered content creation</span>,{' '}
              <span style={{ color: 'var(--text-primary)' }}>graphics design</span>,{' '}
              virtual assistance, AI video production, and digital creativity.
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
            >
              {ABOUT_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')
                  }
                >
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skill bars */}
          <div>
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
                letterSpacing: '-0.01em',
              }}
            >
              Core Expertise
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {EXPERTISE.map((item, i) => (
                <div key={item.label}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        fontFamily: 'Syne, sans-serif',
                      }}
                    >
                      {item.level}%
                    </span>
                  </div>
                  <AnimatedBar
                    level={item.level}
                    inView={inView}
                    delay={i * 120}
                  />
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              style={{
                marginTop: '3rem',
                padding: '1.5rem',
                background: 'var(--accent-dim)',
                border: '1px solid rgba(232,184,109,0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
              className="mob-jc-center mob-center"
            >
              <div>
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Open to collaborations
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Remote-friendly · Fast turnaround
                </div>
              </div>
              <a
                href="#contact"
                style={{
                  padding: '0.6rem 1.25rem',
                  background: 'var(--accent)',
                  color: '#0a0a0a',
                  borderRadius: '4px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = '0.85')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = '1')
                }
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
