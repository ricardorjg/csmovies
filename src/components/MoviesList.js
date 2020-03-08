import React, { useState, useEffect } from 'react'
import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom"

import PrivateRoute from './PrivateRoute'
import MovieDetail from './MovieDetail'

const fetchedMovieList = [
	{"popularity":10.702,"vote_count":619,"video":false,"poster_path":"\/fIf4nLpWHK8BsbH76fPgMbLSjuU.jpg","id":113833,"adult":false,"backdrop_path":"\/i5r9aTDKo1y6paUX1PHsPhZstZk.jpg","original_language":"en","original_title":"The Normal Heart","genre_ids":[18],"title":"The Normal Heart","vote_average":7.9,"overview":"The story of the onset of the HIV-AIDS crisis in New York City in the early 1980s, taking an unflinching look at the nation's sexual politics as gay activists and their allies in the medical community fight to expose the truth about the burgeoning epidemic to a city and nation in denial.","release_date":"2014-05-25"},
	{"popularity":10.695,"vote_count":1132,"video":false,"poster_path":"\/82BWSf1NfCm18ZJtAOIym1QRd24.jpg","id":170687,"adult":false,"backdrop_path":"\/yFtr1BD7AHeruIm9jsVnoebEN2v.jpg","original_language":"en","original_title":"The Boxtrolls","genre_ids":[16,35,14,10751],"title":"The Boxtrolls","vote_average":6.6,"overview":"An orphaned boy raised by underground creatures called Boxtrolls comes up from the sewers and out of his box to save his family and the town from the evil exterminator, Archibald Snatcher.","release_date":"2014-09-10"},
	{"popularity":10.643,"vote_count":469,"video":false,"poster_path":"\/gV2QQqj0ub0OQOtAby4O5Y06zZt.jpg","id":242310,"adult":false,"backdrop_path":"\/d7S5j0zxR4LFgBrBGKSRYFeEgw1.jpg","original_language":"en","original_title":"Tokarev","genre_ids":[28,80,53],"title":"Rage","vote_average":5.2,"overview":"When the Russian mob kidnaps the daughter of a reformed criminal, he rounds up his old crew and seeks his own brand of justice.","release_date":"2014-05-09"}
]

const yearsOptions = new Array(10)
							.fill(new Date().getFullYear())
							.map((v, i) => v - i)
							.map((v, i) => <option key={i} value={v}>{v}</option>)

const MoviesList = () => {

	let { path, url } = useRouteMatch();

	const [movieList, setMovieList] = useState([])
	const [fetchingMovies, setFetchingMovies] = useState(false)
	const [yearFilter, setYearFilter] = useState(2011)

	useEffect(() => {
		
		setFetchingMovies(true)
		setTimeout(() => {
			setMovieList(fetchedMovieList)
			setFetchingMovies(false)
		}, 5000)

	}, [yearFilter])

	return (
		<React.Fragment>
			<Switch>
				<Route exact path={path}>
					<div>
						<select 
							name="year_filter" 
							id="year_filter"
							value={yearFilter}
							onChange={(e) => setYearFilter(e.target.value)}>
							{yearsOptions}
						</select>
					</div>
					{ fetchingMovies ? <div>Loading...</div> : (
						<ul>
							{movieList.map((m, index) => (
								<li key={index}>
									<Link to={`${url}/${m.id}`}>{m.original_title}</Link>
								</li>
							))}
						</ul>
					)}
				</Route>
				<PrivateRoute path={`${path}/:movieid`} component={MovieDetail} />
			</Switch>
			
		</React.Fragment>
	)
}

export default MoviesList