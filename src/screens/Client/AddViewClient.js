import {
	Body,
	Button,
	Container,
	Content,
	Icon,
	Input,
	Left,
	List,
	ListItem,
	Text,
	View,
} from 'native-base'
import React from 'react'
import { Alert } from 'react-native'
import CelsiusHeader from '../../components/common/CelsiusHeader'

const AddViewClient = ({ navigation, route }) => {
	const {
		firstName,
		lastName,
		registrationNumber,
		vatNumber,
		title,
		initials,
		dateOfBirth,
		occupation,
		idNumber,
	} = route.params.clientDetailInfo

	const confirm = () => {
		Alert.alert(
			'Client Saved',
			'Confirmed!',
			[{ text: 'OK', onPress: () => console.log('OK Pressed') }],
			{ cancelable: false }
		)
	}

	return (
		<Container>
			<CelsiusHeader></CelsiusHeader>
			<Content>
				<List>
					<ListItem first>
						<Left>
							<Text style={{ color: '#00008b' }}>Trading name</Text>
						</Left>
						<Body>
							<Input placeholder='trading name'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Register number</Text>
						</Left>
						<Body>
							<Input>{registrationNumber}</Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Vat number</Text>
						</Left>
						<Body>
							<Input> {vatNumber}</Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Title</Text>
						</Left>
						<Body>
							<Input>{title}</Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Initials</Text>
						</Left>
						<Body>
							<Input>{initials}</Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>First name</Text>
						</Left>
						<Body>
							<Input>{firstName}</Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Last name</Text>
						</Left>
						<Body>
							<Input>{lastName}</Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>In no.</Text>
						</Left>
						<Body>
							<Input>{idNumber}</Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Date of birth</Text>
						</Left>
						<Body>
							<Input>{dateOfBirth.split('T')[0]}</Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Occupation</Text>
						</Left>
						<Body>
							<Input>{occupation}</Input>
						</Body>
					</ListItem>
				</List>
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
					<Icon name='trash'></Icon>
					<Text>Cancel</Text>
				</Button>
				<Button
					rounded
					full
					iconLeft
					danger
					onPress={() => navigation.navigate('Client')}
				>
					<Icon name='cross' type='Entypo'></Icon>
					<Text>Delete</Text>
				</Button>
			</View>
		</Container>
	)
}

export default AddViewClient
