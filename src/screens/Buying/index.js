import React, { useEffect, useState } from 'react'
import {
	Container,
	Content,
	Radio,
	Picker,
	View,
	ListItem,
	Left,
	Text,
	Right,
	Button,
	List,
} from 'native-base'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import CelsiusInput from '../../components/common/CelsiusInput'
import PickerContainer from '../../components/common/PickerContainer'
import { Alert } from 'react-native'
import { incrementDate } from '../../utility/Date'

const Buying = ({ navigation, route }) => {
	const confirm = () => {
		Alert.alert(
			'Confirmation/Payment Details',
			'Confirmed!',
			[{ text: 'OK', onPress: () => navigation.navigate('Quote') }],
			{ cancelable: false }
		)
	}

	const [premiumDate, setPremiumDate] = useState('')
	useEffect(
		() =>
			setPremiumDate(
				incrementDate(route.params.premiumDate, 15).toDateString()
			),
		[]
	)

	return (
		<Container>
			<CelsiusHeader></CelsiusHeader>
			<Content>
				<CelsiusInput
					label='Insurance Partner'
					value='FSD Zambia'
					editable={false}
				></CelsiusInput>
				<CelsiusInput
					label='Premium'
					value={route.params.premium}
					editable={false}
				></CelsiusInput>
				<CelsiusInput
					label='Transaction date'
					value='2020/05/10'
					editable={false}
				></CelsiusInput>
				<CelsiusInput
					label='Premium date'
					editable={false}
					value={premiumDate}
				></CelsiusInput>
				<PickerContainer>
					<Picker>
						<Picker.Item label='Intermediary' value='key0' />
						<Picker.Item label='John doe' value='key1' />
						<Picker.Item label='Jean doe' value='key2' />
						<Picker.Item label='Jahn smith' value='key3' />
					</Picker>
				</PickerContainer>
				<List style={{ padding: 15 }}>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>individual</Text>
						</Left>
						<Right>
							<Radio selected></Radio>
						</Right>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Cooperative</Text>
						</Left>
						<Right>
							<Radio></Radio>
						</Right>
					</ListItem>
				</List>

				<PickerContainer>
					<Picker>
						<Picker.Item label='Client' value='key0' />
						<Picker.Item label='Client 1' value='key1' />
						<Picker.Item label='Client 2' value='key2' />
					</Picker>
				</PickerContainer>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-around',
						marginTop: 20,
					}}
				>
					<Button danger rounded>
						<Text>Cancel</Text>
					</Button>

					<Button dark rounded onPress={() => confirm()}>
						<Text>Confirm</Text>
					</Button>
				</View>
			</Content>
		</Container>
	)
}

export default Buying
