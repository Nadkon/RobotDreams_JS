import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";


const form = ReactDOM.createRoot(document.getElementById('App'));
form.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
