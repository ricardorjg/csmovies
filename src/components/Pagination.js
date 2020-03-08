import React from 'react'

const Pagination = ({ total_results, total_pages, current_page, setCurrentPage }) => {

	if (!total_results || !total_pages) return <div></div>

	const options = new Array(total_results / total_pages)
						.fill(0)
						.map((_, i) => <option  key={i} value={i + 1}>{i + 1}</option>)

	return (
		<select
			name="pagination"
			value={current_page}
			onChange={e => setCurrentPage(e.target.value)}>
			{options}
		</select>
	)
}

export default Pagination