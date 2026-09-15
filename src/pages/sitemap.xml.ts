import type { APIRoute } from "astro";
import { site } from "../data/site";
import { services } from "../data/services";
import { areas } from "../data/areas";
import { articles } from "../data/articles";

export const GET: APIRoute = () => {
  const paths = [
    "/",
    "/services",
    "/areas",
    "/articles",
    "/about",
    "/contact",
    "/privacy",
    ...services.map((s) => `/services/${s.slug}`),
    ...areas.map((a) => `/areas/${a.slug}`),
    ...articles.map((a) => `/articles/${a.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${site.siteUrl}${p}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
