const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

export type TwitchStatus = {
  isLive: boolean;
  title: string | null;
  game: string | null;
  viewers: number;
  startedAt: string | null;
  error?: string;
};

export const OFFLINE_STATUS: TwitchStatus = {
  isLive: false,
  title: null,
  game: null,
  viewers: 0,
  startedAt: null,
};

/** Stable fake start time for the dev mock (≈1h 23m before server boot). */
const MOCK_STARTED_AT = new Date(Date.now() - 83 * 60 * 1000).toISOString();

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAppToken(): Promise<string | null> {
  if (!CLIENT_ID || !CLIENT_SECRET) return null;
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.value;
  }

  try {
    const response = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "client_credentials",
      }),
      cache: "no-store",
    });

    if (!response.ok) return null;

    const tokenResponse = (await response.json()) as {
      access_token?: string;
      expires_in?: number;
    };

    if (!tokenResponse.access_token || !tokenResponse.expires_in) {
      return null;
    }

    cachedToken = {
      value: tokenResponse.access_token,
      expiresAt: Date.now() + (tokenResponse.expires_in - 60) * 1000,
    };

    return cachedToken.value;
  } catch {
    return null;
  }
}

export async function getTwitchStatus(): Promise<TwitchStatus> {
  // ── TEMP DEV MOCK ──────────────────────────────────────────────────────
  // Set TWITCH_MOCK_LIVE=1 in .env.local to force a fake live stream so the
  // companion's live card + go-live celebration can be previewed. Remove
  // (or unset) when done.
  if (process.env.TWITCH_MOCK_LIVE === "1") {
    return {
      isLive: true,
      title: "cozy late-night dev jam ♡ building the new site",
      game: "Software and Game Development",
      viewers: 142,
      startedAt: MOCK_STARTED_AT,
    };
  }

  const token = await getAppToken();

  if (!token || !CLIENT_ID) {
    return { ...OFFLINE_STATUS, error: "auth_failed" };
  }

  try {
    const response = await fetch(
      "https://api.twitch.tv/helix/streams?user_login=its_neluska",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-Id": CLIENT_ID,
        },
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      return { ...OFFLINE_STATUS, error: "api_error" };
    }

    const payload = (await response.json()) as {
      data?: Array<{
        title?: string | null;
        game_name?: string | null;
        viewer_count?: number | null;
        started_at?: string | null;
      }>;
    };

    const stream = payload.data?.[0];
    if (!stream) return OFFLINE_STATUS;

    return {
      isLive: true,
      title: stream.title ?? null,
      game: stream.game_name ?? null,
      viewers: stream.viewer_count ?? 0,
      startedAt: stream.started_at ?? null,
    };
  } catch {
    return { ...OFFLINE_STATUS, error: "fetch_failed" };
  }
}
