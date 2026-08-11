import { TopNav } from '@/components/docs/layout/TopNav';
import { DocSidebar } from '@/components/docs/layout/DocSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg">
      <TopNav />
      <div className="flex w-full flex-1 items-start">
        <DocSidebar />
        <main className="relative w-full min-w-0 max-w-[1600px] px-6 py-8 lg:px-8 xl:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}
