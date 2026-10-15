<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/84b6d273-4605-483c-a59f-a61d53682e8d

## Run Locally

**Prerequisites:** Node.js

Path in this repo: `/home/aliv/Desktop/Projeler/Nurana/web`

1. Install dependencies (peer conflict workaround required):
   `npm install --legacy-peer-deps`
2. Copy `.env.example` → `.env.local` and set `GEMINI_API_KEY` (optional for static portfolio UI)
3. Run the app:
   `npm run dev`   # binds 0.0.0.0:5173
4. Open http://127.0.0.1:5173/
