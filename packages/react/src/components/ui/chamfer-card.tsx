'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const chamferOuterVariants = cva(
  'relative group text-fg transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white/[0.08] hover:bg-white/[0.14]',
        surface: 'bg-white/[0.12] hover:bg-white/[0.18]',
        glass: 'backdrop-blur-xl bg-white/[0.14] shadow-2xl',
        accent: 'bg-cyan-500/30 hover:bg-cyan-500/50',
        terminal: 'bg-emerald-500/30 hover:bg-emerald-500/50 font-mono',
        ghost: 'bg-white/[0.04]',
      },
      signal: {
        none: '',
        cyan: 'bg-cyan-500/40 hover:bg-cyan-400/60 shadow-[0_0_24px_rgba(0,217,232,0.14)]',
        violet: 'bg-violet-500/40 hover:bg-violet-400/60 shadow-[0_0_24px_rgba(167,139,250,0.14)]',
        green: 'bg-emerald-500/40 hover:bg-emerald-400/60 shadow-[0_0_24px_rgba(52,211,153,0.14)]',
        amber: 'bg-amber-500/40 hover:bg-amber-400/60 shadow-[0_0_24px_rgba(245,165,36,0.14)]',
        rose: 'bg-rose-500/40 hover:bg-rose-400/60 shadow-[0_0_24px_rgba(251,90,126,0.14)]',
      },
      glow: {
        true: '',
        false: '',
      },
      interactive: {
        true: 'cursor-pointer hover:-translate-y-0.5',
        false: '',
      },
    },
    compoundVariants: [
      {
        signal: 'cyan',
        glow: true,
        className: 'shadow-[0_0_32px_rgba(0,217,232,0.28)]',
      },
      {
        signal: 'violet',
        glow: true,
        className: 'shadow-[0_0_32px_rgba(167,139,250,0.28)]',
      },
      {
        signal: 'green',
        glow: true,
        className: 'shadow-[0_0_32px_rgba(52,211,153,0.28)]',
      },
      {
        signal: 'amber',
        glow: true,
        className: 'shadow-[0_0_32px_rgba(245,165,36,0.28)]',
      },
      {
        signal: 'rose',
        glow: true,
        className: 'shadow-[0_0_32px_rgba(251,90,126,0.28)]',
      },
    ],
    defaultVariants: {
      variant: 'default',
      signal: 'none',
      glow: false,
      interactive: false,
    },
  },
);

export type ChamferCorner = 'tl' | 'tr' | 'bl' | 'br';

export interface ChamferCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chamferOuterVariants> {
  /** Size of the 45-degree chamfer cut */
  cutSize?: 'sm' | 'md' | 'lg' | number;
  /** Which corners to cut with a 45-degree angle (default: ['tl', 'br']) */
  cutCorners?: ChamferCorner[];
  /** Optional HUD corner bolt rivets on square corners */
  cornerBolts?: boolean;
  /** Optional diagonal accent dashes in the cut corners */
  cornerNotches?: boolean;
  /** Optional top angled technical identification tab */
  hasTab?: boolean;
  /** Content for the tech tab */
  tabLabel?: React.ReactNode;
  /** Color accent of the tech tab */
  tabSignal?: 'cyan' | 'violet' | 'green' | 'amber' | 'rose';
  /** Micro serial tag on top-left (e.g. "SYS.04 // SEC") */
  tag?: React.ReactNode;
  /** Status indicator dot */
  statusDot?: 'cyan' | 'violet' | 'green' | 'amber' | 'rose';
  /** Overlay a static scanline texture */
  scanline?: boolean;
  /** Overlay faint cyber grid dot-matrix backdrop */
  gridSubstrate?: boolean;
  /** Laser shimmer animation across card on hover */
  laserSweep?: boolean;
  /** Inner container className */
  contentClassName?: string;
}

const resolveCutSize = (cutSize: ChamferCardProps['cutSize']): number => {
  if (typeof cutSize === 'number') return cutSize;
  switch (cutSize) {
    case 'sm':
      return 10;
    case 'lg':
      return 26;
    case 'md':
    default:
      return 18;
  }
};

