'use client';

import { Providers } from '@/components/providers';
import RootLayout from '@/components/layout/root-layout';

export default function ClientProviders({ children, locale, messages }) {
  return (
    <Providers locale={locale} messages={messages}>
      <RootLayout params={{ locale }}>
        {children}
      </RootLayout>
    </Providers>
  );
} 