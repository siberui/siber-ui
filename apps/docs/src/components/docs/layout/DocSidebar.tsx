'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@siberui/react';

type NavItem = {
  title: string;
  href: string;
  isNew?: boolean;
  isExperimental?: boolean;
  isUpdated?: boolean;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const navItems: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Design Guidelines', href: '/docs/design' },
    ],
  },
  {
    title: 'Layout & Primitives',
    items: [
      { title: 'Accordion', href: '/docs/components/accordion' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Border Beam', href: '/docs/components/border-beam' },
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Scroll Area', href: '/docs/components/scroll-area' },
      { title: 'Separator', href: '/docs/components/separator' },
      { title: 'Skeleton', href: '/docs/components/skeleton' },
      { title: 'Spinner', href: '/docs/components/spinner' },
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Tag', href: '/docs/components/tag' },
      { title: 'Typography', href: '/docs/components/typography' },
    ],
  },
  {
    title: 'Forms & Inputs',
    items: [
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Combobox', href: '/docs/components/combobox' },
      { title: 'Date Picker', href: '/docs/components/date-picker' },
      { title: 'Form Field', href: '/docs/components/form-field' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Input OTP', href: '/docs/components/input-otp' },
      { title: 'Radio', href: '/docs/components/radio' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Slider', href: '/docs/components/slider' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Toggle Group', href: '/docs/components/toggle-group' },
    ],
  },
  {
    title: 'Overlays & Navigation',
    items: [
      { title: 'Dialog', href: '/docs/components/dialog' },
      { title: 'Drawer', href: '/docs/components/drawer' },
      { title: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
      { title: 'Hover Card', href: '/docs/components/hover-card' },
      { title: 'Popover', href: '/docs/components/popover' },
      { title: 'Sidebar', href: '/docs/components/sidebar' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
      { title: 'Tree View', href: '/docs/components/tree-view' },
    ],
  },
  {
    title: 'Data Display & Telemetry',
    items: [
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Calendar', href: '/docs/components/calendar' },
      { title: 'Command', href: '/docs/components/command', isNew: true },
      { title: 'Data Table', href: '/docs/components/data-table', isNew: true },
      { title: 'Marquee', href: '/docs/components/marquee' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Radar Progress', href: '/docs/components/radar-progress' },
      { title: 'Terminal Block', href: '/docs/components/terminal-block' },
      { title: 'Threat Indicator', href: '/docs/components/threat-indicator' },
      { title: 'Toast', href: '/docs/components/toast' },
    ],
  },
];

export function DocSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 overflow-y-auto">
      <div className="h-full py-6 pr-6 lg:py-8">
        <div className="flex flex-col gap-6">
          {navItems.map((group) => (
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
