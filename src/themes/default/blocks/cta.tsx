'use client';

import { Link } from '@/core/i18n/navigation';
import { SmartIcon } from '@/shared/blocks/common/smart-icon';
import { Button } from '@/shared/components/ui/button';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function Cta({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const buttons = section.buttons || (section.button ? [section.button] : []);

  return (
    <section
      id={section.id}
      className={cn('py-16 md:py-24', section.className, className)}
    >
      <div className="container">
        <div className="rounded-[2rem] border border-[#d7c1ac] bg-[linear-gradient(135deg,rgba(244,234,223,0.9),rgba(255,255,255,0.98))] px-6 py-12 text-center shadow-2xl shadow-[#1b1008]/8 md:px-12 md:py-16">
          <ScrollAnimation>
            <h2 className="text-foreground font-serif text-4xl font-semibold text-balance lg:text-5xl">
              {section.title}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.15}>
            <p
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg leading-8"
              dangerouslySetInnerHTML={{ __html: section.description ?? '' }}
            />
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {buttons?.map((button, idx) => (
                <Button
                  asChild
                  size={button.size || 'default'}
                  variant={button.variant || 'default'}
                  className="h-11 px-6 text-sm font-semibold"
                  key={idx}
                >
                  <Link
                    href={button.url || ''}
                    target={button.target || '_self'}
                  >
                    {button.icon && <SmartIcon name={button.icon as string} />}
                    <span>{button.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
