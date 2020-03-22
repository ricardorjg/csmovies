import React, { Fragment } from "react"
import { useAuth0 } from "../react-auth0-spa"

import { Loader } from 'semantic-ui-react'

const Profile = () => {

  	const { loading, user } = useAuth0()

  	if (loading || !user) {
    	return <Loader active inline='centered' />
  	}

  	return (
    	<Fragment>
      		<img src={user.picture} alt="Profile" />

      		<h2>{user.name}</h2>
      		<p>Nickname : {user.nickname}</p>
      		<p>email: {user.email}</p>
    	</Fragment>
  	)
}

export default Profile