'use client';

import * as React from 'react';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const marqueeVariants = cva(
  'group flex overflow-hidden p-2',
  {
    variants: {
      direction: {
        left: 'flex-row',
        right: 'flex-row',
        up: 'flex-col',
        down: 'flex-col',
      },
      pauseOnHover: {
        true: '[&>div]:hover:[animation-play-state:paused]',
        false: '',
      },
    },
    defaultVariants: {
      direction: 'left',
      pauseOnHover: false,
    }
  }
);

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof marqueeVariants> {
  speed?: 'slow' | 'normal' | 'fast';
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, direction = 'left', pauseOnHover, speed = 'normal', children, ...props }, ref) => {
    
    const speedValue = {
      slow: '60s',
      normal: '30s',
      fast: '15s',
    }[speed];

    const directionClass = {
      left: 'animate-marquee-left',
      right: 'animate-marquee-right',
      up: 'animate-marquee-up',
      down: 'animate-marquee-down',
    }[direction as string];
    
    return (
      <div
        ref={ref}
        className={cn(marqueeVariants({ direction, pauseOnHover, className }))}
        style={{ '--marquee-duration': speedValue } as React.CSSProperties}
        {...props}
      >
        <div className={cn('flex shrink-0 gap-4 pr-4', direction === 'up' || direction === 'down' ? 'flex-col pr-0 pb-4' : 'flex-row', directionClass)}>
          {children}
        </div>
        <div className={cn('flex shrink-0 gap-4 pr-4', direction === 'up' || direction === 'down' ? 'flex-col pr-0 pb-4' : 'flex-row', directionClass)} aria-hidden="true">
          {children}
        </div>
      </div>
    );
  }
);

Marquee.displayName = 'Marquee';
