import React from 'react';
import { createRoot } from 'react-dom/client';

// Simple test component to check if React is working
function TestApp() {
  return (
    <div>
      <h1>React Test</h1>
      <p>If you can see this, React is working properly.</p>
    </div>
  );
}

// Test if React can be imported and used
console.log('React version:', React.version);
console.log('React object:', React);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<TestApp />);
}

export default TestApp;
