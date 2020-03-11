import React from 'react'

const CommentDetail = ({ comment, rating }) => (
	<div>
		<p>{rating}: {comment}</p>
	</div>
)

export default CommentDetail