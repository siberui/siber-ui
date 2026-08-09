import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * CornerFrame — four small corner marks that read as "technical instrument",
 * without clipping or altering the shape of the content underneath.
 * Used sparingly to mark a surface as active/selected/instrumented.
 */
const cornerMarkerVariants = cva('', {
  variants: {
    signal: {
      cyan: '[--sb-signal-color:var(--sb-signal-cyan)]',
      violet: '[--sb-signal-color:var(--sb-signal-violet)]',
      green: '[--sb-signal-color:var(--sb-signal-green)]',
      amber: '[--sb-signal-color:var(--sb-signal-amber)]',
      rose: '[--sb-signal-color:var(--sb-signal-rose)]',
      neutral: '[--sb-signal-color:rgba(255,255,255,0.3)]',
    },
    size: {
      sm: '',
      md: '',
    },
  },
  defaultVariants: {
    signal: 'cyan',
    size: 'md',
  },
});

export interface CornerFrameProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cornerMarkerVariants> {
  /** Render marks only on specific corners. Defaults to all four. */
  corners?: Array<'tl' | 'tr' | 'bl' | 'br'>;
}

const CornerFrame = React.forwardRef<HTMLDivElement, CornerFrameProps>(
  (
    {
      className,
      signal,
      size = 'md',
      corners = ['tl', 'tr', 'bl', 'br'],
      children,
      ...props
    },
    ref,
  ) => {
    const markSize = size === 'sm' ? 8 : 10;
    return (
      <div
        ref={ref}
        className={cn(
          'relative',
          cornerMarkerVariants({ signal, size }),
          className,
        )}
        {...props}
      >
        {corners.includes('tl') && (
          <span
            className="corner-mark top-0 left-0 border-l border-t"
            style={{ width: markSize, height: markSize }}
          />
        )}
        {corners.includes('tr') && (
          <span
            className="corner-mark top-0 right-0 border-r border-t"
            style={{ width: markSize, height: markSize }}
          />
        )}
        {corners.includes('bl') && (
          <span
            className="corner-mark bottom-0 left-0 border-l border-b"
            style={{ width: markSize, height: markSize }}
          />
        )}
        {corners.includes('br') && (
          <span
            className="corner-mark bottom-0 right-0 border-r border-b"
            style={{ width: markSize, height: markSize }}
          />
        )}
        {children}
      </div>
    );
  },
);
CornerFrame.displayName = 'CornerFrame';

/** A single corner mark, for composing custom layouts. */
export interface CornerMarkerProps extends React.HTMLAttributes<HTMLSpanElement> {
  position: 'tl' | 'tr' | 'bl' | 'br';
  signal?: VariantProps<typeof cornerMarkerVariants>['signal'];
  size?: number;
}

const positionClasses: Record<CornerMarkerProps['position'], string> = {
  tl: 'top-0 left-0 border-l border-t',
  tr: 'top-0 right-0 border-r border-t',
  bl: 'bottom-0 left-0 border-l border-b',
  br: 'bottom-0 right-0 border-r border-b',
};

const CornerMarker = React.forwardRef<HTMLSpanElement, CornerMarkerProps>(
  (
    { className, position, signal = 'cyan', size = 10, style, ...props },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        'corner-mark',
        positionClasses[position],
        cornerMarkerVariants({ signal }),
        className,
      )}
      style={{ width: size, height: size, ...style }}
      {...props}
    />
  ),
);
CornerMarker.displayName = 'CornerMarker';

export { CornerFrame, CornerMarker, cornerMarkerVariants };
