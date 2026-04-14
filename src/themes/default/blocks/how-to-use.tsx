'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function HowToUse({
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
            <p className="text-muted-foreground mb-6 text-lg leading-8 md:mb-12">
              {section.description}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="mx-auto max-w-5xl">
            <ol className="relative space-y-5 before:absolute before:top-4 before:bottom-4 before:left-4 before:w-px before:bg-[linear-gradient(180deg,rgba(180,84,47,0.55),rgba(180,84,47,0))] md:before:left-6">
              {section.steps?.map((step: SectionItem, idx: number) => (
                <li key={idx} className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full font-semibold shadow-lg shadow-primary/25 md:size-12">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 rounded-[1.6rem] border border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,239,231,0.9))] p-5 shadow-lg shadow-[#1b1008]/6">
                    <h4 className="text-foreground mb-2 text-lg font-semibold md:text-xl">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-7 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {section.note && (
              <div className="mt-8 rounded-[1.5rem] border border-[#dcc8b6] bg-[#201511] p-5">
                <p className="text-sm leading-7 text-white/72">
                  {section.note}
                </p>
              </div>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
