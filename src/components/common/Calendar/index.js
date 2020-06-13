import React from 'react'
import style from './style'
import { Item, Label, Icon, DatePicker } from 'native-base'

export default Calendar = ({ label, required, onValueChange }) => {
	return (
		<Item inlineLabel placeholder style={style.item}>
			<Label style={{ fontSize: 14, marginLeft: 10 }}>
				{label}
				{required && (
					<Icon name='star' style={{ fontSize: 9, color: 'red' }}></Icon>
				)}
			</Label>
			<DatePicker
				defaultDate={new Date(2020, 4, 4)}
				minimumDate={new Date(2019, 1, 1)}
				maximumDate={new Date(2030, 12, 31)}
				locale={'en'}
				timeZoneOffsetInMinutes={undefined}
				modalTransparent={false}
				animationType={'fade'}
				androidMode={'default'}
				placeHolderText='Select date'
				textStyle={{ color: 'green' }}
				placeHolderTextStyle={{ color: '#d3d3d3' }}
				onDateChange={(value) => {
					onValueChange(value.toString().substr(4, 12))
				}}
				disabled={false}
			/>
		</Item>
	)
}
