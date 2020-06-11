import React from 'react'
import { Button, Icon } from 'native-base'

const DeleteUser = () => (
	<Button transparent disabled>
		<Icon
			style={{ color: 'red', fontSize: 30 }}
			type='AntDesign'
			name='deleteuser'
		></Icon>
	</Button>
)

export default DeleteUser
