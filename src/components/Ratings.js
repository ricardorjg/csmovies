import React, { useState, Fragment } from 'react'
import { useAuth0 } from "../react-auth0-spa"

import apiMovies from '../services/apiMovies'
import UserRating from './UserRating'
import Comments from './Comments'



const Ratings = ({ movieId, movieRatings }) => {

	const { _, user, getTokenSilently } = useAuth0()

	const defaultUserRating = {
		rating: 0,
		comment: '',
		movie_id: movieId, 
		email: user.email,
	}

	const initialUserRating = Object
								.assign(
									{},
									movieRatings
										.filter(mr => mr.email === user.email)
										.map(({ rating, comment }) => { 
											return {...defaultUserRating, rating: rating,  comment: comment} 
										}).pop() || defaultUserRating
								)

	const [userRating, setUserRating] = useState(initialUserRating)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const token = await getTokenSilently()
		const savedUserRating = await apiMovies.saveRating(movieId, userRating, token)
		setUserRating(savedUserRating)
	}

	return (
		<Fragment>
			<UserRating 
				userRating={userRating}
				setUserRating={setUserRating} 
				handleSubmit={handleSubmit} />
			<Comments comments={movieRatings.filter(mr => mr.email !== user.email)} />
		</Fragment>
	)
}

export default Ratings