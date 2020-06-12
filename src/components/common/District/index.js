import { Icon, Picker } from 'native-base'
import React, { useEffect, useState } from 'react'
import { getAllDistrict } from '../../../redux/actions/district'
import PickerContainer from '../PickerContainer'

export default District = ({ onValueChange, children }) => {
	const [districtList, setDistrictList] = useState([])
	const [selectedDistrict, setSelectedDistrict] = useState('')

	useEffect(() => {
		const fetchDistrictList = async () => {
			const result = await getAllDistrict()
			setDistrictList(result)
		}
		fetchDistrictList()
	}, [])

	return (
		<PickerContainer>
			{children}
			<Picker
				mode='dropdown'
				iosIcon={<Icon name='arrow-down' />}
				style={{ width: undefined }}
				selectedValue={selectedDistrict}
				placeholder='Select district'
				onValueChange={(value) => {
					setSelectedDistrict(value)
					onValueChange(value)
				}}
			>
				<Picker.Item label='' value='' />

				{districtList.map((district) => (
					<Picker.Item label={district} value={district} />
				))}
			</Picker>
		</PickerContainer>
	)
}
