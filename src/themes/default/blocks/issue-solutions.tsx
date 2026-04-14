'use client';

import { AlertTriangle } from 'lucide-react';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function IssueSolutions({
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
          <div className="mx-auto max-w-4xl text-center text-balance">
            <h2 className="text-foreground font-serif mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-muted-foreground text-lg leading-8">
                {section.description}
              </p>
            )}
          </div>
        </ScrollAnimation>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          {section.items?.map((item: SectionItem, idx: number) => (
            <ScrollAnimation key={idx} delay={0.1 * (idx + 1)}>
              <article className="h-full rounded-[1.8rem] border border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,239,231,0.9))] p-7 shadow-lg shadow-[#1b1008]/7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="bg-destructive/10 text-destructive flex size-10 items-center justify-center rounded-full">
                    <AlertTriangle className="size-5" />
                  </div>
                  <h3 className="text-foreground font-serif text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>

                {item.description && (
                  <p className="text-muted-foreground mb-6 text-base leading-7">
                    {item.description}
                  </p>
                )}

                {item.items && item.items.length > 0 && (
                  <ul className="space-y-3">
                    {item.items.map((bullet: SectionItem, bulletIdx: number) => (
                      <li key={bulletIdx} className="flex items-start gap-3">
                        <span className="bg-primary mt-2 size-1.5 flex-shrink-0 rounded-full" />
                        <span className="text-foreground text-sm leading-7">
                          {bullet.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
