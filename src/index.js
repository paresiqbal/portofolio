import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSchool,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
  faSchool,
  faBriefcase
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
