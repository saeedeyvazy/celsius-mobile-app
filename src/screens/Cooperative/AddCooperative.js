import React from 'react'
import {
	Container,
	Content,
	List,
	ListItem,
	Left,
	Input,
	Body,
	Text,
	Right,
	Icon,
	Thumbnail,
	Button,
	View,
} from 'native-base'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import { Alert } from 'react-native'

const AddCooperative = ({ navigation }) => {
	const confirm = () => {
		Alert.alert(
			'Saved changes',
			'Confirmed!',
			[{ text: 'OK', onPress: () => console.log('') }],
			{ cancelable: false }
		)
	}
	const deleteCoop = () => {
		Alert.alert(
			'Delete Coop',
			'Delete Coop Successfully',
			[{ text: 'OK', onPress: () => navigation.navigate('CoopScreen') }],
			{ cancelable: false }
		)
	}
	const cancel = () => {
		navigation.navigate('CoopScreen')
	}

	return (
		<Container>
			<CelsiusHeader></CelsiusHeader>
			<Content>
				<List>
					<ListItem itemDivider>
						<Text>Coop Information</Text>
					</ListItem>
					<ListItem first>
						<Left>
							<Text style={{ color: '#00008b' }}>Name</Text>
						</Left>
						<Body>
							<Input placeholder='Migros'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Province</Text>
						</Left>
						<Body>
							<Input placeholder='Migros'></Input>
						</Body>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ color: '#00008b' }}>Foundation Date</Text>
						</Left>
						<Body>
							<Input placeholder='1972/02/15'></Input>
						</Body>
					</ListItem>
				</List>
				<List>
					<ListItem itemDivider>
						<Text>Memebers</Text>
					</ListItem>
					<Left></Left>
					<Button iconRight bordered dark block>
						<Text>Add User</Text>
						<Icon name='adduser' type='AntDesign'></Icon>
					</Button>
					<Right></Right>
					<ListItem thumbnail>
						<Left>
							<Thumbnail circular source={require('../../img/no-avatar.png')} />
						</Left>
						<Body>
							<Text>Behnam safari</Text>
							<Text note numberOfLines={1}>
								Lucerne
							</Text>
						</Body>
						<Right>
							<Button transparent onPress={() => navigateToViewClient()}>
								<Icon
									style={{ color: 'red', fontSize: 30 }}
									type='AntDesign'
									name='deleteuser'
								></Icon>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail circular source={require('../../img/avatar1.jpg')} />
						</Left>
						<Body>
							<Text>Saeed Evyazy</Text>
							<Text note numberOfLines={1}>
								Basel
							</Text>
						</Body>
						<Right>
							<Button transparent>
								<Icon
									style={{ color: 'red', fontSize: 30 }}
									type='AntDesign'
									name='deleteuser'
								></Icon>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail circular source={require('../../img/avatar2.jpg')} />
						</Left>
						<Body>
							<Text>Luca Modrich</Text>
							<Text note numberOfLines={1}>
								Geneva
							</Text>
						</Body>
						<Right>
							<Button transparent>
								<Icon
									style={{ color: 'red', fontSize: 30 }}
									type='AntDesign'
									name='deleteuser'
								></Icon>
							</Button>
						</Right>
					</ListItem>
				</List>
				<View>
					<Button iconLeft full dark onPress={() => confirm()}>
						<Icon type='Octicons' name='check'></Icon>
						<Text>Save</Text>
					</Button>
					<Button iconLeft full warning onPress={() => cancel()}>
						<Icon name='cross' type='Entypo'></Icon>
						<Text>Cancel</Text>
					</Button>

					<Button rounded full iconLeft danger onPress={() => deleteCoop()}>
						<Icon name='trash' type='Entypo'></Icon>
						<Text>Delete</Text>
					</Button>
				</View>
			</Content>
		</Container>
	)
}

export default AddCooperative
