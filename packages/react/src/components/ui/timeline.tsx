'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const timelineVariants = cva(
  'relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px]',
  {
    variants: {
      variant: {
        neon: 'before:bg-gradient-to-b before:from-cyan-400 before:via-violet-400 before:to-rose-500',
        cyan: 'before:bg-gradient-to-b before:from-cyan-400 before:to-cyan-600/30',
        violet: 'before:bg-gradient-to-b before:from-violet-400 before:to-violet-600/30',
        emerald: 'before:bg-gradient-to-b before:from-emerald-400 before:to-emerald-600/30',
        amber: 'before:bg-gradient-to-b before:from-amber-400 before:to-amber-600/30',
        rose: 'before:bg-gradient-to-b before:from-rose-400 before:to-rose-600/30',
        mono: 'before:bg-slate-800',
      },
    },
    defaultVariants: {
      variant: 'neon',
    },
  },
);

export interface TimelineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> {}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(timelineVariants({ variant, className }))} {...props} />
  ),
);
Timeline.displayName = 'Timeline';

const timelineNodeVariants = cva(
  'absolute -left-[23px] sm:-left-[27px] top-1 flex items-center justify-center w-6 h-6 rounded-full border bg-[#03050c] transition-all duration-300 z-10',
  {
    variants: {
      status: {
        active:
          'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,217,232,0.6)] ring-2 ring-cyan-500/30',
        completed:
          'border-emerald-400 text-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]',
        archived: 'border-slate-700 text-slate-500 bg-slate-900',
        future: 'border-rose-500/60 text-rose-400',
      },
    },
    defaultVariants: {
      status: 'completed',
    },
  },
);

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'active' | 'completed' | 'archived' | 'future';
  icon?: React.ReactNode;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, status = 'completed', icon, children, ...props }, ref) => (
    <div ref={ref} className={cn('relative group', className)} {...props}>
      <div className={cn(timelineNodeVariants({ status }))}>
        {status === 'active' && (
          <span className="absolute h-full w-full rounded-full bg-cyan-400 opacity-60 animate-ping" />
        )}
        {icon ? (
          <span className="w-3 h-3 flex items-center justify-center relative z-10">{icon}</span>
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-current relative z-10" />
        )}
      </div>
      <div className="bg-[#050811] border border-white/[0.08] rounded-xl p-4 sm:p-5 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-md group-hover:-translate-y-0.5">
        {children}
      </div>
    </div>
  ),
);
TimelineItem.displayName = 'TimelineItem';

const TimelineHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-wrap items-center justify-between gap-2 mb-2', className)}
      {...props}
    />
  ),
);
TimelineHeader.displayName = 'TimelineHeader';

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-base font-bold text-slate-100 tracking-tight font-sans group-hover:text-cyan-400 transition-colors',
      className,
    )}
    {...props}
  />
));
TimelineTitle.displayName = 'TimelineTitle';

const TimelineSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xs font-mono text-cyan-400/90 font-semibold', className)}
    {...props}
  />
));
TimelineSubtitle.displayName = 'TimelineSubtitle';

const TimelinePeriod = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'text-[10px] font-mono px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-slate-400 font-bold',
      className,
    )}
    {...props}
  />
));
TimelinePeriod.displayName = 'TimelinePeriod';

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-xs font-sans text-slate-300 leading-relaxed mt-2', className)}
      {...props}
    />
  ),
);
TimelineContent.displayName = 'TimelineContent';

export interface TimelineTagsProps extends React.HTMLAttributes<HTMLDivElement> {
  tags?: string[];
}

const TimelineTags = React.forwardRef<HTMLDivElement, TimelineTagsProps>(
  ({ className, tags = [], children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-wrap gap-1.5 pt-3', className)} {...props}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[9px] font-mono text-slate-400 group-hover:border-cyan-500/30 transition-colors"
        >
          {tag}
        </span>
      ))}
      {children}
    </div>
  ),
);
TimelineTags.displayName = 'TimelineTags';

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineSubtitle,
  TimelinePeriod,
  TimelineContent,
  TimelineTags,
};
