import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const sliderVariants = cva(
  'relative flex w-full touch-none select-none items-center',
  {
    variants: {
      variant: {
        default: '',
        neon: '',
        neonPurple: '',
        neonGreen: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const trackVariants = cva(
  'relative h-1.5 w-full grow overflow-hidden rounded-full bg-white/10',
  {
    variants: {
      variant: {
        default: '',
        neon: '',
        neonPurple: '',
        neonGreen: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const rangeVariants = cva(
  'absolute h-full',
  {
    variants: {
      variant: {
        default: 'bg-white',
        neon: 'bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.5)]',
        neonPurple: 'bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]',
        neonGreen: 'bg-emerald-400 shadow-[0_0_10px_rgba(57,255,20,0.5)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const thumbVariants = cva(
  [
    'block h-4 w-4 rounded-full border transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'border-white bg-white focus-visible:ring-slate-300',
        neon: 'border-cyan-400 bg-cyan-950 focus-visible:ring-cyan-400/50 shadow-[0_0_15px_rgba(0,240,255,0.6)]',
        neonPurple: 'border-purple-400 bg-purple-950 focus-visible:ring-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.6)]',
        neonGreen: 'border-emerald-400 bg-emerald-950 focus-visible:ring-emerald-400/50 shadow-[0_0_15px_rgba(57,255,20,0.6)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, variant, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(sliderVariants({ variant }), className)}
    {...props}
  >
    <SliderPrimitive.Track className={trackVariants({ variant })}>
      <SliderPrimitive.Range className={rangeVariants({ variant })} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={thumbVariants({ variant })} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, sliderVariants };
