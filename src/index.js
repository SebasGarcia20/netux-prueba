import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SolicitudTurnos } from './views/SolicitudTurnos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SolicitudTurnos />
  </React.StrictMode>
);