import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Photo, ContactInfo, GetExperience } from "./App";
import reportWebVitals from "./reportWebVitals";

const photo = ReactDOM.createRoot(document.getElementById("img"));
photo.render(
  <React.StrictMode>
    <Photo />
  </React.StrictMode>
);

const contact = ReactDOM.createRoot(document.getElementById("contact-info"));
contact.render(
  <React.StrictMode>
    <ContactInfo />
  </React.StrictMode>
);

const experience = ReactDOM.createRoot(document.getElementById("experience"));
experience.render(
  <React.StrictMode>
    <GetExperience />
  </React.StrictMode>
);

reportWebVitals();
