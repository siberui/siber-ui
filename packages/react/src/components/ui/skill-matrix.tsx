import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const skillMatrixVariants = cva('grid gap-4 w-full', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-3',
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
  )
);
SkillMatrix.displayName = 'SkillMatrix';

const skillBarColorVariants = {
  cyan: 'bg-cyan-400',
  purple: 'bg-purple-400',
  emerald: 'bg-emerald-400',
  amber: 'bg-amber-400',
};

export interface SkillItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  name: string;
  level: number; // 0 to 100
  category?: string;
  icon?: React.ReactNode;
  color?: 'cyan' | 'purple' | 'emerald' | 'amber';
  statusLabel?: string;
}

const SkillItem = React.forwardRef<HTMLDivElement, SkillItemProps>(
  ({ className, name, level, category, icon, color = 'cyan', statusLabel, ...props }, ref) => {
    const clampedLevel = Math.min(100, Math.max(0, level));
    const totalSegments = 10;
    const activeSegments = Math.round(clampedLevel / 10);

    return (
      <div
        ref={ref}
        className={cn(
          'p-4 rounded-xl bg-slate-950/60 border border-white/[0.06] hover:border-cyan-500/30 transition-colors duration-300 backdrop-blur-md group',
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {icon && (
              <span className={cn('text-sm flex items-center justify-center', 
                color === 'cyan' && 'text-cyan-400',
                color === 'purple' && 'text-purple-400',
                color === 'emerald' && 'text-emerald-400',
                color === 'amber' && 'text-amber-400'
              )}>
                {icon}
              </span>
            )}
            <span className="text-xs font-semibold text-slate-100 font-sans tracking-wide">{name}</span>
            {category && (
              <span className="text-[10px] font-mono text-slate-500 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/5">
                {category}
              </span>
            )}
          </div>
          <span className={cn("text-xs font-mono font-bold", 
              color === 'cyan' && 'text-cyan-400',
              color === 'purple' && 'text-purple-400',
              color === 'emerald' && 'text-emerald-400',
              color === 'amber' && 'text-amber-400'
          )}>
            {statusLabel || `${clampedLevel}%`}
          </span>
        </div>

        {/* Clean Segmented Matrix Power Bar */}
        <div className="flex items-center gap-1 w-full h-2">
          {Array.from({ length: totalSegments }).map((_, i) => {
            const isActive = i < activeSegments;
            return (
              <div
                key={i}
                className={cn(
                  'flex-1 h-full rounded-xs transition-opacity duration-300',
                  isActive ? skillBarColorVariants[color] : 'bg-slate-900 border border-white/[0.04] opacity-40'
                )}
              />
            );
          })}
        </div>
      </div>
    );
  }
);
SkillItem.displayName = 'SkillItem';

export { SkillMatrix, SkillItem };
