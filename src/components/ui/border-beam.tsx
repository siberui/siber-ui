import * as React from 'react';
import { cn } from '@/utils/cn';

interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size / arc angle of the beam in degrees. Default is 90. */
  size?: number;
  /** Duration of the animation in seconds. Default is 6. */
  duration?: number;
  /** Delay of the animation in seconds. Default is 0. */
  delay?: number;
  /** Width of the border beam in pixels. Default is 1.5. */
  borderWidth?: number;
  /** Starting color of the gradient beam */
  colorFrom?: string;
  /** Ending color of the gradient beam */
  colorTo?: string;
  /** Color of the static border background itself */
  borderColor?: string;
  /** Optional variant for predefined cyberpunk color pairs */
  variant?: 'neon' | 'purple' | 'destructive' | 'green';
  /** Reverse the rotation direction */
  reverse?: boolean;
}

const variantColors = {
  neon: { from: '#00f0ff', to: 'rgba(0, 240, 255, 0)' },
  purple: { from: '#a855f7', to: 'rgba(168, 85, 247, 0)' },
  destructive: { from: '#f43f5e', to: 'rgba(244, 63, 94, 0)' },
  green: { from: '#39ff14', to: 'rgba(57, 255, 20, 0)' },
};

export const BorderBeam = ({
  className,
  size = 90,
  duration = 6,
  delay = 0,
  borderWidth = 1.5,
  colorFrom = '#ffffff',
  colorTo = 'transparent',
  borderColor = 'rgba(255, 255, 255, 0.1)',
  variant,
  reverse = false,
  ...props
}: BorderBeamProps) => {
  const finalColorFrom = variant ? variantColors[variant].from : colorFrom;
  const finalColorTo = variant ? variantColors[variant].to : colorTo;

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]',
        className
      )}
      {...props}
    >
      {/* Static border background line */}
      <div
        style={{ borderColor }}
        className="absolute inset-0 rounded-[inherit] border border-solid pointer-events-none"
      />

      {/* Rotating gradient beam clipped to border ring */}
      <div
        className="absolute inset-0 rounded-[inherit] overflow-hidden"
        style={{
          padding: `${borderWidth}px`,
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      >
        <div
          style={
            {
              '--duration': duration,
              '--delay': delay,
              background: `conic-gradient(from 0deg at 50% 50%, ${finalColorFrom} 0deg, ${finalColorTo} ${size}deg, transparent ${size}deg)`,
              animationDirection: reverse ? 'reverse' : 'normal',
            } as React.CSSProperties
          }
          className="absolute -inset-[100%] animate-border-beam-spin [animation-delay:calc(var(--delay)*1s)]"
        />
      </div>
    </div>
  );
};
