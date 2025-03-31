import { useTranslations } from 'next-intl';
import { 
  Dashboard, 
  DashboardSidebar, 
  DashboardSidebarNav, 
  DashboardSidebarNavItem,
  DashboardContent,
  DashboardHeader,
  DashboardTitle,
  DashboardDescription,
  DashboardMain
} from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { locales } from '@/i18n/settings';

// Generate static params for Next.js static site generation
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function DashboardPage() {
  const t = useTranslations('dashboard');
  
  return (
    <Dashboard>
      <DashboardSidebar>
        <DashboardSidebarNav>
          <DashboardSidebarNavItem href="/dashboard" active={true}>
            {t('sidebar.overview')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/positions" active={false}>
            {t('sidebar.positions')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/candidates" active={false}>
            {t('sidebar.candidates')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/interviews" active={false}>
            {t('sidebar.interviews')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/script-creation" active={false}>
            Création de script
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/voice-config" active={false}>
            {t('sidebar.voiceConfig')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/settings" active={false}>
            {t('sidebar.settings')}
          </DashboardSidebarNavItem>
        </DashboardSidebarNav>
      </DashboardSidebar>
      
      <DashboardContent>
        <DashboardHeader>
          <DashboardTitle>{t('welcome', { name: 'Jean Dupont' })}</DashboardTitle>
          <DashboardDescription>
            Voici un aperçu de vos activités de recrutement
          </DashboardDescription>
        </DashboardHeader>
        
        <DashboardMain>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('stats.interviews')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +5 depuis la semaine dernière
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('stats.completed')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">
                  75% de taux de complétion
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('stats.pending')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">
                  En attente de réponse
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('stats.positions')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  Postes en cours de recrutement
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Entretiens récents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Marie Laurent</p>
                      <p className="text-sm text-muted-foreground">Développeur Frontend</p>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        Complété
                      </span>
                      <Button variant="ghost" size="sm" className="ml-2">
                        Voir
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Thomas Dubois</p>
                      <p className="text-sm text-muted-foreground">Développeur Backend</p>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        Complété
                      </span>
                      <Button variant="ghost" size="sm" className="ml-2">
                        Voir
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Sophie Martin</p>
                      <p className="text-sm text-muted-foreground">Designer UX/UI</p>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        En attente
                      </span>
                      <Button variant="ghost" size="sm" className="ml-2">
                        Voir
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  Voir tous les entretiens
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="accent" className="w-full">
                    Créer un nouveau poste
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Créer un nouveau script d'entretien
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Configurer les voix IA
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Inviter un collègue
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-medium mb-2">Conseil du jour</h4>
                  <p className="text-sm text-muted-foreground">
                    Personnalisez vos questions d'entretien en fonction du poste pour obtenir des réponses plus pertinentes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </DashboardMain>
      </DashboardContent>
    </Dashboard>
  );
}
