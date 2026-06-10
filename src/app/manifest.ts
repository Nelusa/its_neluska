import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "neluska ♡ soft nerd princess",
    short_name: "neluska",
    description:
      "Twitch streamer & frontend dev. Cozy gaming, aesthetic coding, sloth energy.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF2",
    theme_color: "#2A103F",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
