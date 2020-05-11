import React from 'react'
import { Item, Label, Input } from 'native-base'

const CelsiusInput = ({ label }) => {
	return (
		<Item
			floatingLabel
			placeholder
			style={{
				width: 300,
				marginTop: 8,
				marginLeft: 20,
				marginRight: 20,
				borderColor: 'black',
				borderBottomWidth: 1,
				borderRadius: 10,
				alignSelf: 'center',
				fontSize: 10,
			}}
		>
			<Input style={{ fontSize: 15 }} placeholder={label} />
		</Item>
	)
}

export default CelsiusInput
