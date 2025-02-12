import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional, for global styles
import AppRoutes from './AppRoutes.jsx';  // Import AppRoutes for routing

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppRoutes />  {/* This will set up the routing */}
  </React.StrictMode>
);
