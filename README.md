# Samson Mamuya Portfolio

Modern frontend-only portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion

## Project Structure

- `app/` Next.js App Router pages
- `components/` reusable portfolio UI components
- `lib/` shared frontend constants and motion helpers
- `public/` CV, profile image, and starter project artwork
- `styles/` global Tailwind and theme styles

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Start the portfolio:

```bash
npm run dev
```

The app runs on `http://localhost:3000`.

## Deployment

- Deploy the Next.js app to Vercel.
- Set `NEXT_PUBLIC_SITE_URL` in production so metadata uses your real domain.

## Notes

- Replace the placeholder CV at [public/cv/samson-mamuya-cv.pdf](/c:/Users/samso/Desktop/portfolio/public/cv/samson-mamuya-cv.pdf) with Samson's final document.
- Replace starter project links and descriptions in [lib/constants.js](/c:/Users/samso/Desktop/portfolio/lib/constants.js).
- The contact form opens the user's email app with a pre-filled message instead of sending through a backend.
