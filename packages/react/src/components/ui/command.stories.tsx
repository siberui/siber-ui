'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command';
import { Button } from './button';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Terminal,
  Server,
  Database,
  Cpu,
} from 'lucide-react';

const meta: Meta = {
  title: 'Components/Data/Command',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg mx-auto py-12">
        <Story />
      </div>
    ),
  ],
};
export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => (
    <Command className="rounded-xl border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Neon
// ─────────────────────────────────────────────────────────────────────────────
export const Neon: StoryObj = {
  render: () => (
    <div className="bg-[#050d14] p-8 rounded-2xl w-full">
      <Command variant="neon">
        <CommandInput placeholder="// SEARCH_SUBSYSTEM..." />
        <CommandList>
          <CommandEmpty>// NO_MATCH_FOUND</CommandEmpty>
          <CommandGroup heading="INFRASTRUCTURE">
            <CommandItem>
              <Terminal className="mr-2 h-4 w-4 text-cyan-500" />
              <span>TERMINAL_SESSION</span>
            </CommandItem>
            <CommandItem>
              <Server className="mr-2 h-4 w-4 text-cyan-500" />
              <span>SERVER_NODES</span>
            </CommandItem>
            <CommandItem>
              <Database className="mr-2 h-4 w-4 text-cyan-500" />
              <span>DATA_LAKE</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="DIAGNOSTICS">
            <CommandItem>
              <Cpu className="mr-2 h-4 w-4 text-cyan-500" />
              <span>CPU_ANALYSIS</span>
              <CommandShortcut>⌘+K</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4 text-cyan-500" />
              <span>SYS_CONFIG</span>
              <CommandShortcut>⌘+S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Dialog (Modal) Example
// ─────────────────────────────────────────────────────────────────────────────
export const DialogExample = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-sm text-slate-400">
          Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-900 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>{' '}
          to open the command palette.
        </p>
        <Button variant="neon" onClick={() => setOpen(true)}>
          Open Command Palette
        </Button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen} variant="neon">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => setOpen(false)}>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Schedule task</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <User className="mr-2 h-4 w-4" />
              <span>View Profile</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
