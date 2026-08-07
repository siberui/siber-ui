import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface TerminalBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  title?: string;
}

const TerminalBlock = React.forwardRef<HTMLDivElement, TerminalBlockProps>(
  ({ className, code, language = 'bash', title, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false);

    const onCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950 font-mono text-sm shadow-md',
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            {title && <span className="text-xs text-slate-400">{title}</span>}
          </div>
          <button
            onClick={onCopy}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-800 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500/50 transition-colors"
            aria-label="Copy code"
            title="Copy"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        <div className="overflow-x-auto p-4 text-slate-300">
          <pre className="m-0">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    );
  }
);
TerminalBlock.displayName = 'TerminalBlock';

export { TerminalBlock };
