import type { MetadataRoute } from "next";

const routes = ["", "/about", "/work", "/schedule", "/twitch-panels"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://neluska.dev";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
