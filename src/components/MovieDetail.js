import React, { useState, useEffect } from 'react'
import {
	useParams
} from 'react-router-dom'

import apiMovies from '../services/apiMovies'

const MovieDetail = () => {

	let { movieid } = useParams();

	const [fetchingDetails, setFechingDetails] = useState(false)
	const [movieDetails, setMovieDetails] = useState({})

	useEffect(() => {

		async function fetchMovieDetails() {
			setFechingDetails(true)
			const details = await apiMovies.getMovieDetails(movieid)
			debugger
			setMovieDetails(details)
			setFechingDetails(false)
		}

		fetchMovieDetails()
	}, [])

	if (fetchingDetails) {
		return <div>Fetching movie details...</div>
	}

	return <div>
		{movieDetails.overview}
	</div>
}

export default MovieDetail

