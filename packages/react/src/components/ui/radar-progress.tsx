import * as React from 'react';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const radarVariants = cva(
  'relative flex items-center justify-center rounded-full overflow-hidden',
  {
    variants: {
      color: {
        cyan: 'text-cyan-500 border-cyan-500/40',
        green: 'text-emerald-500 border-emerald-500/40',
        rose: 'text-rose-500 border-rose-500/40',
      },
      size: {
        sm: 'w-16 h-16 border',
        md: 'w-32 h-32 border-2',
        lg: 'w-48 h-48 border-2',
      }
    },
    defaultVariants: {
      color: 'cyan',
      size: 'md',
    }
  }
);

export interface RadarProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof radarVariants> {
  scanning?: boolean;
}

export const RadarProgress = React.forwardRef<HTMLDivElement, RadarProgressProps>(
  ({ className, color, size, scanning = true, ...props }, ref) => {
    
    return (
      <div
        ref={ref}
        className={cn(radarVariants({ color, size, className }), 'bg-slate-950/80 shadow-xl')}
        {...props}
      >
        {/* Background Grid Rings */}
        <div className="absolute inset-0 rounded-full border border-current/20 scale-75" />
        <div className="absolute inset-0 rounded-full border border-current/20 scale-50" />
        <div className="absolute inset-0 rounded-full border border-current/20 scale-25" />
        
        {/* Crosshairs */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-current/30" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-current/30" />

        {/* Radar Sweep */}
        {scanning && (
          <div 
            className="absolute inset-0 rounded-full opacity-60 animate-radar-spin"
            style={{
              background: 'conic-gradient(from 0deg, transparent 70%, currentColor 100%)',
            }}
          />
        )}
        
        {/* Center Dot */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor] z-10" />
      </div>
    );
  }
);

RadarProgress.displayName = 'RadarProgress';
