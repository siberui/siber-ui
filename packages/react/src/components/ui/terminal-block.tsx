'use client';

import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '../../utils/cn';
import { StatusDot, type StatusState } from './status';

/**
 * Terminal system — one of SiberUI's signature components. Composable parts:
 * Terminal (root) > TerminalHeader > TerminalOutput > TerminalCommand/TerminalPrompt.
 * `TerminalBlock` remains as a single-prop convenience wrapper for simple code snippets.
 */

/* ─────────────────────────────────────────────────────────
   Terminal — root surface
───────────────────────────────────────────────────────── */
export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Overlay a static scanline texture across the whole terminal. */
  scanline?: boolean;
}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({ className, scanline = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-lg border border-border-default bg-surface-1 font-mono text-sm shadow-[0_8px_24px_rgba(0,0,0,0.28)]',
        className,
      )}
      {...props}
    >
      {children}
      {scanline && (
        <div
          aria-hidden="true"
          className="scanlines pointer-events-none absolute inset-0"
        />
      )}
    </div>
  ),
);
Terminal.displayName = 'Terminal';

/* ─────────────────────────────────────────────────────────
   TerminalHeader — window chrome, title, status, actions
───────────────────────────────────────────────────────── */
export interface TerminalHeaderProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> {
  title?: React.ReactNode;
  state?: StatusState;
  actions?: React.ReactNode;
}

const TerminalHeader = React.forwardRef<HTMLDivElement, TerminalHeaderProps>(
  ({ className, title, state, actions, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-between border-b border-border-default bg-surface-2/60 px-4 py-2.5',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-rose/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
        </div>
        {title && (
          <span className="text-caption text-fg-subtle normal-case tracking-normal">
            {title}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        {state && (
          <StatusDot
            state={state}
            size="sm"
          />
        )}
        {actions}
      </div>
    </div>
  ),
);
TerminalHeader.displayName = 'TerminalHeader';

/* ─────────────────────────────────────────────────────────
   TerminalPrompt — a single interactive prompt line, with blinking caret
───────────────────────────────────────────────────────── */
export interface TerminalPromptProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: React.ReactNode;
  showCaret?: boolean;
}

const TerminalPrompt = React.forwardRef<HTMLDivElement, TerminalPromptProps>(
  ({ className, symbol = '$', showCaret = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-2 text-code text-fg', className)}
      {...props}
    >
      <span className="text-signal-green select-none">{symbol}</span>
      <span className="flex-1 min-w-0">{children}</span>
      {showCaret && <span className="caret inline-block h-4 w-1.75 bg-fg" />}
    </div>
  ),
);
TerminalPrompt.displayName = 'TerminalPrompt';

/* ─────────────────────────────────────────────────────────
   TerminalCommand — a single entry in command history: prompt + timestamp
───────────────────────────────────────────────────────── */
export interface TerminalCommandProps extends React.HTMLAttributes<HTMLDivElement> {
  command: React.ReactNode;
  symbol?: React.ReactNode;
  timestamp?: React.ReactNode;
}

const TerminalCommand = React.forwardRef<HTMLDivElement, TerminalCommandProps>(
  ({ className, command, symbol = '$', timestamp, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-between gap-3 text-code',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-signal-green select-none">{symbol}</span>
        <span className="text-fg truncate">{command}</span>
      </div>
      {timestamp && (
        <span className="text-caption text-fg-subtle shrink-0 normal-case tracking-normal">
          {timestamp}
        </span>
      )}
    </div>
  ),
);
TerminalCommand.displayName = 'TerminalCommand';

/* ─────────────────────────────────────────────────────────
   TerminalOutput — scrollable output area with optional copy action
───────────────────────────────────────────────────────── */
export interface TerminalOutputProps extends React.HTMLAttributes<HTMLDivElement> {
  /** When provided, renders a copy-to-clipboard button for this text. */
  copyText?: string;
  maxHeight?: number | string;
}

const TerminalOutput = React.forwardRef<HTMLDivElement, TerminalOutputProps>(
  ({ className, copyText, maxHeight, children, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false);

    const onCopy = () => {
      if (!copyText) return;
      navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div
        ref={ref}
        className={cn('relative', className)}
        {...props}
      >
        {copyText && (
          <button
            onClick={onCopy}
            className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-md text-fg-subtle hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-cyan/50 transition-colors"
            aria-label="Copy output"
            title="Copy"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-signal-green" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        )}
        <div
          className="overflow-auto p-4 text-fg-muted space-y-1.5"
          style={maxHeight ? { maxHeight } : undefined}
        >
          {children}
        </div>
      </div>
    );
  },
);
TerminalOutput.displayName = 'TerminalOutput';

/* ─────────────────────────────────────────────────────────
   TerminalBlock — convenience wrapper for a single static code snippet
───────────────────────────────────────────────────────── */
export interface TerminalBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  title?: string;
}

const TerminalBlock = React.forwardRef<HTMLDivElement, TerminalBlockProps>(
  ({ className, code, language = 'bash', title, ...props }, ref) => (
    <Terminal
      ref={ref}
      data-language={language}
      className={className}
      {...props}
    >
      <TerminalHeader title={title} />
      <TerminalOutput copyText={code}>
        <pre className="m-0">
          <code>{code}</code>
        </pre>
      </TerminalOutput>
    </Terminal>
  ),
);
TerminalBlock.displayName = 'TerminalBlock';

export {
  Terminal,
  TerminalHeader,
  TerminalPrompt,
  TerminalCommand,
  TerminalOutput,
  TerminalBlock,
};
