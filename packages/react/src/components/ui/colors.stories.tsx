'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { colors } from './colors';

// ─────────────────────────────────────────────────────────────────────────────
// Helper: single swatch with copy-on-click
// ─────────────────────────────────────────────────────────────────────────────
function Swatch({
  name,
  value,
  large,
  isGlow,
}: {
  name: string;
  value: string;
  large?: boolean;
  isGlow?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  // Determine if the swatch color is "light" to pick text contrast
  const isLight =
    value.startsWith('#') &&
    (() => {
      const hex = value.replace('#', '');
      if (hex.length !== 6) return false;
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return r * 0.299 + g * 0.587 + b * 0.114 > 160;
    })();

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col gap-2 text-left transition-transform duration-200 hover:scale-105 focus:outline-none cursor-pointer"
      title={`Click to copy: ${value}`}
    >
      <div
        className="relative rounded-xl overflow-hidden transition-shadow duration-300"
        style={{
          width: large ? 120 : 80,
          height: large ? 80 : 56,
          ...(isGlow
            ? { background: '#0d121d', boxShadow: value }
            : { background: value }),
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Copied overlay */}
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
            <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-wider">
              COPIED
            </span>
          </div>
        )}
        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30 backdrop-blur-[2px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isLight ? '#06090e' : '#fff'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] font-mono text-slate-200 tracking-wide leading-none">
          {name}
        </span>
        <span className="text-[10px] font-mono text-slate-500 leading-none">
          {value.length > 40 ? value.slice(0, 38) + '…' : value}
        </span>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: Section header
// ─────────────────────────────────────────────────────────────────────────────
function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-5 mt-10 first:mt-0">
      <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 mb-1">
        // {title}
      </h3>
      <p className="text-xs text-slate-400 font-sans">{description}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// The main Colors Palette story
// ─────────────────────────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Foundation/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Palette: StoryObj = {
  render: () => (
    <div className="max-w-4xl space-y-2">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-xl font-sans font-semibold text-white mb-2 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Siber-UI Color System
        </h2>
        <p className="text-sm text-slate-400 font-sans max-w-lg">
          The cyberpunk-minimalist color palette that powers the entire design system.
          Click any swatch to copy its value.
        </p>
      </div>

      {/* ── Backgrounds ── */}
      <SectionHeader
        title="Background"
        description="Surface layers from deepest black to elevated panels."
      />
      <div className="flex flex-wrap gap-4">
        {Object.entries(colors.background).map(([key, val]) => (
          <Swatch key={key} name={key} value={val} large />
        ))}
      </div>

      {/* ── Neon Accents ── */}
      <SectionHeader
        title="Neon Accents"
        description="Signature cyberpunk glow colors. Primary interaction & highlight tones."
      />
      <div className="flex flex-wrap gap-4">
        {Object.entries(colors.neon).map(([key, val]) => (
          <Swatch key={key} name={key} value={val} large />
        ))}
      </div>

      {/* ── Text ── */}
      <SectionHeader
        title="Text"
        description="Typographic color hierarchy — from high-emphasis headings to disabled labels."
      />
      <div className="flex flex-wrap gap-4">
        {Object.entries(colors.text).map(([key, val]) => (
          <Swatch key={key} name={key} value={val} large />
        ))}
      </div>

      {/* ── Borders ── */}
      <SectionHeader
        title="Borders"
        description="Subtle edge definitions for panels, inputs, and dividers."
      />
      <div className="flex flex-wrap gap-4">
        {Object.entries(colors.border).map(([key, val]) => (
          <Swatch key={key} name={key} value={val} />
        ))}
      </div>

      {/* ── Status ── */}
      <SectionHeader
        title="Status / Semantic"
        description="Feedback colors for success, warning, error, and informational states."
      />
      <div className="flex flex-wrap gap-4">
        {Object.entries(colors.status).map(([key, val]) => (
          <Swatch key={key} name={key} value={val} />
        ))}
      </div>

      {/* ── Glassmorphism ── */}
      <SectionHeader
        title="Glassmorphism"
        description="Semi-transparent layers for frosted glass surfaces."
      />
      <div className="flex flex-wrap gap-4">
        {Object.entries(colors.glass).map(([key, val]) => (
          <Swatch key={key} name={key} value={val} />
        ))}
      </div>

      {/* ── Glow Shadows ── */}
      <SectionHeader
        title="Glow Shadows"
        description="Ambient aura box-shadows for neon-lit elements."
      />
      <div className="flex flex-wrap gap-5">
        {Object.entries(colors.glow).map(([key, val]) => (
          <Swatch key={key} name={key} value={val} large isGlow />
        ))}
      </div>

      {/* ── Usage Guide ── */}
      <div className="mt-12 p-5 rounded-xl border border-cyan-500/20 bg-cyan-950/10">
        <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
          // USAGE
        </h4>
        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-mono text-slate-400 mb-1">JavaScript / TypeScript</p>
            <pre className="text-xs font-mono text-cyan-300/80 bg-black/30 rounded-lg p-3 overflow-x-auto">
{`import { colors } from 'siber-ui';

// Direct usage
<div style={{ background: colors.background.surface }}>
  <p style={{ color: colors.text.primary }}>Hello World</p>
</div>

// Destructured
const { neon, background } = colors;
<button style={{ borderColor: neon.cyan, background: background.elevated }}>
  Connect
</button>`}
            </pre>
          </div>
          <div>
            <p className="text-[11px] font-mono text-slate-400 mb-1">CSS Variables</p>
            <pre className="text-xs font-mono text-purple-300/80 bg-black/30 rounded-lg p-3 overflow-x-auto">
{`/* Available in globals.css */
.my-card {
  background: var(--cyber-surface);
  border-color: var(--neon-cyan);
  box-shadow: var(--glow-cyan);
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  ),
};
