import {
	Button,
	Container,
	Content,
	Form,
	Icon,
	Picker,
	Text,
	View,
	Label,
} from 'native-base'
import React, { useState } from 'react'
import { Alert } from 'react-native'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import CelsiusInput from '../../components/common/CelsiusInput'
import PickerContainer from '../../components/common/PickerContainer'
import { isNullOrEmpty } from '../../utility/string'

const AddClient = ({ navigation }) => {
	const isFillAllRequiredField = () => {
		const isFillFirstName = !isNullOrEmpty(firstName)
		const isFillLastName = !isNullOrEmpty(lastName)
		const isFillEmail = !isNullOrEmpty(email)
		const isFillProvince = !isNullOrEmpty(selectedProvince)

		return isFillEmail && isFillFirstName && isFillLastName && isFillProvince
	}
	const t = 2

	const confirm = () => {
		isFillAllRequiredField()
			? Alert.alert(
					'Client Saved',
					'Confirmed!',
					[{ text: 'OK', onPress: () => navigation.navigate('Client') }],
					{ cancelable: false }
			  )
			: Alert.alert('Missed Information', 'Please fill all mandatory fieldds', [
					{ text: 'OK' },
			  ])
	}
	const [tradingName, setTradingName] = useState('')
	const [Vatnumber, setVatNumber] = useState('')
	const [regNumber, setRegNumber] = useState('')
	const [title, setTitle] = useState('')
	const [init, setInit] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [occupation, setOccupation] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [inNo, setInNo] = useState('')
	const [email, setEmail] = useState('')
	const [selectedProvince, setSelectedProvince] = useState('key0')
	return (
		<Container>
			<CelsiusHeader></CelsiusHeader>
			<Content>
				<Form
					style={{
						alignItems: 'center',
					}}
				>
					<CelsiusInput
						label='Trading name'
						onChangeText={(value) => setTradingName(value)}
						value={tradingName}
					></CelsiusInput>
					<CelsiusInput
						label='Register number'
						onChangeText={(value) => setRegNumber(value)}
						value={regNumber}
					></CelsiusInput>
					<CelsiusInput
						label='Vatnumber'
						onChangeText={(value) => setVatNumber(value)}
						value={Vatnumber}
					></CelsiusInput>
					<CelsiusInput
						label='Title'
						onChangeText={(value) => setTitle(value)}
						value={title}
					></CelsiusInput>
					<CelsiusInput
						label='Initials'
						onChangeText={() => setInit(value)}
						value={init}
					></CelsiusInput>
					<CelsiusInput
						required
						label='First name'
						onChangeText={(value) => setFirstName(value)}
						value={firstName}
					></CelsiusInput>
					<CelsiusInput
						required
						label='last name'
						onChangeText={(value) => setLastName(value)}
						value={lastName}
					></CelsiusInput>
					<CelsiusInput
						required
						label='Email'
						onChangeText={(value) => setEmail(value)}
						value={email}
						placeholder='example@gmail.com'
					></CelsiusInput>
					<PickerContainer>
						<Label style={{ fontSize: 14, marginLeft: 10, marginTop: 14 }}>
							Province
							<Icon name='star' style={{ fontSize: 9, color: 'red' }}></Icon>
						</Label>
						<Picker
							mode='dropdown'
							iosIcon={<Icon name='arrow-down' />}
							style={{
								width: undefined,
								fontSize: 14,
							}}
							selectedValue={selectedProvince}
							onValueChange={(value) => setSelectedProvince(value)}
							placeholder='province'
						>
							<Picker.Item label='Zurich' value='Zurich' />
							<Picker.Item label='Bern' value='Bern' />
							<Picker.Item label='Uri' value='Uri' />
							<Picker.Item label='Schwyz' value='Schwyz' />
							<Picker.Item label='Unterwalden' value='Unterwalden' />
							<Picker.Item label='Glarus' value='Glarus' />
						</Picker>
					</PickerContainer>
					<CelsiusInput
						label='In no.'
						onChangeText={(value) => setInNo(value)}
						value={inNo}
					></CelsiusInput>
					<CelsiusInput
						label='Date of Birth'
						onChangeText={(value) => setBirthDate(value)}
						value={birthDate}
					></CelsiusInput>
					<CelsiusInput
						label='Occupation'
						onChangeText={(value) => setOccupation(value)}
						value={occupation}
					></CelsiusInput>
				</Form>
			</Content>
			<View>
				<Button iconLeft full dark onPress={() => confirm()}>
					<Icon type='Octicons' name='check'></Icon>
					<Text>Save</Text>
				</Button>
				<Button
					iconLeft
					full
					warning
					onPress={() => navigation.navigate('Client')}
				>
					<Icon name='cross' type='Entypo'></Icon>
					<Text>Cancel</Text>
				</Button>
				<Button
					rounded
					full
					iconLeft
					danger
					onPress={() => navigation.navigate('Client')}
				>
					<Icon name='trash' type='Entypo'></Icon>
					<Text>Delete</Text>
				</Button>
			</View>
		</Container>
	)
}

export default AddClient
