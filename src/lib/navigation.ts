import { createNavigation } from 'next-intl/navigation';

export const locales = ['fr', 'en'];
export const defaultLocale = 'fr';

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix: 'always'
});
