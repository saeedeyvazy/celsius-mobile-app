import React, { useState } from 'react'
import {
	Container,
	Content,
	Icon,
	Picker,
	Form,
	Text,
	Button,
} from 'native-base'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import PickerContainer from '../../components/common/PickerContainer'
import CelsiusInput from '../../components/common/CelsiusInput'
import ViewCalculatePremium from '../../screens/ViewQuote'
import Crop from '../../components/common/Crop'
import Province from '../../components/common/Province'

const Quote = ({ navigation }) => {
	const [selectedProvince, setSelectedProvince] = useState('')
	const [selectedCrop, setSelectedCrop] = useState('')
	const [selectedSeason, setSelectedSeason] = useState('key0')
	const [isModalVisible, setIsModalVisible] = useState(false)
	const avgYield = '4200'
	const [insuranceArea, setInsuranceArea] = useState('')

	return (
		<Container>
			<CelsiusHeader></CelsiusHeader>
			<Content>
				<Form
					style={{
						alignItems: 'center',
					}}
				>
					<Province
						onValueChange={(value) => setSelectedProvince(value)}
					></Province>
					<Crop onValueChange={(value) => setSelectedCrop(value)}></Crop>
					<PickerContainer>
						<Picker
							mode='dropdown'
							iosIcon={<Icon name='arrow-down' />}
							style={{ width: undefined }}
							selectedValue={selectedSeason}
							onValueChange={(value) => setSelectedSeason(value)}
						>
							<Picker.Item label='Season' value='key0' />
							<Picker.Item label='2020-2021' value='2020-2021' />
							<Picker.Item label='2021-2022' value='2020-2022' />
							<Picker.Item label='2022-2023' value='2020-2023' />
						</Picker>
					</PickerContainer>
					<CelsiusInput
						keyboardType='numeric'
						label='Insurance area(ha)'
						onChangeText={(value) => setInsuranceArea(value)}
						value={insuranceArea}
					></CelsiusInput>
					<CelsiusInput
						value={avgYield}
						label='Average yield(kg/ha)'
						keyboardType='numeric'
						editable={false}
						value={avgYield}
					></CelsiusInput>
					<CelsiusInput
						value={(insuranceArea * avgYield).toString()}
						label='Sum Insured(2MW)'
						keyboardType='numeric'
						editable={false}
					></CelsiusInput>
					<CelsiusInput
						label='Deductible'
						editable={false}
						value={(insuranceArea * avgYield * 0.1).toString()}
					></CelsiusInput>

					<Button
						dark
						full
						style={{ marginTop: 15 }}
						onPress={() => setIsModalVisible(true)}
						disabled={
							selectedCrop == '' ||
							selectedSeason == 'key0' ||
							selectedProvince == '' ||
							insuranceArea.toString().trim() == ''
						}
					>
						<Text>Calculate Premium</Text>
					</Button>
					<ViewCalculatePremium
						isVisible={isModalVisible}
						closeModal={() => setIsModalVisible(false)}
						navigation={navigation}
						premium={(insuranceArea * avgYield * 0.8).toString()}
						sumInsured={(insuranceArea * avgYield).toString()}
						insuranceType='AYII'
						province={selectedProvince}
						startDate={selectedSeason.split('-')[0] + '-06-01'}
						endDate={selectedSeason.split('-')[1] + '-09-01'}
					></ViewCalculatePremium>
				</Form>
			</Content>
		</Container>
	)
}

export default Quote
