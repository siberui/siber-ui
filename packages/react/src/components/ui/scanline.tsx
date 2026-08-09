import * as React from 'react';
import { cn } from '../../utils/cn';

/**
 * Scanline — a signature SiberUI effect: either a static repeating scanline
 * texture, or a single sweeping beam. Applied deliberately as an overlay,
 * never baked into every surface.
 */
export interface ScanlineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 'static' renders a fixed scanline texture; 'sweep' animates a single beam. */
  variant?: 'static' | 'sweep';
}

const Scanline = React.forwardRef<HTMLDivElement, ScanlineProps>(
  ({ className, variant = 'static', ...props }, ref) => {
    if (variant === 'sweep') {
      return (
        <div
          ref={ref}
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-0 overflow-hidden',
            className,
          )}
          {...props}
        >
          <div className="animate-scanline-sweep absolute inset-x-0 h-8 bg-linear-to-b from-transparent via-signal-cyan/10 to-transparent" />
        </div>
      );
    }
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          'scanlines pointer-events-none absolute inset-0',
          className,
        )}
        {...props}
      />
    );
  },
);
Scanline.displayName = 'Scanline';

export { Scanline };
