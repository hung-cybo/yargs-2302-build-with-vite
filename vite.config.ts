import { defineConfig } from "vite";
import path, { resolve } from "node:path";
import autoExternal from "rollup-plugin-auto-external";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
      fileName: "cli"
    },
    rollupOptions: {
      plugins: [autoExternal()],
    },
  },
});
