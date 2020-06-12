import React, { useState } from 'react'
import PickerContainer from '../PickerContainer'
import { Picker, Icon } from 'native-base'

export default Gender = () => {
	const [gender, setGender] = useState('')
	return (
		<PickerContainer>
			<Picker
				mode='dropdown'
				iosIcon={<Icon name='arrow-down' />}
				style={{
					width: undefined,
					fontSize: 14,
				}}
				selectedValue={gender}
				onValueChange={(value) => setGender(value)}
			>
				<Picker.Item label='Gender' value='' />
				<Picker.Item label='Male' value='Male' />
				<Picker.Item label='Female' value='Female' />
				<Picker.Item label='Other' value='Other' />
			</Picker>
		</PickerContainer>
	)
}
