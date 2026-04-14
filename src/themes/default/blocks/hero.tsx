import Image from 'next/image';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { SmartIcon } from '@/shared/blocks/common';
import { Button } from '@/shared/components/ui/button';
import { Highlighter } from '@/shared/components/ui/highlighter';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

import { SocialAvatars } from './social-avatars';

export function Hero({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const highlightText = section.highlight_text ?? '';
  const immersive = section.variant === 'immersive' || !!section.background_video?.src;
  let texts = null;
  if (highlightText) {
    texts = section.title?.split(highlightText, 2);
  }

  if (immersive) {
    return (
      <section
        id={section.id}
        data-immersive-hero="true"
        className={cn(
          'relative isolate overflow-hidden pt-28 pb-20 text-white md:pt-40 md:pb-24',
          section.className,
          className
        )}
      >
        <div className="absolute inset-0 -z-20 bg-[#120c0a]" />

        {section.background_video?.src && (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <video
              className="h-full w-full object-cover"
              src={section.background_video.src}
              poster={section.image?.src}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(202,122,63,0.24),transparent_36%),radial-gradient(circle_at_right,rgba(255,226,176,0.14),transparent_24%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-[#120c0a]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
          </div>
        )}

        <div className="container relative">
          <div
            className={cn(
              'grid gap-12 lg:items-center lg:gap-16 xl:gap-20',
              section.image?.src
                ? 'lg:grid-cols-[minmax(0,1.14fr)_minmax(340px,0.82fr)]'
                : 'lg:grid-cols-1'
            )}
          >
            <div
              className={cn(
                section.image?.src
                  ? 'flex h-full max-w-3xl flex-col justify-center lg:min-h-[760px]'
                  : 'mx-auto max-w-5xl text-center'
              )}
            >
              {section.label && (
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-white/80 uppercase backdrop-blur-md">
                  <Sparkles className="size-3.5" />
                  <span>{section.label}</span>
                </div>
              )}

              {texts && texts.length > 0 ? (
                <h1 className="font-serif text-5xl leading-none font-semibold text-balance sm:text-6xl lg:text-7xl">
                  {texts[0]}
                  <span className="text-[#f0bf85]">{highlightText}</span>
                  {texts[1]}
                </h1>
              ) : (
                <h1 className="font-serif text-5xl leading-none font-semibold text-balance sm:text-6xl lg:text-7xl">
                  {section.title}
                </h1>
              )}

              <p
                className={cn(
                  'mt-7 text-lg leading-8 text-white/78 md:text-xl',
                  section.image?.src ? 'max-w-2xl' : 'mx-auto max-w-3xl'
                )}
                dangerouslySetInnerHTML={{ __html: section.description ?? '' }}
              />

              {section.buttons && (
                <div
                  className={cn(
                    'mt-10 flex flex-wrap gap-4',
                    section.image?.src ? '' : 'justify-center'
                  )}
                >
                  {section.buttons.map((button, idx) => (
                    <Button
                      asChild
                      size={button.size || 'default'}
                      variant={button.variant || 'default'}
                      className={cn(
                        'h-11 px-6 text-sm font-semibold',
                        button.variant === 'outline' &&
                          'border-white/20 bg-white/8 text-white hover:bg-white/14'
                      )}
                      key={idx}
                    >
                      <Link
                        href={button.url ?? ''}
                        target={button.target ?? '_self'}
                      >
                        {button.icon && (
                          <SmartIcon name={button.icon as string} />
                        )}
                        <span>{button.title}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              )}

              <div
                className={cn(
                  'mt-10 grid gap-4 sm:grid-cols-2',
                  section.image?.src ? '' : 'mx-auto max-w-4xl'
                )}
              >
                {section.note && (
                  <div className="rounded-2xl border border-white/12 bg-black/30 p-5 backdrop-blur-md">
                    {section.note_label && (
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#f0bf85]">
                      <ShieldCheck className="size-4" />
                      <span>{section.note_label}</span>
                    </div>
                    )}
                    <p className="text-sm leading-7 text-white/72">
                      {section.note}
                    </p>
                  </div>
                )}

                {section.tip && (
                  <div className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    {section.tip_label && (
                      <div className="mb-2 text-sm font-semibold tracking-[0.2em] text-white/65 uppercase">
                        {section.tip_label}
                      </div>
                    )}
                    <p
                      className="text-sm leading-7 text-white/70"
                      dangerouslySetInnerHTML={{ __html: section.tip ?? '' }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-3 lg:pl-2 xl:pl-4">
              {section.image?.src && (
                <div className="relative mx-auto w-full max-w-[30rem] overflow-hidden rounded-[2rem] border border-white/12 bg-black/25 p-3 shadow-2xl shadow-black/40 backdrop-blur-md xl:max-w-[32rem]">
                  <div className="absolute inset-x-6 top-5 z-10 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#ff8e6a]" />
                    <span className="size-2 rounded-full bg-[#f0bf85]" />
                    <span className="size-2 rounded-full bg-white/60" />
                  </div>
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />
                  <Image
                    className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
                    src={section.image.src}
                    alt={section.image.alt || ''}
                    width={section.image.width || 900}
                    height={section.image.height || 1100}
                    priority
                    quality={85}
                    unoptimized={section.image.src.startsWith('http')}
                  />
                </div>
              )}

              {section.items && section.items.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-3 lg:mx-auto lg:w-full lg:max-w-[30rem] lg:grid-cols-1 xl:max-w-[32rem]">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-md"
                    >
                      <div className="text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase">
                        {item.title}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={section.id}
      className={cn(
        `pt-24 pb-8 md:pt-36 md:pb-8`,
        section.className,
        className
      )}
    >
      {section.announcement && (
        <Link
          href={section.announcement.url || ''}
          target={section.announcement.target || '_self'}
          className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto mb-8 flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
        >
          <span className="text-foreground text-sm">
            {section.announcement.title}
          </span>
          <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

          <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
              <span className="flex size-6">
                <ArrowRight className="m-auto size-3" />
              </span>
              <span className="flex size-6">
                <ArrowRight className="m-auto size-3" />
              </span>
            </div>
          </div>
        </Link>
      )}

      <div className="relative mx-auto max-w-full px-4 text-center md:max-w-5xl">
        {texts && texts.length > 0 ? (
          <h1 className="text-foreground font-serif text-4xl font-semibold text-balance sm:mt-12 sm:text-6xl">
            {texts[0]}
            <Highlighter action="underline" color="#FF9800">
              {highlightText}
            </Highlighter>
            {texts[1]}
          </h1>
        ) : (
          <h1 className="text-foreground font-serif text-4xl font-semibold text-balance sm:mt-12 sm:text-6xl">
            {section.title}
          </h1>
        )}

        <p
          className="text-muted-foreground mt-8 mb-8 text-lg text-balance"
          dangerouslySetInnerHTML={{ __html: section.description ?? '' }}
        />

        {section.buttons && (
          <div className="flex items-center justify-center gap-4">
            {section.buttons.map((button, idx) => (
              <Button
                asChild
                size={button.size || 'default'}
                variant={button.variant || 'default'}
                className="px-4 text-sm"
                key={idx}
              >
                <Link href={button.url ?? ''} target={button.target ?? '_self'}>
                  {button.icon && <SmartIcon name={button.icon as string} />}
                  <span>{button.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        )}

        {section.tip && (
          <p
            className="text-muted-foreground mt-6 block text-center text-sm"
            dangerouslySetInnerHTML={{ __html: section.tip ?? '' }}
          />
        )}

        {section.show_avatars && (
          <SocialAvatars tip={section.avatars_tip || ''} />
        )}
      </div>

      {(section.image?.src || section.image_invert?.src) && (
        <div className="border-foreground/10 relative mt-8 border-y sm:mt-16">
          <div className="relative z-10 mx-auto max-w-6xl border-x px-3">
            <div className="border-x">
              <div
                aria-hidden
                className="h-3 w-full bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_4px)] opacity-5"
              />
              {section.image_invert?.src && (
                <Image
                  className="border-border/25 relative z-2 hidden w-full border dark:block"
                  src={section.image_invert.src}
                  alt={section.image_invert.alt || section.image?.alt || ''}
                  width={
                    section.image_invert.width || section.image?.width || 1200
                  }
                  height={
                    section.image_invert.height || section.image?.height || 630
                  }
                  sizes="(max-width: 768px) 100vw, 1200px"
                  loading="lazy"
                  fetchPriority="high"
                  quality={75}
                  unoptimized={section.image_invert.src.startsWith('http')}
                />
              )}
              {section.image?.src && (
                <Image
                  className="border-border/25 relative z-2 block w-full border dark:hidden"
                  src={section.image.src}
                  alt={section.image.alt || section.image_invert?.alt || ''}
                  width={
                    section.image.width || section.image_invert?.width || 1200
                  }
                  height={
                    section.image.height || section.image_invert?.height || 630
                  }
                  sizes="(max-width: 768px) 100vw, 1200px"
                  loading="lazy"
                  fetchPriority="high"
                  quality={75}
                  unoptimized={section.image.src.startsWith('http')}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {section.background_image?.src && (
        <div className="absolute inset-0 -z-10 hidden h-full w-full overflow-hidden md:block">
          <div className="from-background/80 via-background/80 to-background absolute inset-0 z-10 bg-gradient-to-b" />
          <Image
            src={section.background_image.src}
            alt={section.background_image.alt || ''}
            className="object-cover opacity-60 blur-[0px]"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 0vw, 100vw"
            quality={70}
            unoptimized={section.background_image.src.startsWith('http')}
          />
        </div>
      )}
    </section>
  );
}
