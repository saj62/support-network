import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

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
      ],
    }),
  ],
});