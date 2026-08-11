'use client';

import React, { useState } from 'react';
import { colorPalette, ColorShadeScale } from '@siberui/react';
import { Check, Copy } from 'lucide-react';

// WCAG 2.2 Relative Luminance and Contrast Ratio Helper against Dark Surface #05070a
function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(hex1: string, hex2: string = '#05070a'): number {
  try {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    const l1 = getLuminance(...rgb1);
    const l2 = getLuminance(...rgb2);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  } catch {
    return 1;
  }
}

function getWcagBadge(ratio: number) {
  if (ratio >= 7) return { label: 'AAA', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' };
  if (ratio >= 4.5) return { label: 'AA', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40' };
  if (ratio >= 3) return { label: 'AA Large', color: 'text-amber-400 border-amber-500/30 bg-amber-950/40' };
  return { label: 'UI Element', color: 'text-slate-400 border-white/10 bg-white/5' };
}

type PaletteName = keyof typeof colorPalette;
type CopyFormat = 'import' | 'hex' | 'var';

export function ColorPaletteBrowser() {
  const [selectedPalette, setSelectedPalette] = useState<PaletteName>('cyan');
  const [copyFormat, setCopyFormat] = useState<CopyFormat>('import');
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = (colorName: string, shadeKey: string, hexValue: string) => {
    let textToCopy = '';
    if (copyFormat === 'import') {
      textToCopy = `${colorName}[${shadeKey}]`;
    } else if (copyFormat === 'hex') {
      textToCopy = hexValue;
    } else {
      textToCopy = `var(--sb-${colorName}-${shadeKey})`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedValue(textToCopy);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
  const currentScale = colorPalette[selectedPalette] as ColorShadeScale;

  return (
    <div className="relative">
      {/* Toast Notification */}
      {copiedValue && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-[#080b10] px-4 py-3 text-sm text-cyan-300 shadow-[0_0_24px_rgba(0,217,232,0.25)] transition-all">
          <Check className="h-4 w-4 text-emerald-400" />
          <span>Copied <strong className="font-mono text-white">{copiedValue}</strong> to clipboard!</span>
        </div>
      )}

      {/* Controls Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#080b10] p-4">
        {/* Palette Switcher */}
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(colorPalette) as PaletteName[]).map((name) => (
            <button
              key={name}
              onClick={() => setSelectedPalette(name)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium font-mono capitalize transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                selectedPalette === name
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,217,232,0.15)]'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-transparent'
              }`}
              aria-label={`Select ${name} color palette`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Copy Format Switcher */}
        <div className="flex items-center gap-2 rounded-lg bg-black/40 p-1 border border-border-hairline">
          <span className="text-[11px] font-mono text-slate-500 px-2">Copy Format:</span>
          {(['import', 'hex', 'var'] as CopyFormat[]).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setCopyFormat(fmt)}
              className={`rounded px-2.5 py-1 text-[11px] font-mono uppercase transition-colors ${
                copyFormat === fmt
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label={`Set copy format to ${fmt}`}
            >
              {fmt === 'import' ? 'Obj (red[500])' : fmt === 'hex' ? 'HEX (#...)' : 'CSS var'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Shades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {shades.map((shadeKey) => {
          const hexValue = currentScale[shadeKey];
          const ratio = getContrastRatio(hexValue, '#05070a');
          const wcag = getWcagBadge(ratio);

          return (
            <button
              key={shadeKey}
              onClick={() => handleCopy(selectedPalette, shadeKey.toString(), hexValue)}
              className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#080b10] p-4 text-left transition-all hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,217,232,0.15)] focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={`Copy ${selectedPalette}[${shadeKey}] ${hexValue}`}
            >
              {/* Color Swatch Preview Header */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className="h-10 w-12 rounded-lg border border-white/20 shadow-sm transition-transform group-hover:scale-105"
                  style={{ backgroundColor: hexValue }}
                />
                <span className={`rounded-md border px-2 py-0.5 text-[10px] font-mono font-semibold ${wcag.color}`}>
                  {ratio.toFixed(1)}:1 · {wcag.label}
                </span>
              </div>

              {/* Details */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-slate-100 capitalize">
                    {selectedPalette}[{shadeKey}]
                  </span>
                  <Copy className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-cyan-400" />
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-xs text-slate-400">{hexValue}</span>
                  {shadeKey === 500 && (
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 rounded">
                      Base 500
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
