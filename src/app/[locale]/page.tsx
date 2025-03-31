import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from '@/lib/navigation';

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" className="text-lg px-8">
              {t('hero.cta')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              {tCommon('buttons.learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('problem.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                {t('problem.description')}
              </p>
              <p className="text-lg mb-6 font-medium text-red-600 dark:text-red-400">
                {t('problem.aiImpact')}
              </p>
              <ul className="space-y-3">
                {t.raw('problem.consequences').map((consequence, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{consequence}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
              <img 
                src="/placeholder-problem.svg" 
                alt="Problème des lettres de motivation générées par IA" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="w-full py-16 px-4 bg-blue-50 dark:bg-blue-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('solution.title')}
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {t('solution.description')}
          </p>
          
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {t('solution.steps.title')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-2">1</span>
                  Étape 1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('solution.steps.step1')}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-2">2</span>
                  Étape 2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('solution.steps.step2')}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-2">3</span>
                  Étape 3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('solution.steps.step3')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('benefits.title')}
          </h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {t('benefits.description')}
          </p>
          
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {t('benefits.list.title')}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>✅ {t.raw('benefits.list.authenticity').split(':')[0]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.raw('benefits.list.authenticity').split(':')[1]}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>✅ {t.raw('benefits.list.timeEfficiency').split(':')[0]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.raw('benefits.list.timeEfficiency').split(':')[1]}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>✅ {t.raw('benefits.list.engagement').split(':')[0]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.raw('benefits.list.engagement').split(':')[1]}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>✅ {t.raw('benefits.list.softSkills').split(':')[0]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.raw('benefits.list.softSkills').split(':')[1]}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('conclusion.title')}
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            {t('conclusion.description')}
          </p>
          <Link href="/signup">
            <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              {tCommon('buttons.getStarted')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
