import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// 👉 Render
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// 👉 Hydration
const root = ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
root.render(<App />);
