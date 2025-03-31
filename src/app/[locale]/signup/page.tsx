import { useTranslations } from 'next-intl';
import { Form, FormField, FormLabel, FormDescription, FormMessage } from '@/components/forms/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Link } from '@/lib/navigation';
import { locales } from '@/i18n/settings';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function SignupPage() {
  const t = useTranslations('signup');
  
  return (
    <div className="flex justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">{t('title')}</CardTitle>
          <CardDescription>
            {t('haveAccount')} <Link href="/login" className="text-blue-600 hover:underline">{t('login')}</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form className="space-y-4">
            <FormField>
              <FormLabel>{t('name')}</FormLabel>
              <Input type="text" placeholder="Jean Dupont" />
            </FormField>
            <FormField>
              <FormLabel>{t('email')}</FormLabel>
              <Input type="email" placeholder="exemple@entreprise.com" />
            </FormField>
            <FormField>
              <FormLabel>{t('company')}</FormLabel>
              <Input type="text" placeholder="Nom de l'entreprise" />
            </FormField>
            <FormField>
              <FormLabel>{t('password')}</FormLabel>
              <Input type="password" />
            </FormField>
            <FormField>
              <FormLabel>{t('confirmPassword')}</FormLabel>
              <Input type="password" />
            </FormField>
            <div className="flex items-center mt-4">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                {t('terms')}
              </label>
            </div>
          </Form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="accent">
            {t('submit')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
