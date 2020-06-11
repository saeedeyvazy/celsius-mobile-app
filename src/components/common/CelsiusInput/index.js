import React from 'react'
import { Item, Input, Label } from 'native-base'
import Icon from 'react-native-dynamic-vector-icons'
import style from './style'
const CelsiusInput = ({
	label,
	keyboardType,
	value,
	editable,
	onChangeText,
	required,
	placeholder,
}) => {
	return (
		<Item inlineLabel placeholder style={style.item}>
			<Label style={{ fontSize: 14, marginLeft: 10 }}>
				{label}
				{required && (
					<Icon name='star' style={{ fontSize: 9, color: 'red' }}></Icon>
				)}
			</Label>
			<Input
				keyboardType={keyboardType}
				style={{ fontSize: 15 }}
				value={value}
				editable={editable}
				onChangeText={(value) => onChangeText(value)}
				placeholder={placeholder}
			/>
		</Item>
	)
}

export default CelsiusInput
