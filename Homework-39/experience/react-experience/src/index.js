import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { ShowCurrentJob, Photo, ContactInfo } from "./App";
import reportWebVitals from "./reportWebVitals";
import photo from "./photo.webp";

const img = ReactDOM.createRoot(document.getElementById("img"));
img.render(
  <React.StrictMode>
    <Photo src={photo} />
  </React.StrictMode>
);

const contact = ReactDOM.createRoot(document.getElementById("contact-info"));
contact.render(
  <React.StrictMode>
    <ContactInfo />
  </React.StrictMode>
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root1.render(
  <React.StrictMode>
    <ShowCurrentJob />
  </React.StrictMode>
);

root2.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
