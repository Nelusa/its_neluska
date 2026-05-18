import { cn } from "@/lib/cn";

import { KitSection } from "../primitives";

export function PrivacySection() {
  const routes = [
    { path: "neluska.dev/", access: "public", who: "all visitors", color: "var(--pp-200)", ink: "var(--pp-700)" },
    { path: "/about  ·  /schedule  ·  /twitch-panels", access: "public", who: "all visitors", color: "var(--pp-200)", ink: "var(--pp-700)" },
    { path: "/brand", access: "owner-only", who: "only me · password-gated", color: "var(--dr-300)", ink: "#fff" },
    { path: "/media", access: "password-gated", who: "me + brands I DM the password", color: "var(--py-300)", ink: "var(--pp-700)" },
    { path: "/admin (later)", access: "owner-only", who: "only me", color: "var(--dr-400)", ink: "#fff" },
  ];

  const neverPublish = [
    { item: "Full real name", why: "identity theft · stalker escalation" },
    { item: "Exact address / district", why: '"Prague" is fine · neighborhood is not' },
    { item: "Employer name", why: "boundary between dev job & creator life" },
    { item: "Family / partner / close friends' full names", why: "they didn't sign up for this" },
    { item: "Photos with windows, street signs, house numbers", why: "reverse-search finds location" },
    { item: "Car license plate, keys (photographed)", why: "both are trivially exploitable" },
    { item: "Birth date + birthplace (full)", why: "security-question fuel" },
    { item: 'Exact stream start time ("20:00")', why: 'use pattern ("Tue evening") - when I\'m not live, I\'m alone' },
    { item: "Screenshot of phone calendar", why: "reveals full schedule, contacts, locations" },
    { item: "Receipt / package photos", why: "QR codes & addresses survive cropping" },
  ];

  const checklist2fa = [
    { service: "Twitch", how: "Settings → Security → 2FA (authenticator app, not SMS)" },
    { service: "Instagram", how: "Settings → Security → Two-factor authentication → Authenticator app" },
    { service: "Email (all accounts)", how: "Authenticator app + backup codes in 1Password" },
    { service: "GitHub", how: "Settings → Password & authentication → Two-factor (Authenticator)" },
    { service: "Domain registrar (Cloudflare)", how: "Profile → Authentication → TOTP" },
    { service: "Vercel", how: "Account Settings → Authentication → 2FA" },
    { service: "Password manager", how: "1Password / Bitwarden · strong master · 2FA on account itself" },
    { service: "Bank / payment apps", how: "any app that touches money - non-negotiable" },
  ];

  const redFlags = [
    { sign: 'DM with urgent "brand deal" + video-call TODAY', action: "Delete. Real brands go email + contract." },
    { sign: "Login / password-reset emails I didn't request", action: "Change password immediately · check active sessions · enable 2FA if not already" },
    { sign: "Viewer in chat knows something I never said publicly", action: "Screenshot · block · audit privacy on all accounts · tell someone I trust" },
    { sign: "Package / sticker appears at my door that I didn't order", action: "I don't open near the door · photograph · report to police if suspicious" },
    { sign: "Fake account impersonating me", action: "Report via platform · post warning from verified account · screenshot for evidence" },
    { sign: "New follower in all platforms at once + likes old posts", action: "Not automatically bad · but watch · block if boundary-crossing" },
  ];

  const bestPractices = [
    { title: "Brand-deal email", body: "hi@neluska.dev · Cloudflare Email Routing (free) forwards to personal inbox · NEVER share personal email with brands" },
    { title: "P.O. Box for merch", body: "Česká pošta ~350 Kč/rok · use for fan mail, brand samples, merch return address · never home address" },
    { title: "EXIF-clean photos", body: "Before uploading directly (not via IG/Twitch): strip with exiftool or mat2 · removes GPS, device, timestamps" },
    { title: "WHOIS privacy", body: "Cloudflare: included free · other registrars: pay extra but MUST have · without it, my name+address on my domain is public" },
    { title: "Separate handles", body: "@its_neluska for public · separate personal account (nickname only, private, friends only) · NEVER cross-link" },
    { title: "Stream setup audit", body: "Every 2 weeks: walk around my streaming spot on camera · check reflections in monitors, windows, sunglasses, TV screen · check whiteboards / notes / calendar in frame" },
  ];

  return (
    <KitSection
      id="privacy"
      eyebrow="28 · PRIVACY & SAFETY"
      title="keeping my life mine"
      sub="I'm going to be visible. That's the job. But visibility ≠ exposure. These are the guardrails that let me stream, post, and still walk to the café without thinking about it."
    >
      <div className="mb-9">
        <div className="eyebrow mb-3 text-brand-purple-500">
          DOMAIN ACCESS MAP · neluska.dev
        </div>
        <div className="grid gap-2">
          {routes.map((route) => (
            <div key={route.path} className="card overflow-hidden p-0">
              <div className="grid items-stretch min-[980px]:grid-cols-[2fr_1fr_2fr_80px]">
                <div className="px-[18px] py-[14px] font-mono text-[13px] text-ink">
                  {route.path}
                </div>
                <div
                  className="flex items-center justify-center px-3 py-[14px] font-mono text-[10px] uppercase tracking-[0.15em]"
                  style={{ background: route.color, color: route.ink }}
                >
                  {route.access}
                </div>
                <div className="flex items-center px-[18px] py-[14px] text-xs text-ink-soft">
                  {route.who}
                </div>
                <div className="flex items-center justify-center border-l border-dashed border-line px-3 py-[14px] text-lg">
                  {route.access === "public"
                    ? "🌍"
                    : route.access === "owner-only"
                      ? "🔒"
                      : "🔑"}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-brand-purple-50 px-4 py-3 text-xs leading-[1.6] text-brand-purple-700">
          <strong>Current state:</strong> web live brzy na{" "}
          <span className="mono">neluska.dev</span>. Brand kit bude za HTTP
          Basic Auth – heslo jen ty. Když budeš chtít poslat brand kit brandu,
          (a) pošli heslo v DM, nebo (b) duplikuj jako{" "}
          <span className="mono">/media</span> s jiným heslem.
        </div>
      </div>

      <div className="mb-9">
        <div className="eyebrow mb-3 text-brand-rose-400">
          ✗ NEVER PUBLISH · anywhere, ever
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2.5">
          {neverPublish.map((item) => (
            <div
              key={item.item}
              className="rounded-lg border border-dashed border-brand-rose-200 bg-[#fbe9ee] px-4 py-3"
            >
              <div className="mb-1 text-[13px] font-semibold text-brand-rose-500">
                {item.item}
              </div>
              <div className="text-[11px] italic leading-[1.5] text-ink-soft">
                {item.why}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-9">
        <div className="eyebrow mb-3 text-brand-purple-500">
          ✓ 2FA CHECKLIST · enable on day one
        </div>
        <div className="card overflow-hidden p-0">
          <div className="section-x-scroll">
            <table className="min-w-[900px] w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-brand-purple-50 text-left">
                  <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-purple-700">
                    Service
                  </th>
                  <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-purple-700">
                    How
                  </th>
                  <th className="w-[60px] px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-brand-purple-700">
                    ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {checklist2fa.map((item, i) => (
                  <tr
                    key={item.service}
                    className={cn(i !== 0 && "border-t border-line")}
                  >
                    <td className="px-4 py-2.5 font-semibold text-ink">
                      {item.service}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-ink-soft">
                      {item.how}
                    </td>
                    <td className="px-4 py-2.5 text-center text-base text-ink-soft">
                      ☐
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-2.5 text-[11px] italic text-ink-soft">
          Authenticator app (Authy, 1Password, Aegis) &gt; SMS. SMS lze ukrást
          přes SIM-swap útok.
        </div>
      </div>

      <div className="mb-9">
        <div className="eyebrow mb-3 text-brand-rose-400">
          🚨 RED FLAGS · what to do
        </div>
        <div className="grid gap-2.5">
          {redFlags.map((flag) => (
            <div
              key={flag.sign}
              className="card grid gap-5 p-4 min-[980px]:grid-cols-[1.2fr_1fr]"
            >
              <div className="flex items-start gap-2.5">
                <span className="shrink-0 text-lg">🚩</span>
                <div className="text-[13px] leading-[1.5] text-ink">
                  {flag.sign}
                </div>
              </div>
              <div className="rounded-md bg-brand-purple-50 px-3 py-2.5 text-xs leading-[1.5] text-brand-purple-700">
                <strong className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-brand-purple-500">
                  Action
                </strong>
                {flag.action}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <div className="eyebrow mb-3 text-brand-purple-500">
          ♡ BEST PRACTICES · set up once, benefit forever
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
          {bestPractices.map((item) => (
            <div key={item.title} className="card p-4">
              <div className="h-display mb-2 text-[15px] leading-[1.2] text-brand-purple-700">
                {item.title}
              </div>
              <div className="text-xs leading-[1.6] text-ink-soft">
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-7 bg-brand-purple-50 p-[22px]">
        <div className="mb-2 font-script text-[30px] leading-none text-brand-purple-700">
          my safety &gt; any viewer&apos;s feelings
        </div>
        <p className="m-0 max-w-[720px] text-[14px] leading-[1.6] text-ink">
          I don&apos;t owe anyone an explanation for a block, a deleted
          comment, a canceled stream, a private account. People who get it will
          understand. People who don&apos;t get it weren&apos;t going to stay
          anyway. This is a long game – I protect the person who has to wake up
          tomorrow and do it again (me).
        </p>
      </div>
    </KitSection>
  );
}

