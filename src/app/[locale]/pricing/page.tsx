import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Link } from '@/lib/navigation';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const tCommon = useTranslations('common');

  return (
    <div className="flex flex-col items-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full flex">
            <button className="px-6 py-2 rounded-full bg-white dark:bg-gray-700 shadow-sm">
              {t('monthly')}
            </button>
            <button className="px-6 py-2 rounded-full">
              {t('yearly')} <span className="text-green-500 text-sm font-medium">{t('savePercent')}</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">{t('plans.starter.name')}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">${t('plans.starter.price')}</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/mo</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                {t('plans.starter.description')}
              </p>
            </CardHeader>
            <CardContent className="pb-8">
              <ul className="space-y-4">
                {t.raw('plans.starter.features').map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                {t('plans.starter.cta')}
              </Button>
            </CardFooter>
          </Card>

          {/* Professional Plan */}
          <Card className="border-blue-500 dark:border-blue-400 relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              {t('plans.professional.popular')}
            </div>
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">{t('plans.professional.name')}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">${t('plans.professional.price')}</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/mo</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                {t('plans.professional.description')}
              </p>
            </CardHeader>
            <CardContent className="pb-8">
              <ul className="space-y-4">
                {t.raw('plans.professional.features').map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="accent">
                {t('plans.professional.cta')}
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">{t('plans.enterprise.name')}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{t('plans.enterprise.price')}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                {t('plans.enterprise.description')}
              </p>
            </CardHeader>
            <CardContent className="pb-8">
              <ul className="space-y-4">
                {t.raw('plans.enterprise.features').map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {t('plans.enterprise.cta')}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
