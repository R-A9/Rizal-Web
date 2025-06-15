// Simple serverless function for React Router app
export default async function handler(request, response) {
  try {
    // For now, serve the built client-side app
    const fs = await import('fs');
    const path = await import('path');
    
    const buildPath = path.join(process.cwd(), 'build', 'client');
    const indexPath = path.join(buildPath, 'index.html');
    
    if (fs.existsSync(indexPath)) {
      const html = fs.readFileSync(indexPath, 'utf-8');
      response.setHeader('Content-Type', 'text/html');
      response.status(200).send(html);
    } else {
      // Fallback to simple HTML
      response.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Rizal Web</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="app">
              <h1>Rizal Web</h1>
              <p>Loading...</p>
            </div>
            <script>
              window.location.href = '/';
            </script>
          </body>
        </html>
      `);
    }
  } catch (error) {
    console.error('Serverless function error:', error);
    
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
        </body>
      </html>
    `);
  }
}
