import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const profileHeroVariants = cva(
  'relative overflow-hidden rounded-2xl bg-slate-950/80 border backdrop-blur-xl p-6 sm:p-8 transition-all duration-300',
  {
    variants: {
      accent: {
        cyan: 'border-cyan-500/30 before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-cyan-400/60 before:to-transparent',
        purple: 'border-purple-500/30 before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-purple-400/60 before:to-transparent',
        emerald: 'border-emerald-500/30 before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-emerald-400/60 before:to-transparent',
      },
    },
    defaultVariants: {
      accent: 'cyan',
    },
  }
);

export interface ProfileHeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof profileHeroVariants> {}

const ProfileHero = React.forwardRef<HTMLDivElement, ProfileHeroProps>(
  ({ className, accent, children, ...props }, ref) => (
    <div ref={ref} className={cn(profileHeroVariants({ accent, className }))} {...props}>
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
        {children}
      </div>
    </div>
  )
);
ProfileHero.displayName = 'ProfileHero';

export interface ProfileAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  status?: 'online' | 'busy' | 'offline';
}

const ProfileAvatar = React.forwardRef<HTMLDivElement, ProfileAvatarProps>(
  ({ className, src, alt, fallback = 'USER', status = 'online', ...props }, ref) => {
    const statusColors = {
      online: 'bg-emerald-400',
      busy: 'bg-amber-400',
      offline: 'bg-slate-500',
    };

    return (
      <div ref={ref} className={cn('relative group flex-shrink-0', className)} {...props}>
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900/90 flex items-center justify-center p-1 group-hover:border-cyan-400/60 transition-colors duration-300">
          <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
            {src ? (
              <img src={src} alt={alt || fallback} className="w-full h-full object-cover" />
            ) : (
              <span className="font-mono text-2xl font-bold text-cyan-400 tracking-wider">
                {fallback}
              </span>
            )}
          </div>
        </div>
        <div
          className={cn(
            'absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-950',
            statusColors[status]
          )}
        />
      </div>
    );
  }
);
ProfileAvatar.displayName = 'ProfileAvatar';

const ProfileInfo = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex-1 text-center md:text-left space-y-2', className)} {...props} />
  )
);
ProfileInfo.displayName = 'ProfileInfo';

const ProfileTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn('text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight', className)}
      {...props}
    >
      {children}
    </h1>
  )
);
ProfileTitle.displayName = 'ProfileTitle';

const ProfileSubtitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-xs font-mono text-cyan-400 font-semibold tracking-wide', className)} {...props} />
  )
);
ProfileSubtitle.displayName = 'ProfileSubtitle';

const ProfileMeta = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-mono text-slate-400 pt-1',
        className
      )}
      {...props}
    />
  )
);
ProfileMeta.displayName = 'ProfileMeta';

const ProfileActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3', className)}
      {...props}
    />
  )
);
ProfileActions.displayName = 'ProfileActions';

export {
  ProfileHero,
  ProfileAvatar,
  ProfileInfo,
  ProfileTitle,
  ProfileSubtitle,
  ProfileMeta,
  ProfileActions,
};
