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
import ViewQuoteScreen from '../../screens/ViewQuote'

const Quote = ({ navigation }) => {
	const [selected, setSelected] = useState('key0')
	const [selectedCrop, setSelectedCrop] = useState('key0')
	const [selectedSeason, setSelectedSeason] = useState('key0')
	const [isModalVisible, setIsModalVisible] = useState(false)

	return (
		<Container>
			<CelsiusHeader></CelsiusHeader>
			<Content>
				<Form
					style={{
						alignItems: 'center',
					}}
				>
					<PickerContainer>
						<Picker
							mode='dropdown'
							iosIcon={<Icon name='arrow-down' />}
							style={{ width: undefined }}
							selectedValue={selected}
							onValueChange={(value) => setSelected(value)}
						>
							<Picker.Item label='Name of province' value='key0' />
							<Picker.Item label='Zurich' value='key1' />
							<Picker.Item label='Bern' value='key2' />
							<Picker.Item label='Uri' value='key3' />
							<Picker.Item label='Schwyz' value='key4' />
							<Picker.Item label='Unterwalden' value='key5' />
							<Picker.Item label='Glarus' value='key6' />
						</Picker>
					</PickerContainer>
					<PickerContainer>
						<Picker
							mode='dropdown'
							iosIcon={<Icon name='arrow-down' />}
							style={{ width: undefined }}
							selectedValue={selectedCrop}
							onValueChange={(value) => setSelectedCrop(value)}
						>
							<Picker.Item label='Crop' value='key0' />
							<Picker.Item label='Crop1' value='key1' />
							<Picker.Item label='Crop2' value='key2' />
							<Picker.Item label='Crop3' value='key3' />
						</Picker>
					</PickerContainer>
					<CelsiusInput label='Insurance area(ha)'></CelsiusInput>
					<CelsiusInput label='Average yield(kg/ha)'></CelsiusInput>
					<CelsiusInput label='Sum Insured(2MW)'></CelsiusInput>
					<CelsiusInput label='Deductible'></CelsiusInput>
					<PickerContainer>
						<Picker
							mode='dropdown'
							iosIcon={<Icon name='arrow-down' />}
							style={{ width: undefined }}
							selectedValue={selectedSeason}
							onValueChange={(value) => setSelectedSeason(value)}
						>
							<Picker.Item label='Season' value='key0' />
							<Picker.Item label='Spring' value='key1' />
							<Picker.Item label='Winter' value='key2' />
							<Picker.Item label='Summer' value='key3' />
							<Picker.Item label='Fall' value='key3' />
						</Picker>
					</PickerContainer>
					<Button
						dark
						full
						style={{ marginTop: 15 }}
						onPress={() => setIsModalVisible(true)}
					>
						<Text>Calculate Premium</Text>
					</Button>
					<ViewQuoteScreen
						isVisible={isModalVisible}
						closeModal={() => setIsModalVisible(false)}
						navigation={navigation}
					></ViewQuoteScreen>
				</Form>
			</Content>
		</Container>
	)
}

export default Quote
