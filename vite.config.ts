import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import solid from "vite-plugin-solid";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [solid(), tailwindcss(), cloudflare()],
});
