import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter()
  ],
  
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2022'
    }
  },
  
  build: {
    target: 'es2022',
    reportCompressedSize: false,
    cssMinify: true,
    sourcemap: false
  },
  
  // Enable asset optimization
  assetsInclude: ['**/*.webp', '**/*.avif'],
  
  // Server configuration for development
  server: {
    https: false
  }
});
