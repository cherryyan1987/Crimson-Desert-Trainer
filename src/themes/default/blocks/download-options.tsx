'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { Button } from '@/shared/components/ui/button';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function DownloadOptions({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const columns = section.columns === 1 ? 'grid-cols-1' : 'md:grid-cols-2';

  return (
    <section
      id={section.id}
      className={cn('py-16 md:py-24', section.className, className)}
    >
      <div className="container">
        <ScrollAnimation>
          <div className="mx-auto max-w-4xl text-center text-balance">
            <h2 className="text-foreground mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-muted-foreground mb-6 md:mb-12">
                {section.description}
              </p>
            )}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className={cn('mx-auto grid max-w-6xl gap-6', columns)}>
            {section.items?.map((item, idx) => (
              <article
                key={idx}
                className={cn(
                  'bg-card border-border rounded-2xl border p-8 shadow-sm',
                  item.featured && 'border-primary/40 ring-primary/10 ring-4'
                )}
              >
                <div
                  className={cn(
                    'grid gap-8',
                    item.image?.src &&
                      'lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center'
                  )}
                >
                  {item.image?.src && (
                    <div className="overflow-hidden rounded-2xl border border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,239,231,0.88))] p-3 shadow-lg shadow-[#1b1008]/8">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt || item.title || ''}
                        width={item.image.width || 1588}
                        height={item.image.height || 1160}
                        className="h-full w-full rounded-xl object-cover"
                        sizes="(max-width: 1024px) 100vw, 320px"
                        unoptimized={item.image.src.startsWith('http')}
                      />
                    </div>
                  )}

                  <div>
                    {item.badge && (
                      <div className="bg-primary/10 text-primary mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold">
                        {item.badge}
                      </div>
                    )}

                    <h3 className="text-foreground mb-4 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-muted-foreground mb-6 text-base leading-7">
                        {item.description}
                      </p>
                    )}

                    {item.items && item.items.length > 0 && (
                      <ul className="mb-6 space-y-3">
                        {item.items.map(
                          (bullet: SectionItem, bulletIdx: number) => (
                            <li key={bulletIdx} className="flex items-start gap-3">
                              <CheckCircle2 className="text-primary mt-0.5 size-4 flex-shrink-0" />
                              <span className="text-foreground text-sm">
                                {bullet.title}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}

                    {item.url && item.text && (
                      <Button
                        asChild
                        variant={item.variant || 'default'}
                        className="w-full sm:w-auto"
                      >
                        <Link href={item.url} target={item.target || '_self'}>
                          <span>{item.text}</span>
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    )}

                    {item.tip && (
                      <p className="text-muted-foreground mt-4 text-sm">
                        {item.tip}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
