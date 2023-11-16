import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import mkcert from "vite-plugin-mkcert";

// function mkcert(): import("vite").PluginOption {
//   throw new Error("Function not implemented.");
// }
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), mkcert()],
});
