import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
  },
  resolve: {
    alias: {
      "@ui": resolve(__dirname, "../../packages/ui"),
    },
  },
});
