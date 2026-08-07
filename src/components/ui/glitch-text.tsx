import * as React from 'react';
import { cn } from '@/utils/cn';

const CYBER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/';

export interface GlitchTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  text?: string;
  active?: boolean;
  color?: 'cyan' | 'white' | 'rose';
  speed?: number;
}

export const GlitchText = React.forwardRef<HTMLElement, GlitchTextProps>(
  ({ className, as: Component = 'span', text, active = true, color = 'white', speed = 120, children, ...props }, ref) => {
    const originalText = text || (typeof children === 'string' ? children : '');
    const [displayText, setDisplayText] = React.useState(originalText);

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
          // 8% chance to scramble a character per tick
          if (Math.random() < 0.08) {
            scrambled += CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          } else {
            scrambled += originalText[i];
          }
        }
        setDisplayText(scrambled);
      };

      const intervalId = setInterval(scramble, speed);
      return () => clearInterval(intervalId);
    }, [active, originalText, speed]);

    const baseColorClass = {
      cyan: 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]',
      white: 'text-slate-100 drop-shadow-[0_0_8px_rgba(241,245,249,0.8)]',
      rose: 'text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]',
    }[color];

    return (
      <Component
        ref={ref as any}
        className={cn(
          'font-bold tracking-wider font-mono transition-colors duration-75',
          active && 'animate-neon-flicker',
          baseColorClass,
          className
        )}
        {...props}
      >
        {displayText}
      </Component>
    );
  }
);

GlitchText.displayName = 'GlitchText';
