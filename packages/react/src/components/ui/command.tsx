'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Dialog, DialogPortal, DialogOverlay, DialogContent } from '@radix-ui/react-dialog';
import { cn } from '../../utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Command Context
// ─────────────────────────────────────────────────────────────────────────────
export type CommandVariant = 'default' | 'neon' | 'glass';

const CommandContext = React.createContext<{ variant?: CommandVariant }>({
  variant: 'default',
});

// ─────────────────────────────────────────────────────────────────────────────
// Command Root
// ─────────────────────────────────────────────────────────────────────────────
const commandVariants = cva(
  'flex h-full w-full flex-col overflow-hidden rounded-xl text-slate-100',
  {
    variants: {
      variant: {
        default: 'bg-slate-950 border border-white/[0.08]',
        neon: 'bg-[#050d14] border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.15)]',
        glass: 'bg-white/[0.03] backdrop-blur-2xl border border-white/[0.1] shadow-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CommandProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive>,
    VariantProps<typeof commandVariants> {}

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, variant = 'default', ...props }, ref) => (
  <CommandContext.Provider value={{ variant: variant || 'default' }}>
    <CommandPrimitive
      ref={ref}
      className={cn(commandVariants({ variant }), className)}
      {...props}
    />
  </CommandContext.Provider>
));
Command.displayName = CommandPrimitive.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Command Dialog (Command Palette Modal)
// ─────────────────────────────────────────────────────────────────────────────
interface CommandDialogProps extends CommandProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const CommandDialog = ({
  open,
  onOpenChange,
  variant = 'default',
  children,
  ...props
}: CommandDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogContent
          className={cn(
            'fixed left-[50%] top-[12vh] z-50 translate-x-[-50%] w-[90vw] max-w-2xl outline-none',
            'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95'
          )}
        >
          <Command
            variant={variant || 'default'}
            className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
            {...props}
          >
            {children}
          </Command>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Command Input
// ─────────────────────────────────────────────────────────────────────────────
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext);
  
  return (
    <div
      className={cn(
        'flex items-center border-b px-3',
        variant === 'neon' ? 'border-cyan-500/20' : 'border-white/[0.08]',
        'cmdk-input-wrapper'
      )}
    >
      <Search
        className={cn(
          'mr-2 h-4 w-4 shrink-0 opacity-50',
          variant === 'neon' ? 'text-cyan-400 opacity-70' : 'text-slate-400'
        )}
      />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50',
          variant === 'neon' && 'font-mono text-cyan-50 placeholder:text-cyan-500/40',
          className
        )}
        {...props}
      />
    </div>
  );
});
CommandInput.displayName = CommandPrimitive.Input.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Command List
// ─────────────────────────────────────────────────────────────────────────────
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Command Empty
// ─────────────────────────────────────────────────────────────────────────────
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext);
  
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className={cn(
        'py-12 text-center text-sm',
        variant === 'neon' ? 'font-mono text-cyan-500/50' : 'text-slate-400',
        className
      )}
      {...props}
    />
  );
});
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Command Group
// ─────────────────────────────────────────────────────────────────────────────
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext);

  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-slate-200',
        '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold',
        variant === 'neon'
          ? '[&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-cyan-500/60 [&_[cmdk-group-heading]]:tracking-widest'
          : '[&_[cmdk-group-heading]]:text-slate-400',
        className
      )}
      {...props}
    />
  );
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Command Separator
// ─────────────────────────────────────────────────────────────────────────────
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext);
  
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn(
        '-mx-1 h-px',
        variant === 'neon' ? 'bg-cyan-500/20' : 'bg-white/[0.08]',
        className
      )}
      {...props}
    />
  );
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Command Item
// ─────────────────────────────────────────────────────────────────────────────
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext);

  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        'transition-colors',
        variant === 'neon'
          ? 'data-[selected=true]:bg-cyan-500/10 data-[selected=true]:text-cyan-300 font-mono'
          : 'data-[selected=true]:bg-white/10 data-[selected=true]:text-white',
        className
      )}
      {...props}
    />
  );
});
CommandItem.displayName = CommandPrimitive.Item.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// Command Shortcut
// ─────────────────────────────────────────────────────────────────────────────
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const { variant } = React.useContext(CommandContext);
  
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest',
        variant === 'neon' ? 'text-cyan-500/50' : 'text-slate-500',
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
