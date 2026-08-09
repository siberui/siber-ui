import { cn } from '@siberui/react';

type Status = 'Stable' | 'New' | 'Experimental' | 'Deprecated';

interface ComponentHeaderProps {
  title: string;
  description: string;
  status?: Status;
}

const statusConfig: Record<Status, string> = {
  Stable: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  New: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Experimental: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Deprecated: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

export function ComponentHeader({ title, description, status = 'Stable' }: ComponentHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 border-b border-border-hairline pb-10">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          {title}
        </h1>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-mono uppercase tracking-wider',
            statusConfig[status]
          )}
        >
          {status}
        </span>
      </div>
      <p className="max-w-2xl text-lg text-slate-400">
        {description}
      </p>
    </div>
  );
}
