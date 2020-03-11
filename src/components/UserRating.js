import React, { Fragment } from 'react'

const UserRating = ({ userRating, setUserRating, handleSubmit }) => {

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<select 
					name="rating"
					value={userRating.rating}
					onChange={e => setUserRating({...userRating, rating: e.target.value})}>
						<option value=""></option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
				</select>
				<textarea 
					name="comment"
					value={userRating.comment}
					onChange={e => setUserRating({...userRating, comment: e.target.value})}>
				</textarea>
				<button
					name="button"
					type="submit">
						Save Rating
				</button>
			</form>
		</Fragment>
	)
}

export default UserRating