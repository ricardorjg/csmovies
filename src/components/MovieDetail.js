import React, { useState, useEffect } from 'react'
import {
	useParams
} from 'react-router-dom'

import { Image, Loader } from 'semantic-ui-react'

import { useAuth0 } from "../react-auth0-spa"

import apiMovies from '../services/apiMovies'
import Ratings from './Ratings'

const MovieDetail = () => {

	let { movieid } = useParams()
	const { getTokenSilently } = useAuth0()

	const [fetchingDetails, setFechingDetails] = useState(false)
	const [movieDetails, setMovieDetails] = useState({
		movie: {},
		ratings: []
	})

	useEffect(() => {

		async function fetchMovieDetails() {
			setFechingDetails(true)

			const token = await getTokenSilently()
			const details = await apiMovies.getMovieDetails(movieid, token)

			setMovieDetails(details)
			setFechingDetails(false)
		}

		fetchMovieDetails()
	}, [])

	if (fetchingDetails) {
		return <Loader active inline='centered' />
	}

	return <div>
		<h1>{ movieDetails.movie.original_title }</h1>
		<Image 
			src={movieDetails.movie.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.movie.poster_path}` : './image-not-available.jpg'} 
			fluid />
		{ movieDetails.movie.overview }
		<br />
		<br />
		{ 
			movieDetails.movie.id 
			&& 
			<Ratings 
				movieId={movieDetails.movie.id} 
				movieRatings={movieDetails.ratings} /> 
		}
	</div>
}

export default MovieDetail

