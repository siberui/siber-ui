'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const statCardVariants = cva(
  'relative overflow-hidden rounded-xl bg-[#050811] border border-white/[0.08] p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-0.5 min-w-0',
  {
    variants: {
      signal: {
        cyan: 'hover:border-cyan-500/40 [--sc-color:#00d9e8] [--sc-glow:rgba(0,217,232,0.15)]',
        violet: 'hover:border-violet-500/40 [--sc-color:#a78bfa] [--sc-glow:rgba(167,139,250,0.15)]',
        emerald: 'hover:border-emerald-500/40 [--sc-color:#34d399] [--sc-glow:rgba(52,211,153,0.15)]',
        amber: 'hover:border-amber-500/40 [--sc-color:#f5a524] [--sc-glow:rgba(245,165,36,0.15)]',
        rose: 'hover:border-rose-500/40 [--sc-color:#fb5a7e] [--sc-glow:rgba(251,90,126,0.15)]',
      },
    },
    defaultVariants: {
      signal: 'cyan',
    },
  },
);

export interface StatCardTrend {
  value: string | number;
  direction?: 'up' | 'down' | 'neutral';
  label?: string;
}

export interface StatCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof statCardVariants> {
  value: string | number;
  label: string;
  unit?: string;
  subtext?: string;
  icon?: React.ReactNode;
  /** Tactical system index tag (e.g. '[SYS.METRIC_01]') */
  indexTag?: string;
  /** Trend delta telemetry (e.g. { value: '+24.5%', direction: 'up', label: 'vs last cycle' }) */
  trend?: StatCardTrend;
  /** Optional micro sparkline / 7-day activity array (values 0 - 100) */
  activity?: number[];
  /** Show technical HUD corner reticles */
  cornerTicks?: boolean;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      value,
      label,
      unit,
      subtext,
      icon,
      signal = 'cyan',
      indexTag,
      trend,
      activity,
      cornerTicks = false,
      ...props
    },
    ref,
  ) => (
    <div ref={ref} className={cn(statCardVariants({ signal, className }))} {...props}>
      {/* Corner Ticks */}
      {cornerTicks && (
        <>
          <span className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[var(--sc-color)] pointer-events-none" />
          <span className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[var(--sc-color)] pointer-events-none" />
          <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[var(--sc-color)] pointer-events-none" />
          <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[var(--sc-color)] pointer-events-none" />
        </>
      )}

      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-2.5 mb-2.5 min-w-0">
        <div className="space-y-0.5 flex-1 min-w-0">
          {indexTag && (
            <span className="text-[8.5px] font-mono text-slate-500 font-bold tracking-tight block">
              {indexTag}
            </span>
          )}
          <p
            className="text-[10.5px] sm:text-[11px] font-mono font-bold text-slate-400 tracking-wider uppercase leading-snug line-clamp-2"
            title={label}
          >
            {label}
          </p>
        </div>

        {icon && (
          <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[var(--sc-color)] flex items-center justify-center shrink-0 group-hover:border-[var(--sc-color)] transition-colors">
            {icon}
          </div>
        )}
      </div>

      {/* Main Metric Numerical Display */}
      <div className="space-y-1 min-w-0">
        <div className="flex items-baseline gap-1.5 flex-wrap min-w-0">
          <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white group-hover:text-[var(--sc-color)] transition-colors leading-none">
            {value}
          </span>
          {unit && (
            <span className="text-xs sm:text-sm font-mono text-slate-400 font-bold tracking-tight whitespace-nowrap">
              {unit}
            </span>
          )}
        </div>

        {/* Trend Delta or Subtext */}
        {(trend || subtext) && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1.5 min-w-0">
            {trend && (
              <span
                className={cn(
                  'inline-flex items-center gap-1 text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded border leading-none shrink-0',
                  trend.direction === 'up' &&
                    'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
                  trend.direction === 'down' &&
                    'bg-rose-500/10 text-rose-400 border-rose-500/30',
                  (!trend.direction || trend.direction === 'neutral') &&
                    'bg-slate-500/10 text-slate-300 border-slate-500/30',
                )}
              >
                {trend.direction === 'up' && '▲'}
                {trend.direction === 'down' && '▼'}
                {trend.value}
              </span>
            )}

            {(subtext || trend?.label) && (
              <p className="text-[9.5px] sm:text-[10px] font-mono text-slate-500 truncate max-w-full">
                {trend?.label || subtext}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Optional Mini 7-Step Telemetry Bar */}
      {activity && activity.length > 0 && (
        <div className="flex items-end gap-1 h-3.5 pt-2.5 w-full">
          {activity.map((val, i) => (
            <div
              key={i}
              style={{ height: `${Math.max(15, Math.min(100, val))}%` }}
              className="flex-1 rounded-xs bg-white/[0.1] group-hover:bg-[var(--sc-color)] transition-all duration-300"
            />
          ))}
        </div>
      )}
    </div>
  ),
);

StatCard.displayName = 'StatCard';

export { StatCard, statCardVariants };
