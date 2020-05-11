import React from 'react'
import { View } from 'native-base'

const PickerContainer = ({ children }) => {
	return (
		<View
			style={{
				width: 300,
				marginTop: 5,
				marginLeft: 20,
				marginRight: 20,
				borderColor: 'black',
				borderBottomWidth: 1,
				borderRadius: 10,
				alignSelf: 'center',
			}}
		>
			{children}
		</View>
	)
}

export default PickerContainer
