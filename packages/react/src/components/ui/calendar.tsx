'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { buttonVariants } from './button';

// ─────────────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────────────
export type CalendarVariant = 'default' | 'neon' | 'glass';

const calendarVariants = cva('p-3', {
  variants: {
    variant: {
      default: 'bg-slate-950 text-slate-100 rounded-xl border border-border-hairline',
      neon: 'bg-[#050d14] text-cyan-50 rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,240,255,0.05)] font-mono',
      glass: 'bg-slate-950/40 text-white backdrop-blur-xl rounded-2xl border border-border-hairline shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  variant?: CalendarVariant;
};

// ─────────────────────────────────────────────────────────────────────────────
// Calendar Component
// ─────────────────────────────────────────────────────────────────────────────
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  variant = 'default',
  ...props
}: CalendarProps) {
  // Setup theme-specific class overrides for DayPicker
  const themeClasses = {
    default: {
      day: cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'h-9 w-9 p-0 font-normal text-slate-200 aria-selected:opacity-100 hover:bg-white/10 hover:text-white transition-all'
      ),
      day_selected:
        'aria-selected:bg-cyan-500 aria-selected:text-slate-950 aria-selected:font-bold aria-selected:shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:aria-selected:bg-cyan-400 focus:aria-selected:bg-cyan-400',
      day_today: 'bg-white/10 text-cyan-400 font-semibold',
    },
    neon: {
      day: cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'h-9 w-9 p-0 font-mono font-normal text-cyan-100/80 aria-selected:opacity-100 hover:bg-cyan-500/15 hover:text-cyan-300 transition-all'
      ),
      day_selected:
        'aria-selected:bg-cyan-500/30 aria-selected:text-cyan-200 aria-selected:border aria-selected:border-cyan-400 aria-selected:shadow-[0_0_20px_rgba(0,240,255,0.4),inset_0_0_15px_rgba(0,240,255,0.2)] aria-selected:font-bold',
      day_today: 'text-cyan-400 border border-cyan-500/40 font-semibold',
    },
    glass: {
      day: cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'h-9 w-9 p-0 font-normal text-slate-200 aria-selected:opacity-100 hover:bg-white/10 hover:text-white transition-all'
      ),
      day_selected:
        'aria-selected:bg-white/20 aria-selected:text-white aria-selected:border aria-selected:border-border-strong aria-selected:shadow-[0_0_20px_rgba(255,255,255,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] aria-selected:backdrop-blur-md aria-selected:font-bold',
      day_today: 'bg-white/10 text-white font-semibold border border-border-strong',
    },
  };

  const theme = themeClasses[variant];

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(calendarVariants({ variant }), className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: cn(
          'text-sm font-medium',
          variant === 'neon' && 'text-cyan-400 tracking-widest'
        ),
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          variant === 'neon' ? 'hover:text-cyan-300' : 'hover:bg-white/10'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: cn(
          'text-slate-400 rounded-md w-9 font-normal text-[0.8rem]',
          variant === 'neon' && 'text-cyan-500/70'
        ),
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20',
        day: theme.day,
        day_range_end: 'day-range-end',
        day_selected: theme.day_selected,
        day_today: theme.day_today,
        day_outside: 'day-outside text-slate-600 opacity-40',
        day_disabled: 'text-slate-600 opacity-30',
        day_range_middle: 'aria-selected:bg-white/10 aria-selected:text-slate-100',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
