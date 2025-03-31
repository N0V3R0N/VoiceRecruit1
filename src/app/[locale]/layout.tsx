import { locales } from '@/i18n/settings';
import ClientProviders from '@/components/client-providers';

// This is a Server Component that handles static params generation
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
        <ClientProviders locale={locale} messages={messages}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
