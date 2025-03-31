import { Providers } from '@/components/providers';
import RootLayout from '@/components/layout/root-layout';
import { locales } from '@/i18n/settings';

// Server Component that handles static params generation
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// Server Component that loads messages and renders the layout
export default async function LocaleLayout({ children, params: { locale } }) {
  // Server-side data fetching
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
