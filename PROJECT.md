# CV — Ing. Adalberto Emmanuel Rojas

Portafolio / currículum web personal en formato de sitio de una sola página (SPA), con un asistente conversacional integrado que responde preguntas sobre la trayectoria profesional del autor usando la API de Google Gemini.

## De qué trata

El sitio presenta, en secciones desplazables (Navbar, Hero, About, Education, Experience, Skills, Portfolio, Certifications, Contact), el perfil profesional de Emmanuel Rojas: experiencia laboral, formación académica, habilidades técnicas y proyectos de portafolio, con descarga directa del CV en PDF.

Incorpora un **asistente de IA flotante** (`components/AIAssistant.tsx`) que chatea con el visitante (reclutadores, alumnos, colegas) y responde exclusivamente en base a la información del currículum, inyectada como `systemInstruction` hacia el modelo **Gemini 2.5 Flash**.

## Arquitectura de hosting (híbrida)

- **Frontend estático** → GitHub Pages (`https://mamueljr.github.io/resume/`)
- **Backend del chatbot** → función serverless en Vercel (`api/chat.ts`), que actúa como proxy para ocultar la `GEMINI_API_KEY` del cliente
- El frontend detecta el entorno (`localhost` vs. producción) y enruta las peticiones del chat a `/api/chat` (local) o al endpoint público de Vercel (producción)
- Como alternativa, el visitante puede pegar su propia API Key de Gemini (persistida en `localStorage`) y el frontend llama directamente a la API de Google, sin pasar por el proxy

## Tecnologías usadas

**Frontend**
- React 19 + TypeScript
- Vite 6 (bundler y dev server)
- Tailwind CSS v4 (`@tailwindcss/vite`, tema definido vía `@theme` en `index.css`)
- Framer Motion (animaciones y scroll-driven effects)
- Lucide React (iconografía)

**Backend / IA**
- Google Gemini API (`gemini-2.5-flash`, `generateContent`), llamada vía `fetch` directo a `generativelanguage.googleapis.com`
- Vercel Serverless Functions (`@vercel/node`) como proxy seguro de la API Key
- `thinkingConfig.thinkingBudget: 0` para evitar que el modelo consuma tokens en razonamiento interno y trunque la respuesta

**Despliegue**
- `gh-pages` (deploy del build estático a GitHub Pages)
- Vercel (deploy del backend `/api`)

**Otros**
- TypeScript en modo estricto (`tsconfig.json`)
- Estructura de datos centralizada en `constants.tsx` y tipos en `types.ts`
- Bilingüe ES/EN (`i18n.tsx`): contexto de idioma con toggle en el navbar, persistido en `localStorage`. `constants.tsx` queda en español (el AIAssistant lo consume tal cual); los espejos en inglés viven en `i18n.tsx`
- Imágenes en WebP (script `scripts/convert-webp.mjs` con sharp; los originales se conservan como respaldo)
- SEO: JSON-LD schema.org Person, Open Graph con imagen dedicada (`public/assets/og-image.png`, 1200×630) y página 404 personalizada (`public/404.html`)

## Pendiente de activación manual

**Analytics (GoatCounter)**: `index.html` ya incluye el snippet apuntando a
`https://mamueljr.goatcounter.com/count`. Para que empiece a contar visitas,
registra el código `mamueljr` en https://www.goatcounter.com (gratuito, sin
cookies). Mientras no exista la cuenta, el script es inofensivo y no afecta al sitio.
