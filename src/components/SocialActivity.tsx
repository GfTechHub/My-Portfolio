'use client';

import { SOCIAL_LINKS } from '@/lib/data';

const PLATFORMS = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@your-channel',
    icon: '▶',
    color: '#FF0000',
    followers: 'X.XK',
    link: SOCIAL_LINKS.youtube,
    metric: 'subscribers',
    posts: [
      { title: 'How I Built a Full App Using AI Prompts Only', views: '12.4K views', thumb: '🎬' },
      { title: 'Top 10 AI Tools for Creators in 2025', views: '8.2K views', thumb: '🤖' },
      { title: 'Runway vs Veo: Which AI Video Tool Wins?', views: '6.7K views', thumb: '🎥' },
    ],
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@your-username',
    icon: '♪',
    color: '#69C9D0',
    followers: 'X.XK',
    link: SOCIAL_LINKS.tiktok,
    metric: 'followers',
    posts: [
      { title: 'AI prompt that builds entire websites 🤯', views: '45K views', thumb: '⚡' },
      { title: 'POV: you discover Claude AI for the first time', views: '32K views', thumb: '💡' },
      { title: 'This Midjourney hack changed everything', views: '28K views', thumb: '🎨' },
    ],
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@your-username',
    icon: '◈',
    color: '#E1306C',
    followers: 'X.XK',
    link: SOCIAL_LINKS.instagram,
    metric: 'followers',
    posts: [
      { title: 'Before & After: AI Brand Transformation', views: '2.1K likes', thumb: '✨' },
      { title: 'Behind the scenes: AI video production', views: '1.8K likes', thumb: '🎬' },
      { title: 'New graphics design drop 🔥', views: '1.5K likes', thumb: '🎨' },
    ],
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: 'your-username',
    icon: '</> ',
    color: '#e8b86d',
    followers: 'XX',
    link: SOCIAL_LINKS.github,
    metric: 'followers',
    posts: [
      { title: 'ai-prompt-library — 200+ curated prompts', views: '⭐ 45 stars', thumb: '📦' },
      { title: 'portfolio-template — Next.js starter', views: '⭐ 23 stars', thumb: '🚀' },
      { title: 'automation-scripts — N8N workflows', views: '⭐ 18 stars', thumb: '⚙' },
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'your-page',
    icon: 'f',
    color: '#1877F2',
    followers: 'X.XK',
    link: SOCIAL_LINKS.facebook,
    metric: 'followers',
    posts: [
      { title: 'Free AI Tools Masterclass — Sign Up Now', views: '890 reactions', thumb: '📚' },
      { title: "How AI doubled our client's revenue", views: '654 reactions', thumb: '📈' },
      { title: 'Join our AI Creators community!', views: '432 reactions', thumb: '🤝' },
    ],
  },
];

export default function SocialActivity() {
  return (
    <section
      id="activity"
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
            04 — Social
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1rem',
            }}
            className="mob-jc-center"
          >
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              Live
              <span style={{ color: 'var(--accent)' }}> Activity.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  boxShadow: '0 0 8px #22c55e',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}
              />
              <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                Latest from all platforms
              </span>
            </div>
          </div>
        </div>

        {/* Platform cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.25s, transform 0.25s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = platform.color + '60';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Platform header */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: `linear-gradient(135deg, ${platform.color}08, transparent)`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: platform.color + '20',
                      border: `1px solid ${platform.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      color: platform.color,
                    }}
                  >
                    {platform.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {platform.name}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {platform.handle}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: platform.color,
                    }}
                  >
                    {platform.followers}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                    {platform.metric}
                  </div>
                </div>
              </div>

              {/* Posts */}
              <div style={{ padding: '0.5rem 0' }}>
                {platform.posts.map((post, i) => (
                  <a
                    key={i}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1.5rem',
                      transition: 'background 0.2s',
                      borderBottom: i < platform.posts.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = 'var(--bg-card-hover)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = 'transparent')
                    }
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '6px',
                        background: platform.color + '15',
                        border: `1px solid ${platform.color}25`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        flexShrink: 0,
                      }}
                    >
                      {post.thumb}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          color: 'var(--text-primary)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          marginBottom: '0.15rem',
                        }}
                      >
                        {post.title}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        {post.views}
                      </div>
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>↗</span>
                  </a>
                ))}
              </div>

              {/* View all */}
              <div
                style={{
                  padding: '0.75rem 1.5rem',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 600,
                    color: platform.color,
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = '0.6rem')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = '0.3rem')
                  }
                >
                  View all on {platform.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
