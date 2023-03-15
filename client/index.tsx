import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';

const root = document.querySelector('#root');

if (root) {
    ReactDOM.createRoot(root).render(
        <StrictMode>
            <Home />
        </StrictMode>,
    );
} else {
    alert('Can not find root element');
}