const buildPolygonClipPath = (
  cut: number,
  corners: ChamferCorner[],
  inset = 0,
): string => {
  const hasTl = corners.includes('tl');
  const hasTr = corners.includes('tr');
  const hasBr = corners.includes('br');
  const hasBl = corners.includes('bl');

  const c = Math.max(0, cut - inset);
  const points: string[] = [];

  // Top-left
  if (hasTl) {
    points.push(`0px ${c}px`);
    points.push(`${c}px 0px`);
  } else {
    points.push('0px 0px');
  }

  // Top-right
  if (hasTr) {
    points.push(`calc(100% - ${c}px) 0px`);
    points.push(`100% ${c}px`);
  } else {
    points.push('100% 0px');
  }

  // Bottom-right
  if (hasBr) {
    points.push(`100% calc(100% - ${c}px)`);
    points.push(`calc(100% - ${c}px) 100%`);
  } else {
    points.push('100% 100%');
  }

  // Bottom-left
  if (hasBl) {
    points.push(`${c}px 100%`);
    points.push(`0px calc(100% - ${c}px)`);
  } else {
    points.push('0px 100%');
  }

  return `polygon(${points.join(', ')})`;
};

const ChamferCard = React.forwardRef<HTMLDivElement, ChamferCardProps>(
  (
    {
      className,
      variant = 'default',
      signal = 'none',
      glow = false,
      interactive = false,
      cutSize = 'md',
      cutCorners = ['tl', 'br'],
      cornerBolts = false,
      cornerNotches = true,
      hasTab = false,
      tabLabel,
      tabSignal = 'cyan',
      tag,
      statusDot,
      scanline = false,
      gridSubstrate = false,
      laserSweep = true,
      children,
      style,
      contentClassName,
      ...props
    },
    ref,
  ) => {
    const cutPx = resolveCutSize(cutSize);
    const outerClipPath = React.useMemo(
      () => buildPolygonClipPath(cutPx, cutCorners, 0),
      [cutPx, cutCorners],
    );
    const innerClipPath = React.useMemo(
      () => buildPolygonClipPath(cutPx, cutCorners, 1),
      [cutPx, cutCorners],
    );

    const tabSignalClasses: Record<string, string> = {
      cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(0,217,232,0.2)]',
      violet: 'bg-violet-500/20 text-violet-300 border-violet-500/50 shadow-[0_0_10px_rgba(167,139,250,0.2)]',
      green: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_10px_rgba(52,211,153,0.2)]',
      amber: 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_10px_rgba(245,165,36,0.2)]',
      rose: 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-[0_0_10px_rgba(251,90,126,0.2)]',
    };

    const statusDotColors: Record<string, string> = {
      cyan: 'bg-cyan-400 shadow-[0_0_8px_#00d9e8]',
      violet: 'bg-violet-400 shadow-[0_0_8px_#a78bfa]',
      green: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
      amber: 'bg-amber-400 shadow-[0_0_8px_#f5a524]',
      rose: 'bg-rose-400 shadow-[0_0_8px_#fb5a7e]',
    };

    const innerBgClasses: Record<string, string> = {
      default: 'bg-[#070a10]',
      surface: 'bg-[#0a0e16]',
      glass: 'bg-[#060912]/80 backdrop-blur-xl',
      accent: 'bg-[#060b14]',
      terminal: 'bg-[#03060a]',
      ghost: 'bg-[#070a10]/60',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'p-[1px]',
          chamferOuterVariants({ variant, signal, glow, interactive }),
          className,
        )}
        style={{
          clipPath: outerClipPath,
          ...style,
        }}
        {...props}
      >
        {/* Inner Card Body with continuous 1px hairline border along diagonal cut */}
        <div
          className={cn(
            'relative flex flex-col w-full h-full min-w-0 overflow-hidden',
            innerBgClasses[variant || 'default'],
            contentClassName,
          )}
          style={{
            clipPath: innerClipPath,
          }}
        >
          {/* Subtle Grid Substrate */}
          {gridSubstrate && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
            />
          )}

          {/* Laser sweep highlight on hover */}
          {laserSweep && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-[shimmer-sweep_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transform -skew-x-12"
            />
          )}

          {/* Top Tag or Status bar */}
          {(tag || statusDot || (hasTab && tabLabel)) && (
            <div className="flex items-center justify-between px-5 pt-3 pb-1 border-b border-white/[0.04] bg-white/[0.01]">
              <div className="flex items-center gap-2">
                {statusDot && (
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-full animate-pulse',
                      statusDotColors[statusDot] || statusDotColors.cyan,
                    )}
                  />
                )}
                {tag && (
                  <span className="text-[10px] font-mono text-fg-subtle tracking-wider uppercase">
                    {tag}
                  </span>
                )}
              </div>

              {hasTab && tabLabel && (
                <div
                  className={cn(
                    'px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase border',
                    tabSignalClasses[tabSignal] || tabSignalClasses.cyan,
                  )}
                  style={{
                    clipPath:
                      'polygon(0 0, 100% 0, calc(100% - 5px) 100%, 5px 100%)',
                  }}
                >
                  {tabLabel}
                </div>
              )}
            </div>
          )}

          {/* Chamfer Corner Notch Accents (45-degree cyber brackets) */}
          {cornerNotches && (
            <>
              {cutCorners.includes('tl') && (
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-1 pointer-events-none text-[8px] font-mono text-cyan-400/40 select-none transform -rotate-45"
                >
                  //
                </span>
              )}
              {cutCorners.includes('tr') && (
                <span
                  aria-hidden="true"
                  className="absolute top-1 right-1 pointer-events-none text-[8px] font-mono text-cyan-400/40 select-none transform rotate-45"
                >
                  //
                </span>
              )}
              {cutCorners.includes('bl') && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-1 pointer-events-none text-[8px] font-mono text-cyan-400/40 select-none transform rotate-45"
                >
                  //
                </span>
              )}
              {cutCorners.includes('br') && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 right-1 pointer-events-none text-[8px] font-mono text-cyan-400/40 select-none transform -rotate-45"
                >
                  //
                </span>
              )}
            </>
          )}

          {/* Non-cut corner hardware bolts */}
          {cornerBolts && (
            <>
              {!cutCorners.includes('tl') && (
                <span className="absolute top-2.5 left-2.5 h-1.5 w-1.5 rounded-full bg-white/20 shadow-[0_0_3px_rgba(255,255,255,0.4)] pointer-events-none z-10" />
              )}
              {!cutCorners.includes('tr') && (
                <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-white/20 shadow-[0_0_3px_rgba(255,255,255,0.4)] pointer-events-none z-10" />
              )}
              {!cutCorners.includes('bl') && (
                <span className="absolute bottom-2.5 left-2.5 h-1.5 w-1.5 rounded-full bg-white/20 shadow-[0_0_3px_rgba(255,255,255,0.4)] pointer-events-none z-10" />
              )}
              {!cutCorners.includes('br') && (
                <span className="absolute bottom-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-white/20 shadow-[0_0_3px_rgba(255,255,255,0.4)] pointer-events-none z-10" />
              )}
            </>
          )}

          {/* Scanline overlay */}
          {scanline && (
            <div
              aria-hidden="true"
              className="scanlines pointer-events-none absolute inset-0 z-10 opacity-25"
            />
          )}

          {children}
        </div>
      </div>
    );
  },
);
ChamferCard.displayName = 'ChamferCard';

