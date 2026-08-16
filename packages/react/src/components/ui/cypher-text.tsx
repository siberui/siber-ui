'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const CHAR_SETS = {
  hex: '0123456789ABCDEF',
  binary: '01',
  matrix: '0123456789ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ',
  alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?/~',
  all: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~',
} as const;

export type CharSetType = keyof typeof CHAR_SETS;

const cypherTextVariants = cva(
  'inline-block font-mono tracking-wider select-none transition-colors duration-150',
  {
    variants: {
      color: {
        cyan: 'text-cyan-400',
        violet: 'text-violet-400',
        emerald: 'text-emerald-400',
        green: 'text-emerald-400',
        amber: 'text-amber-400',
        rose: 'text-rose-400',
        white: 'text-slate-100',
        muted: 'text-slate-400',
      },
      glow: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        color: 'cyan',
        glow: true,
        className: 'drop-shadow-[0_0_8px_rgba(0,217,232,0.45)]',
      },
      {
        color: 'violet',
        glow: true,
        className: 'drop-shadow-[0_0_8px_rgba(167,139,250,0.45)]',
      },
      {
        color: 'emerald',
        glow: true,
        className: 'drop-shadow-[0_0_8px_rgba(52,211,153,0.45)]',
      },
      {
        color: 'green',
        glow: true,
        className: 'drop-shadow-[0_0_8px_rgba(52,211,153,0.45)]',
      },
      {
        color: 'amber',
        glow: true,
        className: 'drop-shadow-[0_0_8px_rgba(245,165,36,0.45)]',
      },
      {
        color: 'rose',
        glow: true,
        className: 'drop-shadow-[0_0_8px_rgba(251,90,126,0.45)]',
      },
      {
        color: 'white',
        glow: true,
        className: 'drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]',
      },
      {
        color: 'muted',
        glow: true,
        className: 'drop-shadow-[0_0_6px_rgba(236,238,242,0.2)]',
      },
    ],
    defaultVariants: {
      color: 'cyan',
      glow: false,
    },
  },
);

export interface CypherTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof cypherTextVariants> {
  /** The text string to decrypt/scramble */
  text: string;
  /** HTML tag to render as */
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  /** How the decryption animation should be triggered */
  trigger?: 'mount' | 'hover' | 'inView' | 'manual';
  /** Active state for manual or controlled triggering */
  active?: boolean;
  /** Character set or custom string used during the scramble phase */
  characters?: CharSetType | string;
  /** Milliseconds per character update frame (default: 35ms) */
  speed?: number;
  /** Delay in milliseconds before starting animation */
  delay?: number;
  /** Number of scrambles per character before it locks into the resolved character */
  iterations?: number;
  /** Direction in which characters resolve */
  revealDirection?: 'start' | 'end' | 'center' | 'random';
  /** Callback fired when the entire string has been decoded */
  onComplete?: () => void;
}

