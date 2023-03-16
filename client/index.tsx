import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// 👉 Render
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// 👉 Hydration
ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
