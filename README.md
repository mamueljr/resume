# CV — Ing. Adalberto Emmanuel Rojas

Portafolio / currículum web personal (SPA) con asistente conversacional de IA integrado, bilingüe (ES/EN).

- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion
- **Backend IA**: proxy serverless en Vercel que oculta la API key de Gemini (`api/chat.ts`)
- **Hosting**: GitHub Pages (frontend) + Vercel (backend)

Ver **[PROJECT.md](PROJECT.md)** para la documentación detallada (arquitectura, tecnologías y despliegue).

## Desarrollo local

```bash
npm install
npm run dev
```

El chatbot detecta `localhost` y enruta a `/api/chat` (requiere `vercel dev` con `GEMINI_API_KEY` en `.env.local`). En producción usa el endpoint público de Vercel.

## Build y despliegue

```bash
npm run build        # build estático en dist/
npm run deploy       # publica dist/ en GitHub Pages (gh-pages)
```
