'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { Lightbulb } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function Alternatives({
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
              <Lightbulb className="text-primary mx-auto mb-4 size-10" />
              <h2 className="text-foreground font-serif mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {section.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-8">
                {section.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {section.alternatives?.map(
                  (alternative: SectionItem, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 rounded-[1.6rem] border border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,239,231,0.88))] p-5 shadow-lg shadow-[#1b1008]/6"
                  >
                    <div className="bg-primary/12 text-primary flex size-10 flex-shrink-0 items-center justify-center rounded-xl">
                      <svg
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground font-medium">
                      {alternative.title}
                    </span>
                  </div>
                  )
                )}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
