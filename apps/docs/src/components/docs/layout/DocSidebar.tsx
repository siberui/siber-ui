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
            <div
              key={group.title}
              className="flex flex-col gap-2"
            >
              <h4 className="text-caption text-fg-subtle">{group.title}</h4>
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center justify-between rounded-md border-l-2 px-3 py-1.5 text-sm transition-colors',
                          isActive
                            ? 'border-signal-cyan bg-signal-cyan/[0.06] text-signal-cyan font-medium'
                            : 'border-transparent text-fg-muted hover:bg-surface-1 hover:text-fg',
                        )}
                      >
                        {item.title}
                        {item.isNew && (
                          <span className="rounded bg-signal-green/15 px-1.5 py-0.5 text-caption text-signal-green leading-none">
                            New
                          </span>
                        )}
                        {item.isExperimental && (
                          <span className="rounded bg-signal-amber/15 px-1.5 py-0.5 text-caption text-signal-amber leading-none">
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
