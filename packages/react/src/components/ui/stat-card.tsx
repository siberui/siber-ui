import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const statCardVariants = cva(
  'relative overflow-hidden rounded-xl bg-slate-950/60 border border-white/[0.08] hover:border-cyan-500/30 p-5 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group',
  {
    variants: {
      color: {
        cyan: '[&_.stat-val]:text-cyan-400 [&_.stat-icon]:text-cyan-400',
        purple: '[&_.stat-val]:text-purple-400 [&_.stat-icon]:text-purple-400',
        emerald: '[&_.stat-val]:text-emerald-400 [&_.stat-icon]:text-emerald-400',
        amber: '[&_.stat-val]:text-amber-400 [&_.stat-icon]:text-amber-400',
      },
    },
    defaultVariants: {
      color: 'cyan',
    },
  }
);

export interface StatCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof statCardVariants> {
  value: string | number;
  label: string;
  subtext?: string;
  icon?: React.ReactNode;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, value, label, subtext, icon, color, ...props }, ref) => (
    <div ref={ref} className={cn(statCardVariants({ color, className }))} {...props}>
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1 flex-1 min-w-0">
          <p className="text-[11px] font-mono text-slate-400 tracking-wider uppercase break-words">
            [ {label} ]
          </p>
          <p className="stat-val text-3xl font-extrabold font-mono tracking-tight text-white break-words">
            {value}
          </p>
          {subtext && <p className="text-[11px] font-mono text-slate-500 break-words">{subtext}</p>}
        </div>
        {icon && (
          <div className="stat-icon p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
);
StatCard.displayName = 'StatCard';

export { StatCard };
