import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-icons": ["react-icons"],
          "components-main": [
            "./src/components/Navbar.jsx",
            "./src/components/Footer.jsx",
          ],
          "components-sections": [
            "./src/components/Skills.jsx",
            "./src/components/Portfolio.jsx",
            "./src/components/Experience.jsx",
            "./src/components/Contact.jsx",
          ],
        },
      },
    },
  },
  server: {
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  },
});
