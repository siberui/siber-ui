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
import { BookOpen, Code2 } from 'lucide-react';
import { docsNavigation } from '@/lib/docs-navigation';

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
        onOpenChange(true);
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
        
        {docsNavigation.map((group) => {
          const Icon = group.title === 'Getting Started' ? BookOpen : Code2;

          return (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => handleSelect(item.href)}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Icon className="h-4 w-4 text-cyan-400" />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
}
