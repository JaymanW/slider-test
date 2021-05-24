import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <Auth0Provider
    domain="dev-2zwsp4xr.us.auth0.com"
    clientId="WUYTig5VB6jdzBg63MqMNStWBdx8ZJYA"
    redirectUri="http://localhost:3000/"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);