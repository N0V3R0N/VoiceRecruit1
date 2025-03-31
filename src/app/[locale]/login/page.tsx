import { useTranslations } from 'next-intl';
import { Form, FormField, FormLabel, FormDescription, FormMessage } from '@/components/forms/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Link } from '@/lib/navigation';
import { locales } from '@/i18n/settings';

// Force the page to be dynamically generated instead of statically generated
export const dynamic = 'force-dynamic';

// Generate static params for Next.js static site generation
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function LoginPage() {
  const t = useTranslations('login');
  
  return (
    <div className="flex justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">{t('title')}</CardTitle>
          <CardDescription>
            {t('noAccount')} <Link href="/signup" className="text-blue-600 hover:underline">{t('signUp')}</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form className="space-y-4">
            <FormField>
              <FormLabel>{t('email')}</FormLabel>
              <Input type="email" placeholder="exemple@entreprise.com" />
            </FormField>
            <FormField>
              <FormLabel>{t('password')}</FormLabel>
              <Input type="password" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                    {t('rememberMe')}
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/forgot-password" className="text-blue-600 hover:underline">
                    {t('forgotPassword')}
                  </Link>
                </div>
              </div>
            </FormField>
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
