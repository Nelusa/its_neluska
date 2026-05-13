# Deploy

This is the practical launch checklist for `neluska.dev`.

## 1. Preflight Locally

Run the checks in this order:

```bash
npm run lint
npm run build
npm run start
```

What you want to confirm:

- `/` loads even if Twitch environment variables are missing or invalid
- `/brand` returns `401` without credentials
- `/brand-old` returns `401` without credentials
- `/media` returns `401` without credentials
- `/admin` returns `401` without credentials
- public pages stay public

Suggested local spot checks:

```bash
curl -I http://localhost:3000/
curl -I http://localhost:3000/brand
curl -I http://localhost:3000/brand-old
curl -I http://localhost:3000/media
curl -I -u neluska:your-password http://localhost:3000/brand
```

## 2. Git Hygiene

Before pushing:

- make sure `.env.local` is not staged
- make sure temporary screenshots or local notes are not staged
- make sure `npm run lint` and `npm run build` already passed locally

First push flow:

```bash
git init
git add .
git commit -m "initial site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## 3. Vercel Setup

1. Create a new Vercel project from the GitHub repository
2. Let Vercel detect Next.js automatically
3. Add the custom domain `neluska.dev`

## 4. Environment Variables

Set these in Development, Preview, and Production:

- `TWITCH_CLIENT_ID`
- `TWITCH_CLIENT_SECRET`
- `OWNER_USER`
- `OWNER_PASS`
- `MEDIA_USER`
- `MEDIA_PASS`

Production recommendations:

- use long unique values for `OWNER_PASS` and `MEDIA_PASS`
- store the real passwords in 1Password or another password manager

## 5. Post-Deploy Verification

After deployment, check:

- `/` renders correctly
- `/brand` shows browser auth before login
- `/brand-old` shows browser auth before login
- `/media` shows browser auth before login
- `/admin` shows browser auth before login
- logged-in `/brand` has `noindex,nofollow`
- `robots.txt` is live
- `sitemap.xml` is live

Headers to confirm:

- `X-Content-Type-Options`
- `X-Frame-Options`
- `Referrer-Policy`
- `Permissions-Policy`

## 6. What To Edit Later

### Public content

- landing / about / schedule / work pages live in `src/app/`
- schedule data lives in `src/lib/schedule.ts`

### Active brand system

- the real brand kit lives in `src/app/brand/`

### Historical / archive material

- `src/app/brand-old/` is the older draft

### Assets likely to change

- sloths: `public/assets/sloths/`
- favicon: `public/favicon.ico`
- Apple icon: `public/apple-touch-icon.png`
- OG image: `public/og-image.png`

## 7. Recommended Next Shipping Tasks

If you want the most useful post-launch polish:

1. expand reused sloth aliases if each mode needs a unique illustration
2. replace favicon / Apple icon / OG image with final branded exports
3. decide whether `/brand` stays one long canonical page or gets companion subpages for easier sharing
