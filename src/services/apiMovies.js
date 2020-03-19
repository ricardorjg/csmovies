import axios from 'axios'
import store from '../state/store'

import { showMessage } from '../state/actionCreators'

const BASE_URL = 'http://localhost:3001/api'

const getMovies = (year, page, token) => {
	return axios
				.get(`${BASE_URL}/moviesdb/`, {
					params: {
						year,
						page
					},
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				.then(response => response.data)
				.catch(error => {
					store.dispatch(showMessage('There was a problem retrieving the  movie list', 'red'))
					return {
						total_pages: 0,
						total_results: 0, 
						results: []
					}
				})
}

const getMovieDetails = async (movieid, token) => {
	try {
		const movieDetails = await axios
									.get(`${BASE_URL}/moviesdb/${movieid}`, {
										headers: {
											Authorization: `Bearer ${token}`
										}
									})
									.then(response => response.data)

		const movieRatings = await axios
									.get(`${BASE_URL}/reviews/${movieid}`, {
										headers: {
											Authorization: `Bearer ${token}`
										}
									})
									.then(response => response.data)
		
		return {
			movie: movieDetails,
			ratings: movieRatings
		}
	} catch (err)  {
		store.dispatch(showMessage('There was a problem retrieving the movie details', 'red'))
		return {
			movie: {},
			ratings: [], 
		}
	}
}

const saveRating = async (movieid, data, token) => {

	try {
		const updatedRating = axios({
									url: `${BASE_URL}/reviews/${movieid}/save`,
									method: 'POST',
									data,
									headers: {Authorization: `Bearer ${token}`}
								})
								.then(response => response.data)
		store.dispatch(showMessage('Movie rating save successfully', 'green'))
		return updatedRating
	} catch (err) {
		store.dispatch(showMessage('There was a problem saving your rating', 'red'))
		return data
	}
}

export default {
	getMovies,
	getMovieDetails,
	saveRating
}