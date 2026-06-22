import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './src/App.jsx';
import './src/index.css';

const container = document.getElementById('app');

// Em producao o HTML ja vem pre-renderizado (SSG) -> hidrata.
// Em desenvolvimento o container esta vazio -> renderiza do zero.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />, { onRecoverableError: () => {} });
} else {
  createRoot(container).render(<App />);
}
