import React from 'react'
import {
	Container,
	Content,
	List,
	ListItem,
	Text,
	Body,
	Left,
	Input,
	View,
	Button,
	Icon,
} from 'native-base'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import { Alert } from 'react-native'

const AddViewClient = () => {
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
							<Input placeholder='890123737'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Vat number</Text>
						</Left>
						<Body>
							<Input placeholder='65483939'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Title</Text>
						</Left>
						<Body>
							<Input placeholder='insurance title'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Initials</Text>
						</Left>
						<Body>
							<Input placeholder='insurance initials'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>First name</Text>
						</Left>
						<Body>
							<Input placeholder='Luca'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Last name</Text>
						</Left>
						<Body>
							<Input placeholder='Simon'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>In no.</Text>
						</Left>
						<Body>
							<Input placeholder='45374858'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Date of birth</Text>
						</Left>
						<Body>
							<Input placeholder='1991/01/19'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Occupation</Text>
						</Left>
						<Body>
							<Input placeholder='occupation'></Input>
						</Body>
					</ListItem>
				</List>
			</Content>
			<View>
				<Button iconLeft full dark onPress={() => confirm()}>
					<Icon type='Octicons' name='check'></Icon>
					<Text>Save</Text>
				</Button>
				<Button iconLeft full warning>
					<Icon name='trash'></Icon>
					<Text>Cancel</Text>
				</Button>
				<Button rounded full iconLeft danger>
					<Icon name='cross' type='Entypo'></Icon>
					<Text>Delete</Text>
				</Button>
			</View>
		</Container>
	)
}

export default AddViewClient
