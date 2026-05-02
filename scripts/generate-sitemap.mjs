/**
 * Génère public/sitemap.xml au build (URL de base configurable).
 * Usage : VITE_SITE_URL=https://ton-domaine.com npm run build
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const base = (process.env.VITE_SITE_URL || "https://welma-global.vercel.app").replace(/\/$/, "");

const routes = [
  { loc: "/", changefreq: "daily", priority: "1.0" },
  { loc: "/electromenager", changefreq: "weekly", priority: "0.9" },
  { loc: "/mobilier", changefreq: "weekly", priority: "0.9" },
  { loc: "/telephones", changefreq: "weekly", priority: "0.9" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${base}${r.loc === "/" ? "/" : r.loc}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const out = path.join(root, "public", "sitemap.xml");
fs.writeFileSync(out, xml, "utf8");
console.log("sitemap.xml généré →", out, "(base:", base + ")");
