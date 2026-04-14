'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function QuickInfo({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  return (
    <section
      id={section.id}
      className={cn('relative py-8 md:py-12', section.className, className)}
    >
      <div className="container">
        <ScrollAnimation>
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#1a120f] px-6 py-8 text-white shadow-2xl shadow-black/15 backdrop-blur-md md:px-10 md:py-10">
            <h2 className="mb-8 text-center font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {section.items?.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-white/8 bg-white/6 px-4 py-5 text-center">
                  <div className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                    {item.title}
                  </div>
                  <div className="mt-2 text-base font-semibold text-white md:text-lg">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
