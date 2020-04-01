import React from 'react'
import { Message } from 'semantic-ui-react'
import { connect } from 'react-redux' 

import { hideMessage } from '../state/actionCreators'

const Notification = ({ show, message, color, hideMessage }) => {

	if (show) {

		setTimeout(() => hideMessage(), 5000)
		return <Message color={color}>{ message }</Message>
		
	} else {
		return null
	}
}

const mapStateToProps = state => {
	return {
		show: state.show,
		message: state.message,
		color: state.color
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hideMessage: () => dispatch(hideMessage())
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Notification)
