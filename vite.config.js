import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter()
  ],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
      '@headlessui/react'
    ],
    exclude: [
      'framer-motion',
      'lucide-react',
      '@heroicons/react',
      'react-type-animation'
    ],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  
  build: {
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
    preTransformRequests: true
  }
});
