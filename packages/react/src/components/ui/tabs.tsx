'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';


// ─────────────────────────────────────────────────────────────────────────────
// Context: shared variant + active value awareness for animated indicators
// ─────────────────────────────────────────────────────────────────────────────
interface TabsContextValue {
  variant?: 'default' | 'neon' | 'ghost' | 'underline' | null;
  activeValue?: string;
  setActiveValue?: (v: string) => void;
}
const TabsContext = React.createContext<TabsContextValue>({});

// ─────────────────────────────────────────────────────────────────────────────
// TabsList — wraps the Radix list and renders animated indicators
// ─────────────────────────────────────────────────────────────────────────────
const tabsListVariants = cva(
  'relative inline-flex items-center justify-center text-slate-400 select-none',
  {
    variants: {
      variant: {
        default:
          'h-11 rounded-lg p-1.5 gap-1 bg-slate-950/60 backdrop-blur-md border border-white/10',
        neon:
          'h-11 rounded-lg p-1.5 gap-1 bg-cyan-950/30 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.05)]',
        ghost: 'h-auto p-0 gap-2 bg-transparent border-none',
        underline:
          'w-full h-auto p-0 gap-1 bg-transparent justify-start rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => {
  const listRef = React.useRef<HTMLDivElement>(null);
  const { activeValue } = React.useContext(TabsContext);
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0, height: 0, top: 0 });
  const [mounted, setMounted] = React.useState(false);

  // Measure the active trigger and update the indicator position
  const updateIndicator = React.useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const activeTrigger = list.querySelector('[data-state="active"]') as HTMLElement | null;
    if (!activeTrigger) return;
    const listRect = list.getBoundingClientRect();
    const triggerRect = activeTrigger.getBoundingClientRect();
    setIndicator({
      left: triggerRect.left - listRect.left,
      top: triggerRect.top - listRect.top,
      width: triggerRect.width,
      height: triggerRect.height,
    });
    setMounted(true);
  }, []);

  React.useEffect(() => {
    // Small rAF to ensure DOM has settled after Radix state update
    const id = requestAnimationFrame(updateIndicator);
    return () => cancelAnimationFrame(id);
  }, [activeValue, updateIndicator]);

  // Also update on resize
  React.useEffect(() => {
    const ro = new ResizeObserver(updateIndicator);
    if (listRef.current) ro.observe(listRef.current);
    return () => ro.disconnect();
  }, [updateIndicator]);

  const mergedRef = (node: HTMLDivElement) => {
    (listRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  return (
    <TabsPrimitive.List
      ref={mergedRef}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    >
      {props.children}

      {/* ── Neon / Default: sliding pill ── */}
      {(variant === 'neon' || variant === 'default') && mounted && (
        <span
          aria-hidden
          className={cn(
            'absolute rounded-md pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
            variant === 'neon'
              ? 'bg-cyan-500/15 border border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.25)]'
              : 'bg-white/10 shadow-sm',
          )}
          style={{
            left: indicator.left,
            top: indicator.top,
            width: indicator.width,
            height: indicator.height,
          }}
        />
      )}

      {/* ── Underline: sliding bottom indicator bar (no static base border) ── */}
      {variant === 'underline' && mounted && (
        <span
          aria-hidden
          className="absolute bottom-0 h-[2px] rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />
      )}
    </TabsPrimitive.List>
  );
});
TabsList.displayName = 'TabsList';

// ─────────────────────────────────────────────────────────────────────────────
// TabsTrigger
// ─────────────────────────────────────────────────────────────────────────────
const tabsTriggerVariants = cva(
  [
    'relative z-10 inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md px-3.5 text-xs font-medium transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:pointer-events-none disabled:opacity-40',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'text-slate-400 hover:text-slate-200',
          'data-[state=active]:text-white',
        ].join(' '),
        neon: [
          'font-mono uppercase tracking-wider text-cyan-500/60',
          'hover:text-cyan-300',
          'data-[state=active]:text-cyan-200',
        ].join(' '),
        underline: [
          'h-10 px-4 font-mono text-xs uppercase tracking-widest text-slate-400 rounded-none transition-colors duration-200',
          'hover:text-cyan-300',
          'data-[state=active]:text-cyan-300 data-[state=active]:bg-gradient-to-t data-[state=active]:from-cyan-500/[0.12] data-[state=active]:to-transparent',
        ].join(' '),
        ghost: [
          'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]',
          'data-[state=active]:bg-white/10 data-[state=active]:text-white',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabsTriggerVariants>
>(({ className, variant, ...props }, ref) => {
  const { setActiveValue } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariants({ variant }), className)}
      onMouseDown={() => {
        if (props.value && setActiveValue) setActiveValue(props.value as string);
      }}
      {...props}
    />
  );
});
TabsTrigger.displayName = 'TabsTrigger';

// ─────────────────────────────────────────────────────────────────────────────
// TabsContent
// ─────────────────────────────────────────────────────────────────────────────
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-3 ring-offset-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2',
      'animate-in fade-in-50 slide-in-from-bottom-1.5 duration-200 ease-out',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// ─────────────────────────────────────────────────────────────────────────────
// TabsRoot — provides context for animated indicators
// ─────────────────────────────────────────────────────────────────────────────
interface TabsRootProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  variant?: 'default' | 'neon' | 'ghost' | 'underline';
}

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsRootProps
>(({ variant, defaultValue, value, onValueChange, children, ...props }, ref) => {
  const [activeValue, setActiveValue] = React.useState<string>(
    value ?? defaultValue ?? ''
  );

  const handleValueChange = React.useCallback(
    (val: string) => {
      setActiveValue(val);
      onValueChange?.(val);
    },
    [onValueChange]
  );

  // sync when controlled
  React.useEffect(() => {
    if (value !== undefined) setActiveValue(value);
  }, [value]);

  return (
    <TabsContext.Provider value={{ variant, activeValue, setActiveValue }}>
      <TabsPrimitive.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        {...props}
      >
        {children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  );
});
TabsRoot.displayName = 'Tabs';

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent };
