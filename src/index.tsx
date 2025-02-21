import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.html';
import './index.scss';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App title="I'm a React boilerplate" />
  </React.StrictMode>
);
