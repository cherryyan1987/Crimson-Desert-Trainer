'use client';

import { Link } from '@/core/i18n/navigation';
import { Button } from '@/shared/components/ui/button';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function TextSection({
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
        <div className="mx-auto max-w-4xl">
          <ScrollAnimation>
            <div className="text-center text-balance">
              <h2 className="text-foreground mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-muted-foreground text-lg leading-8">
                  {section.description}
                </p>
              )}
            </div>
          </ScrollAnimation>

          {section.extended_description && (
            <ScrollAnimation delay={0.12}>
              <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-lg leading-8">
                {section.extended_description}
              </p>
            </ScrollAnimation>
          )}

          {section.note && (
            <ScrollAnimation delay={0.2}>
              <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-base leading-7">
                {section.note}
              </p>
            </ScrollAnimation>
          )}

          {section.items && section.items.length > 0 && (
            <ScrollAnimation delay={0.24}>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {section.items.map((item: SectionItem, idx: number) => (
                  <div
                    key={idx}
                    className="bg-card border-border rounded-2xl border p-6 shadow-sm"
                  >
                    <h3 className="text-foreground mb-3 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          )}

          {section.buttons && section.buttons.length > 0 && (
            <ScrollAnimation delay={0.3}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {section.buttons.map((button, idx) => (
                  <Button
                    asChild
                    key={idx}
                    variant={button.variant || 'default'}
                    size={button.size || 'default'}
                  >
                    <Link
                      href={button.url ?? ''}
                      target={button.target ?? '_self'}
                    >
                      {button.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </ScrollAnimation>
          )}
        </div>
      </div>
    </section>
  );
}