export const CypherText = React.forwardRef<HTMLElement, CypherTextProps>(
  (
    {
      className,
      as: Component = 'span',
      text = '',
      trigger = 'mount',
      active: manualActive,
      characters = 'hex',
      speed = 35,
      delay = 0,
      iterations = 4,
      revealDirection = 'start',
      color = 'cyan',
      glow = false,
      onComplete,
      onMouseEnter,
      ...props
    },
    forwardedRef,
  ) => {
    const internalRef = React.useRef<HTMLElement | null>(null);
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        internalRef.current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          (
            forwardedRef as React.MutableRefObject<HTMLElement | null>
          ).current = node;
        }
      },
      [forwardedRef],
    );

    const [displayText, setDisplayText] = React.useState(text);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [hasMounted, setHasMounted] = React.useState(false);
    const [hasBeenTriggered, setHasBeenTriggered] = React.useState(false);

    // Resolve character pool
    const charPool = React.useMemo(() => {
      if (typeof characters === 'string' && characters in CHAR_SETS) {
        return CHAR_SETS[characters as CharSetType];
      }
      return typeof characters === 'string' && characters.length > 0
        ? characters
        : CHAR_SETS.hex;
    }, [characters]);

    // Check prefers-reduced-motion
    const prefersReducedMotion = React.useMemo(() => {
      if (typeof window === 'undefined') return false;
      return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    }, []);

    const startDecryption = React.useCallback(() => {
      if (!text || prefersReducedMotion) {
        setDisplayText(text);
        onComplete?.();
        return;
      }

      setIsAnimating(true);
      const textLen = text.length;

      // Determine reveal ordering based on revealDirection
      const order: number[] = [];
      for (let i = 0; i < textLen; i++) order.push(i);

      if (revealDirection === 'end') {
        order.reverse();
      } else if (revealDirection === 'center') {
        const mid = Math.floor(textLen / 2);
        order.sort((a, b) => Math.abs(a - mid) - Math.abs(b - mid));
      } else if (revealDirection === 'random') {
        for (let i = order.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [order[i], order[j]] = [order[j], order[i]];
        }
      }

      const totalFrames = textLen * iterations;
      let currentFrame = 0;

      const timer = setTimeout(() => {
        const intervalId = setInterval(() => {
          currentFrame++;
          const resolvedCount = Math.floor(currentFrame / iterations);

          // Build revealed characters map
          const revealedIndices = new Set(order.slice(0, resolvedCount));

          let frameOutput = '';
          for (let i = 0; i < textLen; i++) {
            const originalChar = text[i];
            if (originalChar === ' ' || originalChar === '\n' || originalChar === '\t') {
              frameOutput += originalChar;
              continue;
            }

            if (revealedIndices.has(i)) {
              frameOutput += originalChar;
            } else {
              frameOutput += charPool[Math.floor(Math.random() * charPool.length)];
            }
          }

          setDisplayText(frameOutput);

          if (resolvedCount >= textLen || currentFrame >= totalFrames + 2) {
            clearInterval(intervalId);
            setDisplayText(text);
            setIsAnimating(false);
            onComplete?.();
          }
        }, Math.max(16, speed));

        return () => clearInterval(intervalId);
      }, Math.max(0, delay));

      return () => clearTimeout(timer);
    }, [
      text,
      charPool,
      speed,
      delay,
      iterations,
      revealDirection,
      prefersReducedMotion,
      onComplete,
    ]);

    React.useEffect(() => {
      setHasMounted(true);
    }, []);

    // Handle trigger logic
    React.useEffect(() => {
      if (!hasMounted) return;

      if (trigger === 'manual') {
        if (manualActive) {
          const cleanup = startDecryption();
          return cleanup;
        }
        return;
      }

      if (trigger === 'mount' && !hasBeenTriggered) {
        setHasBeenTriggered(true);
        const cleanup = startDecryption();
        return cleanup;
      }

      if (trigger === 'inView' && !hasBeenTriggered && internalRef.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry && entry.isIntersecting) {
              setHasBeenTriggered(true);
              startDecryption();
              observer.disconnect();
            }
          },
          { threshold: 0.2 },
        );

        observer.observe(internalRef.current);
        return () => observer.disconnect();
      }
    }, [
      hasMounted,
      trigger,
      manualActive,
      hasBeenTriggered,
      startDecryption,
    ]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
      onMouseEnter?.(e);
      if (trigger === 'hover' && !isAnimating) {
        startDecryption();
      }
    };

    return (
      <Component
        ref={combinedRef as unknown as React.Ref<never>}
        className={cn(
          cypherTextVariants({ color, glow }),
          isAnimating && 'animate-pulse text-opacity-90',
          className,
        )}
        onMouseEnter={handleMouseEnter}
        aria-label={props['aria-label'] || text}
        data-animating={isAnimating ? 'true' : 'false'}
        {...props}
      >
        {displayText}
      </Component>
    );
  },
);

CypherText.displayName = 'CypherText';
