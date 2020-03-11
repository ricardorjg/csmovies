import axios from 'axios'

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
}

const getMovieDetails = (movieid, token) => {
	return axios
				.get(`${BASE_URL}/moviesdb/${movieid}`, {
					headers: {
						Authorization: `Bearer ${token}`
					} 
				 })
				.then(response => response.data)
}

const getRatings  = (movieid, token) => {
	return axios
				.get(`${BASE_URL}/reviews/${movieid}`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				.then(response => response.data)
}

const saveRating = (movieid, data, token) => {
	return axios({
			url: `${BASE_URL}/reviews/${movieid}/save`,
			method: 'POST',
			data,
			headers: {Authorization: `Bearer ${token}`}
		})
		.then(response => response.data)
}

export default {
	getMovies,
	getMovieDetails,
	getRatings,
	saveRating
}