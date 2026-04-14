import { readdirSync } from 'fs';
import path from 'path';

import { envConfigs } from '..';

export const localeNames: any = {
  en: 'English',
  zh: '中文',
};

export const locales = ['en', 'zh'];

export const defaultLocale = envConfigs.locale;

export const localePrefix = 'as-needed';

export const localeDetection = false;

export const localeMessagesRootPath = '@/config/locale/messages';

const staticLocaleMessagesPaths = [
  'common',
  'landing',
  'showcases',
  'blog',
  'updates',
  'pricing',
  'settings/sidebar',
  'settings/profile',
  'settings/security',
  'settings/billing',
  'settings/payments',
  'settings/credits',
  'settings/apikeys',
  'admin/sidebar',
  'admin/users',
  'admin/roles',
  'admin/permissions',
  'admin/categories',
  'admin/posts',
  'admin/payments',
  'admin/subscriptions',
  'admin/credits',
  'admin/settings',
  'admin/apikeys',
  'admin/ai-tasks',
  'admin/chats',
  'ai/music',
  'ai/chat',
  'ai/image',
  'ai/video',
  'activity/sidebar',
  'activity/ai-tasks',
  'activity/chats',
];

function getPageLocaleMessagePaths() {
  const pagesDir = path.join(process.cwd(), 'src/config/locale/messages/en/pages');

  try {
    return readdirSync(pagesDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => `pages/${file.replace(/\.json$/, '')}`)
      .sort();
  } catch {
    // Fall back to the known-good core page set if filesystem access is not available.
    return [
      'pages/index',
      'pages/download',
      'pages/cheats',
      'pages/not-working',
      'pages/pricing',
      'pages/showcases',
      'pages/blog',
      'pages/updates',
    ];
  }
}

export const localeMessagesPaths = [
  ...staticLocaleMessagesPaths,
  ...getPageLocaleMessagePaths(),
];
