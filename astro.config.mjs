import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://khemzystudios.com",
  trailingSlash: "always",
  integrations: [sitemap()],
  devToolbar: {
    enabled: true,
  },
});
