#!/bin/bash

# Install missing dependencies
npm install next@15.2.4 next-intl@4.0.2 react@18.2.0 react-dom@18.2.0 @radix-ui/react-slot@2.0.0 @radix-ui/react-dialog@2.0.0 class-variance-authority@0.7.0 clsx@2.0.0 tailwind-merge@2.2.0 tailwindcss-animate@1.0.7 lucide-react@0.323.0

# Install dev dependencies
npm install -D autoprefixer@10.4.16 postcss@8.4.31 tailwindcss@3.3.5 typescript@5.2.2 @types/node@20.9.0 @types/react@18.2.0 @types/react-dom@18.2.0

# Create necessary structure
mkdir -p src/app/[locale]/{dashboard,login,pricing,signup}
mkdir -p src/components/{dashboard,ui,layout}

# Run build
npm run build
