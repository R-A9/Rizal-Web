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
    // Reduce bundle size for serverless
    reportCompressedSize: false,
    cssMinify: true,
    sourcemap: false,
    // Optimize for serverless
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  // Enable asset optimization
  assetsInclude: ['**/*.webp', '**/*.avif'],
  
  // Server configuration for development
  server: {
    https: false,
    // Reduce memory usage
    preTransformRequests: false
  },
  
  // Reduce memory usage
  esbuild: {
    logLevel: 'error'
  }
});
