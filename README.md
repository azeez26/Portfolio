# Mostafa Abdulazeez — Portfolio

A simple, responsive Angular portfolio focused on backend development. The CV PDF is served from `public/Mostafa-Abdulazeez-CV.pdf` and is downloadable from the hero and contact sections.

## Run locally

1. Install Node.js (version 20.19 or later) and npm.
2. Run `npm install`.
3. Run `npm start` and open the local URL shown in the terminal.

## Build and deploy

Run `npm run build`. To deploy, import this repository in Vercel; its Angular preset reads `vercel.json` and publishes `dist/mostafa-portfolio/browser`.

## Update the content

Edit `src/app/app.component.ts` for biography, skills, project details, contact information, and links. Edit `src/styles.css` for colors, spacing, and layout. Replace `public/Mostafa-Abdulazeez-CV.pdf` with an updated PDF using the same filename to keep the download links working.
