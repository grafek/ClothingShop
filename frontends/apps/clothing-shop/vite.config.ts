import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@ui": resolve(__dirname, "../../packages/ui"),
      "@ui/components": resolve(__dirname, "../../packages/ui/components"),
      "@ui/lib": resolve(__dirname, "../../packages/ui/lib"),
      "@ui/icons": resolve(__dirname, "../../packages/ui/icons"),
      "@": resolve(__dirname, "./src"),
      "@shop/pages": resolve(__dirname, "./src/pages"),
      "@shop/components": resolve(__dirname, "./src/components"),
    },
  },
});
