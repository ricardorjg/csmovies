import React, { useState, useEffect } from 'react'
import {
	Switch,
	Route,
	useRouteMatch
} from "react-router-dom"

import { useAuth0 } from "../react-auth0-spa"

import { Grid, Header, Select } from 'semantic-ui-react'

import apiMovies from '../services/apiMovies'
import PrivateRoute from './PrivateRoute'
import MovieDetail from './MovieDetail'
import PaginationMovies from './PaginationMovies'
import MovieCard from './MovieCard'
import VerticalGrid from './VerticalGrid'

const yearsOptions = new Array(10)
							.fill(new Date().getFullYear())
							.map((v, i) => v - i)
							.map((v, i) => {
								return {key: v, value: v, text: v}
							})

const MoviesList = () => {

	let { path } = useRouteMatch()

	const { getTokenSilently } = useAuth0()

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

			const token = await getTokenSilently()
			const responseData = await apiMovies.getMovies(yearFilter, currentPage, token)
			const { total_pages, total_results, results } = responseData

			setMovieList(results)
			setPagesInfo({ 
				total_results: total_results, //Casted to string so the Pagination component of Semantic UI can work.
				total_pages: total_pages
			})
			setFetchingMovies(false)
		}

		fetchMovies()

	}, [yearFilter, currentPage])

	const movieCards = movieList.map((m, index) => (
			<Grid.Column key={index}>
				<MovieCard {...m} />
			</Grid.Column>
		)
	)

	return (
		<React.Fragment>
			<Switch>
				<Route exact path={path}>
					<Grid columns={2}>
						<Grid.Column>					
							<Header as='h1'>Movies</Header>
						</Grid.Column>
						<Grid.Column textAlign={'right'}>					
							<Select 
								name="year_filter" 
								id="year_filter"
								placeholder='Select your country' 
								options={yearsOptions}
								value={yearFilter}
								onChange={(e, { value }) => setYearFilter(value)}/>
						</Grid.Column>
					</Grid>

					{ fetchingMovies ? <div>Loading...</div> : (
						<VerticalGrid>
							{ movieCards }
						</VerticalGrid>
					)}

					<PaginationMovies 
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						{...pagesInfo}
						align={'center'} />
				</Route>
				<PrivateRoute path={`/:movieid`} component={MovieDetail} />
			</Switch>
			
		</React.Fragment>
	)
}

export default MoviesList