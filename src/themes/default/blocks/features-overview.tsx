'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function FeaturesOverview({
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
            <p className="text-muted-foreground mb-6 text-lg leading-8 md:mb-12 lg:mb-16">
              {section.description}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {section.feature_categories?.map(
              (category: SectionItem, idx: number) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-[1.75rem] border border-[#d5c1ad] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,235,226,0.78))] p-7 shadow-xl shadow-[#1b1008]/8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-primary/70 mb-5 text-xs font-semibold tracking-[0.22em] uppercase">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-foreground mb-5 font-serif text-2xl font-semibold">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items?.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-0.5 size-4 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm leading-6">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              )
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
