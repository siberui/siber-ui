/**
 * Siber-UI Color Palette
 *
 * A structured, semantic color system for the Siber-Minimalist Cyberpunk design language.
 * Organized into: Backgrounds, Neon Accents, Text, Borders, Status, and Semantic layers.
 *
 * Usage:
 *   import { colors } from 'siber-ui';
 *   <div style={{ background: colors.background.base }}>...</div>
 *
 * Or reference the CSS variables directly:
 *   var(--siber-bg-base)
 */

// ─────────────────────────────────────────────────────────────────────────────
// Core Background / Surface
// ─────────────────────────────────────────────────────────────────────────────
export const background = {
  /** Deepest black — page root */
  base: '#06090e',
  /** Primary dark surface — cards, panels */
  surface: '#0d121d',
  /** Elevated surface — overlays, modals */
  elevated: '#141c2c',
  /** Hover state on surface */
  hover: '#1e293b',
  /** Subtle raised layer */
  muted: '#253247',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Neon Accents — the signature cyberpunk glow colors
// ─────────────────────────────────────────────────────────────────────────────
export const neon = {
  /** Primary neon — cyan (default accent) */
  cyan: '#00f0ff',
  /** Secondary neon — purple */
  purple: '#a855f7',
  /** Tertiary neon — green */
  green: '#39ff14',
  /** Danger / alert neon — pink */
  pink: '#ff007f',
  /** Warning neon — amber */
  amber: '#ffb800',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Text
// ─────────────────────────────────────────────────────────────────────────────
export const text = {
  /** Primary text — brightest, for headings */
  primary: '#f1f5f9',
  /** Secondary text — body copy */
  secondary: '#cbd5e1',
  /** Muted text — labels, helpers */
  muted: '#64748b',
  /** Disabled text */
  disabled: '#475569',
  /** Inverted text on light backgrounds */
  inverted: '#06090e',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Borders
// ─────────────────────────────────────────────────────────────────────────────
export const border = {
  /** Default subtle border */
  default: 'rgba(255, 255, 255, 0.08)',
  /** Slightly more visible border */
  muted: 'rgba(255, 255, 255, 0.12)',
  /** Strong border for emphasis */
  strong: 'rgba(255, 255, 255, 0.20)',
  /** Neon accent border */
  accent: 'rgba(0, 240, 255, 0.30)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Status / Semantic
// ─────────────────────────────────────────────────────────────────────────────
export const status = {
  success: '#39ff14',
  successMuted: 'rgba(57, 255, 20, 0.15)',
  warning: '#ffb800',
  warningMuted: 'rgba(255, 184, 0, 0.15)',
  error: '#f43f5e',
  errorMuted: 'rgba(244, 63, 94, 0.15)',
  info: '#00f0ff',
  infoMuted: 'rgba(0, 240, 255, 0.15)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Glassmorphism / Transparency
// ─────────────────────────────────────────────────────────────────────────────
export const glass = {
  /** Standard glass surface */
  surface: 'rgba(13, 18, 29, 0.70)',
  /** Light glass */
  light: 'rgba(255, 255, 255, 0.03)',
  /** Medium glass */
  medium: 'rgba(255, 255, 255, 0.06)',
  /** Strong glass */
  strong: 'rgba(255, 255, 255, 0.10)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Glow Shadows (box-shadow values)
// ─────────────────────────────────────────────────────────────────────────────
export const glow = {
  cyan: '0 0 8px rgba(0, 240, 255, 0.12)',
  purple: '0 0 8px rgba(168, 85, 247, 0.12)',
  green: '0 0 8px rgba(57, 255, 20, 0.12)',
  rose: '0 0 8px rgba(244, 63, 94, 0.12)',
  cyanHover: '0 0 12px rgba(0, 240, 255, 0.20)',
  purpleHover: '0 0 12px rgba(168, 85, 247, 0.20)',
  greenHover: '0 0 12px rgba(57, 255, 20, 0.20)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Combined export
// ─────────────────────────────────────────────────────────────────────────────
export const colors = {
  background,
  neon,
  text,
  border,
  status,
  glass,
  glow,
} as const;

export type SiberColors = typeof colors;
