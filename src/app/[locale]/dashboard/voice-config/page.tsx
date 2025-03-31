import { locales } from '@/i18n/settings';
import VoiceConfigPage from '@/components/dashboard/voice-config-page';

// Force the page to be dynamically generated instead of statically generated
export const dynamic = 'force-dynamic';

// Generate static params for Next.js static site generation
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default VoiceConfigPage;
