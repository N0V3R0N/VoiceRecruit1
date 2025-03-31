'use client';

import { useState, useEffect } from 'react';
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
import { 
  VoiceAIConfig, 
  VoiceAIConfigSection, 
  VoiceAIQuestion,
  VoiceAIPreview
} from '@/components/dashboard/voice-ai-config';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAvailableVoices, generateSpeech } from '@/lib/voice-ai';

export default function VoiceConfigPage() {
  const t = useTranslations('voiceConfig');
  const tDashboard = useTranslations('dashboard');
  
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  
  // Charger les voix disponibles
  useEffect(() => {
    const loadVoices = async () => {
      try {
        setIsLoading(true);
        const availableVoices = await getAvailableVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0) {
          setSelectedVoice(availableVoices[0].id);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des voix:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadVoices();
  }, []);
  
  // Créer un élément audio pour la lecture
  useEffect(() => {
    const audio = new Audio();
    audio.onended = () => setIsPlaying(false);
    setAudioElement(audio);
    
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);
  
  // Fonction pour prévisualiser une voix
  const previewVoice = async (voiceId) => {
    try {
      setIsLoading(true);
      const sampleText = "Bonjour, je suis l'assistant virtuel de VoiceRecruit. Comment puis-je vous aider aujourd'hui ?";
      const audioSrc = await generateSpeech(sampleText, voiceId);
      
      setAudioUrl(audioSrc);
      
      if (audioElement) {
        audioElement.src = audioSrc;
        audioElement.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Erreur lors de la prévisualisation de la voix:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fonction pour sélectionner une voix
  const selectVoice = (voiceId) => {
    setSelectedVoice(voiceId);
  };
  
  // Fonction pour enregistrer la configuration
  const saveConfiguration = async () => {
    try {
      setIsLoading(true);
      // Simuler un appel API pour enregistrer la configuration
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Configuration enregistrée avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la configuration:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Dashboard>
      <DashboardSidebar>
        <DashboardSidebarNav>
          <DashboardSidebarNavItem href="/dashboard" active={false}>
            {tDashboard('sidebar.overview')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/positions" active={false}>
            {tDashboard('sidebar.positions')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/candidates" active={false}>
            {tDashboard('sidebar.candidates')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/interviews" active={false}>
            {tDashboard('sidebar.interviews')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/script-creation" active={false}>
            Création de script
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/voice-config" active={true}>
            {tDashboard('sidebar.voiceConfig')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/settings" active={false}>
            {tDashboard('sidebar.settings')}
          </DashboardSidebarNavItem>
        </DashboardSidebarNav>
      </DashboardSidebar>
      
      <DashboardContent>
        <DashboardHeader>
          <DashboardTitle>{t('title')}</DashboardTitle>
          <DashboardDescription>
            {t('description')}
          </DashboardDescription>
        </DashboardHeader>
        
        <DashboardMain>
          <div className="space-y-6">
            <VoiceAIConfigSection title={t('voiceSelection.title')}>
              <p className="text-sm text-muted-foreground mb-6">
                {t('voiceSelection.description')}
              </p>
              
              {isLoading && <p className="text-center py-4">Chargement des voix...</p>}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {voices.map((voice) => (
                  <div 
                    key={voice.id}
                    className={`border rounded-lg p-4 flex flex-col items-center space-y-3 cursor-pointer ${selectedVoice === voice.id ? "bg-accent/10" : ""}`}
                    onClick={() => selectVoice(voice.id)}
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-xl">
                        {voice.gender === 'female' ? 'F' : 'M'}{voices.indexOf(voice) + 1}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">{voice.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Voix {voice.gender === 'female' ? 'féminine' : 'masculine'} {voice.language === 'fr' ? 'française' : 'anglaise'}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          previewVoice(voice.id);
                        }}
                        disabled={isLoading || isPlaying}
                      >
                        {isPlaying && selectedVoice === voice.id ? 'Lecture...' : t('voiceSelection.preview')}
                      </Button>
                      <Button 
                        variant={selectedVoice === voice.id ? "accent" : "ghost"} 
                        size="sm"
                        onClick={() => selectVoice(voice.id)}
                      >
                        {selectedVoice === voice.id ? t('voiceSelection.current') : 'Sélectionner'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <h4 className="font-medium mb-2">Conseil</h4>
                <p className="text-sm text-muted-foreground">
                  Choisissez une voix qui correspond à l'image de votre entreprise. Les voix naturelles augmentent l'engagement des candidats.
                </p>
              </div>
            </VoiceAIConfigSection>
            
            <VoiceAIConfigSection title="Paramètres avancés">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Vitesse de parole</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Lente</span>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="1.5" 
                      step="0.1" 
                      defaultValue="1" 
                      className="flex-1"
                    />
                    <span className="text-sm">Rapide</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Ton de la voix</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Formel</span>
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.1" 
                      defaultValue="0.5" 
                      className="flex-1"
                    />
                    <span className="text-sm">Amical</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Pauses entre les phrases</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Courtes</span>
                    <input 
                      type="range" 
                      min="0.2" 
                      max="1.5" 
                      step="0.1" 
                      defaultValue="0.8" 
                      className="flex-1"
                    />
                    <span className="text-sm">Longues</span>
                  </div>
                </div>
              </div>
            </VoiceAIConfigSection>
            
            <div className="flex justify-end">
              <Button 
                variant="accent"
                onClick={saveConfiguration}
                disabled={isLoading}
              >
                {isLoading ? 'Enregistrement...' : t('save')}
              </Button>
            </div>
          </div>
        </DashboardMain>
      </DashboardContent>
    </Dashboard>
  );
}
