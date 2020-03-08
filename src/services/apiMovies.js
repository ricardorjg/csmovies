import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api/moviesdb'

const getMovies = (year, page) => {
	return axios.get(`${BASE_URL}/?year=${year}&page=${page}`).then(response => response.data)
}

const getMovieDetails = movieid => {
	return axios.get(`${BASE_URL}/${movieid}`).then(response => response.data)
}

export default {
	getMovies,
	getMovieDetails
}