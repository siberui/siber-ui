/**
 * Siber-UI Color Palette
 *
 * A structured, semantic color system for the SiberUI design language.
 * Organized into: Surfaces, Signal colors, Foreground, Borders, Semantic
 * roles, and Glow tokens.
 *
 * Signal colors carry meaning, not decoration:
 *   cyan = primary interaction · green = operational · amber = warning
 *   rose = critical/destructive · violet = special/system
 *
 * Usage:
 *   import { colors } from '@siberui/react';
 *   <div style={{ background: colors.surface.level1 }}>...</div>
 *
 * Or reference the CSS variables directly:
 *   var(--sb-surface-1)
 */

// ─────────────────────────────────────────────────────────────────────────────
// Surface system — layered elevation, near-black rather than pure black
// ─────────────────────────────────────────────────────────────────────────────
export const surface = {
  /** Level 0 — application background */
  background: '#05070a',
  /** Level 1 — default surface (cards, panels) */
  level1: '#080b10',
  /** Level 2 — elevated surface */
  level2: '#0b1017',
  /** Level 3 — overlay (popover, dropdown) */
  level3: '#101620',
  /** Level 4 — modal / command surface */
  level4: '#141a26',
} as const;

/** @deprecated use `surface` — kept for backwards compatibility */
export const background = {
  base: surface.background,
  surface: surface.level1,
  elevated: surface.level2,
  hover: surface.level3,
  muted: surface.level4,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Signal colors — the signature SiberUI accents, each with semantic meaning
// ─────────────────────────────────────────────────────────────────────────────
export const signal = {
  /** Primary interaction */
  cyan: '#00d9e8',
  /** Special / system state */
  violet: '#a78bfa',
  /** Operational / success state */
  green: '#34d399',
  /** Warning state */
  amber: '#f5a524',
  /** Critical / destructive state */
  rose: '#fb5a7e',
} as const;

/** @deprecated use `signal` — kept for backwards compatibility */
export const neon = {
  cyan: signal.cyan,
  purple: signal.violet,
  green: signal.green,
  pink: signal.rose,
  amber: signal.amber,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Semantic roles — map signal colors to intent
// ─────────────────────────────────────────────────────────────────────────────
export const semantic = {
  primary: signal.cyan,
  secondary: signal.violet,
  success: signal.green,
  warning: signal.amber,
  danger: signal.rose,
  info: signal.cyan,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Text
// ─────────────────────────────────────────────────────────────────────────────
export const text = {
  /** Primary text — brightest, for headings */
  primary: '#eceef2',
  /** Secondary text — body copy */
  secondary: 'rgba(236, 238, 242, 0.64)',
  /** Muted text — labels, helpers */
  muted: 'rgba(236, 238, 242, 0.38)',
  /** Disabled text */
  disabled: 'rgba(236, 238, 242, 0.24)',
  /** Inverted text on light backgrounds */
  inverted: surface.background,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Borders
// ─────────────────────────────────────────────────────────────────────────────
export const border = {
  /** Default subtle border */
  default: 'rgba(255, 255, 255, 0.08)',
  /** Strong border for emphasis */
  strong: 'rgba(255, 255, 255, 0.16)',
  /** Neon accent border */
  accent: 'rgba(0, 217, 232, 0.30)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Status / Semantic
// ─────────────────────────────────────────────────────────────────────────────
export const status = {
  success: signal.green,
  successMuted: 'rgba(52, 211, 153, 0.15)',
  warning: signal.amber,
  warningMuted: 'rgba(245, 165, 36, 0.15)',
  error: signal.rose,
  errorMuted: 'rgba(251, 90, 126, 0.15)',
  info: signal.cyan,
  infoMuted: 'rgba(0, 217, 232, 0.15)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Glassmorphism / Transparency — reserved for overlay/modal surfaces
// ─────────────────────────────────────────────────────────────────────────────
export const glass = {
  /** Standard glass surface */
  surface: 'rgba(11, 16, 23, 0.72)',
  /** Light glass */
  light: 'rgba(255, 255, 255, 0.03)',
  /** Medium glass */
  medium: 'rgba(255, 255, 255, 0.06)',
  /** Strong glass */
  strong: 'rgba(255, 255, 255, 0.10)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Glow Shadows (box-shadow values) — apply deliberately, not by default
// ─────────────────────────────────────────────────────────────────────────────
export const glow = {
  cyan: '0 0 0 1px rgba(0, 217, 232, 0.15), 0 0 16px rgba(0, 217, 232, 0.12)',
  purple:
    '0 0 0 1px rgba(167, 139, 250, 0.15), 0 0 16px rgba(167, 139, 250, 0.12)',
  green:
    '0 0 0 1px rgba(52, 211, 153, 0.15), 0 0 16px rgba(52, 211, 153, 0.12)',
  rose: '0 0 0 1px rgba(251, 90, 126, 0.15), 0 0 16px rgba(251, 90, 126, 0.12)',
  cyanHover:
    '0 0 0 1px rgba(0, 217, 232, 0.25), 0 0 22px rgba(0, 217, 232, 0.16)',
  purpleHover:
    '0 0 0 1px rgba(167, 139, 250, 0.25), 0 0 22px rgba(167, 139, 250, 0.16)',
  greenHover:
    '0 0 0 1px rgba(52, 211, 153, 0.25), 0 0 22px rgba(52, 211, 153, 0.16)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Motion tokens
// ─────────────────────────────────────────────────────────────────────────────
export const motion = {
  duration: {
    instant: '100ms',
    fast: '150ms',
    normal: '220ms',
    slow: '400ms',
  },
  easing: {
    out: 'cubic-bezier(0.16, 1, 0.3, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Color Palette Scales (50 - 950)
// ─────────────────────────────────────────────────────────────────────────────
export type ColorShadeScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export const cyan: ColorShadeScale = {
  50: '#ecfeff',
  100: '#cffaff',
  200: '#a5f3fc',
  300: '#67e8f9',
  400: '#22d3ee',
  500: '#00d9e8',
  600: '#00b4c4',
  700: '#008f9d',
  800: '#086f7a',
  900: '#0e5a63',
  950: '#03373d',
} as const;

export const violet: ColorShadeScale = {
  50: '#f5f3ff',
  100: '#ede9fe',
  200: '#ddd6fe',
  300: '#c4b5fd',
  400: '#a78bfa',
  500: '#8b5cf6',
  600: '#7c3aed',
  700: '#6d28d9',
  800: '#5b21b6',
  900: '#4c1d95',
  950: '#2e1065',
} as const;

export const green: ColorShadeScale = {
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',
  600: '#059669',
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
  950: '#022c22',
} as const;

export const amber: ColorShadeScale = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f5a524',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  950: '#451a03',
} as const;

export const rose: ColorShadeScale = {
  50: '#fff1f2',
  100: '#ffe4e6',
  200: '#fecdd3',
  300: '#fda4af',
  400: '#fb7185',
  500: '#fb5a7e',
  600: '#e11d48',
  700: '#be123c',
  800: '#9f1239',
  900: '#881337',
  950: '#4c0519',
} as const;

export const red: ColorShadeScale = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
} as const;

export const blue: ColorShadeScale = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
} as const;

export const slate: ColorShadeScale = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#05070a',
} as const;

export const zinc: ColorShadeScale = {
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
  950: '#09090b',
} as const;

export const emerald: ColorShadeScale = {
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',
  600: '#059669',
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
  950: '#022c22',
} as const;

export const colorPalette = {
  cyan,
  violet,
  green,
  amber,
  rose,
  red,
  blue,
  slate,
  zinc,
  emerald,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Combined export
// ─────────────────────────────────────────────────────────────────────────────
export const colors = {
  surface,
  background,
  signal,
  neon,
  semantic,
  text,
  border,
  status,
  glass,
  glow,
  motion,
  palette: colorPalette,
  cyan,
  violet,
  green,
  amber,
  rose,
  red,
  blue,
  slate,
  zinc,
  emerald,
} as const;

export type SiberColors = typeof colors;
