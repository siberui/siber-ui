'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const arcGaugeVariants = cva(
  'relative flex flex-col items-center justify-center font-mono select-none',
  {
    variants: {
      color: {
        cyan: 'text-cyan-400',
        violet: 'text-violet-400',
        emerald: 'text-emerald-400',
        green: 'text-emerald-400',
        amber: 'text-amber-400',
        rose: 'text-rose-400',
        auto: '',
      },
      size: {
        sm: 'w-28',
        md: 'w-40 sm:w-44',
        lg: 'w-52 sm:w-56',
        xl: 'w-64 sm:w-72',
      },
    },
    defaultVariants: {
      color: 'cyan',
      size: 'md',
    },
  },
);

export type ArcGaugeAngle = 180 | 240 | 270;

export interface ArcGaugeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof arcGaugeVariants> {
  /** Current measured value */
  value: number;
  /** Minimum value (default: 0) */
  min?: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Total arc sweep angle in degrees (180, 240, or 270) */
  angle?: ArcGaugeAngle;
  /** Primary label / description displayed cleanly below or with the gauge */
  label?: string;
  /** Measurement unit symbol (e.g. '%', 'GHz', 'MB/s', 'ms') */
  unit?: string;
  /** Whether to render radial tick marks */
  showTicks?: boolean;
  /** Number of tick marks to render */
  tickCount?: number;
  /** Whether to show minimum and maximum label values at arc extremities */
  showMinMax?: boolean;
  /** Whether to display the central numeric value */
  showValue?: boolean;
  /** Enable neon glow aura around the active arc */
  glow?: boolean;
  /** Thickness of the gauge arc in SVG units */
  strokeWidth?: number;
}

