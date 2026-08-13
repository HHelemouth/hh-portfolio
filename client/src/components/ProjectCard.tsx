import { Link } from 'wouter';
import { useEffect, useRef, useState } from 'react';
import type { ProjectEntry } from '@/data/projects';

export function useIntersection(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function ProjectCard({ project, delay = 1 }: { project: ProjectEntry; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref as React.RefObject<Element>);

  return (
    <div
      ref={ref}
      className={`fade-up fade-up-delay-${delay}`}
      style={{ opacity: visible ? 1 : 0, animationPlayState: visible ? 'running' : 'paused' }}
    >
      <Link href={`/projet/${project.slug}`}>
        <div className="project-card group">
          {project.thumb ? (
            <img
              src={project.thumb}
              alt={project.label}
              loading="lazy"
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: project.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'Jost, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em', textAlign: 'center', padding: '0 1rem' }}>{project.label}</span>
              {project.cardSubtitle && (
                <span style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', padding: '0 1rem' }}>{project.cardSubtitle}</span>
              )}
            </div>
          )}
          <div className="overlay">
            <span className="overlay-title">{project.label}</span>
            <div className="overlay-tags">
              {project.tags.map((t) => (
                <span key={t} className="overlay-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2.5 px-0.5">
          <p
            className="text-sm font-medium leading-tight"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.13 0.02 264)' }}
          >
            {project.label}
            {project.isNew && (
              <span
                className="ml-2 text-xs px-1.5 py-0.5 rounded-sm"
                style={{
                  backgroundColor: 'oklch(0.45 0.22 264)',
                  color: '#fff',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  verticalAlign: 'middle',
                }}
              >
                new
              </span>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}
