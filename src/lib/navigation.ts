import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['fr', 'en'];
export const defaultLocale = 'fr';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ 
  locales,
  localePrefix: 'always' 
});
