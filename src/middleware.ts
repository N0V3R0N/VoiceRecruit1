import { NextRequest } from 'next/server';
import { locales } from '@/lib/navigation';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales,
  defaultLocale: 'fr',
  localeDetection: true,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
