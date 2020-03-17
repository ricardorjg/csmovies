import React from "react"
import { useAuth0 } from "../react-auth0-spa"

import {
	Container,
	Menu
} from 'semantic-ui-react'

import Login from './Login'
import MoviesList from './MoviesList'

const Main = () => {

	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

	if (!isAuthenticated) {
		return <Login loginWithRedirect={loginWithRedirect} />
	}

	return (
		<div>
			<Menu fixed='top' inverted>
				<Container>
					{
						isAuthenticated && 
						<Menu.Item 
							as='a'
							onClick={() => logout()}>
							Log out
						</Menu.Item>
					}
				</Container>
			</Menu>
			<Container text style={{ marginTop: '7em' }}>
				<MoviesList />
			</Container>
  		</div>
	)
}

export default Main

