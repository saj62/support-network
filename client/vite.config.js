import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
import articlePosts from "./src/data/articlePosts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://geriatricssupportnetwork.org",
      dynamicRoutes: [
        "/",
        "/about",
        "/articles",
        "/expert-series",
        "/senior-activities",
        ...articlePosts.map((post) => `/articles/${post.id}`),
      ],
    }),
  ],
});