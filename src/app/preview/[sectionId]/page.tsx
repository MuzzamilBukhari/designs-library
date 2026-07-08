import { notFound } from 'next/navigation';
import { sections } from '@/lib/registry';

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ sectionId: string }>;
}) {
  const { sectionId } = await params;
  
  const section = sections[sectionId];
  
  if (!section) {
    notFound();
  }

  const SectionComponent = section.component;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-slate-900 text-white p-4 text-sm flex justify-between items-center z-50">
        <div>
          <span className="font-semibold text-slate-300">Previewing: </span>
          <span className="font-bold">{section.name}</span>
        </div>
        <div className="text-slate-400">
          ID: {section.id} &middot; Category: {section.category}
        </div>
      </div>
      <main className="flex-grow">
        <SectionComponent />
      </main>
    </div>
  );
}
