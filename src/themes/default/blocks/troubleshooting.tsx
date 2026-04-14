'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from '@/core/i18n/navigation';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function Troubleshooting({
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
              <AlertCircle className="text-primary mx-auto mb-4 size-12" />
              <h2 className="text-foreground font-serif mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {section.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-8">
                {section.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,239,231,0.88))] p-8 shadow-xl shadow-[#1b1008]/8 md:p-12">
              <div className="grid gap-4 md:grid-cols-2">
                {section.issues?.map((issue: SectionItem, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-[#e2d0bf] bg-white/70 p-4"
                  >
                    <div className="bg-destructive/10 text-destructive mt-1 flex size-6 flex-shrink-0 items-center justify-center rounded-full font-semibold">
                      !
                    </div>
                    <p className="text-foreground flex-1 text-base leading-7">
                      {issue.title}
                    </p>
                  </div>
                ))}
              </div>

              {section.note && (
                <p className="text-muted-foreground mt-6 text-sm leading-7">
                  {section.note}
                </p>
              )}

              {section.link && (
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href={section.link.url} className="gap-2">
                      {section.link.title}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
