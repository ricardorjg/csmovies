import React, { useState, useEffect } from 'react'
import {
	useParams
} from 'react-router-dom'

const movieDetail = {"adult":false,"backdrop_path":"/i5r9aTDKo1y6paUX1PHsPhZstZk.jpg","belongs_to_collection":null,"budget":0,"genres":[{"id":18,"name":"Drama"}],"homepage":"","id":113833,"imdb_id":"tt1684226","original_language":"en","original_title":"The Normal Heart","overview":"The story of the onset of the HIV-AIDS crisis in New York City in the early 1980s, taking an unflinching look at the nation's sexual politics as gay activists and their allies in the medical community fight to expose the truth about the burgeoning epidemic to a city and nation in denial.","popularity":10.862,"poster_path":"/fIf4nLpWHK8BsbH76fPgMbLSjuU.jpg","production_companies":[{"id":7429,"logo_path":"/6in9uMqxXEHx5XgYgkeRBpZ4rPw.png","name":"HBO Films","origin_country":"US"},{"id":81,"logo_path":"/8wOfUhA7vwU2gbPjQy7Vv3EiF0o.png","name":"Plan B Entertainment","origin_country":"US"},{"id":19328,"logo_path":"/2AdkrU1av4fDGw0Zaf68XH4YcqC.png","name":"Ryan Murphy Productions","origin_country":"US"},{"id":3172,"logo_path":"/kDedjRZwO8uyFhuHamomOhN6fzG.png","name":"Blumhouse Productions","origin_country":"US"},{"id":1556,"logo_path":"/31h94rG9hzjprXoYNy3L1ErUya2.png","name":"20th Century Fox Television","origin_country":"US"}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2014-05-25","revenue":0,"runtime":133,"spoken_languages":[{"iso_639_1":"en","name":"English"}],"status":"Released","tagline":"To win a war, You have to start one","title":"The Normal Heart","video":false,"vote_average":7.9,"vote_count":619}

const MovieDetail = () => {

	let { movieid } = useParams();
	const [fetchingDetails, setFechingDetails] = useState(false)
	const [movieDetails, setMovieDetails] = useState({})
	const [dummyBtn, setDummyBtn] = useState(1)

	useEffect(() => {
		setFechingDetails(true)
		setTimeout(() => {
			setMovieDetails(movieDetail)
			setFechingDetails(false)
		}, 5000)
	}, [])

	if (fetchingDetails) {
		return <div>Fetching movie details...</div>
	}

	return <div>
		{movieDetails.overview}
		<button name="dummy" onClick={() => setDummyBtn(dummyBtn + 1)}>
			+
		</button>
	</div>
}

export default MovieDetail

