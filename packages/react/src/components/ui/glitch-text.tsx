'use client';

import * as React from 'react';
import { cn } from '../../utils/cn';

const CYBER_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/';

export interface GlitchTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  text?: string;
  active?: boolean;
  color?: 'cyan' | 'white' | 'rose';
  speed?: number;
}

export const GlitchText = React.forwardRef<HTMLElement, GlitchTextProps>(
  (
    {
      className,
      as: Component = 'span',
      text,
      active = true,
      color = 'white',
      speed = 140,
      children,
      ...props
    },
    ref,
  ) => {
    const { ['aria-label']: ariaLabelFromProps, ...restProps } = props;
    const originalText = text || (typeof children === 'string' ? children : '');
    const [displayText, setDisplayText] = React.useState(originalText);
    const effectiveSpeed = Math.max(100, speed);

    React.useEffect(() => {
      if (!active) {
        setDisplayText(originalText);
        return;
      }

      const scramble = () => {
        let scrambled = '';
        for (let i = 0; i < originalText.length; i++) {
          if (originalText[i] === ' ') {
            scrambled += ' ';
            continue;
          }
          // Keep the effect subtle so readability stays high.
          if (Math.random() < 0.05) {
            scrambled +=
              CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          } else {
            scrambled += originalText[i];
          }
        }
        setDisplayText(scrambled);
      };

      const intervalId = setInterval(scramble, effectiveSpeed);
      return () => clearInterval(intervalId);
    }, [active, originalText, effectiveSpeed]);

    const baseColorClass = {
      cyan: 'text-cyan-300 drop-shadow-[0_0_4px_rgba(34,211,238,0.35)]',
      white: 'text-slate-100 drop-shadow-[0_0_3px_rgba(241,245,249,0.28)]',
      rose: 'text-rose-300 drop-shadow-[0_0_4px_rgba(251,113,133,0.32)]',
    }[color];

    const stableAriaLabel = ariaLabelFromProps ?? (originalText || undefined);
    const renderedContent = originalText ? displayText : children;

    return (
      <Component
        ref={ref as unknown as React.Ref<never>}
        className={cn(
          'font-bold tracking-wider font-mono transition-colors duration-150',
          active &&
            'motion-safe:animate-neon-flicker motion-reduce:animate-none',
          baseColorClass,
          className,
        )}
        aria-label={stableAriaLabel}
        {...restProps}
      >
        {renderedContent}
      </Component>
    );
  },
);

GlitchText.displayName = 'GlitchText';
