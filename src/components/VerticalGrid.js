import React from 'react'
import { Grid } from 'semantic-ui-react'

const VerticalGrid = ({ children }) => (
  <Grid divided='vertically'>
    	<Grid.Row columns={2}>
			{ children }
    	</Grid.Row>
	</Grid>
)

export default VerticalGrid