'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@siberui/react';
import { docsNavigation } from '@/lib/docs-navigation';

export function DocSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 overflow-y-auto">
      <div className="h-full py-6 pr-6 lg:py-8">
        <div className="flex flex-col gap-6">
          {docsNavigation.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors',
                          isActive
                            ? 'bg-cyan-500/10 text-cyan-400 font-medium'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                        )}
                      >
                        {item.title}
                        {item.isNew && (
                          <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 uppercase tracking-widest leading-none">
                            New
                          </span>
                        )}
                        {item.isExperimental && (
                          <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-medium text-amber-400 uppercase tracking-widest leading-none">
                            Exp
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
