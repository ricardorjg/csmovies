import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from 'react-redux'

import * as serviceWorker from "./serviceWorker"
import { Auth0Provider } from "./react-auth0-spa"

import config from './utils/config'
import history from "./utils/history"
import store from './state/store'

import 'semantic-ui-css/semantic.min.css'
import './styles.css'

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
	history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
}

ReactDOM.render(
	<Auth0Provider
    	domain={config.domain}
    	client_id={config.clientid}
		redirect_uri={window.location.origin}
		audience={config.audience}
    	onRedirectCallback={onRedirectCallback}>
		<Provider store={store}>
    		<App />
		</Provider>
  	</Auth0Provider>,
  	document.getElementById("root")
)

serviceWorker.unregister()