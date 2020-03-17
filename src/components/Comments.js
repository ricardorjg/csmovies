import React, { Fragment } from 'react'
import { Button, Comment, Form, Header, Container } from 'semantic-ui-react'

import CommentDetail from './CommentDetail'

const Comments = ({ comments }) => {

	return (
		<Comment.Group minimal>
			<Header as='h3' dividing>
				Other users comments
			</Header>
			{
				!comments.length 
				&& 
				<Container text>
					<p>
						There are no other user's comments for this movie
					</p>
				</Container>
			}
			{
				comments.length 
				&& 
				comments.map((comment, index) => <CommentDetail key={index} index={index} {...comment} />)
			}
		</Comment.Group>
	)
}

export default Comments