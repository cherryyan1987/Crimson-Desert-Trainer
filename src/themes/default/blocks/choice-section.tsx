'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { SmartIcon } from '@/shared/blocks/common/smart-icon';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function ChoiceSection({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const choices = section.choices as Array<{
    title: string;
    description: string;
    icon: string;
    recommendation: string;
  }>;

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
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {choices?.map((choice, idx) => (
              <div
                key={idx}
                className={cn(
                  'group overflow-hidden rounded-[2rem] border p-8 shadow-xl transition-all duration-300 hover:-translate-y-1',
                  idx === 0
                    ? 'border-[#d4c4b0] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,235,226,0.85))] shadow-[#1b1008]/8'
                    : 'border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,239,231,0.88))] shadow-[#1b1008]/6'
                )}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className={cn(
                    'flex size-14 items-center justify-center rounded-xl',
                    idx === 0 ? 'bg-primary/15 text-primary' : 'bg-primary/10 text-primary'
                  )}>
                    <SmartIcon name={choice.icon} size={28} />
                  </div>
                  {choice.recommendation && (
                    <div className="flex items-center gap-2 rounded-full border border-[#d4c4b0] bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#8b7355]">
                      <CheckCircle2 className="size-3" />
                      {choice.recommendation}
                    </div>
                  )}
                </div>

                <h3 className="text-foreground mb-4 font-serif text-2xl font-semibold">
                  {choice.title}
                </h3>

                <p className="text-muted-foreground text-base leading-7">
                  {choice.description}
                </p>

                <div className="mt-6 pt-6 border-t border-[#e8d4c2]/50">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#8b7355]">
                    <div className={cn(
                      'size-2 rounded-full',
                      idx === 0 ? 'bg-primary' : 'bg-primary/70'
                    )} />
                    {idx === 0 ? 'Recommended for beginners' : 'For experienced users'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}