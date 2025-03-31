import { locales } from '@/i18n/settings';

// Generate static params for Next.js static site generation
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export { default } from '@/components/dashboard/voice-config-page';
