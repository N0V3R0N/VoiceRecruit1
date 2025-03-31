'use client';

import { useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Add types for conversation
type ConversationMessage = {
  sender: 'ai' | 'user';
  message: string;
};

export default function ScriptCreationPage() {
  const t = useTranslations('voiceConfig');
  const tDashboard = useTranslations('dashboard');
  
  // État pour les questions
  const [questions, setQuestions] = useState<string[]>([
    "Pourriez-vous vous présenter et me parler de votre parcours professionnel ?",
    "Qu'est-ce qui vous motive à postuler pour ce poste ?",
    "Pouvez-vous me parler d'un projet dont vous êtes particulièrement fier ?"
  ]);
  
  // État pour le script
  const [scriptName, setScriptName] = useState<string>("");
  const [scriptDescription, setScriptDescription] = useState<string>("");
  const [scriptDuration, setScriptDuration] = useState<string>("10-15 minutes");
  const [introduction, setIntroduction] = useState<string>("");
  const [conclusion, setConclusion] = useState<string>("");
  
  // État pour le test
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] = useState<string>("Sophie");
  const [conversation, setConversation] = useState<ConversationMessage[]>([
    { sender: 'ai', message: "Bonjour, je suis l'assistant virtuel de VoiceRecruit. Merci de prendre le temps de participer à cet entretien préliminaire. Pourriez-vous vous présenter et me parler de votre parcours professionnel ?" },
    { sender: 'user', message: "Bonjour, je m'appelle Jean Dupont. Je suis développeur web avec 5 ans d'expérience..." }
  ]);
  
  // Fonction pour ajouter une question
  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };
  
  // Fonction pour modifier une question
  const updateQuestion = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };
  
  // Fonction pour supprimer une question
  const deleteQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };
  
  // Fonction pour démarrer le test
  const startTest = () => {
    setIsTesting(true);
    // Simuler une conversation en temps réel
    setTimeout(() => {
      setConversation([
        ...conversation,
        { sender: 'ai', message: "Qu'est-ce qui vous motive à postuler pour ce poste ?" }
      ]);
    }, 2000);
  };
  
  // Fonction pour écouter un exemple de voix
  const previewVoice = (voice: string) => {
    // Simuler la lecture d'un exemple de voix
    console.log(`Prévisualisation de la voix: ${voice}`);
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
          <DashboardSidebarNavItem href="/dashboard/script-creation" active={true}>
            Création de script
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/voice-config" active={false}>
            {tDashboard('sidebar.voiceConfig')}
          </DashboardSidebarNavItem>
          <DashboardSidebarNavItem href="/dashboard/settings" active={false}>
            {tDashboard('sidebar.settings')}
          </DashboardSidebarNavItem>
        </DashboardSidebarNav>
      </DashboardSidebar>
      
      <DashboardContent>
        <DashboardHeader>
          <DashboardTitle>Création et test de script d'entretien</DashboardTitle>
          <DashboardDescription>
            Créez votre script d'entretien personnalisé et testez-le en temps réel
          </DashboardDescription>
        </DashboardHeader>
        
        <DashboardMain>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <VoiceAIConfigSection title="Informations générales">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nom du script</label>
                    <Input 
                      placeholder="Ex: Entretien développeur frontend" 
                      value={scriptName}
                      onChange={(e) => setScriptName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea 
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Décrivez brièvement l'objectif de cet entretien"
                      value={scriptDescription}
                      onChange={(e) => setScriptDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Durée estimée</label>
                    <select 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={scriptDuration}
                      onChange={(e) => setScriptDuration(e.target.value)}
                    >
                      <option>5-10 minutes</option>
                      <option>10-15 minutes</option>
                      <option>15-20 minutes</option>
                      <option>20-30 minutes</option>
                    </select>
                  </div>
                </div>
              </VoiceAIConfigSection>
              
              <VoiceAIConfigSection title="Introduction">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    L'introduction est la première chose que le candidat entendra. Présentez-vous et expliquez le déroulement de l'entretien.
                  </p>
                  <textarea 
                    className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Ex: Bonjour, je suis l'assistant virtuel de [Entreprise]. Merci de prendre le temps de participer à cet entretien préliminaire. Je vais vous poser quelques questions sur votre expérience et vos motivations..."
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                  />
                </div>
              </VoiceAIConfigSection>
              
              <VoiceAIConfigSection title="Questions">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Ajoutez les questions que vous souhaitez poser au candidat.
                  </p>
                  
                  <div className="space-y-3">
                    {questions.map((question, index) => (
                      <VoiceAIQuestion 
                        key={index}
                        question={question} 
                        onEdit={() => {
                          const newQuestion = prompt("Modifier la question:", question);
                          if (newQuestion) updateQuestion(index, newQuestion);
                        }} 
                        onDelete={() => deleteQuestion(index)}
                      />
                    ))}
                  </div>
                  
                  <Button className="w-full mt-2" onClick={addQuestion}>
                    + Ajouter une question
                  </Button>
                </div>
              </VoiceAIConfigSection>
              
              <VoiceAIConfigSection title="Conclusion">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    La conclusion permet de remercier le candidat et de lui expliquer les prochaines étapes.
                  </p>
                  <textarea 
                    className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Ex: Merci pour vos réponses. Cet entretien est maintenant terminé. Votre candidature sera examinée par notre équipe de recrutement et nous vous contacterons prochainement pour vous informer de la suite du processus..."
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                  />
                </div>
              </VoiceAIConfigSection>
              
              <div className="flex justify-between">
                <Button variant="outline">Enregistrer comme brouillon</Button>
                <Button variant="accent">Enregistrer le script</Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Test du script en temps réel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
                      <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium mb-2">Tester avec votre microphone</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Cliquez sur le bouton ci-dessous pour commencer le test et parler dans votre microphone
                      </p>
                      <Button 
                        variant="accent" 
                        className="mx-auto"
                        onClick={startTest}
                        disabled={isTesting}
                      >
                        {isTesting ? "Test en cours..." : "Commencer le test"}
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Sélection de la voix IA</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div 
                          className={`border rounded-lg p-3 flex items-center space-x-3 cursor-pointer ${selectedVoice === "Sophie" ? "bg-accent/10" : ""}`}
                          onClick={() => setSelectedVoice("Sophie")}
                        >
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600">F1</span>
                          </div>
                          <div>
                            <p className="font-medium">Sophie</p>
                            <p className="text-xs text-muted-foreground">Voix féminine française</p>
                          </div>
                        </div>
                        <div 
                          className={`border rounded-lg p-3 flex items-center space-x-3 cursor-pointer ${selectedVoice === "Thomas" ? "bg-accent/10" : ""}`}
                          onClick={() => setSelectedVoice("Thomas")}
                        >
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600">M1</span>
                          </div>
                          <div>
                            <p className="font-medium">Thomas</p>
                            <p className="text-xs text-muted-foreground">Voix masculine française</p>
                          </div>
                        </div>
                        <div 
                          className={`border rounded-lg p-3 flex items-center space-x-3 cursor-pointer ${selectedVoice === "Claire" ? "bg-accent/10" : ""}`}
                          onClick={() => setSelectedVoice("Claire")}
                        >
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600">F2</span>
                          </div>
                          <div>
                            <p className="font-medium">Claire</p>
                            <p className="text-xs text-muted-foreground">Voix féminine française</p>
                          </div>
                        </div>
                        <div 
                          className={`border rounded-lg p-3 flex items-center space-x-3 cursor-pointer ${selectedVoice === "Pierre" ? "bg-accent/10" : ""}`}
                          onClick={() => setSelectedVoice("Pierre")}
                        >
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600">M2</span>
                          </div>
                          <div>
                            <p className="font-medium">Pierre</p>
                            <p className="text-xs text-muted-foreground">Voix masculine française</p>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full mt-3"
                        onClick={() => previewVoice(selectedVoice)}
                      >
                        Écouter un exemple
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Conversation simulée</h3>
                      <div className="border rounded-lg p-4 h-[300px] overflow-y-auto bg-gray-50 dark:bg-gray-900">
                        <div className="space-y-4">
                          {conversation.map((msg, index) => (
                            <div key={index} className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                              {msg.sender === 'ai' && (
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-1">
                                  <span className="text-xs text-blue-600">IA</span>
                                </div>
                              )}
                              <div className={`rounded-lg p-3 max-w-[80%] shadow-sm ${
                                msg.sender === 'ai' 
                                  ? 'bg-white dark:bg-gray-800' 
                                  : 'bg-blue-500 text-white'
                              }`}>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </DashboardMain>
      </DashboardContent>
    </Dashboard>
  );
}