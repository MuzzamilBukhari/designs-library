import Link from 'next/link';
import { sections } from '@/lib/registry';

export default function Home() {
  const sectionList = Object.values(sections);

  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">
            Design Sections Library
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A collection of highly polished, interactive React components and sections ready to be composed into stunning applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectionList.map((section) => (
            <Link 
              key={section.id} 
              href={`/preview/${section.id}`}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 leading-tight">
                    {section.name}
                  </h2>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
                  {section.description}
                </p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-[10px] font-medium text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                  {section.category}
                </span>
                <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  Preview
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
