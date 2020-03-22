import React, { Fragment } from 'react'
import { 
	Message, 
	Divider 
} from 'semantic-ui-react'

const About = () => <Fragment>
	<Message info>
		<Message.Header>Some useful info</Message.Header>
		<p>Developed by Ricardo José Gómez</p>
		<p>The movie "Limitless" from the year 2011 page 1 (or localhost:3000/51876) shows how it looks a movie with no comments.</p>
		<p>the movie "Sucker Punch" from the year 2011 page 3 (or http://localhost:3000/23629) shows how it looks a movie with many comments.</p>
		<Divider />
		<Message.Header>Github repository</Message.Header>
		<p>Here</p>
	</Message>
</Fragment>

export default About