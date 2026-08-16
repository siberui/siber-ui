'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const profileHeroVariants = cva(
  'relative overflow-hidden rounded-2xl bg-[#050811] border text-slate-100 p-6 sm:p-8 transition-all duration-300 shadow-2xl',
  {
    variants: {
      signal: {
        cyan: 'border-cyan-500/30 [--ph-signal:#00d9e8] [--ph-glow:rgba(0,217,232,0.15)]',
        violet: 'border-violet-500/30 [--ph-signal:#a78bfa] [--ph-glow:rgba(167,139,250,0.15)]',
        emerald: 'border-emerald-500/30 [--ph-signal:#34d399] [--ph-glow:rgba(52,211,153,0.15)]',
        amber: 'border-amber-500/30 [--ph-signal:#f5a524] [--ph-glow:rgba(245,165,36,0.15)]',
        rose: 'border-rose-500/30 [--ph-signal:#fb5a7e] [--ph-glow:rgba(251,90,126,0.15)]',
      },
    },
    defaultVariants: {
      signal: 'cyan',
    },
  },
);

export interface ProfileHeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof profileHeroVariants> {
  /** Top-left tactical dossier tag */
  tag?: string;
  /** Security clearance label (e.g. 'LVL-5 // OMNI') */
  clearance?: string;
  /** Status indicator label */
  status?: 'online' | 'busy' | 'offline' | 'classified';
}

const ProfileHero = React.forwardRef<HTMLDivElement, ProfileHeroProps>(
  (
    {
      className,
      signal = 'cyan',
      tag = 'OPERATIVE // DOSSIER',
      clearance = 'CLEARANCE: LVL-5',
      status = 'online',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn(profileHeroVariants({ signal, className }))} {...props}>
        {/* Subtle Cyber-Grid & Ambient Radial Glow Substrate */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--ph-glow),transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Top 1px Laser Hairline */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--ph-signal)] to-transparent opacity-80" />

        {/* Top HUD Telemetry Status Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--ph-signal)] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--ph-signal)] uppercase">
              {tag}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded uppercase">
              {clearance}
            </span>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-300">
              <span
                className={cn(
                  'h-1.5 w-1.5 rounded-full',
                  status === 'online' && 'bg-emerald-400',
                  status === 'busy' && 'bg-amber-400',
                  status === 'offline' && 'bg-slate-500',
                  status === 'classified' && 'bg-rose-400',
                )}
              />
              <span className="uppercase">{status}</span>
            </div>
          </div>
        </div>

        {/* Inner Content Area */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          {children}
        </div>
      </div>
    );
  },
);
ProfileHero.displayName = 'ProfileHero';

export interface ProfileAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  status?: 'online' | 'busy' | 'offline' | 'classified';
  /** Show high-tech corner reticles around avatar */
  reticles?: boolean;
}

const ProfileAvatar = React.forwardRef<HTMLDivElement, ProfileAvatarProps>(
  (
    {
      className,
      src,
      alt,
      fallback = 'AGENT',
      status = 'online',
      reticles = true,
      ...props
    },
    ref,
  ) => {
    const statusColors = {
      online: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
      busy: 'bg-amber-400 shadow-[0_0_8px_rgba(245,165,36,0.8)]',
      offline: 'bg-slate-500',
      classified: 'bg-rose-400 shadow-[0_0_8px_rgba(251,90,126,0.8)]',
    };

    return (
      <div ref={ref} className={cn('relative group shrink-0 p-1', className)} {...props}>
        {/* Tactical Corner HUD Reticles */}
        {reticles && (
          <>
            <span className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
            <span className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
            <span className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
            <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
          </>
        )}

        {/* Avatar Frame Vessel */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-white/[0.12] bg-[#020409] flex items-center justify-center p-1 group-hover:border-cyan-400/60 transition-colors duration-300 shadow-inner">
          <div className="w-full h-full rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center relative">
            {src ? (
              <img src={src} alt={alt || fallback} className="w-full h-full object-cover" />
            ) : (
              <span className="font-mono text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider">
                {fallback}
              </span>
            )}
          </div>
        </div>

        {/* Status indicator with ping aura */}
        <div className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center">
          {status === 'online' && (
            <span className="absolute h-3 w-3 rounded-full bg-emerald-400 opacity-75 animate-ping" />
          )}
          <div
            className={cn(
              'h-3 w-3 rounded-full border-2 border-[#050811] relative z-10',
              statusColors[status],
            )}
          />
        </div>
      </div>
    );
  },
);
ProfileAvatar.displayName = 'ProfileAvatar';

const ProfileInfo = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex-1 text-center md:text-left space-y-2.5 min-w-0', className)}
      {...props}
    />
  ),
);
ProfileInfo.displayName = 'ProfileInfo';

const ProfileTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        'text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  ),
);
ProfileTitle.displayName = 'ProfileTitle';

const ProfileSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xs font-mono text-cyan-400 font-semibold tracking-wide', className)}
    {...props}
  />
));
ProfileSubtitle.displayName = 'ProfileSubtitle';

const ProfileMeta = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs font-mono text-slate-300 pt-1',
        className,
      )}
      {...props}
    />
  ),
);
ProfileMeta.displayName = 'ProfileMeta';

export interface ProfileMetaItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label?: string;
  copyable?: boolean;
}

const ProfileMetaItem = React.forwardRef<HTMLDivElement, ProfileMetaItemProps>(
  ({ className, icon, label, children, copyable = false, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
      if (!copyable) return;
      const textToCopy = typeof children === 'string' ? children : label || '';
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    return (
      <div
        ref={ref}
        onClick={handleCopy}
        className={cn(
          'flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300 transition-colors',
          copyable && 'cursor-pointer hover:border-cyan-400 hover:text-white',
          className,
        )}
        {...props}
      >
        {icon && <span className="text-cyan-400 text-xs shrink-0">{icon}</span>}
        {label && <span className="text-slate-500 font-semibold">{label}:</span>}
        <span>{children}</span>
        {copyable && (
          <span className="text-[9px] text-cyan-400 font-bold ml-1">
            {copied ? '✓ COPIED' : '⧉'}
          </span>
        )}
      </div>
    );
  },
);
ProfileMetaItem.displayName = 'ProfileMetaItem';

const ProfileActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3',
        className,
      )}
      {...props}
    />
  ),
);
ProfileActions.displayName = 'ProfileActions';

export {
  ProfileHero,
  ProfileAvatar,
  ProfileInfo,
  ProfileTitle,
  ProfileSubtitle,
  ProfileMeta,
  ProfileMetaItem,
  ProfileActions,
};
