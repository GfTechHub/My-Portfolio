'use client';

import { useEffect, useRef, useState } from 'react';
import { SKILLS, AI_TOOLS } from '@/lib/data';

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
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
            02 — Services
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
            What I bring
            <br />
            <span style={{ color: 'var(--accent)' }}>to the table.</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1px',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '5rem',
          }}
        >
          {SKILLS.map((skill, i) => (
            <div
              key={skill.id}
              style={{
                padding: '2rem',
                background: 'var(--bg-card)',
                transition: 'background 0.25s',
                borderRight: (i % 2 === 0) ? '1px solid var(--border)' : 'none',
                borderBottom: i < SKILLS.length - 2 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = 'var(--bg-card-hover)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = 'var(--bg-card)')
              }
            >
              {/* Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: `${skill.color}15`,
                  border: `1px solid ${skill.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                }}
              >
                {skill.icon}
              </div>

              <div style={{ flex: 1 }}>
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
                  {skill.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    fontWeight: 300,
                  }}
                >
                  {skill.description}
                </p>
              </div>

              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'transparent',
                  border: `1px solid ${skill.color}40`,
                  borderRadius: '4px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  color: skill.color,
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${skill.color}15`;
                  (e.currentTarget as HTMLElement).style.borderColor = skill.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}40`;
                }}
              >
                {skill.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* AI Tools section */}
        <div ref={ref}>
          <div style={{ marginBottom: '2.5rem' }} className="mob-center">
            <span
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              AI Arsenal
            </span>
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              AI Skills & Tools
            </h3>
            <p
              style={{
                marginTop: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                maxWidth: '480px',
                lineHeight: 1.7,
              }}
            >
              Highly skilled in AI systems and tools for productivity, automation,
              design, video creation, content generation, research, and workflow
              optimization.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {AI_TOOLS.map((tool, i) => (
              <div
                key={tool.name}
                style={{
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.6rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {tool.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      fontFamily: 'Syne, sans-serif',
                    }}
                  >
                    {tool.level}%
                  </span>
                </div>
                <div
                  style={{
                    height: '2px',
                    background: 'var(--border)',
                    borderRadius: '1px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: inView ? `${tool.level}%` : '0%',
                      background: 'linear-gradient(90deg, var(--accent), rgba(232,184,109,0.4))',
                      borderRadius: '1px',
                      transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${i * 60}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tool badge cloud */}
          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
            className="mob-jc-center"
          >
            {AI_TOOLS.map((tool) => (
              <span
                key={`badge-${tool.name}`}
                style={{
                  padding: '0.35rem 0.85rem',
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(232,184,109,0.2)',
                  borderRadius: '100px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--accent)',
                  letterSpacing: '0.02em',
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.color = '#0a0a0a';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-dim)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                }}
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
