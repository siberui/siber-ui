import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/* ─────────────────────────────────────────────────────────
   Heading
───────────────────────────────────────────────────────── */

const headingVariants = cva(
  'font-sans font-semibold tracking-tight text-white leading-tight',
  {
    variants: {
      size: {
        h1: 'text-4xl font-bold',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base',
      },
      gradient: {
        none: '',
        cyan: 'bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent',
        purple: 'bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent',
        mixed: 'bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent',
      },
    },
    defaultVariants: {
      size: 'h2',
      gradient: 'none',
    },
  }
);

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as, size, gradient, children, ...props }, ref) => {
    const level = as ?? (size as HeadingLevel) ?? 'h2';
    const Comp = level;
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ size: size ?? level, gradient, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Heading.displayName = 'Heading';

/* ─────────────────────────────────────────────────────────
   Text
───────────────────────────────────────────────────────── */

const textVariants = cva('font-sans', {
  variants: {
    variant: {
      default: 'text-slate-200',
      lead: 'text-lg text-slate-300 leading-relaxed',
      muted: 'text-slate-500',
      subtle: 'text-slate-400',
      neon: 'text-cyan-400',
      neonPurple: 'text-purple-300',
      neonGreen: 'text-emerald-400',
      destructive: 'text-rose-400',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    mono: {
      true: 'font-mono tracking-tight',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    weight: 'normal',
    mono: false,
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div' | 'label' | 'small' | 'strong' | 'em';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Text = React.forwardRef<any, TextProps>(
  ({ className, as = 'p', variant, size, weight, mono, ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ variant, size, weight, mono, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

/* ─────────────────────────────────────────────────────────
   Code — inline & block
───────────────────────────────────────────────────────── */

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  block?: boolean;
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, block = false, children, ...props }, ref) => {
    if (block) {
      return (
        <pre
          className={cn(
            'w-full overflow-x-auto rounded-lg p-4',
            'bg-white/[0.03] backdrop-blur-sm border border-white/[0.07]',
            'font-mono text-sm text-cyan-200 leading-relaxed',
            'shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.04)]',
            // top accent
            'relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]',
            'before:bg-gradient-to-r before:from-transparent before:via-cyan-500/40 before:to-transparent',
            className
          )}
          {...(props as React.HTMLAttributes<HTMLPreElement>)}
        >
          <code>{children}</code>
        </pre>
      );
    }
    return (
      <code
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          'inline-flex items-center px-1.5 py-0.5 rounded-md',
          'bg-white/[0.06] border border-white/[0.08]',
          'font-mono text-[0.82em] text-cyan-300',
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }
);
Code.displayName = 'Code';

/* ─────────────────────────────────────────────────────────
   Kbd — keyboard shortcut
───────────────────────────────────────────────────────── */

const Kbd = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => (
    <kbd
      ref={ref as React.Ref<HTMLElement>}
      className={cn(
        'inline-flex items-center justify-center px-1.5 py-0.5 rounded-md',
        'bg-slate-900/80 backdrop-blur-sm',
        'border border-slate-700/60 border-b-[2px]',
        'font-mono text-[0.75em] text-slate-300',
        'shadow-[0_2px_0_rgba(0,0,0,0.4)]',
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
);
Kbd.displayName = 'Kbd';

/* ─────────────────────────────────────────────────────────
   Label — form label
───────────────────────────────────────────────────────── */

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1',
        'text-[11px] font-mono tracking-widest uppercase text-slate-500',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-rose-400 text-xs">*</span>}
    </label>
  )
);
Label.displayName = 'Label';

/* ─────────────────────────────────────────────────────────
   Divider
───────────────────────────────────────────────────────── */

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  glow?: 'cyan' | 'purple' | 'none';
}

function Divider({ className, label, glow = 'none', ...props }: DividerProps) {
  const glowColor =
    glow === 'cyan'
      ? 'via-cyan-500/50'
      : glow === 'purple'
        ? 'via-purple-500/50'
        : 'via-white/[0.12]';

  if (label) {
    return (
      <div className={cn('flex items-center gap-3', className)} {...props}>
        <div className={cn('flex-1 h-px bg-gradient-to-r from-transparent', glowColor, 'to-transparent')} />
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-600 shrink-0">
          {label}
        </span>
        <div className={cn('flex-1 h-px bg-gradient-to-r from-transparent', glowColor, 'to-transparent')} />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-full h-px',
        `bg-gradient-to-r from-transparent ${glowColor} to-transparent`,
        className
      )}
      {...props}
    />
  );
}

/* ─────────────────────────────────────────────────────────
   Exports
───────────────────────────────────────────────────────── */

export { Heading, headingVariants, Text, textVariants, Code, Kbd, Label, Divider };
