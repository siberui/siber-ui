'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, GitBranch, Code, ChevronRight } from 'lucide-react';
import { Button, cn } from '@siberui/react';
import { docsNavigation } from '@/lib/docs-navigation';
import { usePackageVersion } from '@/hooks/usePackageVersion';

interface DocMobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function DocMobileNav({
  isOpen,
  onClose,
  onOpenSearch,
}: DocMobileNavProps) {
  const pathname = usePathname();
  const version = usePackageVersion();

  const prevPathname = React.useRef(pathname);

  // Close drawer automatically when route changes
  React.useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Lock body scroll when mobile nav is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 left-0 z-[100] flex h-[100dvh] w-full flex-col bg-[#05070a] shadow-2xl shadow-signal-cyan/20 sm:max-w-sm sm:border-r sm:border-border-default"
          >
            {/* Header */}
            <div className="flex h-14 items-center justify-between px-4 border-b border-border-default bg-surface-1/50">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2 group"
              >
                <Image
                  src="/logo.svg"
                  alt="Siber UI"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-sm border border-border-default"
                />
                <span className="text-label tracking-[0.2em] text-fg font-bold text-sm">
                  SIBER UI
                </span>
                <span className="rounded-full border border-signal-cyan/30 bg-signal-cyan/10 px-1.5 py-0.5 text-[10px] text-signal-cyan">
                  v{version}
                </span>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 text-fg-muted hover:text-fg"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Quick Search Action */}
            <div className="p-4 border-b border-border-default/60">
              <Button
                variant="outline"
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="w-full justify-start text-fg-muted border-border-default bg-surface-1 h-9 text-xs hover:border-signal-cyan/40 hover:text-fg cursor-pointer"
                leftIcon={<Search className="h-3.5 w-3.5 text-signal-cyan" />}
              >
                Search docs...
                <kbd className="ml-auto pointer-events-none inline-flex h-4 select-none items-center gap-0.5 rounded border border-border-default bg-surface-2 px-1 text-[10px] text-fg-subtle">
                  Search
                </kbd>
              </Button>
            </div>

            {/* Navigation Body */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col gap-6">
                {docsNavigation.map((group) => (
                  <div key={group.title} className="flex flex-col gap-2">
                    <h4 className="text-caption text-fg-subtle text-xs font-semibold uppercase tracking-wider px-2">
                      {group.title}
                    </h4>
                    <ul className="flex flex-col gap-1">
                      {group.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className={cn(
                                'flex items-center justify-between rounded-md border-l-2 px-3 py-2 text-sm transition-all duration-150',
                                isActive
                                  ? 'border-signal-cyan bg-signal-cyan/[0.08] text-signal-cyan font-medium shadow-[inset_0_0_12px_rgba(0,240,255,0.05)]'
                                  : 'border-transparent text-fg-muted hover:bg-surface-1 hover:text-fg'
                              )}
                            >
                              <span className="flex items-center gap-2">
                                {isActive && (
                                  <ChevronRight className="h-3.5 w-3.5 text-signal-cyan" />
                                )}
                                {item.title}
                              </span>
                              <div className="flex items-center gap-1.5">
                                {item.isNew && (
                                  <span className="rounded bg-signal-green/15 px-1.5 py-0.5 text-caption text-signal-green leading-none text-[10px]">
                                    New
                                  </span>
                                )}
                                {item.isExperimental && (
                                  <span className="rounded bg-signal-amber/15 px-1.5 py-0.5 text-caption text-signal-amber leading-none text-[10px]">
                                    Exp
                                  </span>
                                )}
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border-default bg-surface-1/40 flex items-center justify-between">
              <div className="text-caption text-fg-subtle text-xs">
                Siber UI Design System
              </div>
              <div className="flex items-center gap-1">
                <Link
                  href="https://github.com/siberui/siber-ui"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-fg-muted hover:text-fg"
                  >
                    <GitBranch className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.npmjs.com/package/@siberui/react"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-fg-muted hover:text-fg"
                  >
                    <Code className="h-4 w-4" />
                    <span className="sr-only">npm</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
