import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { ShowCurrentJob, ContactInfo, GetRepo, ShowRepo } from "./App";
import Photo from "./components/photo";
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

const repos = ReactDOM.createRoot(document.getElementById("repo"));

repos.render(
  <React.StrictMode>
    <GetRepo />
  </React.StrictMode>
);

