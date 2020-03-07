import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Auth0Provider } from "./react-auth0-spa"
import { config } from 'dotenv'
import history from "./utils/history"

config()
// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
	history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
}

ReactDOM.render(
	<Auth0Provider
    	domain={process.env.REACT_APP_DOMAIN}
    	client_id={process.env.REACT_APP_CLIENTID}
		redirect_uri={window.location.origin}
		audience={process.env.REACT_APP_AUDIENCE}
    	onRedirectCallback={onRedirectCallback}>
    	<App />
  	</Auth0Provider>,
  	document.getElementById("root")
)

serviceWorker.unregister()