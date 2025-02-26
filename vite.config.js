import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    assetsInclude: ["**/*.glb"],
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
    define: {
      "process.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
    },
  };
});
