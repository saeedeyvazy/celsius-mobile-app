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
import { clientDetailInfoMap } from '../../utility/apiResponseMap'

const AddViewClient = ({ navigation, route }) => {
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
					{Object.keys(route.params.clientDetailInfo).map((key) => (
						<ListItem>
							<Left>
								<Text style={{ color: '#00008b' }}>
									{clientDetailInfoMap[key]}
								</Text>
							</Left>
							<Body>
								<Input editable={false}>
									{route.params.clientDetailInfo[key]}
								</Input>
							</Body>
						</ListItem>
					))}
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
