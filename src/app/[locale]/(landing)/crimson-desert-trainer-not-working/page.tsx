import { getTranslations, setRequestLocale } from 'next-intl/server';

import { getThemePage } from '@/core/theme';
import { getMetadata } from '@/shared/lib/seo';
import { DynamicPage } from '@/shared/types/blocks/landing';

export const revalidate = 3600;

export const generateMetadata = getMetadata({
  metadataKey: 'pages.not-working.metadata',
  canonicalUrl: '/crimson-desert-trainer-not-working',
});

export default async function TrainerNotWorkingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('pages.not-working');
  const page: DynamicPage = t.raw('page');

  const Page = await getThemePage('dynamic-page');

  return <Page locale={locale} page={page} />;
}
