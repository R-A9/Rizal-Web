import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter()
  ],
  
  // Define JSX settings
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
  },
  
  // React-specific settings
  esbuild: {
    jsxDev: process.env.NODE_ENV === 'development',
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', '@headlessui/react', '@heroicons/react'],
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
<<<<<<< HEAD
    // Enable HTTP/2 in development
    https: false,
    // Preload modules
    preTransformRequests: true
=======
    https: false
>>>>>>> 8fc9ff3697bad57ab3ece5061ca93d475f8894b6
  }
});
