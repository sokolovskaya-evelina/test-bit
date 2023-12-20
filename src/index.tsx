import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Index />
);

reportWebVitals();
