import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { docsNavigation } from '@/lib/docs-navigation';
import Link from 'next/link';
import { Badge } from '@siberui/react';
import { Box, ChevronRight } from 'lucide-react';

const headings = docsNavigation
  .filter((group) => group.title !== 'Getting Started')
  .map((group) => ({
    id: group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    text: group.title,
    level: 2,
  }));

export default function ComponentsOverviewPage() {
  const componentGroups = docsNavigation.filter(
    (group) => group.title !== 'Getting Started',
  );

  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Component Directory"
        description="Explore the complete collection of SiberUI components engineered for high-density, dark-mode cyberpunk interfaces."
      />

      {componentGroups.map((group) => {
        const groupKey = group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return (
          <ContentSection
            key={group.title}
            title={group.title}
            id={groupKey}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-center justify-between rounded-xl border border-border-hairline bg-white/5 p-4 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-500/20">
                      <Box className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-100 transition-colors group-hover:text-cyan-300">
                          {item.title}
                        </span>
                        {item.isNew && (
                          <Badge variant="neon" size="sm" className="text-[10px] px-1.5 py-0">
                            NEW
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-cyan-400" />
                </Link>
              ))}
            </div>
          </ContentSection>
        );
      })}
    </ComponentPage>
  );
}
