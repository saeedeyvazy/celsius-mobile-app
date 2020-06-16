import { Button, Container, Content, Form, Text } from 'native-base'
import React, { useState } from 'react'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import CelsiusInput from '../../components/common/CelsiusInput'
import Crop from '../../components/common/Crop'
import Province from '../../components/common/Province'
import Season from '../../components/common/Season'
import ViewCalculatePremium from '../../screens/ViewQuote'

const Quote = ({ navigation }) => {
	const [selectedProvince, setSelectedProvince] = useState('')
	const [selectedCrop, setSelectedCrop] = useState('')
	const [selectedSeason, setSelectedSeason] = useState('')
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
						hasPlaceholder
					></Province>
					<Crop onValueChange={(value) => setSelectedCrop(value)}></Crop>
					<Season onValueChange={(value) => setSelectedSeason(value)}></Season>

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
						label='Sum Insured(ZMW)'
						keyboardType='numeric'
						editable={false}
					></CelsiusInput>
					<CelsiusInput
						label='Deductible(ZMW)'
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
							selectedSeason == '' ||
							selectedProvince == '' ||
							insuranceArea.toString().trim() == ''
						}
					>
						<Text>Calculate Premium(ZMW)</Text>
					</Button>
					<ViewCalculatePremium
						isVisible={isModalVisible}
						closeModal={() => setIsModalVisible(false)}
						navigation={navigation}
						premium={(insuranceArea * avgYield * 0.8).toString()}
						sumInsured={(insuranceArea * avgYield).toString()}
						insuranceType='AYII'
						province={selectedProvince}
						startDate={selectedSeason.split(' / ')[0] + '-06-01'}
						endDate={selectedSeason.split(' / ')[1] + '-09-01'}
					></ViewCalculatePremium>
				</Form>
			</Content>
		</Container>
	)
}

export default Quote
