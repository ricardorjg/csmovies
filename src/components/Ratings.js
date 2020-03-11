import React, { useState, useEffect, Fragment } from 'react'
import { useAuth0 } from "../react-auth0-spa"

import apiMovies from '../services/apiMovies'
import UserRating from './UserRating'
import Comments from './Comments'

const Ratings = ({ movieId }) => {

	const { _, user, getTokenSilently } = useAuth0()

	const [movieRatings, setMovieRatings] = useState([])

	const [userRating, setUserRating] = useState({
		movie_id: movieId, 
		email: user.email
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		const token = await getTokenSilently()
		try {
			const savedUserRating = await apiMovies.saveRating(movieId, userRating, token)
			setUserRating(savedUserRating)
		} catch (err)  {
			console.log(err)
		}
	}

	useEffect(() => {

		async function fetchRatings()  {

			const token = await getTokenSilently()
			const ratings = await apiMovies.getRatings(movieId, token)
			const savedUserRating = ratings.find(r => r.email === user.email)

			if (savedUserRating) {
				setUserRating(savedUserRating)
			}

			setMovieRatings(ratings)
		}

		fetchRatings()
	}, [])

	return (
		<Fragment>
			<UserRating 
				userRating={userRating}
				setUserRating={setUserRating} 
				handleSubmit={handleSubmit} />
			<Comments comments={movieRatings} />
		</Fragment>
	)
}

export default Ratings