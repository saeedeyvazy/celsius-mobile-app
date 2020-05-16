import React, { useState } from 'react'
import { Container, Content, Text, View, Button, Icon, Form } from 'native-base'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import { Alert } from 'react-native'
import CelsiusInput from '../../components/common/CelsiusInput'

const AddClient = ({ navigation }) => {
	const confirm = () => {
		Alert.alert(
			'Client Saved',
			'Confirmed!',
			[{ text: 'OK', onPress: () => navigation.navigate('Client') }],
			{ cancelable: false }
		)
	}
	const [tradingName, setTradingName] = useState('')
	const [Vatnumber, setVatNumber] = useState('')
	const [regNumber, setRegNumber] = useState('')
	const [title, setTitle] = useState('')
	const [init, setInit] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setlastName] = useState('')
	const [occupation, setOccupation] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [inNo, setInNo] = useState('')
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
						label='First name'
						onChangeText={(value) => setFirstName(value)}
						value={firstName}
					></CelsiusInput>
					<CelsiusInput
						label='last name'
						onChangeText={(value) => setLastName(value)}
						value={lastName}
					></CelsiusInput>
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
