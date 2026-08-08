'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@siberui/react';
import { Code, GitBranch, Search, Monitor } from 'lucide-react';
import { DocSearchModal } from '../DocSearchModal';

export function TopNav() {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.svg" alt="Siber UI" width={28} height={28} className="h-7 w-7 rounded-sm border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/50" />
            <span className="text-base font-semibold tracking-[0.25em] text-slate-100 transition-colors duration-300 group-hover:text-cyan-400">
              SIBER UI
            </span>
          </Link>
          <div className="hidden md:flex">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-mono tracking-widest text-cyan-300">
              v1.0.2
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 max-w-md hidden md:flex">
          <Button
            variant="outline"
            onClick={() => setSearchOpen(true)}
            className="w-full justify-start text-slate-400 border-white/10 bg-white/5 h-9 hover:border-cyan-500/40 hover:text-slate-200 cursor-pointer"
            leftIcon={<Search className="h-4 w-4 text-cyan-400" />}
          >
            Search documentation...
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-slate-400">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          <DocSearchModal open={searchOpen} onOpenChange={setSearchOpen} />
        </div>

        <div className="flex items-center gap-2">
          <Link href="https://github.com/siberui/siber-ui" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white h-9 w-9">
              <GitBranch className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.npmjs.com/package/@siberui/react" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white h-9 w-9">
              <Code className="h-4 w-4" />
              <span className="sr-only">npm</span>
            </Button>
          </Link>
          <div className="w-px h-4 bg-white/10 mx-1"></div>
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white h-9 w-9">
            <Monitor className="h-4 w-4" />
            <span className="sr-only">Theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
