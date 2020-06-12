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
import Calendar from '../../components/common/Calendar'
import CelsiusInput from '../../components/common/CelsiusInput'
import PickerContainer from '../../components/common/PickerContainer'
import { isNullOrEmpty } from '../../utility/string'
import Province from '../../components/common/Province'
import Gender from '../../components/common/Gender'
import District from '../../components/common/District'

const AddClient = ({ navigation }) => {
	const isFillAllRequiredField = () => {
		const isFillFirstName = !isNullOrEmpty(firstName)
		const isFillLastName = !isNullOrEmpty(lastName)
		const isFillEmail = !isNullOrEmpty(email)
		const isFillProvince = !isNullOrEmpty(selectedProvince)

		return isFillEmail && isFillFirstName && isFillLastName && isFillProvince
	}

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
	const [email, setEmail] = useState('')
	const [selectedProvince, setSelectedProvince] = useState('')
	const [selectedDistrict, setSelectedDistrict] = useState('')
	const [ethnicGroup, setEthnicGroup] = useState('')
	const [contactMethod, setContactMethod] = useState('')
	const [mobile, setMobile] = useState('')
	const [physAddress, setPhysAddress] = useState('')
	const [city, setCity] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [mobileMoney, setMobileMoney] = useState('')
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
						label='Channel partner'
						onChangeText={(value) => setTradingName(value)}
						value={tradingName}
					></CelsiusInput>
					<CelsiusInput
						label='Registeration number'
						onChangeText={(value) => setRegNumber(value)}
						value={regNumber}
						keyboardType='numeric'
					></CelsiusInput>
					<CelsiusInput
						label='VAT number'
						onChangeText={(value) => setVatNumber(value)}
						value={Vatnumber}
					></CelsiusInput>
					<CelsiusInput
						label='Title'
						required
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
						label='Last name'
						onChangeText={(value) => setLastName(value)}
						value={lastName}
					></CelsiusInput>
					<CelsiusInput
						required
						label='Id number'
						onChangeText={(value) => setLastName(value)}
						value={lastName}
						keyboardType='numeric'
					></CelsiusInput>
					<CelsiusInput
						label='Email'
						onChangeText={(value) => setEmail(value)}
						value={email}
						placeholder='example@gmail.com'
					></CelsiusInput>
					<Province onValueChange={(value) => setSelectedProvince(value)}>
						<Label style={{ fontSize: 14, marginLeft: 10, marginTop: 14 }}>
							Province
							<Icon name='star' style={{ fontSize: 9, color: 'red' }}></Icon>
						</Label>
					</Province>
					<District onValueChange={(value) => setSelectedDistrict(value)}>
						<Label style={{ fontSize: 14, marginLeft: 10, marginTop: 14 }}>
							District
							<Icon name='star' style={{ fontSize: 9, color: 'red' }}></Icon>
						</Label>
					</District>

					<Calendar
						required
						label='Birth date'
						onValueChange={(value) => setBirthDate(value)}
					></Calendar>
					<CelsiusInput
						label='Occupation'
						onChangeText={(value) => setOccupation(value)}
						value={occupation}
					></CelsiusInput>
					<Gender></Gender>
					<CelsiusInput
						label='Ethnic group'
						onChangeText={(value) => setEthnicGroup(value)}
						value={ethnicGroup}
					></CelsiusInput>
					<CelsiusInput
						label='Contact method'
						onChangeText={(value) => setContactMethod(value)}
						value={contactMethod}
					></CelsiusInput>
					<CelsiusInput
						required
						label='Mobile number'
						onChangeText={(value) => setMobile(value)}
						value={mobile}
					></CelsiusInput>
					<CelsiusInput
						required
						label='PhysAddress'
						onChangeText={(value) => setPhysAddress(value)}
						value={physAddress}
					></CelsiusInput>
					<CelsiusInput
						label='City'
						onChangeText={(value) => setCity(value)}
						value={city}
					></CelsiusInput>
					<CelsiusInput
						label='Postal code'
						onChangeText={(value) => setPostalCode(value)}
						value={postalCode}
						keyboardType='numeric'
					></CelsiusInput>
					<CelsiusInput
						required
						label='Mobile money number'
						onChangeText={(value) => setMobileMoney(value)}
						value={mobileMoney}
						keyboardType='numeric'
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
