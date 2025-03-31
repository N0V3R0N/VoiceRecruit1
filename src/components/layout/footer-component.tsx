import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Footer, FooterSection, FooterColumn, FooterTitle, FooterLink, FooterCopyright } from '@/components/layout/footer';

export default function FooterComponent() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <Footer>
      <FooterSection>
        <FooterColumn>
          <FooterTitle>VoiceRecruit</FooterTitle>
          <FooterLink href="/about">À propos</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/careers">Carrières</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Produit</FooterTitle>
          <FooterLink href="/features">{t('navigation.features')}</FooterLink>
          <FooterLink href="/pricing">{t('navigation.pricing')}</FooterLink>
          <FooterLink href="/demo">Démonstration</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Ressources</FooterTitle>
          <FooterLink href="/documentation">Documentation</FooterLink>
          <FooterLink href="/guides">Guides</FooterLink>
          <FooterLink href="/api">API</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Légal</FooterTitle>
          <FooterLink href="/privacy">Confidentialité</FooterLink>
          <FooterLink href="/terms">Conditions d'utilisation</FooterLink>
          <FooterLink href="/cookies">Cookies</FooterLink>
        </FooterColumn>
      </FooterSection>
      <FooterCopyright>
        © {currentYear} VoiceRecruit. Tous droits réservés.
      </FooterCopyright>
    </Footer>
  );
}
