import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────
   Tag Variants
───────────────────────────────────────────────────────── */

const tagVariants = cva(
  [
    'inline-flex items-center gap-1.5 font-mono text-xs tracking-wide',
    'rounded-md border select-none cursor-default',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400/50',
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-white/[0.04] text-slate-300 border-white/[0.08] hover:border-white/[0.15] hover:text-slate-100',
        neon:
          'bg-cyan-500/[0.07] text-cyan-400 border-cyan-500/25 hover:border-cyan-500/50 hover:bg-cyan-500/[0.12]',
        neonPurple:
          'bg-purple-500/[0.07] text-purple-300 border-purple-500/25 hover:border-purple-500/50 hover:bg-purple-500/[0.12]',
        neonGreen:
          'bg-emerald-500/[0.07] text-emerald-400 border-emerald-500/25 hover:border-emerald-500/50 hover:bg-emerald-500/[0.12]',
        outline:
          'bg-transparent text-slate-400 border-slate-700/60 hover:border-slate-500/80 hover:text-slate-200',
      },
      size: {
        sm: 'h-5 px-1.5 text-[10px] gap-1',
        md: 'h-6 px-2 text-xs',
        lg: 'h-7 px-2.5 text-sm gap-2',
      },
      selected: {
        true: '',
        false: '',
      },
      removable: {
        true: '',
        false: '',
      },
      interactive: {
        true: 'cursor-pointer',
        false: '',
      },
    },
    compoundVariants: [
      // Selected states — each variant gets a bolder selected appearance
      {
        variant: 'default',
        selected: true,
        class: 'bg-white/[0.1] border-white/[0.2] text-white',
      },
      {
        variant: 'neon',
        selected: true,
        class: 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.18)]',
      },
      {
        variant: 'neonPurple',
        selected: true,
        class: 'bg-purple-500/20 border-purple-400/60 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.18)]',
      },
      {
        variant: 'neonGreen',
        selected: true,
        class: 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300 shadow-[0_0_12px_rgba(57,255,20,0.18)]',
      },
      {
        variant: 'outline',
        selected: true,
        class: 'bg-white/[0.06] border-slate-400/60 text-white',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      selected: false,
      removable: false,
      interactive: false,
    },
  }
);

/* ─────────────────────────────────────────────────────────
   Tag Props
───────────────────────────────────────────────────────── */

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'>,
    VariantProps<typeof tagVariants> {
  icon?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant,
      size,
      selected,
      removable,
      interactive,
      icon,
      onRemove,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const isInteractive = interactive ?? !!onClick;

    return (
      <span
        ref={ref}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        aria-pressed={isInteractive && selected !== undefined ? Boolean(selected) : undefined}
        onClick={onClick}
        onKeyDown={(e) => {
          if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick?.();
          }
        }}
        className={cn(
          tagVariants({ variant, size, selected, removable, interactive: isInteractive }),
          className
        )}
        {...props}
      >
        {icon && (
          <span className="inline-flex items-center shrink-0 opacity-70">{icon}</span>
        )}
        <span>{children}</span>
        {(removable ?? !!onRemove) && (
          <button
            type="button"
            aria-label="Remove tag"
            tabIndex={-1}
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className="inline-flex items-center justify-center ml-0.5 -mr-0.5 rounded-sm opacity-50 hover:opacity-100 hover:text-white transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
          >
            <X className="h-3 w-3" strokeWidth={1.5} />
          </button>
        )}
      </span>
    );
  }
);
Tag.displayName = 'Tag';

/* ─────────────────────────────────────────────────────────
   TagGroup — controlled multi-select tag set
───────────────────────────────────────────────────────── */

export interface TagGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: { label: string; value: string; icon?: React.ReactNode }[];
  selected: string[];
  onSelectionChange: (selected: string[]) => void;
  variant?: TagProps['variant'];
  size?: TagProps['size'];
  multi?: boolean;
}

function TagGroup({
  tags,
  selected,
  onSelectionChange,
  variant = 'neon',
  size = 'md',
  multi = true,
  className,
  ...props
}: TagGroupProps) {
  function handleToggle(value: string) {
    if (multi) {
      onSelectionChange(
        selected.includes(value)
          ? selected.filter((v) => v !== value)
          : [...selected, value]
      );
    } else {
      onSelectionChange(selected.includes(value) ? [] : [value]);
    }
  }

  return (
    <div
      className={cn('flex flex-wrap gap-2', className)}
      role="group"
      {...props}
    >
      {tags.map((tag) => (
        <Tag
          key={tag.value}
          variant={variant}
          size={size}
          selected={selected.includes(tag.value)}
          interactive
          icon={tag.icon}
          onClick={() => handleToggle(tag.value)}
        >
          {tag.label}
        </Tag>
      ))}
    </div>
  );
}

export { Tag, tagVariants, TagGroup };
