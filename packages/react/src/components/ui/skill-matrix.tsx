'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const skillMatrixVariants = cva('grid gap-3.5 w-full', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    },
  },
  defaultVariants: {
    cols: 2,
  },
});

export interface SkillMatrixProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skillMatrixVariants> {}

const SkillMatrix = React.forwardRef<HTMLDivElement, SkillMatrixProps>(
  ({ className, cols, ...props }, ref) => (
    <div ref={ref} className={cn(skillMatrixVariants({ cols, className }))} {...props} />
  ),
);
SkillMatrix.displayName = 'SkillMatrix';

const skillSignalVariants = {
  cyan: {
    text: 'text-cyan-400',
    bar: 'bg-cyan-400 shadow-[0_0_6px_rgba(0,217,232,0.8)]',
    border: 'group-hover:border-cyan-500/40',
  },
  violet: {
    text: 'text-violet-400',
    bar: 'bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]',
    border: 'group-hover:border-violet-500/40',
  },
  emerald: {
    text: 'text-emerald-400',
    bar: 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]',
    border: 'group-hover:border-emerald-500/40',
  },
  amber: {
    text: 'text-amber-400',
    bar: 'bg-amber-400 shadow-[0_0_6px_rgba(245,165,36,0.8)]',
    border: 'group-hover:border-amber-500/40',
  },
  rose: {
    text: 'text-rose-400',
    bar: 'bg-rose-400 shadow-[0_0_6px_rgba(251,90,126,0.8)]',
    border: 'group-hover:border-rose-500/40',
  },
};

export interface SkillItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  name: string;
  level: number; // 0 to 100
  category?: string;
  icon?: React.ReactNode;
  signal?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose';
  statusLabel?: string;
  segments?: number;
  /** Display automated tactical rank (e.g. MASTER, SPECIALIST) */
  showRank?: boolean;
}

const getRankLabel = (level: number) => {
  if (level >= 90) return 'MASTER';
  if (level >= 75) return 'SPECIALIST';
  if (level >= 50) return 'ADEPT';
  return 'NOVICE';
};

const SkillItem = React.forwardRef<HTMLDivElement, SkillItemProps>(
  (
    {
      className,
      name,
      level,
      category,
      icon,
      signal = 'cyan',
      statusLabel,
      segments = 12,
      showRank = true,
      ...props
    },
    ref,
  ) => {
    const clampedLevel = Math.min(100, Math.max(0, level));
    const activeSegments = Math.round((clampedLevel / 100) * segments);
    const signalTheme = skillSignalVariants[signal];

    return (
      <div
        ref={ref}
        className={cn(
          'p-4 rounded-xl bg-[#050811] border border-white/[0.08] transition-all duration-200 group hover:-translate-y-0.5 shadow-md',
          signalTheme.border,
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2 min-w-0">
            {icon && (
              <span className={cn('text-sm shrink-0 flex items-center justify-center', signalTheme.text)}>
                {icon}
              </span>
            )}
            <span className="text-xs font-bold text-slate-100 font-sans tracking-wide truncate">
              {name}
            </span>
            {category && (
              <span className="text-[9px] font-mono text-slate-500 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.08] shrink-0">
                {category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {showRank && (
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-tight">
                [{getRankLabel(clampedLevel)}]
              </span>
            )}
            <span className={cn('text-xs font-mono font-bold', signalTheme.text)}>
              {statusLabel || `${clampedLevel}%`}
            </span>
          </div>
        </div>

        {/* Precision Segmented Matrix LED Array */}
        <div className="flex items-center gap-1 w-full h-2 bg-[#020409] p-0.5 rounded border border-white/[0.06]">
          {Array.from({ length: segments }).map((_, i) => {
            const isActive = i < activeSegments;
            return (
              <div
                key={i}
                className={cn(
                  'flex-1 h-full rounded-xs transition-all duration-300',
                  isActive ? signalTheme.bar : 'bg-white/[0.04]',
                )}
              />
            );
          })}
        </div>
      </div>
    );
  },
);
SkillItem.displayName = 'SkillItem';

export { SkillMatrix, SkillItem, skillMatrixVariants };
