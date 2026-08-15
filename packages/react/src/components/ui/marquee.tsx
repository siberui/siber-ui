'use client';

import * as React from 'react';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const marqueeVariants = cva(
  'group flex overflow-hidden p-2 relative',
  {
    variants: {
      variant: {
        default: '',
        neon: 'border-y border-cyan-500/30 bg-cyan-950/15 shadow-[0_0_24px_rgba(0,217,232,0.12)]',
        glass: 'backdrop-blur-md bg-white/[0.02] border-y border-white/[0.08]',
        bordered: 'border-y border-border-hairline bg-surface-1/40',
      },
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
      variant: 'default',
      direction: 'left',
      pauseOnHover: false,
    }
  }
);

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof marqueeVariants> {
  speed?: 'slow' | 'normal' | 'fast';
  fade?: boolean;
  repeat?: number;
  reverse?: boolean;
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      variant = 'default',
      direction = 'left',
      pauseOnHover = false,
      speed = 'normal',
      fade = false,
      repeat = 2,
      reverse = false,
      children,
      ...props
    },
    ref
  ) => {
    const speedValue = {
      slow: '60s',
      normal: '30s',
      fast: '15s',
    }[speed];

    let effectiveDirection = direction;
    if (reverse) {
      if (direction === 'left') effectiveDirection = 'right';
      else if (direction === 'right') effectiveDirection = 'left';
      else if (direction === 'up') effectiveDirection = 'down';
      else if (direction === 'down') effectiveDirection = 'up';
    }

    const directionClass = {
      left: 'animate-marquee-left',
      right: 'animate-marquee-right',
      up: 'animate-marquee-up',
      down: 'animate-marquee-down',
    }[effectiveDirection as string];

    const isVertical = effectiveDirection === 'up' || effectiveDirection === 'down';

    const maskClass = fade
      ? isVertical
        ? '[mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]'
        : '[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]'
      : '';

    const repeatArray = Array.from({ length: Math.max(2, repeat) });

    return (
      <div
        ref={ref}
        className={cn(
          marqueeVariants({ variant, direction: effectiveDirection, pauseOnHover }),
          maskClass,
          className
        )}
        style={{ '--marquee-duration': speedValue } as React.CSSProperties}
        {...props}
      >
        {repeatArray.map((_, index) => (
          <div
            key={index}
            className={cn(
              'flex shrink-0 gap-4 pr-4',
              isVertical ? 'flex-col pr-0 pb-4' : 'flex-row',
              directionClass
            )}
            aria-hidden={index > 0 ? 'true' : undefined}
          >
            {children}
          </div>
        ))}
      </div>
    );
  }
);

Marquee.displayName = 'Marquee';
