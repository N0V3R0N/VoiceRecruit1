'use client';

import Header from '@/components/layout/header';
import FooterComponent from '@/components/layout/footer-component';

export default function RootLayout({ children, params }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <FooterComponent />
    </div>
  );
}
