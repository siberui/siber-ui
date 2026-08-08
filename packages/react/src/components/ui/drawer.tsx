'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const DrawerContext = React.createContext<{
  variant?: 'default' | 'neon' | 'glass';
  direction?: 'top' | 'bottom' | 'left' | 'right';
}>({
  variant: 'default',
  direction: 'right',
});

const Drawer = ({
  shouldScaleBackground = true,
  variant = 'default',
  direction = 'right',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  variant?: 'default' | 'neon' | 'glass';
  direction?: 'top' | 'bottom' | 'left' | 'right';
}) => (
  <DrawerContext.Provider value={{ variant, direction }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      direction={direction}
      {...props}
    />
  </DrawerContext.Provider>
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/60 backdrop-blur-sm', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerContentVariants = cva(
  'fixed z-50 flex flex-col border',
  {
    variants: {
      variant: {
        default: 'bg-slate-950 border-white/[0.08]',
        neon: 'bg-cyan-950/95 border-cyan-500/40 shadow-[0_0_40px_rgba(0,240,255,0.15)] backdrop-blur-xl',
        glass: 'bg-[#0d121d]/70 border-white/[0.08] backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]',
      },
      direction: {
        bottom: 'inset-x-0 bottom-0 mt-24 h-auto rounded-t-[10px]',
        top: 'inset-x-0 top-0 mb-24 h-auto rounded-b-[10px]',
        left: 'inset-y-0 left-0 mr-24 w-[300px] sm:w-[400px] h-full rounded-r-[10px]',
        right: 'inset-y-0 right-0 ml-24 w-[300px] sm:w-[400px] h-full rounded-l-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      direction: 'right',
    },
  }
);

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { variant, direction } = React.useContext(DrawerContext);
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(drawerContentVariants({ variant, direction }), className)}
        {...props}
      >
        {direction === 'bottom' && (
          <div
            className={cn(
              'mx-auto mt-4 h-2 w-[100px] rounded-full',
              variant === 'neon' ? 'bg-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'bg-white/20'
            )}
          />
        )}
        {direction === 'top' && (
          <div
            className={cn(
              'mx-auto mb-4 mt-auto h-2 w-[100px] rounded-full',
              variant === 'neon' ? 'bg-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'bg-white/20'
            )}
          />
        )}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(DrawerContext);
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        variant === 'neon' ? 'font-mono text-cyan-300 uppercase tracking-widest' : 'text-slate-100',
        className
      )}
      {...props}
    />
  );
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(DrawerContext);
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn(
        'text-sm',
        variant === 'neon' ? 'text-cyan-500/70' : 'text-slate-400',
        className
      )}
      {...props}
    />
  );
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
