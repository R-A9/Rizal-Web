# Rizal Web - Deployment Guide

## Vercel Deployment

This React Router v7 application is configured for deployment on Vercel.

### Configuration Files:

- `vercel.json` - Vercel deployment configuration
- `api/index.js` - Serverless function handler
- `react-router.config.js` - React Router configuration

### Build Process:

1. `npm run build` - Builds the application
2. The built files are placed in `build/client/`
3. Vercel uses the `api/index.js` function to serve the application

### Runtime Version:

The application uses `@vercel/node@3.0.7` runtime which provides:
- Node.js 18.x support
- ES modules support
- React Router v7 compatibility

### Manual Deployment:

If automatic deployment fails, you can deploy manually:

```bash
npm run build
vercel --prod
```

### Troubleshooting:

If you encounter runtime errors:
1. Check that the Node.js version is compatible (>=18.0.0)
2. Ensure all dependencies are properly installed
3. Verify the build completes successfully locally
