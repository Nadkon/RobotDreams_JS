import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Photo, ContactInfo, GetExperience } from "./App";
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

const experience = ReactDOM.createRoot(document.getElementById("experience"));
experience.render(
  <React.StrictMode>
    <GetExperience />
  </React.StrictMode>
);

reportWebVitals();
