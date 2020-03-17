import React from 'react'
import { Comment, Rating } from 'semantic-ui-react'

const CommentDetail = ({ email, comment, rating }) => (
	<Comment>
		<Comment.Content>
			<Comment.Author>{ email }</Comment.Author>
			<Comment.Metadata>
				<span>
					<Rating 
						defaultRating={rating} 
						maxRating={5} 
						icon='star' 
						size='mini'
						disabled />
				</span>
			</Comment.Metadata>
			<Comment.Text>
				{ comment }
			</Comment.Text>
		</Comment.Content>
	</Comment>
)

export default CommentDetail