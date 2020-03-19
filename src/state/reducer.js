import initialState from './intialState'
import { CONF_MESSAGE } from './actions'

const reducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case CONF_MESSAGE:
			return payload
		default:
			return state
	}
}

export default reducer