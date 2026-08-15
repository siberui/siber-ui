import * as React from 'react';
import { cn } from '../../utils/cn';

export interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size / length of the beam in pixels. Default is 140. */
  size?: number;
  /** Duration of the animation in seconds. Default is 6. */
  duration?: number;
  /** Delay of the animation in seconds. Default is 0. */
  delay?: number;
  /** Width of the border beam stroke in pixels. Default is 1.5. */
  borderWidth?: number;
  /** Starting color of the gradient beam */
  colorFrom?: string;
  /** Ending color of the gradient beam */
  colorTo?: string;
  /** Optional variant for predefined cyberpunk color pairs */
  variant?: 'neon' | 'purple' | 'destructive' | 'green' | 'amber' | 'glass';
  /** Reverse the rotation direction */
  reverse?: boolean;
  /** Cast an exterior luminous ambient blur aura */
  glow?: boolean;
}

const variantColors: Record<NonNullable<BorderBeamProps['variant']>, { from: string; to: string }> = {
  neon: { from: '#00d9e8', to: 'rgba(0, 217, 232, 0)' },
  purple: { from: '#a78bfa', to: 'rgba(167, 139, 250, 0)' },
  destructive: { from: '#fb5a7e', to: 'rgba(251, 90, 126, 0)' },
  green: { from: '#34d399', to: 'rgba(52, 211, 153, 0)' },
  amber: { from: '#f5a524', to: 'rgba(245, 165, 36, 0)' },
  glass: { from: '#ffffff', to: 'rgba(255, 255, 255, 0)' },
};

export const BorderBeam = ({
  className,
  size = 140,
  duration = 6,
  delay = 0,
  borderWidth = 1.5,
  colorFrom = '#ffffff',
  colorTo = 'transparent',
  variant,
  reverse = false,
  glow = false,
  style,
  ...props
}: BorderBeamProps) => {
  const finalColorFrom = variant ? variantColors[variant].from : colorFrom;
  const finalColorTo = variant ? variantColors[variant].to : colorTo;

  return (
    <div
      style={
        {
          '--beam-color': finalColorFrom,
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden',
        glow && 'filter drop-shadow-[0_0_12px_var(--beam-color,#00d9e8)]',
        className
      )}
      {...props}
    >
      <div
        style={{
          borderWidth: `${borderWidth}px`,
          borderStyle: 'solid',
          borderColor: 'transparent',
          WebkitMask:
            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        className="absolute inset-0 rounded-[inherit]"
      >
        <div
          style={{
            position: 'absolute',
            width: `${size}px`,
            aspectRatio: '1 / 1',
            background: `linear-gradient(to left, ${finalColorFrom}, ${finalColorTo}, transparent)`,
            offsetAnchor: '100% 50%',
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            animation: `border-beam ${duration}s linear infinite`,
            animationDelay: `-${delay}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        />
      </div>
    </div>
  );
};

