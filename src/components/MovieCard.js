import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import { Link } from "react-router-dom"

const MovieCard = ({ id, original_title, release_date, poster_path }) => (
  	<Card>
		<Image
			src={ poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : './image-not-available.jpg'} 
			wrapped 
			ui={true} />
    	<Card.Content>
			<Card.Header>{ original_title }</Card.Header>
      		<Card.Meta>
				<span className='date'>{ release_date }</span>
      		</Card.Meta>
    	</Card.Content>
    	<Card.Content extra>
			<Link to={`${id}`}>
        		<Icon name='thumbs down'  />
				<Icon name='thumbs up' /> Reviews
      		</Link>
    	</Card.Content>
  	</Card>
)

export default MovieCard