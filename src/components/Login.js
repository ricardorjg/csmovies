import React from 'react'

import { 
	Button,
	Form,
	Grid,
	Segment 
} from 'semantic-ui-react'

const Login = ({ loginWithRedirect }) => (
  	<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
		<Grid.Column style={{ maxWidth: 450 }}>
			<Form size='large'>
				<Button 
					color='teal' 
					fluid 
					size='large'
					onClick={() => loginWithRedirect({})}>
					Login
				</Button>
			</Form>
		</Grid.Column>
  	</Grid>
)

export default Login