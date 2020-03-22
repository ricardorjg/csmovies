import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { useAuth0 } from "./react-auth0-spa"

import { Loader } from 'semantic-ui-react'

import history from "./utils/history"

import Main from './components/Main'

const App = () => {

	const { loading } = useAuth0()

  	if (loading) {
    	return <Loader active inline='centered' />
  	}

  	return (
    	<div className="App">
      		<Router history={history}>
				<Main />
        		<Switch>
          			<Route path="/" exact />
        		</Switch>
      		</Router>
    	</div>
  	)
}

export default App