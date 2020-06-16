import {
	Button,
	Container,
	Content,
	Form,
	Icon,
	Label,
	Text,
	View,
} from 'native-base'
import React, { useState } from 'react'
import AwesomeAlert from 'react-native-awesome-alerts'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import CelsiusInput from '../../components/common/CelsiusInput'
import District from '../../components/common/District'
import Province from '../../components/common/Province'
import { isNullOrEmpty } from '../../utility/string'

const AddClient = ({ navigation }) => {
	const isFillAllRequiredField = () => {
		const isFillFirstName = !isNullOrEmpty(firstName)
		const isFillLastName = !isNullOrEmpty(lastName)
		const isFillMobileMoney = !isNullOrEmpty(mobileMoney)
		const isFillProvince = !isNullOrEmpty(province)
		const isFillDistrict = !isNullOrEmpty(district)
		const isFillTitle = !isNullOrEmpty(title)
		const isFillMobile = !isNullOrEmpty(mobile)
		const isPhysAddress = !isNullOrEmpty(physAddress)

		return (
			isFillFirstName &&
			isFillLastName &&
			isFillProvince &&
			isFillDistrict &&
			isFillTitle &&
			isFillMobile &&
			isFillMobileMoney &&
			isPhysAddress
		)
	}

	const confirm = () => {
		if (isFillAllRequiredField()) {
			setRequiredFieldAlertShow(false)
			setSaveClientAlertShow(true)
		} else {
			setSaveClientAlertShow(false)
			setRequiredFieldAlertShow(true)
		}
	}
	const [tradeName, setTradeName] = useState('')
	const [Vatnumber, setVatNumber] = useState('')
	const [regNumber, setRegNumber] = useState('')
	const [title, setTitle] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [province, setProvince] = useState('')
	const [district, setDistrict] = useState('')
	const [contactMethod, setContactMethod] = useState('')
	const [mobile, setMobile] = useState('')
	const [physAddress, setPhysAddress] = useState('')
	const [city, setCity] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [mobileMoney, setMobileMoney] = useState('')
	const [saveCoopAlertShow, setSaveClientAlertShow] = useState(false)
	const [requiredFieldAlertShow, setRequiredFieldAlertShow] = useState(false)

	const save = async () => {
		setSaveClientAlertShow(false)
	}

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
						onChangeText={(value) => setTradeName(value)}
						value={tradeName}
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
						label='Email'
						onChangeText={(value) => setEmail(value)}
						value={email}
						placeholder='example@gmail.com'
					></CelsiusInput>
					<Province onValueChange={(value) => setProvince(value)}>
						<Label style={{ fontSize: 14, marginLeft: 10, marginTop: 14 }}>
							Province
							<Icon name='star' style={{ fontSize: 9, color: 'red' }}></Icon>
						</Label>
					</Province>
					<District onValueChange={(value) => setDistrict(value)}>
						<Label style={{ fontSize: 14, marginLeft: 10, marginTop: 14 }}>
							District
							<Icon name='star' style={{ fontSize: 9, color: 'red' }}></Icon>
						</Label>
					</District>
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
						label='Physical Address'
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
			<AwesomeAlert
				show={saveCoopAlertShow}
				showProgress={false}
				title='Add Cooperative'
				message='Are you sure you want to save cooperative?'
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={true}
				showCancelButton={true}
				showConfirmButton={true}
				cancelText='No, cancel'
				confirmText='Yes, save it'
				confirmButtonColor='#DD6B55'
				onCancelPressed={() => setSaveClientAlertShow(false)}
				onConfirmPressed={() => save()}
				messageStyle={{ textAlign: 'center' }}
			/>
			<AwesomeAlert
				show={requiredFieldAlertShow}
				showProgress={false}
				title='Required Fields'
				message='Please fill all manatory fields!'
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={true}
				showConfirmButton={true}
				confirmText='      OK        '
				confirmButtonColor='#DD6B55'
				onConfirmPressed={() => setRequiredFieldAlertShow(false)}
				messageStyle={{ textAlign: 'center' }}
			/>
		</Container>
	)
}

export default AddClient
