import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import {
	useAuth0
} from "../react-auth0-spa";

import store from '../state/store'
import Ratings from '../components/Ratings'

// intercept the useAuth0 function and mock it
jest.mock("../react-auth0-spa");

const mockedUser = {
	email: 'swift_as_any_arrow@hotmail.com',
}

describe("First test", () => {
	beforeEach(() => {
		useAuth0.mockReturnValue({
			user: mockedUser,
			loading: false,
			isAuthenticated: true,
			logout: jest.fn(),
			loginWithRedirect: jest.fn()
		});
	})

	it("renders without crashing", () => {

		const movieId = 23629;
		const movieRatings = [
			{
				"creation_date":"2020-03-17T03:26:08.871Z",
				"email":"parti@hotmail.com",
				"movie_id":23629,
				"rating":4,
				"comment":"Not for me. I pass",
				"id":"5e7043504b39ca1bceec128a"
			},
			{
				"creation_date":"2020-03-17T03:26:40.320Z",
				"email":"dmaria@hotmail.com",
				"movie_id":23629,
				"rating":4,
				"comment":"this is only rock and roll but I like it",
				"id":"5e7043704b39ca1bceec128b"
			},
			{
				"creation_date":"2020-03-17T03:27:07.003Z",
				"email":"franjo@hotmail.com",
				"movie_id":23629,
				"rating":5,
				"comment":"Dont fool yourself girl",
				"id":"5e70438b4b39ca1bceec128c"
			},
			{
				"creation_date":"2020-03-17T03:27:34.590Z",
				"email":"luisaz@hotmail.com",
				"movie_id":23629,
				"rating":5,
				"comment":"The problem for me its that the characters are from another movie",
				"id":"5e7043a64b39ca1bceec128d"
			},
			{
				"creation_date":"2020-03-23T14:38:13.782Z",
				"email":"swift_as_any_arrow@hotmail.com",
				"movie_id":23629,
				"comment":"forgettable",
				"id":"5e78c9d5203d1a525daeac1f"
			}
		]

		const component = render(
			<Provider store={store}>
				<Ratings 
				movieId={movieId}
				movieRatings={movieRatings} />
			</Provider>
		)

		expect(component.container).toHaveTextContent(
			'Other users comments'
		)

		expect(component.container).toHaveTextContent(
			'Your thoughts'
		)

		expect(component.container).toHaveTextContent(
			'Dont fool yourself girl'
		)
	});
})