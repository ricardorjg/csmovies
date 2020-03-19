import React from "react"
import { useAuth0 } from "../react-auth0-spa"

import {
	Container,
	Menu,
	Segment
} from 'semantic-ui-react'

import Login from './Login'
import MoviesList from './MoviesList'
import Notification from './Notification'

const Main = () => {

	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

	if (!isAuthenticated) {
		return <Login loginWithRedirect={loginWithRedirect} />
	}

	return (
		<div>
			<Menu fixed='top' inverted color='teal'>
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
				<Notification />
				<MoviesList />
				<Notification />
			</Container>
			<Segment inverted color='teal' vertical style={{ margin: '3em 0em 0em', padding: '3em 0em' }}></Segment>
  		</div>
	)
}

export default Main

