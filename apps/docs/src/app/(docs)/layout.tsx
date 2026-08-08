import { TopNav } from '@/components/docs/layout/TopNav';
import { DocSidebar } from '@/components/docs/layout/DocSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#06090e] text-slate-100">
      <TopNav />
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-start px-6">
        <DocSidebar />
        <main className="relative py-8 lg:px-8 xl:px-12 w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
