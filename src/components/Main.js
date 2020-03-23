import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { useAuth0 } from "../react-auth0-spa"

import {
	Container,
	Menu,
	Segment,
	Icon
} from 'semantic-ui-react'

import Login from './Login'
import MoviesList from './MoviesList'

const Main = () => {

	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

	if (!isAuthenticated) {
		return <Login loginWithRedirect={loginWithRedirect} />
	}

	return (
		<div className='Site'>
			<Menu fixed='top' inverted color='teal'>
					{
						isAuthenticated &&
						<Fragment>
							<Menu.Item 
								as='a'>
								<Link to="/">
									<Icon name='home' />
									Home
								</Link>
							</Menu.Item>
							<Menu.Menu position='right'>
								<Menu.Item 
									as='a'>
									<Link to="/profile">
										<Icon name='user' />
										Profile
									</Link>
								</Menu.Item>
								<Menu.Item 
									as='a'
									onClick={() => logout()}>
										<Icon name='sign-out' />
										Log out
								</Menu.Item>
								<Menu.Item 
									as='a'>
									<Link to="/about">
										<Icon name='info' />
										About
									</Link>
							</Menu.Item>
							</Menu.Menu>
						</Fragment>
					}
			</Menu>
			<Container text style={{ marginTop: '7em' }} className='Site-content'>
				<MoviesList />
			</Container>
			<Segment 
				inverted
				color='teal'
				textAlign='center'
				vertical={true}
				style={{ margin: '3em 0em 0em', padding: '3em 0em' }}>
					Developed by Ricardo Jose Gomez (ricardorjg@hotmail.com)
			</Segment>
  		</div>
	)
}

export default Main

