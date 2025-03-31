# VoiceRecruit

Application for voice-based automated recruiting interviews.

## Deployment Instructions

### Local Development

1. Make sure you have Node.js 18+ installed
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Visit http://localhost:3000 to see the application.

### Vercel Deployment

To deploy on Vercel:

1. Push your changes to your Git repository
2. Connect your repository to Vercel
3. Make sure the following build settings are configured:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Troubleshooting

If you encounter any deployment issues:

1. Make sure all dependencies are correctly installed with:

```bash
./fix-missing-deps.sh
```

2. Verify your Next.js version is compatible with your project configuration
3. Check that all required environment variables are set in Vercel's environment settings

## Features

- Multi-language support (English, French)
- Voice-based interviews with AI
- Interview script creation and management
- Dashboard for managing interviews and candidates

## Dependencies

The project requires the following key dependencies:

- Next.js 15.2.4
- React 18.2.0
- next-intl for internationalization
- next-themes for dark/light mode
- axios for API requests 