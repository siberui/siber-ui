import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const timelineVariants = cva('relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[2px]', {
  variants: {
    variant: {
      neon: 'before:bg-gradient-to-b before:from-cyan-500/80 before:via-rose-500/60 before:to-red-600/30',
      cyan: 'before:bg-cyan-500/50',
      emerald: 'before:bg-emerald-500/50',
      rose: 'before:bg-rose-500/50',
      red: 'before:bg-red-500/50',
      mono: 'before:bg-slate-800',
    },
  },
  defaultVariants: {
    variant: 'neon',
  },
});

export interface TimelineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> {}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(timelineVariants({ variant, className }))} {...props} />
  )
);
Timeline.displayName = 'Timeline';

const timelineNodeVariants = cva(
  'absolute -left-[23px] sm:-left-[27px] top-1 flex items-center justify-center w-6 h-6 rounded-full border bg-slate-950 transition-all duration-300',
  {
    variants: {
      status: {
        active: 'border-cyan-400 text-cyan-400 ring-2 ring-cyan-500/20',
        completed: 'border-emerald-400 text-emerald-400',
        archived: 'border-slate-700 text-slate-500 bg-slate-900/60',
        future: 'border-rose-500/60 text-rose-400',
      },
    },
    defaultVariants: {
      status: 'completed',
    },
  }
);


export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'active' | 'completed' | 'archived' | 'future';
  icon?: React.ReactNode;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, status = 'completed', icon, children, ...props }, ref) => (
    <div ref={ref} className={cn('relative group', className)} {...props}>
      <div className={cn(timelineNodeVariants({ status }))}>
        {icon ? (
          <span className="w-3 h-3 flex items-center justify-center">{icon}</span>
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
        )}
      </div>
      <div className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-4 sm:p-5 backdrop-blur-md hover:border-cyan-500/30 transition-colors duration-300">
        {children}
      </div>
    </div>
  )
);
TimelineItem.displayName = 'TimelineItem';

const TimelineHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-wrap items-center justify-between gap-2 mb-2', className)} {...props} />
  )
);
TimelineHeader.displayName = 'TimelineHeader';

const TimelineTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-base font-semibold text-slate-100 tracking-tight font-sans', className)} {...props} />
  )
);
TimelineTitle.displayName = 'TimelineTitle';

const TimelineSubtitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-xs font-mono text-cyan-400/90 font-medium', className)} {...props} />
  )
);
TimelineSubtitle.displayName = 'TimelineSubtitle';

const TimelinePeriod = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'text-[11px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/[0.03] text-slate-400',
        className
      )}
      {...props}
    />
  )
);
TimelinePeriod.displayName = 'TimelinePeriod';

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-xs font-sans text-slate-400 leading-relaxed mt-2', className)} {...props} />
  )
);
TimelineContent.displayName = 'TimelineContent';

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineSubtitle,
  TimelinePeriod,
  TimelineContent,
};
