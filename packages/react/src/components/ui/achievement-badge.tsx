import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const achievementBadgeVariants = cva(
  'flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] backdrop-blur-md hover:border-cyan-500/30 transition-colors duration-300 group',
  {
    variants: {
      status: {
        verified: '[&_.status-dot]:bg-emerald-400',
        pending: '[&_.status-dot]:bg-amber-400',
      },
    },
    defaultVariants: {
      status: 'verified',
    },
  }
);

export interface AchievementBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof achievementBadgeVariants> {
  title: string;
  issuer: string;
  date?: string;
  icon?: React.ReactNode;
  href?: string;
}

const AchievementBadge = React.forwardRef<HTMLDivElement, AchievementBadgeProps>(
  ({ className, title, issuer, date, icon, href, status = 'verified', ...props }, ref) => {
    const content = (
      <div ref={ref} className={cn(achievementBadgeVariants({ status, className }))} {...props}>
        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-sm flex-shrink-0">
          {icon || '🏆'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-100 font-sans truncate group-hover:text-cyan-400 transition-colors">
              {title}
            </span>
            <span className="status-dot w-1.5 h-1.5 rounded-full flex-shrink-0" />
          </div>
          <p className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
            {issuer} {date && <span className="text-slate-600">// {date}</span>}
          </p>
        </div>
      </div>
    );

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
          {content}
        </a>
      );
    }

    return content;
  }
);
AchievementBadge.displayName = 'AchievementBadge';

export { AchievementBadge };