export const ArcGauge = React.forwardRef<HTMLDivElement, ArcGaugeProps>(
  (
    {
      className,
      value = 0,
      min = 0,
      max = 100,
      angle = 240,
      size = 'md',
      color = 'cyan',
      label,
      unit,
      showTicks = true,
      tickCount = 21,
      showMinMax = true,
      showValue = true,
      glow = true,
      strokeWidth = 8,
      ...props
    },
    ref,
  ) => {
    const clampedValue = Math.min(Math.max(value, min), max);
    const percentage = max > min ? (clampedValue - min) / (max - min) : 0;

    // Automatic color resolver
    const resolvedColorName = React.useMemo(() => {
      if (color !== 'auto') return color;
      if (percentage < 0.6) return 'emerald';
      if (percentage < 0.85) return 'amber';
      return 'rose';
    }, [color, percentage]);

    const colorConfig = {
      cyan: {
        stroke: '#00d9e8',
        glow: 'rgba(0, 217, 232, 0.45)',
        text: 'text-cyan-400',
      },
      violet: {
        stroke: '#a78bfa',
        glow: 'rgba(167, 139, 250, 0.45)',
        text: 'text-violet-400',
      },
      emerald: {
        stroke: '#34d399',
        glow: 'rgba(52, 211, 153, 0.45)',
        text: 'text-emerald-400',
      },
      green: {
        stroke: '#34d399',
        glow: 'rgba(52, 211, 153, 0.45)',
        text: 'text-emerald-400',
      },
      amber: {
        stroke: '#f5a524',
        glow: 'rgba(245, 165, 36, 0.45)',
        text: 'text-amber-400',
      },
      rose: {
        stroke: '#fb5a7e',
        glow: 'rgba(251, 90, 126, 0.45)',
        text: 'text-rose-400',
      },
      auto: {
        stroke: '#00d9e8',
        glow: 'rgba(0, 217, 232, 0.45)',
        text: 'text-cyan-400',
      },
    };

    const activeColor =
      colorConfig[resolvedColorName as keyof typeof colorConfig] ||
      colorConfig.cyan;

    // SVG geometry calculations
    const svgSize = 200;
    const center = svgSize / 2;
    const radius = 76;

    // Arc angles in degrees: 0° is right (3 o'clock), 90° is bottom, 180° is left, 270° is top.
    const startAngleDeg = 90 + (360 - angle) / 2;
    const endAngleDeg = startAngleDeg + angle;

    const degToRad = (deg: number) => (deg * Math.PI) / 180;

    const describeArc = (
      startAngle: number,
      endAngle: number,
      r: number,
    ): string => {
      const start = {
        x: center + r * Math.cos(degToRad(startAngle)),
        y: center + r * Math.sin(degToRad(startAngle)),
      };
      const end = {
        x: center + r * Math.cos(degToRad(endAngle)),
        y: center + r * Math.sin(degToRad(endAngle)),
      };
      const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

      return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
    };

    // Background track arc path
    const backgroundArcPath = describeArc(startAngleDeg, endAngleDeg, radius);

    // Active arc calculation
    const totalArcLength = (angle / 360) * 2 * Math.PI * radius;
    const activeStrokeDashoffset =
      totalArcLength * (1 - Math.max(0.001, percentage));

    // Generate tick marks
    const ticks = React.useMemo(() => {
      if (!showTicks || tickCount <= 1) return [];
      const result = [];
      const tickStep = angle / (tickCount - 1);

      for (let i = 0; i < tickCount; i++) {
        const tickAngle = startAngleDeg + i * tickStep;
        const isMajor = i === 0 || i === tickCount - 1 || i % 4 === 0;
        const tickLen = isMajor ? 6 : 3.5;
        const innerR = radius - strokeWidth / 2 - 4 - tickLen;
        const outerR = radius - strokeWidth / 2 - 4;

        const x1 = center + innerR * Math.cos(degToRad(tickAngle));
        const y1 = center + innerR * Math.sin(degToRad(tickAngle));
        const x2 = center + outerR * Math.cos(degToRad(tickAngle));
        const y2 = center + outerR * Math.sin(degToRad(tickAngle));

        const tickFraction = i / (tickCount - 1);
        const isActive = tickFraction <= percentage;

        result.push({
          x1,
          y1,
          x2,
          y2,
          isMajor,
          isActive,
          key: i,
        });
      }
      return result;
    }, [showTicks, tickCount, angle, startAngleDeg, radius, strokeWidth, percentage]);

    return (
      <div
        ref={ref}
        className={cn(
          arcGaugeVariants({ color, size }),
          'relative flex flex-col items-center',
          className,
        )}
        role="meter"
        aria-valuenow={clampedValue}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={label || 'Telemetry Gauge'}
        {...props}
      >
        {/* The Circular Dial Visual Container */}
        <div className="relative w-full aspect-square flex items-center justify-center">
          <svg
            className="w-full h-full overflow-visible"
            viewBox={`0 0 ${svgSize} ${svgSize}`}
          >
            <defs>
              {glow && (
                <filter id={`arc-glow-${resolvedColorName}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              )}
            </defs>

            {/* Background Track */}
            <path
              d={backgroundArcPath}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />

            {/* Radial Calibration Ticks */}
            {ticks.map((t) => (
              <line
                key={t.key}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                stroke={t.isActive ? activeColor.stroke : 'rgba(255, 255, 255, 0.18)'}
                strokeWidth={t.isMajor ? 1.5 : 1}
                strokeOpacity={t.isActive ? 0.9 : 0.4}
              />
            ))}

            {/* Active Colored Arc */}
            <path
              d={backgroundArcPath}
              fill="none"
              stroke={activeColor.stroke}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={totalArcLength}
              strokeDashoffset={activeStrokeDashoffset}
              filter={glow ? `url(#arc-glow-${resolvedColorName})` : undefined}
              className="transition-all duration-500 ease-out"
            />

            {/* Central Precision Pivot Dot */}
            <circle
              cx={center}
              cy={center}
              r="2.5"
              fill={activeColor.stroke}
              opacity="0.6"
            />
          </svg>

          {/* Central Telemetry Value Display (Strictly Centered Inside Circle) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            {showValue && (
              <div className="flex items-baseline gap-0.5 sm:gap-1">
                <span
                  className={cn(
                    'font-bold tracking-tight leading-none',
                    activeColor.text,
                    size === 'sm' && 'text-xl sm:text-2xl',
                    size === 'md' && 'text-2xl sm:text-3xl',
                    size === 'lg' && 'text-3xl sm:text-4xl',
                    size === 'xl' && 'text-4xl sm:text-5xl',
                  )}
                >
                  {Math.round(clampedValue)}
                </span>
                {unit && (
                  <span
                    className={cn(
                      'text-fg-subtle uppercase font-mono',
                      size === 'sm' && 'text-[9px]',
                      size === 'md' && 'text-[10px] sm:text-xs',
                      size === 'lg' && 'text-xs sm:text-sm',
                      size === 'xl' && 'text-sm sm:text-base',
                    )}
                  >
                    {unit}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Min / Max Extremities Labels */}
        {showMinMax && (
          <div className="w-full flex justify-between px-2 text-[8px] sm:text-[9px] font-mono text-slate-500 -mt-3 sm:-mt-4 pointer-events-none">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        )}

        {/* Primary Description Label (Cleanly Positioned Under Dial Without Overlapping Lines) */}
        {label && (
          <div className="w-full mt-1.5 flex flex-col items-center justify-center text-center px-1">
            <span
              className={cn(
                'font-mono uppercase tracking-wider font-semibold text-slate-300 truncate max-w-full',
                size === 'sm' && 'text-[8.5px]',
                size === 'md' && 'text-[10px] sm:text-[11px]',
                size === 'lg' && 'text-xs',
                size === 'xl' && 'text-sm',
              )}
              title={label}
            >
              {label}
            </span>
          </div>
        )}
      </div>
    );
  },
);

ArcGauge.displayName = 'ArcGauge';
