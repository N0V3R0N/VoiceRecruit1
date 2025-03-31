import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/theme-provider';

export function Providers({ children, locale, messages }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider defaultTheme="light" storageKey="recrutement-ia-theme">
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
