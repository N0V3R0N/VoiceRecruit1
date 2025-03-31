'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/theme-provider';
import { ReactNode } from 'react';

export function Providers({ 
  children, 
  locale, 
  messages 
}: { 
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider defaultTheme="light" storageKey="recrutement-ia-theme">
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
