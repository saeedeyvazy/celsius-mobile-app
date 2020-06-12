import React, { useState, useEffect } from 'react'
import PickerContainer from '../PickerContainer'
import { Picker, Icon } from 'native-base'
import { getAllSeason } from '../../../redux/actions/season'

export default Season = ({ onValueChange }) => {
	const [seasonList, setSeasonList] = useState([])
	const [selectedSeason, setSelectedSeason] = useState('')

	useEffect(() => {
		const fetchSeasonList = async () => {
			const result = await getAllSeason()
			setSeasonList(result)
		}
		fetchSeasonList()
	}, [])

	return (
		<PickerContainer>
			<Picker
				mode='dropdown'
				iosIcon={<Icon name='arrow-down' />}
				style={{ width: undefined }}
				selectedValue={selectedSeason}
				onValueChange={(value) => {
					setSelectedSeason(value)
					onValueChange(value)
				}}
			>
				<Picker.Item label='Season' value='' />

				{seasonList.map((item) => (
					<Picker.Item label={item.name} value={item.name} />
				))}
			</Picker>
		</PickerContainer>
	)
}
