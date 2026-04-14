import { readdirSync } from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';

import { envConfigs } from '@/config';
import { defaultLocale, locales } from '@/config/locale';

function getDynamicPageSlugs() {
  const pagesDir = path.join(process.cwd(), 'src/config/locale/messages/en/pages');

  try {
    return readdirSync(pagesDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => file.replace(/\.json$/, ''))
      .sort();
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const now = new Date();
  const slugs = getDynamicPageSlugs();

  const entries = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const slug of slugs) {
    for (const locale of locales) {
      const pathname =
        slug === 'index'
          ? locale === defaultLocale
            ? '/'
            : `/${locale}`
          : locale === defaultLocale
            ? `/${slug}`
            : `/${locale}/${slug}`;

      entries.set(pathname, {
        url: `${baseUrl}${pathname}`,
        lastModified: now,
        changeFrequency: slug === 'index' ? 'daily' : 'weekly',
        priority: slug === 'index' ? 1 : 0.8,
      });
    }
  }

  return Array.from(entries.values());
}
