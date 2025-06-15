import { handleRequest } from "./build/server/index.js";

// Serverless function wrapper with error handling
export default async function handler(request, context) {
  try {
    // Set shorter timeout for serverless
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Function timeout')), 8000);
    });

    const response = await Promise.race([
      handleRequest(
        request,
        200,
        new Headers(),
        {},
        context
      ),
      timeoutPromise
    ]);

    return response;
  } catch (error) {
    console.error('Serverless function error:', error);
    
    return new Response(
      `
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
      `,
      {
        status: 503,
        headers: {
          'Content-Type': 'text/html',
          'Retry-After': '60'
        }
      }
    );
  }
}
