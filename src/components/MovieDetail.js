import React, { useState, useEffect } from 'react'
import {
	useParams
} from 'react-router-dom'

import { Image } from 'semantic-ui-react'

import { useAuth0 } from "../react-auth0-spa"

import apiMovies from '../services/apiMovies'
import Ratings from './Ratings'

const MovieDetail = () => {

	let { movieid } = useParams()
	const { getTokenSilently } = useAuth0()

	const [fetchingDetails, setFechingDetails] = useState(false)
	const [movieDetails, setMovieDetails] = useState({})

	useEffect(() => {

		async function fetchMovieDetails() {
			setFechingDetails(true)
			const token = await getTokenSilently()
			try {
				const details = await apiMovies.getMovieDetails(movieid, token)
				setMovieDetails(details)
			} catch (err) {
				console.log(err)
			} finally {
				setFechingDetails(false)
			}
		}

		fetchMovieDetails()
	}, [])

	if (fetchingDetails) {
		return <div>Fetching movie details...</div>
	}

	return <div>
		<h1>{ movieDetails.original_title }</h1>
		<Image 
			src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : './image-not-available.jpg'} 
			fluid />
		{ movieDetails.overview }
		<br />
		<br />
		{ movieDetails.id && <Ratings movieId={movieDetails.id} /> }
	</div>
}

export default MovieDetail

