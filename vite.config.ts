import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/TailorDemo/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});