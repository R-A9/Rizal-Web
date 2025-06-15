/** @type {import('@react-router/dev/config').Config} */
export default {
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  
  // Vercel deployment configuration
  serverBuildFile: "server/index.js",
  
  // Build configuration for Vercel
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  }
};
