import { defineConfig } from "vite";

export default defineConfig({
  root: "public", // Set "public" as the root directory for development
  build: {
    outDir: "../dist", // Output build files in a sibling "dist" folder
    emptyOutDir: true, // Clear the "dist" folder before each build
  },
  server: {
    open: true, // Automatically open the browser on localhost
  },
});
