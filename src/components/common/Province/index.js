import { Icon, Picker } from 'native-base'
import React, { useEffect, useState } from 'react'
import { getAllProvince } from '../../../redux/actions/province'
import PickerContainer from '../PickerContainer'

export default Province = ({ onValueChange }) => {
	const [provinceList, setProvinceList] = useState([])
	const [selectedProvince, setSelectedProvince] = useState('')

	useEffect(() => {
		const fetchProvinceList = async () => {
			const result = await getAllProvince()
			setProvinceList(result)
		}
		fetchProvinceList()
	}, [])

	return (
		<PickerContainer>
			<Picker
				mode='dropdown'
				iosIcon={<Icon name='arrow-down' />}
				style={{ width: undefined }}
				selectedValue={selectedProvince}
				onValueChange={(value) => {
					setSelectedProvince(value)
					onValueChange(value)
				}}
			>
				<Picker.Item label='Name of province' value='' />

				{provinceList.map((province) => (
					<Picker.Item label={province} value={province} />
				))}
			</Picker>
		</PickerContainer>
	)
}
