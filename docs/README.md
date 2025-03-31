# Documentation VoiceRecruit

## Sommaire

1. [Introduction](#introduction)
2. [Architecture du système](#architecture-du-système)
3. [Fonctionnalités principales](#fonctionnalités-principales)
4. [Technologies utilisées](#technologies-utilisées)
5. [Guide d'utilisation](#guide-dutilisation)
6. [API et intégrations](#api-et-intégrations)
7. [Déploiement](#déploiement)
8. [Foire aux questions](#foire-aux-questions)

## Introduction

VoiceRecruit est une solution innovante qui remplace la lettre de motivation traditionnelle par un entretien téléphonique instantané avec une IA. Cette approche permet de filtrer naturellement les candidats réellement motivés et d'évaluer leurs compétences orales dès la première étape du processus de recrutement.

### Le problème résolu

Dans le recrutement moderne, la lettre de motivation a perdu son efficacité comme filtre naturel depuis l'avènement de l'IA générative. Les recruteurs reçoivent désormais des centaines de candidatures génériques générées en quelques minutes, rendant impossible l'évaluation de l'intérêt réel des candidats.

### Notre solution

VoiceRecruit transforme ce processus en proposant un entretien téléphonique instantané avec une IA. Cette approche présente plusieurs avantages :
- Un filtre naturel plus efficace (passer un appel est plus engageant que générer une lettre)
- Une évaluation des soft skills dès la première étape
- Un gain de temps considérable pour les recruteurs
- Une expérience moderne et dynamique pour les candidats

## Architecture du système

VoiceRecruit est construit sur une architecture moderne et évolutive, conçue pour offrir une expérience fluide tant aux recruteurs qu'aux candidats.

### Vue d'ensemble

L'application est structurée selon une architecture client-serveur avec une séparation claire entre le frontend et le backend :

1. **Frontend** : Application Next.js avec Tailwind CSS
2. **Backend** : API RESTful avec base de données Supabase
3. **Services d'IA** : Intégration avec des API d'IA vocale pour la synthèse et la reconnaissance vocale
4. **Système de téléphonie** : Service d'appels téléphoniques programmables

### Schéma d'architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Client         │     │  Serveur        │     │  Services d'IA  │
│  (Next.js)      │◄───►│  (API RESTful)  │◄───►│  et Téléphonie  │
│                 │     │                 │     │                 │
└─────────────────┘     └───────┬─────────┘     └─────────────────┘
                                │
                                ▼
                        ┌─────────────────┐
                        │                 │
                        │  Base de        │
                        │  données        │
                        │  (Supabase)     │
                        │                 │
                        └─────────────────┘
```

### Flux de données

1. Le recruteur crée un script d'entretien et configure les voix IA
2. Le candidat clique sur "Postuler et passer l'appel"
3. Le système initie un appel téléphonique avec le candidat
4. L'IA pose les questions configurées et enregistre les réponses
5. Les réponses sont transcrites et analysées
6. Le recruteur reçoit un résumé structuré avec analyse

## Fonctionnalités principales

### Pour les recruteurs

1. **Création de scripts d'entretien personnalisés**
   - Interface intuitive pour créer des questions
   - Possibilité de tester le script en temps réel
   - Bibliothèque de questions prédéfinies

2. **Configuration des voix IA**
   - Sélection parmi plusieurs voix naturelles
   - Paramétrage du ton, de la vitesse et des pauses
   - Prévisualisation audio des voix

3. **Tableau de bord de gestion des candidatures**
   - Vue d'ensemble des entretiens réalisés
   - Accès aux transcriptions et analyses
   - Filtrage et tri des candidats

4. **Analyse des entretiens**
   - Évaluation automatique des réponses
   - Détection des points forts et axes d'amélioration
   - Scoring des candidats

### Pour les candidats

1. **Expérience de candidature moderne**
   - Interface simple et intuitive
   - Entretien téléphonique à la demande ou programmé
   - Feedback immédiat après l'entretien

2. **Accessibilité multilingue**
   - Support du français et de l'anglais
   - Adaptation aux préférences de l'utilisateur

## Technologies utilisées

### Frontend

- **Next.js** : Framework React pour le rendu côté serveur et la génération de sites statiques
- **Tailwind CSS** : Framework CSS utilitaire pour un design responsive et moderne
- **next-intl** : Bibliothèque pour l'internationalisation (i18n)
- **next-themes** : Support des thèmes clair et sombre

### Backend

- **Supabase** : Plateforme backend-as-a-service avec base de données PostgreSQL
- **API RESTful** : Pour la communication entre le frontend et le backend
- **JWT** : Pour l'authentification et la sécurisation des API

### IA et Téléphonie

- **API d'IA vocale** : Pour la synthèse vocale naturelle (type ElevenLabs)
- **API de reconnaissance vocale** : Pour la transcription des entretiens
- **API d'analyse de texte** : Pour l'évaluation des réponses des candidats
- **Service de téléphonie programmable** : Pour les appels téléphoniques automatisés

## Guide d'utilisation

### Pour les recruteurs

#### Création d'un compte

1. Accédez à la page d'inscription
2. Renseignez vos informations (nom, email, entreprise)
3. Choisissez un mot de passe sécurisé
4. Validez votre compte via l'email de confirmation

#### Création d'une offre d'emploi

1. Depuis le tableau de bord, cliquez sur "Nouvelle offre"
2. Renseignez les détails du poste (titre, description, prérequis)
3. Configurez le script d'entretien ou utilisez un modèle existant
4. Publiez l'offre et obtenez un lien de candidature

#### Configuration d'un script d'entretien

1. Accédez à la section "Scripts d'entretien"
2. Cliquez sur "Nouveau script"
3. Rédigez une introduction, des questions et une conclusion
4. Sélectionnez une voix IA et ajustez les paramètres
5. Testez le script en temps réel avec votre microphone
6. Enregistrez le script et associez-le à vos offres d'emploi

#### Analyse des candidatures

1. Consultez les nouvelles candidatures dans le tableau de bord
2. Accédez aux détails d'un entretien (transcription, enregistrement, analyse)
3. Consultez le score et les points forts/faibles identifiés
4. Ajoutez vos propres notes et changez le statut du candidat

### Pour les candidats

#### Postuler à une offre

1. Accédez au lien de l'offre d'emploi
2. Renseignez vos informations de contact
3. Cliquez sur "Postuler et passer l'appel"
4. Choisissez entre un appel immédiat ou programmé
5. Répondez aux questions posées par l'IA lors de l'appel
6. Recevez une confirmation après l'entretien

## API et intégrations

VoiceRecruit propose une API complète permettant d'intégrer ses fonctionnalités à d'autres systèmes de recrutement.

### Endpoints principaux

- `/api/auth` : Gestion de l'authentification
- `/api/positions` : Gestion des offres d'emploi
- `/api/scripts` : Gestion des scripts d'entretien
- `/api/applications` : Gestion des candidatures
- `/api/interviews` : Gestion des entretiens
- `/api/voice-config` : Configuration des voix IA

### Intégrations possibles

- **ATS (Applicant Tracking Systems)** : Synchronisation des candidatures
- **Calendriers** : Programmation des entretiens
- **CRM** : Suivi des candidats
- **Sites d'emploi** : Publication automatique des offres

## Déploiement

VoiceRecruit est conçu pour être facilement déployable sur différentes plateformes.

### Prérequis

- Node.js 18+
- Compte Supabase
- Compte pour l'API d'IA vocale (ElevenLabs ou similaire)
- Compte pour le service de téléphonie programmable

### Options de déploiement

1. **Vercel** (recommandé pour Next.js)
   - Connectez votre dépôt GitHub
   - Configurez les variables d'environnement
   - Déployez automatiquement à chaque push

2. **Serveur dédié**
   - Clonez le dépôt
   - Installez les dépendances avec `pnpm install`
   - Construisez l'application avec `pnpm build`
   - Démarrez le serveur avec `pnpm start`

### Variables d'environnement

```
# Base de données
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# IA Vocale
ELEVENLABS_API_KEY=your-api-key

# Téléphonie
TELEPHONY_API_KEY=your-api-key
TELEPHONY_API_SECRET=your-api-secret
```

## Foire aux questions

### Pour les recruteurs

**Q: Comment VoiceRecruit améliore-t-il le processus de recrutement ?**  
R: En remplaçant la lettre de motivation par un entretien téléphonique avec IA, VoiceRecruit filtre naturellement les candidats réellement motivés et évalue leurs compétences orales dès la première étape.

**Q: Les candidats peuvent-ils préparer leurs réponses à l'avance ?**  
R: Les questions ne sont pas communiquées à l'avance, ce qui permet d'obtenir des réponses spontanées et authentiques.

**Q: Comment sont analysées les réponses des candidats ?**  
R: Les réponses sont transcrites et analysées par IA selon plusieurs critères : clarté d'expression, pertinence, structure des idées, et adéquation avec les compétences recherchées.

### Pour les candidats

**Q: Comment se déroule l'entretien téléphonique ?**  
R: Vous recevez un appel au moment choisi, une IA vous pose des questions préparées par le recruteur, et vos réponses sont enregistrées pour analyse.

**Q: Puis-je reprendre l'entretien si je ne suis pas satisfait ?**  
R: Généralement non, car l'objectif est d'évaluer vos réponses spontanées. Cependant, en cas de problème technique, vous pouvez contacter le support.

**Q: Mes données sont-elles sécurisées ?**  
R: Oui, toutes les données sont chiffrées et traitées conformément au RGPD. Elles ne sont accessibles qu'au recruteur concerné et sont supprimées après la période légale de conservation.
