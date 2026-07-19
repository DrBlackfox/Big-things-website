import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE } from "@/data/site";
import { publiciteCategories } from "@/data/publicite-categories";
import { publiciteProducts } from "@/data/publicite-products";
import { signaletiqueProducts } from "@/data/signaletique-products";
import { standProducts } from "@/data/stands-products";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/stands", changefreq: "monthly", priority: "0.9" },
          { path: "/evenementiel", changefreq: "monthly", priority: "0.8" },
          { path: "/communication", changefreq: "monthly", priority: "0.9" },
          { path: "/communication/impression", changefreq: "monthly", priority: "0.8" },
          { path: "/communication/signaletique", changefreq: "monthly", priority: "0.8" },
          { path: "/creations", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
          ...publiciteCategories.map((c) => ({
            path: `/communication/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...publiciteProducts.map((p) => ({
            path: `/communication/impression/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...signaletiqueProducts.map((p) => ({
            path: `/communication/signaletique/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...standProducts.map((p) => ({
            path: `/stands/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE.baseUrl}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
