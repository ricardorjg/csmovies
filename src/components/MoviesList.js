import React, { useState, useEffect } from 'react'
import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom"

import apiMovies from '../services/apiMovies'
import PrivateRoute from './PrivateRoute'
import MovieDetail from './MovieDetail'
import Pagination from './Pagination'

const yearsOptions = new Array(10)
							.fill(new Date().getFullYear())
							.map((v, i) => v - i)
							.map((v, i) => <option key={i} value={v}>{v}</option>)

const MoviesList = () => {

	let { path, url } = useRouteMatch();

	const [movieList, setMovieList] = useState([])
	const [fetchingMovies, setFetchingMovies] = useState(false)
	const [yearFilter, setYearFilter] = useState(2011)
	const [currentPage, setCurrentPage] = useState(1)
	const [pagesInfo, setPagesInfo] = useState({
		total_results: null,
		total_pages: null
	})

	useEffect(() => {
		
		async function fetchMovies()  {
			setFetchingMovies(true)
			const responseData = await apiMovies.getMovies(yearFilter, currentPage)
			const { total_pages, total_results, results } = responseData

			setMovieList(results)
			setPagesInfo({ total_results, total_pages })
			setFetchingMovies(false)
		}

		fetchMovies()

	}, [yearFilter, currentPage])

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

					<Pagination
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						{...pagesInfo} />

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