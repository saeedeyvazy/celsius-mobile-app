import React from 'react'
import { Item, Input, Label } from 'native-base'

const CelsiusInput = ({
	label,
	keyboardType,
	value,
	editable,
	onChangeText,
}) => {
	return (
		<Item
			inlineLabel
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
			<Label style={{ color: '#00008b' }}>{label}</Label>
			<Input
				keyboardType={keyboardType}
				style={{ fontSize: 15 }}
				value={value}
				editable={editable}
				onChangeText={(value) => onChangeText(value)}
			/>
		</Item>
	)
}

export default CelsiusInput
