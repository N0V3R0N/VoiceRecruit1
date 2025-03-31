import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Navbar, NavbarBrand, NavbarItems, NavbarItem, NavbarActions } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import ThemeSwitcher from '@/components/theme-switcher';

export default function Header() {
  const t = useTranslations('common');

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="text-xl font-bold">
          VoiceRecruit
        </Link>
      </NavbarBrand>
      <NavbarItems>
        <NavbarItem href="/features">
          {t('navigation.features')}
        </NavbarItem>
        <NavbarItem href="/pricing">
          {t('navigation.pricing')}
        </NavbarItem>
      </NavbarItems>
      <NavbarActions>
        <ThemeSwitcher />
        <div className="flex items-center gap-2 mx-4">
          <Link href="/fr" locale="fr" className={`p-2 rounded-md ${t.locale() === 'fr' ? 'font-bold' : ''}`}>
            FR
          </Link>
          <Link href="/en" locale="en" className={`p-2 rounded-md ${t.locale() === 'en' ? 'font-bold' : ''}`}>
            EN
          </Link>
        </div>
        <Link href="/login">
          <Button variant="ghost">{t('navigation.login')}</Button>
        </Link>
        <Link href="/signup">
          <Button variant="accent">{t('navigation.signup')}</Button>
        </Link>
      </NavbarActions>
    </Navbar>
  );
}
