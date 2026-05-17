'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/lib/data';
import { GitHubIcon, YouTubeIcon, TikTokIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; pulse: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const lines: Array<{ x1: number; y1: number; x2: number; y2: number; opacity: number }> = [];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,184,109,${alpha})`;
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(232,184,109,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6,
        }}
      />

      {/* Radial gradient center glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(232,184,109,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '8rem 2rem 4rem',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="lg:!grid-cols-[1fr_auto]"
        >
          {/* Left: text */}
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.9rem',
                  border: '1px solid var(--accent)',
                  borderRadius: '100px',
                  background: 'var(--accent-dim)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    animation: 'pulse-glow 2s ease-in-out infinite',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  Available for work
                </span>
              </div>
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Ezekiel Olaleye
            </h1>

            {/* Headline */}
            <div
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1.75rem',
                lineHeight: 1.8,
              }}
            >
              AI Specialist · Prompt Engineer · Virtual Assistant
              <br />
              Graphics Designer · Tech Content Creator
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                marginBottom: '2.5rem',
                fontWeight: 300,
                margin: isMobile ? '0 auto 2.5rem' : '0 0 2.5rem',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              I help brands, creators, and businesses use{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                AI, content, automation, and design
              </span>{' '}
              to build faster, create smarter, and stand out online.
            </p>

            {/* Buttons */}
            <div
              style={isMobile ? {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginBottom: '3rem',
                width: '100%',
              } : {
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3rem',
              }}
            >
              <a
                href="#work"
                style={{
                  padding: '0.875rem 2rem',
                  background: 'var(--accent)',
                  color: '#0a0a0a',
                  borderRadius: '4px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(232,184,109,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                style={{
                  padding: '0.875rem 2rem',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  borderRadius: '4px',
                  border: '1px solid var(--border-hover)',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                }}
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                style={{
                  padding: '0.875rem 2rem',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  borderRadius: '4px',
                  border: '1px solid var(--border)',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  ...(isMobile ? { gridColumn: '1 / -1' } : {}),
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                }}
              >
                ↓ Resume
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                }}
              >
                Find me on
              </span>
              {[
                { href: SOCIAL_LINKS.github,    label: 'GitHub',    Icon: GitHubIcon },
                { href: SOCIAL_LINKS.youtube,   label: 'YouTube',   Icon: YouTubeIcon },
                { href: SOCIAL_LINKS.tiktok,    label: 'TikTok',    Icon: TikTokIcon },
                { href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: InstagramIcon },
                { href: SOCIAL_LINKS.facebook,  label: 'Facebook',  Icon: FacebookIcon },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--accent-dim)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '280px',
              }}
              className="lg:!w-[340px] lg:!h-[340px]"
            >
              {/* Rotating ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-16px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(232,184,109,0.3)',
                  animation: 'rotate-slow 20s linear infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '50%',
                  border: '1px solid rgba(232,184,109,0.1)',
                  animation: 'rotate-slow 15s linear infinite reverse',
                }}
              />

              {/* Avatar circle */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px solid var(--border)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src="/avatar.png"
                  alt="Ezekiel Olaleye"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
              </div>

              {/* Floating badges */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '-20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  animation: 'float 4s ease-in-out infinite',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>⚡</span>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif' }}>AI Expert</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>5+ years</div>
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--accent)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  animation: 'float 4s ease-in-out infinite 1.5s',
                  boxShadow: '0 8px 32px rgba(232,184,109,0.15)',
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>🎯</span>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'Syne, sans-serif' }}>150+ Projects</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, var(--text-muted), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
