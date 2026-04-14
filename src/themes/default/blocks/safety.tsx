'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { ShieldAlert } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function Safety({
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
            <div className="rounded-[2rem] border border-[#35231b] bg-[radial-gradient(circle_at_top_left,rgba(184,84,47,0.28),transparent_26%),linear-gradient(180deg,#1f1511,#120d0a)] p-8 text-white shadow-2xl shadow-black/25 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <ShieldAlert className="text-[#f0bf85] size-8" />
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {section.title}
                </h2>
              </div>

              <p className="mb-8 text-lg leading-8 text-white/75">
                {section.description}
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {section.safety_tips?.map((tip: SectionItem, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/6 p-4"
                  >
                    <div className="mt-1 flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f0bf85]/18 text-[#f0bf85]">
                      <svg
                        className="size-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="flex-1 text-base font-medium text-white">
                      {tip.title}
                    </p>
                  </div>
                ))}
              </div>

              {section.note && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm leading-7 text-white/62">
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
