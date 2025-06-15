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
      target: 'esnext'
    }
  },  build: {
    target: 'esnext',
    // Enable gzip compression
    reportCompressedSize: true,
    // Minify CSS
    cssMinify: true,
    sourcemap: false
  },
  
  // Enable asset optimization
  assetsInclude: ['**/*.webp', '**/*.avif'],
  
  // Server configuration for development
  server: {
    // Enable HTTP/2 in development
    https: false,
    // Preload modules
    preTransformRequests: true,
    // Optimize deps
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router']
    }
  }
});
