import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/lib/seo/site-config";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  {
    path: "/services/used-furniture",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/used-ac",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/used-kitchens",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/used-restaurant-equipment",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/furniture-moving",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/areas", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = getAllBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...blogEntries];
}
