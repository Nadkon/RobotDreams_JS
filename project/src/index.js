import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Form
const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Display weather information
const info = ReactDOM.createRoot(
  document.getElementById("weather-info")
);
info.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Display forecast
const forecast = ReactDOM.createRoot(
  document.getElementById("weather-forecast")
);
forecast.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



