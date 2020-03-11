import React, { Fragment } from 'react'

import CommentDetail from './CommentDetail'

const Comments = ({ comments }) => {

	return (
		<Fragment>
			<h3>Other users comments</h3>
			{!comments.length && <div>There are no other user's comments for this movie</div>}
			{comments.length && comments.map((comment, index) => {
				return <CommentDetail key={index} {...comment} />
			})}
		</Fragment>
	)
}

export default Comments