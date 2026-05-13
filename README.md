# neluska.dev

Personal site and protected brand workspace for `@its_neluska`, built with Next.js 15, React 19, TypeScript, and Tailwind.

This repo has two personalities:

- a small public-facing site
- a big protected brand kit with the full "soft nerd princess" system

## What Ships

### Public routes

- `/` landing page / link-in-bio with Twitch status
- `/about` longer intro and contact context
- `/schedule` stream rhythm
- `/twitch-panels` component-based Twitch panel reference

### Protected routes

- `/brand` current full brand kit, refactored into app code
- `/brand-old` older component-based draft kept as reference
- `/media` lighter protected route for sharing links / partner context
- `/admin` reserved protected route for future internal tools

### Legacy compatibility

- `/brand-attempt-1` redirects to `/brand-old`
- `/brand-attempt-2` redirects to `/brand`

## Current Source Of Truth

If you only remember one thing, remember this:

- `/brand` is the active, living brand system
- `src/app/brand/` is the main source of truth for the protected brand kit
- `src/app/brand-old/` is historical, not the main implementation

That means:

- edit `src/app/brand/` when changing the real brand kit
- use `src/lib/brand-kit.ts` mainly for the older draft and the Twitch panels route

## Stack

- Next.js 15 App Router
- React 19
- TypeScript with `strict` and `noUncheckedIndexedAccess`
- Tailwind CSS 3.4
- ESLint 9 with Next.js flat config

## Local Setup

1. Install dependencies

```bash
npm install
```

2. Create `.env.local`

```env
TWITCH_CLIENT_ID=xxx
TWITCH_CLIENT_SECRET=yyy
OWNER_USER=neluska
OWNER_PASS=your-long-owner-password
MEDIA_USER=neluska
MEDIA_PASS=your-long-media-password
```

3. Start the dev server

```bash
npm run dev
```

4. Run the quality checks before calling work "done"

```bash
npm run lint
npm run build
npm run start
```

## Quality Bar

- `npm run lint` runs ESLint through the CLI, with no interactive Next prompt
- `npm run build` is the production safety check and includes type validation
- lint is focused on maintained app code and current project files

## Project Map

### Public pages

- Landing page: [src/app/page.tsx](src/app/page.tsx)
- About page: [src/app/about/page.tsx](src/app/about/page.tsx)
- Schedule page: [src/app/schedule/page.tsx](src/app/schedule/page.tsx)
- Twitch panels page: [src/app/twitch-panels/page.tsx](src/app/twitch-panels/page.tsx)

### Active brand kit

- Entry route: [src/app/brand/page.tsx](src/app/brand/page.tsx)
- Page composition: [src/app/brand/BrandKitPage.tsx](src/app/brand/BrandKitPage.tsx)
- Floating TOC / chrome: [src/app/brand/BrandKitChrome.tsx](src/app/brand/BrandKitChrome.tsx)
- Identity sections: [src/app/brand/sections/identity.tsx](src/app/brand/sections/identity.tsx)
- Content sections: [src/app/brand/sections/content.tsx](src/app/brand/sections/content.tsx)
- Business / ops sections: [src/app/brand/sections/business.tsx](src/app/brand/sections/business.tsx)
- Shared brand primitives: [src/app/brand/sections/primitives.tsx](src/app/brand/sections/primitives.tsx)
- Shared brand data blocks: [src/app/brand/sections/data.tsx](src/app/brand/sections/data.tsx)

### Secondary / historical brand pieces

- Older draft route: [src/app/brand-old/page.tsx](src/app/brand-old/page.tsx)
- Older data model used by `brand-old` and Twitch panels: [src/lib/brand-kit.ts](src/lib/brand-kit.ts)

### Shared infra

- Protected-route auth: [src/middleware.ts](src/middleware.ts)
- Twitch fetching / fallback logic: [src/lib/twitch.ts](src/lib/twitch.ts)
- Schedule data: [src/lib/schedule.ts](src/lib/schedule.ts)
- Global tokens: [src/styles/tokens.css](src/styles/tokens.css)
- Global shell styles: [src/styles/globals.css](src/styles/globals.css)

## Assets And Fonts

### Active shared assets

- general site assets live in `public/assets/`
- sloth variants live in `public/assets/sloths/`
- Twitch image assets live in `public/assets/twitch/`

### Fonts

Local fonts are loaded in [src/app/layout.tsx](src/app/layout.tsx):

- Blanka
- Agrandir
- Moontime

Mono UI text still falls back to `JetBrains Mono` or system monospace.
Font files live in `src/fonts/` so Next can optimize them through `next/font/local`.

## Auth Model

Passwords are controlled through environment variables only:

- `OWNER_USER` / `OWNER_PASS` protect `/brand`, `/brand-old`, and `/admin`
- `MEDIA_USER` / `MEDIA_PASS` protect `/media`

To rotate a password:

1. change it in local `.env.local`
2. change it in Vercel environment variables
3. redeploy

Never commit `.env.local`.

## Sloths

The main sloth component lives in [src/components/Sloth.tsx](src/components/Sloth.tsx).

Current state:

- variants are mapped to SVG assets in `public/assets/sloths/svg/`
- a few semantic variants intentionally reuse the closest matching illustration

To add a real sloth variant later:

1. drop the SVG into `public/assets/sloths/svg/`
2. update the mapping in `Sloth.tsx`
3. use the variant where needed in the app

## Notes

- the public site falls back to offline if Twitch auth or API calls fail
- the subtle owner easter egg in the footer is the intended way protected links surface publicly
- `/brand` is intentionally one long canonical document for now

## Recommended Next Steps

If you want the highest signal next work, do it in this order:

1. expand reused sloth aliases if each mode needs a unique illustration
2. replace `favicon.ico`, `apple-touch-icon.png`, and `og-image.png` with final branded exports
3. decide whether `/brand` should stay one long canonical page or also get shorter companion routes like `/brand/identity`, `/brand/content`, and `/brand/twitch`
4. add the interactive 3D work page when it is ready to ship

## License

MIT. See [LICENSE](LICENSE).
