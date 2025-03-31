import { ThemeProvider } from '@/components/theme-provider';
import { Providers } from '@/components/providers';
import RootLayout from '@/components/layout/root-layout';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  
  const messages = (await import(`../../../messages/${locale}.json`)).default;

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
