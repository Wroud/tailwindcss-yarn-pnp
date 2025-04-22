import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { assetResolverPlugin } from "@wroud/vite-plugin-asset-resolver";
import { tscPlugin } from "@wroud/vite-plugin-tsc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    assetResolverPlugin(),
    tscPlugin({
      tscArgs: ["-b"],
      prebuild: true,
    }),
  ],
});
