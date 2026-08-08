'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@siberui/react';
import {
  BookOpen,
  Code2,
  Sparkles,
  Zap,
  Sliders,
  Bell,
  Layers,
  Terminal,
  ShieldAlert,
} from 'lucide-react';

const docItems = [
  { group: 'Getting Started', name: 'Installation', href: '/docs/installation', icon: Terminal },
  { group: 'Getting Started', name: 'Design System Philosophy', href: '/docs/design', icon: BookOpen },
  { group: 'Components', name: 'Accordion', href: '/docs/components/accordion', icon: Layers },
  { group: 'Components', name: 'Alert', href: '/docs/components/alert', icon: Bell },
  { group: 'Components', name: 'Badge', href: '/docs/components/badge', icon: Sparkles },
  { group: 'Components', name: 'BorderBeam', href: '/docs/components/border-beam', icon: Zap },
  { group: 'Components', name: 'Button', href: '/docs/components/button', icon: Code2 },
  { group: 'Components', name: 'Card', href: '/docs/components/card', icon: Layers },
  { group: 'Components', name: 'Command Palette', href: '/docs/components/command', icon: Terminal },
  { group: 'Components', name: 'Data Table', href: '/docs/components/data-table', icon: Layers },
  { group: 'Components', name: 'GlitchText', href: '/docs/components/glitch-text', icon: Sparkles },
  { group: 'Components', name: 'Input', href: '/docs/components/input', icon: Code2 },
  { group: 'Components', name: 'RadarProgress', href: '/docs/components/radar-progress', icon: Zap },
  { group: 'Components', name: 'Slider', href: '/docs/components/slider', icon: Sliders },
  { group: 'Components', name: 'Switch', href: '/docs/components/switch', icon: Sliders },
  { group: 'Components', name: 'ThreatIndicator', href: '/docs/components/threat-indicator', icon: ShieldAlert },
  { group: 'Components', name: 'Toast', href: '/docs/components/toast', icon: Bell },
];

export interface DocSearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DocSearchModal({ open, onOpenChange }: DocSearchModalProps) {
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const handleSelect = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} variant="neon">
      <CommandInput placeholder="Search documentation, components, tokens..." />
      <CommandList>
        <CommandEmpty>No cyberpunk primitives found.</CommandEmpty>
        
        <CommandGroup heading="Getting Started">
          {docItems
            .filter((item) => item.group === 'Getting Started')
            .map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.href}
                  onSelect={() => handleSelect(item.href)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-cyan-400" />
                  <span>{item.name}</span>
                </CommandItem>
              );
            })}
        </CommandGroup>

        <CommandGroup heading="Components">
          {docItems
            .filter((item) => item.group === 'Components')
            .map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.href}
                  onSelect={() => handleSelect(item.href)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-cyan-400" />
                  <span>{item.name}</span>
                </CommandItem>
              );
            })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
