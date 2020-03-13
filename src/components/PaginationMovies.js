import React from 'react'

import { Grid, Pagination } from 'semantic-ui-react'

const PaginationMovies = ({ total_results, total_pages, currentPage, setCurrentPage, align }) => {

	if (!total_results || !total_pages) return <div></div>

	return (
		<Grid columns={1} textAlign={align}>
			<Grid.Column>
				<Pagination
					activePage={currentPage.toString()} //Cast to string so the component can work
					onPageChange={(e, { activePage }) => setCurrentPage(activePage)}
					totalPages={total_pages.toString()} />
			</Grid.Column>
		</Grid>
	)
}

export default PaginationMovies