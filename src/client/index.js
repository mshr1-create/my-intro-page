// src/client/index.js
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../components/App.tsx';

hydrateRoot(document.getElementById('root'), <App />);
