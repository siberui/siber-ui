'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const projectCardVariants = cva(
  'group relative backdrop-blur-md transition-all duration-300 p-[1px] flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.8)]',
  {
    variants: {
      status: {
        active: 'bg-cyan-500/30 hover:bg-cyan-400/60 [--pc-color:#00d9e8]',
        deployed: 'bg-emerald-500/30 hover:bg-emerald-400/60 [--pc-color:#34d399]',
        archived: 'bg-slate-700/30 hover:bg-slate-500/50 [--pc-color:#94a3b8]',
        classified: 'bg-violet-500/30 hover:bg-violet-400/60 [--pc-color:#a78bfa]',
      },
    },
    defaultVariants: {
      status: 'active',
    },
  },
);

export interface ProjectCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof projectCardVariants> {}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, status, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(projectCardVariants({ status, className }))}
      style={{
        clipPath:
          'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
      }}
      {...props}
    >
      {/* Inner surface layer with matching nested clip-path */}
      <div
        className="w-full h-full bg-[#050812] group-hover:bg-[#070b18] transition-colors duration-300 flex flex-col flex-1 overflow-hidden"
        style={{
          clipPath:
            'polygon(0 0, calc(100% - 13.2px) 0, 100% 13.2px, 100% 100%, 13.2px 100%, 0 calc(100% - 13.2px))',
        }}
      >
        <div className="relative z-10 flex flex-col flex-1 h-full">{children}</div>
      </div>
    </div>
  ),
);
ProjectCard.displayName = 'ProjectCard';

export interface ProjectCardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  badge?: string;
}

const ProjectCardMedia = React.forwardRef<HTMLDivElement, ProjectCardMediaProps>(
  ({ className, src, alt, badge, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative w-full h-44 bg-[#03050c] overflow-hidden border-b border-white/[0.08] group',
        className,
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || 'Project Preview'}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#020409] text-slate-600 font-mono text-xs">
          [IMAGE // TELEMETRY_FEED_OFFLINE]
        </div>
      )}

      {/* Cyberpunk CRT Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] opacity-40 group-hover:opacity-60 transition-opacity" />

      {/* Media Top Badge */}
      {badge && (
        <div className="absolute top-2.5 right-2.5 z-20">
          <span className="px-2 py-0.5 rounded bg-black/80 border border-white/[0.15] text-[9px] font-mono font-bold text-cyan-400 tracking-wider backdrop-blur-md uppercase">
            {badge}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-transparent to-transparent opacity-90" />
      <div className="relative z-20 w-full h-full">{children}</div>
    </div>
  ),
);
ProjectCardMedia.displayName = 'ProjectCardMedia';

const ProjectCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-5 pb-2 flex-1 flex flex-col', className)} {...props} />
  ),
);
ProjectCardHeader.displayName = 'ProjectCardHeader';

const ProjectCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-base font-bold text-white font-sans group-hover:text-cyan-400 transition-colors duration-200 tracking-tight flex items-center justify-between',
      className,
    )}
    {...props}
  />
));
ProjectCardTitle.displayName = 'ProjectCardTitle';

const ProjectCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-xs text-slate-400 font-sans leading-relaxed mt-1.5 flex-1 line-clamp-2',
      className,
    )}
    {...props}
  />
));
ProjectCardDescription.displayName = 'ProjectCardDescription';

export interface ProjectCardStackProps extends React.HTMLAttributes<HTMLDivElement> {
  tags?: string[];
}

const ProjectCardStack = React.forwardRef<HTMLDivElement, ProjectCardStackProps>(
  ({ className, tags = [], children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-wrap gap-1.5 pt-3', className)} {...props}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[9px] font-mono text-slate-300 group-hover:border-cyan-500/30 transition-colors"
        >
          {tag}
        </span>
      ))}
      {children}
    </div>
  ),
);
ProjectCardStack.displayName = 'ProjectCardStack';

const ProjectCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'p-4 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3 mt-auto bg-[#03060f] text-xs font-mono text-slate-400',
        className,
      )}
      {...props}
    />
  ),
);
ProjectCardFooter.displayName = 'ProjectCardFooter';

export {
  ProjectCard,
  ProjectCardMedia,
  ProjectCardHeader,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardStack,
  ProjectCardFooter,
  projectCardVariants,
};
