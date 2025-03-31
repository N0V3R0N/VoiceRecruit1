# Guide d'architecture technique

## Vue d'ensemble

VoiceRecruit est construit sur une architecture moderne et évolutive, utilisant les technologies suivantes :

- **Frontend** : Next.js avec Tailwind CSS
- **Backend** : API RESTful avec Supabase
- **IA Vocale** : Intégration avec des API de synthèse et reconnaissance vocale
- **Internationalisation** : Support multilingue (français/anglais)
- **Thèmes** : Support des modes clair et sombre

## Structure du projet

```
recrutement-ia/
├── src/
│   ├── app/                    # Routes et pages Next.js
│   │   ├── [locale]/           # Support multilingue
│   │   │   ├── page.tsx        # Page d'accueil
│   │   │   ├── login/          # Authentification
│   │   │   ├── signup/         # Inscription
│   │   │   ├── pricing/        # Tarification
│   │   │   └── dashboard/      # Interface recruteur
│   │   └── layout.tsx          # Layout principal
│   ├── components/             # Composants réutilisables
│   │   ├── ui/                 # Composants d'interface
│   │   ├── layout/             # Composants de mise en page
│   │   ├── forms/              # Formulaires
│   │   └── dashboard/          # Composants du tableau de bord
│   ├── lib/                    # Utilitaires et services
│   │   ├── api.js              # Services d'API backend
│   │   ├── voice-ai.js         # Services d'IA vocale
│   │   ├── navigation.ts       # Utilitaires de navigation
│   │   └── utils.ts            # Fonctions utilitaires
│   └── messages/               # Fichiers de traduction
│       ├── fr.json             # Traductions françaises
│       └── en.json             # Traductions anglaises
├── migrations/                 # Migrations de base de données
│   └── 0001_initial.sql        # Schéma initial
├── public/                     # Fichiers statiques
└── tests/                      # Tests unitaires et d'intégration
    ├── api.test.js             # Tests des API
    └── voice-ai.test.js        # Tests de l'IA vocale
```

## Flux de données

### Processus de recrutement

1. Le recruteur crée un compte et configure son profil
2. Il crée une offre d'emploi et configure un script d'entretien
3. Il sélectionne une voix IA et personnalise les paramètres
4. Le système génère un lien de candidature unique
5. Le candidat accède au lien et remplit ses informations
6. Le candidat choisit de recevoir un appel immédiat ou programmé
7. L'IA appelle le candidat et conduit l'entretien selon le script
8. Les réponses sont enregistrées, transcrites et analysées
9. Le recruteur reçoit une notification et accède aux résultats
10. Le recruteur peut filtrer et trier les candidats selon les résultats

### Architecture technique

```
┌─────────────────────────────────────────────────────────────┐
│                        Client (Browser)                      │
└───────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                      Next.js Application                     │
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐  │
│  │  React UI   │    │  API Routes │    │  Server Actions │  │
│  └─────────────┘    └─────────────┘    └─────────────────┘  │
└───────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                     External Services                        │
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐  │
│  │   Supabase  │    │  Voice API  │    │ Telephony API   │  │
│  │  (Database) │    │ (ElevenLabs)│    │                 │  │
│  └─────────────┘    └─────────────┘    └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Modèle de données

### Tables principales

1. **users** - Informations des recruteurs
   - id (UUID, PK)
   - email (TEXT)
   - full_name (TEXT)
   - company (TEXT)
   - created_at (TIMESTAMP)

2. **positions** - Offres d'emploi
   - id (UUID, PK)
   - recruiter_id (UUID, FK)
   - title (TEXT)
   - description (TEXT)
   - requirements (TEXT)
   - location (TEXT)
   - status (TEXT)

3. **scripts** - Scripts d'entretien
   - id (UUID, PK)
   - recruiter_id (UUID, FK)
   - name (TEXT)
   - description (TEXT)
   - introduction (TEXT)
   - questions (JSONB)
   - conclusion (TEXT)
   - voice_id (TEXT)

4. **applications** - Candidatures
   - id (UUID, PK)
   - position_id (UUID, FK)
   - candidate_name (TEXT)
   - candidate_email (TEXT)
   - candidate_phone (TEXT)
   - status (TEXT)

5. **interviews** - Entretiens réalisés
   - id (UUID, PK)
   - application_id (UUID, FK)
   - script_id (UUID, FK)
   - recording_url (TEXT)
   - transcript (TEXT)
   - analysis (JSONB)
   - status (TEXT)

## Intégration de l'IA vocale

VoiceRecruit utilise une API d'IA vocale pour deux fonctionnalités principales :

1. **Synthèse vocale** : Conversion du texte du script en parole naturelle
2. **Reconnaissance vocale** : Transcription des réponses du candidat

### Processus d'entretien téléphonique

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Script      │     │ Voice AI    │     │ Telephony   │
│ (Questions) │────►│ (Text-to-   │────►│ API         │
│             │     │ Speech)     │     │             │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                                               ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Analysis    │     │ Voice AI    │     │ Candidate   │
│ Engine      │◄────│ (Speech-to- │◄────│ Responses   │
│             │     │ Text)       │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
```

## Sécurité et confidentialité

1. **Authentification** : JWT via Supabase Auth
2. **Autorisation** : Contrôle d'accès basé sur les rôles
3. **Chiffrement** : Données sensibles chiffrées au repos
4. **RGPD** : Conformité avec les réglementations sur la protection des données
5. **Rétention** : Politique de conservation des données configurable

## Performances et scalabilité

1. **Mise en cache** : Stratégies de mise en cache pour les données fréquemment accédées
2. **Optimisation des requêtes** : Index de base de données et requêtes optimisées
3. **Architecture serverless** : Scaling automatique selon la charge
4. **CDN** : Distribution de contenu via réseau de diffusion
5. **Monitoring** : Surveillance des performances et alertes

## Déploiement

VoiceRecruit est conçu pour être déployé sur Vercel, avec Supabase comme backend.

### Étapes de déploiement

1. Configurer un projet Supabase et exécuter les migrations
2. Configurer les variables d'environnement
3. Déployer l'application Next.js sur Vercel
4. Configurer les domaines et certificats SSL
5. Mettre en place le monitoring et les alertes

### Variables d'environnement requises

```
# Base URL
NEXT_PUBLIC_BASE_URL=https://voicerecruit.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Voice AI
ELEVENLABS_API_KEY=your-api-key
OPENAI_API_KEY=your-api-key

# Telephony
TELEPHONY_API_KEY=your-api-key
TELEPHONY_API_SECRET=your-api-secret
```

## Maintenance et évolution

### Mises à jour

1. Déploiement continu via GitHub Actions
2. Tests automatisés avant déploiement
3. Migrations de base de données versionnées

### Roadmap future

1. Intégration avec d'autres ATS (Applicant Tracking Systems)
2. Analyse vidéo pour les entretiens en visioconférence
3. Fonctionnalités d'IA avancées pour l'analyse comportementale
4. Support multilingue étendu
5. Application mobile pour les recruteurs
