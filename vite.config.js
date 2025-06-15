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
<<<<<<< HEAD
    target: 'es2022',
    reportCompressedSize: false,
=======
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          react: ['react', 'react-dom'],
          router: ['react-router', '@react-router/node'],
          ui: ['@headlessui/react', '@heroicons/react', 'react-icons'],
          animations: ['react-type-animation']
        }
      }
    },
    // Enable gzip compression
    reportCompressedSize: true,
    // Minify CSS
>>>>>>> parent of bf5004f (FIna;lly)
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
