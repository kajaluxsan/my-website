import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://kajaluxan.mathitharan.ch/sitemap.xml",
    host: "https://kajaluxan.mathitharan.ch",
  };
}
