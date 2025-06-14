import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter(),
    // Add bundle analyzer only when ANALYZE=true
    process.env.ANALYZE && analyzer({
      analyzerMode: 'server',
      openAnalyzer: true,
    })
  ].filter(Boolean),
  
  optimizeDeps: {
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
    // Source maps only in development
    sourcemap: process.env.NODE_ENV === 'development'
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
