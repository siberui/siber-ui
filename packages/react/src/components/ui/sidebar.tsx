'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

// ─────────────────────────────────────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────────────────────────────────────
type SidebarVariant = 'default' | 'neon' | 'glass';

interface SidebarContextValue {
  variant: SidebarVariant;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = React.createContext<SidebarContextValue>({
  variant: 'default',
  collapsed: false,
  setCollapsed: () => void 0,
});

export function useSidebar() {
  return React.useContext(SidebarContext);
}

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar Root
// ─────────────────────────────────────────────────────────────────────────────
const sidebarVariants = cva(
  'relative flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out border-r',
  {
    variants: {
      variant: {
        default: 'bg-slate-950 border-white/[0.06]',
        neon: 'bg-[#050d14] border-cyan-500/20 shadow-[4px_0_20px_rgba(0,240,255,0.05)]',
        glass:
          'bg-white/[0.02] border-white/[0.08] backdrop-blur-xl',
      },
      size: {
        sm: 'w-14 data-[collapsed=false]:w-48',
        md: 'w-16 data-[collapsed=false]:w-60',
        lg: 'w-16 data-[collapsed=false]:w-72',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface SidebarProps
  extends React.ComponentPropsWithoutRef<'aside'>,
    VariantProps<typeof sidebarVariants> {
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      defaultCollapsed = false,
      onCollapsedChange,
      children,
      ...props
    },
    ref
  ) => {
    const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

    const handleSetCollapsed: React.Dispatch<React.SetStateAction<boolean>> = (
      val
    ) => {
      const next = typeof val === 'function' ? val(collapsed) : val;
      setCollapsed(next);
      onCollapsedChange?.(next);
    };

    return (
      <SidebarContext.Provider
        value={{ variant: variant ?? 'default', collapsed, setCollapsed: handleSetCollapsed }}
      >
        <aside
          ref={ref}
          data-collapsed={collapsed}
          className={cn(sidebarVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </aside>
      </SidebarContext.Provider>
    );
  }
);
Sidebar.displayName = 'Sidebar';

// ─────────────────────────────────────────────────────────────────────────────
// SidebarHeader
// ─────────────────────────────────────────────────────────────────────────────
const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(SidebarContext);
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-2 p-4',
        variant === 'neon' && 'border-b border-cyan-500/10',
        variant !== 'neon' && 'border-b border-white/[0.05]',
        className
      )}
      {...props}
    />
  );
});
SidebarHeader.displayName = 'SidebarHeader';

// ─────────────────────────────────────────────────────────────────────────────
// SidebarContent (scrollable section)
// ─────────────────────────────────────────────────────────────────────────────
const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex-1 overflow-y-auto overflow-x-hidden py-2', className)}
    {...props}
  />
));
SidebarContent.displayName = 'SidebarContent';

// ─────────────────────────────────────────────────────────────────────────────
// SidebarFooter
// ─────────────────────────────────────────────────────────────────────────────
const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(SidebarContext);
  return (
    <div
      ref={ref}
      className={cn(
        'p-4',
        variant === 'neon' ? 'border-t border-cyan-500/10' : 'border-t border-white/[0.05]',
        className
      )}
      {...props}
    />
  );
});
SidebarFooter.displayName = 'SidebarFooter';

// ─────────────────────────────────────────────────────────────────────────────
// SidebarGroup
// ─────────────────────────────────────────────────────────────────────────────
const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex w-full min-w-0 flex-col gap-1 px-2 py-1', className)}
    {...props}
  />
));
SidebarGroup.displayName = 'SidebarGroup';

// ─────────────────────────────────────────────────────────────────────────────
// SidebarGroupLabel
// ─────────────────────────────────────────────────────────────────────────────
const SidebarGroupLabel = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => {
  const { variant, collapsed } = React.useContext(SidebarContext);

  if (collapsed) return null;

  return (
    <p
      ref={ref}
      className={cn(
        'px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest',
        variant === 'neon' ? 'text-cyan-500/50' : 'text-slate-600',
        className
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = 'SidebarGroupLabel';

// ─────────────────────────────────────────────────────────────────────────────
// SidebarItem
// ─────────────────────────────────────────────────────────────────────────────
export interface SidebarItemProps extends React.ComponentPropsWithoutRef<'a'> {
  isActive?: boolean;
  icon?: React.ReactNode;
  label?: string;
  badge?: React.ReactNode;
}

const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ className, isActive, icon, label, badge, ...props }, ref) => {
    const { variant, collapsed } = React.useContext(SidebarContext);

    const base =
      'flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-all duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan-400';

    const styles: Record<SidebarVariant, { inactive: string; active: string }> = {
      default: {
        inactive: 'text-slate-400 hover:text-white hover:bg-white/[0.07]',
        active: 'bg-white/10 text-white',
      },
      neon: {
        inactive:
          'text-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-500/10 hover:translate-x-0.5',
        active:
          'bg-cyan-500/15 text-cyan-300 border-l-2 border-cyan-400 pl-[6px] shadow-[inset_0_0_15px_rgba(0,240,255,0.05)]',
      },
      glass: {
        inactive: 'text-slate-400 hover:text-white hover:bg-white/[0.06]',
        active: 'bg-white/[0.12] text-white border border-white/[0.1]',
      },
    };

    const stateClass = isActive ? styles[variant].active : styles[variant].inactive;

    return (
      <a
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          base,
          stateClass,
          collapsed && 'justify-center px-0 w-10 mx-auto',
          className
        )}
        {...props}
      >
        {icon && (
          <span className={cn('shrink-0', variant === 'neon' && isActive && 'drop-shadow-[0_0_6px_rgba(0,240,255,0.7)]')}>
            {icon}
          </span>
        )}
        {!collapsed && label && (
          <span className="truncate flex-1">{label}</span>
        )}
        {!collapsed && badge && (
          <span className="ml-auto shrink-0">{badge}</span>
        )}
      </a>
    );
  }
);
SidebarItem.displayName = 'SidebarItem';

// ─────────────────────────────────────────────────────────────────────────────
// SidebarSeparator
// ─────────────────────────────────────────────────────────────────────────────
const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(SidebarContext);
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      className={cn(
        'my-2 mx-2 h-px',
        variant === 'neon' ? 'bg-cyan-500/10' : 'bg-white/[0.06]',
        className
      )}
      {...props}
    />
  );
});
SidebarSeparator.displayName = 'SidebarSeparator';

// ─────────────────────────────────────────────────────────────────────────────
// SidebarCollapseButton
// ─────────────────────────────────────────────────────────────────────────────
const SidebarCollapseButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ className, children, ...props }, ref) => {
  const { collapsed, setCollapsed, variant } = React.useContext(SidebarContext);
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setCollapsed((p) => !p)}
      aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      className={cn(
        'flex items-center justify-center w-7 h-7 rounded transition-all',
        variant === 'neon'
          ? 'text-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-500/10'
          : 'text-slate-500 hover:text-white hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
SidebarCollapseButton.displayName = 'SidebarCollapseButton';

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarSeparator,
  SidebarCollapseButton,
};
