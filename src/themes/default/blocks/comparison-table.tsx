'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

interface ComparisonItem {
  feature: string;
  wemod: string;
  trainer: string;
}

export function ComparisonTable({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const comparisonItems = section.comparison_items as ComparisonItem[];

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
            <div className="overflow-hidden rounded-[2rem] border border-[#dcc8b6] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,239,231,0.9))] shadow-xl shadow-[#1b1008]/8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#dcc8b6] bg-[#f5ebe3]">
                      <th className="text-foreground px-6 py-4 text-left font-serif text-lg font-semibold">
                        Feature
                      </th>
                      <th className="text-primary px-6 py-4 text-left font-serif text-lg font-semibold">
                        WeMod
                      </th>
                      <th className="text-foreground px-6 py-4 text-left font-serif text-lg font-semibold">
                        Traditional Trainer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonItems?.map((item, idx) => (
                      <tr
                        key={idx}
                        className={cn(
                          'border-b border-[#e8d4c2] transition-colors duration-200 hover:bg-[#f9f4ef]',
                          idx === comparisonItems.length - 1 && 'border-b-0'
                        )}
                      >
                        <td className="text-foreground px-6 py-4 font-medium">
                          {item.feature}
                        </td>
                        <td className="text-muted-foreground px-6 py-4 text-sm">
                          {item.wemod}
                        </td>
                        <td className="text-muted-foreground px-6 py-4 text-sm">
                          {item.trainer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}