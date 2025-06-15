// Vercel serverless function for React Router app
export default async function handler(request, response) {
  try {    // Import the React Router server handler
    const { default: serverHandler } = await import('../build/server/server/index.js');
    
    // Create a proper request object for React Router
    const url = new URL(request.url, `https://${request.headers.host}`);
    
    // Create a Request object compatible with React Router
    const reactRouterRequest = new Request(url, {
      method: request.method,
      headers: request.headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
    });

    // Call React Router's server handler
    const reactRouterResponse = await serverHandler(reactRouterRequest);
    
    // Set response headers
    for (const [key, value] of reactRouterResponse.headers.entries()) {
      response.setHeader(key, value);
    }
    
    // Set status code
    response.status(reactRouterResponse.status);
    
    // Send the response body
    if (reactRouterResponse.body) {
      const reader = reactRouterResponse.body.getReader();
      const chunks = [];
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
      }
      
      const body = Buffer.concat(chunks.map(chunk => Buffer.from(chunk)));
      response.send(body);
    } else {
      response.end();
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
          <details style="margin-top: 20px; text-align: left;">
            <summary>Error Details</summary>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">
${error.stack || error.message}
            </pre>
          </details>
        </body>
      </html>
    `);
  }
}
