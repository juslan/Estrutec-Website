# Estrutec — Sitio web

Single page application para **Estrutec S.R.L.**, empresa constructora boliviana (Cochabamba)
fundada en 2005, especializada en obras civiles e industria metalmecánica.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [react-router-dom](https://reactrouter.com/), [lucide-react](https://lucide.dev/), [framer-motion](https://www.framer.com/motion/)
- Formulario de contacto: función serverless (`api/contact.js`) + [Resend](https://resend.com/)

## Desarrollo

```bash
npm install
npm run dev
```

El formulario de contacto (`api/contact.js`) es una función serverless de Vercel — `npm run dev`
(Vite) no la ejecuta. Para probarla localmente usa `vercel dev` (`npm i -g vercel`, requiere
vincular el proyecto con `vercel link`).

## Variables de entorno

Copia `.env.example` a `.env` y completa:

- `RESEND_API_KEY` — API key de Resend (Dashboard → API Keys)
- `CONTACT_TO_EMAIL` — opcional, destino de los mensajes (por defecto `info@estrutec.com.bo`)
- `CONTACT_FROM_EMAIL` — opcional, remitente (por defecto el sandbox de Resend)

**Importante:** hasta que se verifique el dominio `estrutec.com.bo` en
[resend.com/domains](https://resend.com/domains), Resend solo permite enviar correos de prueba a
la dirección dueña de la cuenta. Una vez verificado el dominio, cambia `CONTACT_FROM_EMAIL` a algo
como `Estrutec <noreply@estrutec.com.bo>`.

En Vercel, configura estas variables en Project Settings → Environment Variables (nunca las subas
al repositorio).

## Build de producción

```bash
npm run build
npm run preview
```
