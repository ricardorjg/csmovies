import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useAuth0 } from "./react-auth0-spa"

import history from "./utils/history"
import Profile from "./components/Profile"
import PrivateRoute from "./components/PrivateRoute"
import ExternalApi from "./services/ExternalApi"
import MoviesList from './components/MoviesList'

const App = () => {

	const { loading } = useAuth0()

  	if (loading) {
    	return <div>Loading...</div>
  	}

  	return (
    	<div className="App">
      		<Router history={history}>
        		<header>
          			<NavBar />
        		</header>
        		<Switch>
          			<Route path="/" exact />
          			<PrivateRoute path="/profile" component={Profile} />
					<PrivateRoute path="/external-api" component={ExternalApi} />
					<PrivateRoute path="/movies-list" component={MoviesList} />
        		</Switch>
      		</Router>
    	</div>
  	)
}

export default App