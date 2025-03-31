import { ThemeProvider } from '@/components/theme-provider';
import { Providers } from '@/components/providers';
import RootLayout from '@/components/layout/root-layout';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/settings';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  
  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers locale={locale} messages={messages}>
          <RootLayout params={{ locale }}>
            {children}
          </RootLayout>
        </Providers>
      </body>
    </html>
  );
}
