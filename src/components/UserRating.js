import React, { Fragment } from 'react'

import { 
	Button, 
	Form, 
	TextArea,
	Rating
} from 'semantic-ui-react'

import Notification from './Notification'

const UserRating = ({ userRating, setUserRating, handleSubmit }) => {

	return (
		<Fragment>
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<label>Rating</label>
					<Rating
						as='a'
						maxRating={5}
						icon='star'
						size='massive'
						defaultRating={userRating.rating}
						onRate={(e, { rating, maxRating }) => setUserRating({...userRating, rating})} />
				</Form.Field>
				<Form.Field>
					<label>Your thoughts</label>
					<TextArea 
						placeholder='what you think of the movie?'
						value={userRating.comment}
						onChange={e => setUserRating({...userRating, comment: e.target.value})} />
				</Form.Field>
				<Button type='submit'>Save Rating</Button>
				<Notification />
			</Form>
		</Fragment>
	)
}

export default UserRating