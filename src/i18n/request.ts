import { getRequestConfig } from 'next-intl/server';
import { locales } from './settings';

export default getRequestConfig(async ({ locale }) => {
  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default
  };
}); 