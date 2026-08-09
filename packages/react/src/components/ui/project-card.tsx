import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const projectCardVariants = cva(
  'group relative backdrop-blur-md transition-all duration-300 p-[1px] flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]',
  {
    variants: {
      status: {
        active: 'bg-white/[0.08] hover:bg-cyan-500/40',
        archived: 'bg-white/[0.08] hover:bg-slate-600/40',
        classified: 'bg-white/[0.08] hover:bg-purple-500/40',
      },
    },
    defaultVariants: {
      status: 'active',
    },
  }
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
        clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
      }}
      {...props}
    >
      {/* Inner surface layer clipped slightly smaller to expose 1px border around all edges including diagonal cuts */}
      <div
        className="w-full h-full bg-slate-950/90 group-hover:bg-slate-900/50 transition-colors duration-300 flex flex-col flex-1 overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 13.2px) 0, 100% 13.2px, 100% 100%, 13.2px 100%, 0 calc(100% - 13.2px))',
        }}
      >
        <div className="relative z-10 flex flex-col flex-1 h-full">
          {children}
        </div>
      </div>
    </div>
  )
);
ProjectCard.displayName = 'ProjectCard';

export interface ProjectCardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
}

const ProjectCardMedia = React.forwardRef<HTMLDivElement, ProjectCardMediaProps>(
  ({ className, src, alt, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative w-full h-44 bg-slate-900/90 overflow-hidden border-b border-white/[0.06]', className)}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || 'Project Preview'}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-600 font-mono text-xs">
          [MEDIA_UNAVAILABLE]
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      <div className="relative z-20 w-full h-full">{children}</div>
    </div>
  )
);
ProjectCardMedia.displayName = 'ProjectCardMedia';

const ProjectCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-5 pb-2 flex-1 flex flex-col', className)} {...props} />
  )
);
ProjectCardHeader.displayName = 'ProjectCardHeader';

const ProjectCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-base font-bold text-white font-sans group-hover:text-cyan-400 transition-colors duration-200 tracking-tight', className)}
      {...props}
    />
  )
);
ProjectCardTitle.displayName = 'ProjectCardTitle';

const ProjectCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-xs text-slate-400 font-sans leading-relaxed mt-1.5 flex-1', className)} {...props} />
  )
);
ProjectCardDescription.displayName = 'ProjectCardDescription';

const ProjectCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-5 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3 mt-auto', className)}
      {...props}
    />
  )
);
ProjectCardFooter.displayName = 'ProjectCardFooter';

export {
  ProjectCard,
  ProjectCardMedia,
  ProjectCardHeader,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardFooter,
};
