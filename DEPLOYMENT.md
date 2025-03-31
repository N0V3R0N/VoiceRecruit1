# Guide de déploiement de VoiceRecruit

Ce guide vous explique comment déployer l'application VoiceRecruit sur Vercel, la plateforme recommandée pour les applications Next.js.

## Prérequis

- Un compte [Vercel](https://vercel.com)
- Un compte [GitHub](https://github.com) (recommandé)
- Un compte [Supabase](https://supabase.com) pour la base de données
- Un compte pour l'API d'IA vocale (comme [ElevenLabs](https://elevenlabs.io))

## Étapes de déploiement

### 1. Préparation du code source

#### Option A : Via GitHub (recommandée)

1. Créez un nouveau dépôt GitHub
2. Poussez le code source de VoiceRecruit vers ce dépôt :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/voicerecruit.git
   git push -u origin main
   ```

#### Option B : Upload direct

Vous pouvez également télécharger le code source et l'importer directement dans Vercel.

### 2. Configuration de Supabase

1. Créez un nouveau projet sur [Supabase](https://supabase.com)
2. Dans l'onglet "SQL Editor", exécutez le script SQL situé dans `migrations/0001_initial.sql`
3. Dans les paramètres du projet, notez les informations suivantes :
   - URL du projet
   - Clé anon/public

### 3. Configuration de l'API d'IA vocale

1. Créez un compte sur [ElevenLabs](https://elevenlabs.io) ou un service similaire
2. Obtenez une clé API
3. Notez cette clé pour la configuration des variables d'environnement

### 4. Déploiement sur Vercel

1. Connectez-vous à votre compte [Vercel](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre dépôt GitHub ou téléchargez directement le code source
4. Configurez le projet :
   - Framework Preset : Next.js
   - Root Directory : ./
   - Build Command : `pnpm build` (laissez la valeur par défaut)
   - Output Directory : .next (laissez la valeur par défaut)

5. Configurez les variables d'environnement :
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ELEVENLABS_API_KEY=your-api-key
   ```

6. Cliquez sur "Deploy"

Le déploiement prendra quelques minutes. Une fois terminé, Vercel vous fournira une URL pour accéder à votre application (par exemple, https://voicerecruit.vercel.app).

### 5. Configuration du domaine personnalisé (optionnel)

1. Dans les paramètres du projet Vercel, accédez à l'onglet "Domains"
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer les enregistrements DNS

## Mise à jour de l'application

Pour mettre à jour l'application après des modifications :

1. Si vous utilisez GitHub, poussez simplement vos modifications vers le dépôt
2. Vercel détectera automatiquement les changements et redéploiera l'application
3. Si vous avez téléchargé directement le code, vous devrez redéployer manuellement

## Dépannage

### Problèmes de déploiement

- Vérifiez les logs de build dans Vercel pour identifier les erreurs
- Assurez-vous que toutes les variables d'environnement sont correctement configurées
- Vérifiez que votre version de Node.js est compatible (Node.js 18+ recommandé)

### Problèmes de base de données

- Vérifiez que le script SQL a été correctement exécuté
- Assurez-vous que les variables d'environnement Supabase sont correctes
- Vérifiez les politiques de sécurité dans Supabase

### Problèmes d'API d'IA vocale

- Vérifiez que votre clé API est valide
- Assurez-vous que vous disposez de crédits suffisants sur votre compte

## Ressources supplémentaires

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Supabase](https://supabase.com/docs)
- [Documentation ElevenLabs](https://docs.elevenlabs.io)

Pour toute question supplémentaire, consultez la documentation complète de VoiceRecruit disponible à l'adresse [https://qrcjgkwn.manus.space](https://qrcjgkwn.manus.space).
