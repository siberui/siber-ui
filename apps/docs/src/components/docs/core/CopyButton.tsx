'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@siberui/react';

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'inline-flex h-6 w-6 items-center justify-center rounded-md border transition-colors',
        copied
          ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
          : 'border-border-hairline bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-100',
        className
      )}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
    </button>
  );
}
