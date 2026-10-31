import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.alexpravo.ru",
  output: "static",
  build: { format: "directory" },
});
