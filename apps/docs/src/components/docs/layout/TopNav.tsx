'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@siberui/react';
import { Code, GitBranch, Search, Monitor, Menu } from 'lucide-react';
import { DocSearchModal } from '../DocSearchModal';
import { DocMobileNav } from './DocMobileNav';
import { usePackageVersion } from '@/hooks/usePackageVersion';

export function TopNav() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const version = usePackageVersion();

  const handleCloseMobileNav = React.useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-default bg-bg/80 backdrop-blur-xl">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden text-fg-muted hover:text-fg h-9 w-9 -ml-1 border border-border-default/60 hover:border-signal-cyan/40"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-signal-cyan" />
          </Button>

          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <Image
              src="/logo.svg"
              alt="Siber UI"
              width={28}
              height={28}
              className="h-7 w-7 rounded-sm border border-border-default transition-colors duration-200 group-hover:border-signal-cyan/50"
            />
            <span className="text-label tracking-[0.25em] text-fg transition-colors duration-200 group-hover:text-signal-cyan">
              SIBER UI
            </span>
          </Link>
          <div className="hidden md:flex">
            <span className="rounded-full border border-signal-cyan/30 bg-signal-cyan/10 px-2 py-0.5 text-caption text-signal-cyan">
              v{version}
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 max-w-md hidden md:flex">
          <Button
            variant="outline"
            onClick={() => setSearchOpen(true)}
            className="w-full justify-start text-fg-muted border-border-default bg-surface-1 h-9 hover:border-signal-cyan/40 hover:text-fg cursor-pointer"
            leftIcon={<Search className="h-4 w-4 text-signal-cyan" />}
          >
            Search documentation...
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border-default bg-surface-2 px-1.5 text-caption text-fg-subtle">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(true)}
            className="md:hidden text-fg-muted hover:text-fg h-9 w-9"
            aria-label="Search documentation"
          >
            <Search className="h-4 w-4 text-signal-cyan" />
          </Button>
          <Link
            href="https://github.com/siberui/siber-ui"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-fg-muted hover:text-fg h-9 w-9"
            >
              <GitBranch className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.npmjs.com/package/@siberui/react"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-fg-muted hover:text-fg h-9 w-9"
            >
              <Code className="h-4 w-4" />
              <span className="sr-only">npm</span>
            </Button>
          </Link>
          <div className="w-px h-4 bg-border-default mx-1 hidden sm:block"></div>
          <Button
            variant="ghost"
            size="icon"
            className="text-fg-muted hover:text-fg h-9 w-9"
          >
            <Monitor className="h-4 w-4" />
            <span className="sr-only">Theme</span>
          </Button>
        </div>
      </div>

      <DocSearchModal
        open={searchOpen}
        onOpenChange={setSearchOpen}
      />
      <DocMobileNav
        isOpen={mobileNavOpen}
        onClose={handleCloseMobileNav}
        onOpenSearch={() => setSearchOpen(true)}
      />
    </nav>
  );
}