/* ─────────────────────────────────────────────────────────
   ChamferCardHeader
───────────────────────────────────────────────────────── */
export interface ChamferCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

const ChamferCardHeader = React.forwardRef<HTMLDivElement, ChamferCardHeaderProps>(
  ({ className, bordered = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col space-y-1.5 p-4 sm:p-6',
        bordered && 'border-b border-white/[0.06]',
        className,
      )}
      {...props}
    />
  ),
);
ChamferCardHeader.displayName = 'ChamferCardHeader';

/* ─────────────────────────────────────────────────────────
   ChamferCardTitle
───────────────────────────────────────────────────────── */
export interface ChamferCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

const ChamferCardTitle = React.forwardRef<HTMLHeadingElement, ChamferCardTitleProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref as unknown as React.Ref<never>}
      className={cn(
        'text-base font-semibold font-mono tracking-wide text-fg flex items-center gap-2',
        className,
      )}
      {...props}
    />
  ),
);
ChamferCardTitle.displayName = 'ChamferCardTitle';

/* ─────────────────────────────────────────────────────────
   ChamferCardDescription
───────────────────────────────────────────────────────── */
const ChamferCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xs text-fg-muted leading-relaxed font-sans', className)}
    {...props}
  />
));
ChamferCardDescription.displayName = 'ChamferCardDescription';

/* ─────────────────────────────────────────────────────────
   ChamferCardContent
───────────────────────────────────────────────────────── */
const ChamferCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-4 sm:p-6 flex-1 min-w-0', className)}
    {...props}
  />
));
ChamferCardContent.displayName = 'ChamferCardContent';

/* ─────────────────────────────────────────────────────────
   ChamferCardFooter
───────────────────────────────────────────────────────── */
export interface ChamferCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

const ChamferCardFooter = React.forwardRef<HTMLDivElement, ChamferCardFooterProps>(
  ({ className, bordered = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-between p-3.5 sm:p-5',
        bordered && 'border-t border-white/[0.06] bg-surface-2/30',
        className,
      )}
      {...props}
    />
  ),
);
ChamferCardFooter.displayName = 'ChamferCardFooter';

const chamferCardVariants = chamferOuterVariants;

export {
  ChamferCard,
  ChamferCardHeader,
  ChamferCardTitle,
  ChamferCardDescription,
  ChamferCardContent,
  ChamferCardFooter,
  chamferOuterVariants,
  chamferCardVariants,
};
