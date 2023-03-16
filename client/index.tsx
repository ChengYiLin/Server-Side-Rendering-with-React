import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// 👉 Render
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

const serverData = window?.__SERVER_DATA__ || null;
serverData && delete window?.__SERVER_DATA__;

// 👉 Hydration
ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <App serverData={serverData} />,
);
