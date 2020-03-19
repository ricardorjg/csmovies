import { 
	CONF_MESSAGE
} from './actions'

export const showMessage = (message, color) => {
	return {
		type: CONF_MESSAGE,
		payload: {
			show: true,
			message,
			color
		}
	}
}

export const hideMessage = () => {
	return {
		type: CONF_MESSAGE,
		payload: {
			show: false,
			message: '',
			color: '',
		}
	}
}