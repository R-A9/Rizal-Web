// Fallback API handler for Vercel
export default async function handler(request, response) {
  try {
    console.log('Fallback API Handler - Request URL:', request.url);
    
    // Basic HTML shell that will work with client-side hydration
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#e8d8b5" />
          <meta name="description" content="Learn about Dr. Jose Rizal, the national hero of the Philippines" />
          <title>José Rizal - National Hero of the Philippines</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Rosarivo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="/assets/root-DRfVEttj.css" />
        </head>
        <body>
          <div id="root">
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
              <div style="text-align: center;">
                <h1 style="color: #4a2c11; font-size: 2rem; margin-bottom: 1rem;">José Rizal</h1>
                <p style="color: #6b4423; margin-bottom: 2rem;">Loading...</p>
                <div style="width: 40px; height: 40px; border: 4px solid #e8d8b5; border-top: 4px solid #4a2c11; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
              </div>
            </div>
          </div>
          <style>
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          </style>
          <script type="module" src="/assets/entry.client-B2wsZ0Sf.js"></script>
        </body>
      </html>
    `;
    
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Cache-Control', 'no-cache');
    response.status(200).send(html);
    
  } catch (error) {
    console.error('Fallback API error:', error);
    
    response.status(503).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Service Temporarily Unavailable</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1>Service Temporarily Unavailable</h1>
          <p>We're experiencing technical difficulties. Please try again in a moment.</p>
          <p><a href="/">Return to Home</a></p>
          <details style="margin-top: 20px; text-align: left; max-width: 600px; margin: 0 auto;">
            <summary>Error Details</summary>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">${error.stack || error.message}</pre>
          </details>
        </body>
      </html>
    `);
  }
}
