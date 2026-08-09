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
} as const;

export type SiberColors = typeof colors;
