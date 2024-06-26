import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-ct3hbdwzqn1lig32.us.auth0.com"
    clientId="tE6HkdTB3hSRvlRgeyo8LtTOImHoFDyX"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
