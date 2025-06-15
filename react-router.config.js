/** @type {import('@react-router/dev/config').Config} */
export default {
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  
  // Build configuration for SPA mode
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  }
};
