'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const achievementBadgeVariants = cva(
  'relative group flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050811] border transition-all duration-300 overflow-hidden shadow-lg hover:-translate-y-0.5',
  {
    variants: {
      rarity: {
        common:
          'border-slate-700/40 [--ab-color:#94a3b8] [--ab-glow:rgba(148,163,184,0.15)] hover:border-slate-500/60',
        rare: 'border-cyan-500/40 [--ab-color:#00d9e8] [--ab-glow:rgba(0,217,232,0.2)] hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,217,232,0.2)]',
        epic: 'border-violet-500/40 [--ab-color:#a78bfa] [--ab-glow:rgba(167,139,250,0.2)] hover:border-violet-400 hover:shadow-[0_0_15px_rgba(167,139,250,0.2)]',
        legendary:
          'border-amber-500/40 [--ab-color:#f5a524] [--ab-glow:rgba(245,165,36,0.25)] hover:border-amber-400 hover:shadow-[0_0_18px_rgba(245,165,36,0.25)]',
      },
      status: {
        verified: '[&_.status-dot]:bg-emerald-400 [&_.status-dot]:shadow-[0_0_6px_rgba(52,211,153,0.8)]',
        pending: '[&_.status-dot]:bg-amber-400 [&_.status-dot]:shadow-[0_0_6px_rgba(245,165,36,0.8)]',
        locked: 'opacity-60 grayscale [&_.status-dot]:bg-slate-600',
      },
    },
    defaultVariants: {
      rarity: 'rare',
      status: 'verified',
    },
  },
);

export interface AchievementBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof achievementBadgeVariants> {
  title: string;
  issuer: string;
  date?: string;
  hash?: string;
  icon?: React.ReactNode;
  href?: string;
  /** Optional progression percentage (0 - 100) */
  progress?: number;
}

const AchievementBadge = React.forwardRef<HTMLDivElement, AchievementBadgeProps>(
  (
    {
      className,
      title,
      issuer,
      date,
      hash,
      icon,
      href,
      rarity = 'rare',
      status = 'verified',
      progress,
      ...props
    },
    ref,
  ) => {
    const isLocked = status === 'locked';

    const content = (
      <div
        ref={ref}
        className={cn(achievementBadgeVariants({ rarity, status, className }))}
        {...props}
      >
        {/* Subtle Rarity Radial Backlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--ab-glow),transparent_60%)]" />

        {/* 45° Chamfered High-Tech Icon Vessel */}
        <div
          className="relative w-11 h-11 bg-[#020409] border border-[var(--ab-color)] text-[var(--ab-color)] flex items-center justify-center font-mono text-base shrink-0 shadow-inner group-hover:scale-105 transition-transform"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
          }}
        >
          {icon || '🏆'}
        </div>

        {/* Info & Cryptographic Proof */}
        <div className="flex-1 min-w-0 z-10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-xs font-bold text-slate-100 font-sans truncate group-hover:text-[var(--ab-color)] transition-colors">
                {title}
              </span>
              <span className="status-dot w-1.5 h-1.5 rounded-full shrink-0" />
            </div>
            <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-[var(--ab-color)] bg-white/[0.04] px-1.5 py-0.2 rounded border border-white/[0.08]">
              {rarity}
            </span>
          </div>

          <p className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
            {issuer} {date && <span className="text-slate-600">// {date}</span>}
          </p>

          {hash && (
            <p className="text-[9px] font-mono text-slate-500 truncate mt-0.5">
              PROOF: <span className="text-slate-400">{hash}</span>
            </p>
          )}

          {/* Optional Segmented Progression Micro-Bar */}
          {progress !== undefined && !isLocked && (
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-[8px] font-mono text-slate-400">
                <span>PROGRESS</span>
                <span className="text-[var(--ab-color)] font-bold">{progress}%</span>
              </div>
              <div className="flex gap-0.5 h-1 w-full">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex-1 rounded-xs transition-colors',
                      i < Math.round(progress / 10)
                        ? 'bg-[var(--ab-color)]'
                        : 'bg-white/[0.08]',
                    )}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none"
        >
          {content}
        </a>
      );
    }

    return content;
  },
);

AchievementBadge.displayName = 'AchievementBadge';

export { AchievementBadge, achievementBadgeVariants };
