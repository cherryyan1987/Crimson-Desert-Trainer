'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { Clock } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function LatestUpdates({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  return (
    <section
      id={section.id}
      className={cn('py-16 md:py-24', section.className, className)}
    >
      <div className="container">
        <ScrollAnimation>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Clock className="text-primary mx-auto mb-4 size-10" />
              <h2 className="text-foreground font-serif mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {section.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-8">
                {section.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {section.updates?.map((update: SectionItem, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-[1.6rem] border border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,238,229,0.88))] p-6 shadow-lg shadow-[#1b1008]/7"
                  >
                    <div className="text-primary/70 mb-3 text-xs font-semibold tracking-[0.24em] uppercase">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <p className="text-foreground text-base leading-7">
                      {update.title}
                    </p>
                  </div>
                ))}

              {section.note && (
                <div className="mt-6 border-t border-[#d9c4b1] pt-6">
                  <p className="text-muted-foreground text-sm leading-7">
                    {section.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
