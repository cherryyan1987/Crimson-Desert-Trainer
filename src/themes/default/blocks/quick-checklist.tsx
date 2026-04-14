'use client';

import { CheckCircle2 } from 'lucide-react';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function QuickChecklist({
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

        <ScrollAnimation delay={0.15}>
          <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,238,229,0.88))] p-8 shadow-xl shadow-[#1b1008]/8 md:p-10">
            <ul className="space-y-4">
              {section.items?.map((item: SectionItem, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 size-5 flex-shrink-0" />
                  <span className="text-foreground text-base leading-7">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
