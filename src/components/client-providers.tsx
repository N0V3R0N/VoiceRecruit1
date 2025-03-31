'use client';

import { Providers } from '@/components/providers';
import RootLayout from '@/components/layout/root-layout';
import { ReactNode } from 'react';

export default function ClientProviders({ 
  children, 
  locale, 
  messages 
}: { 
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  return (
    <Providers locale={locale} messages={messages}>
      <RootLayout params={{ locale }}>
        {children}
      </RootLayout>
    </Providers>
  );
} 