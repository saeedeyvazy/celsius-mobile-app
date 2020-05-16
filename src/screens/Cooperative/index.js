import React from 'react'
import {
	Container,
	Header,
	Button,
	Icon,
	Input,
	Content,
	List,
	Left,
	Thumbnail,
	Body,
	Text,
	Item,
	ListItem,
	Right,
} from 'native-base'

const Cooperative = ({ navigation }) => {
	const navigateToViewCooperative = () => {
		navigation.navigate('AddViewCoopScreen')
	}

	return (
		<Container>
			<Header style={{ backgroundColor: 'black' }} searchBar rounded>
				<Item>
					<Icon name='ios-search' />
					<Input placeholder='Search' />
					<Icon
						name='ios-add'
						onPress={() => navigation.navigate('AddClientScreen')}
					/>
				</Item>
				<Button transparent>
					<Text>Search</Text>
				</Button>
			</Header>
			<Content>
				<List>
					<ListItem itemDivider>
						<Text>Cooperative - Creation and assigning Clients</Text>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail
								circular
								source={require('../../img/migros-coop.jpeg')}
							/>
						</Left>
						<Body>
							<Text>Migros</Text>
							<Text note numberOfLines={1}>
								Lucerne
							</Text>
						</Body>
						<Right>
							<Button transparent onPress={() => navigateToViewCooperative()}>
								<Text>View</Text>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail
								circular
								source={require('../../img/primeo-coop.png')}
							/>
						</Left>
						<Body>
							<Text>Primeo Energie</Text>
							<Text note numberOfLines={1}>
								Basel
							</Text>
						</Body>
						<Right>
							<Button transparent onPress={() => navigateToViewCooperative()}>
								<Text>View</Text>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail circular source={require('../../img/coop-coop.png')} />
						</Left>
						<Body>
							<Text>Coop</Text>
							<Text note numberOfLines={1}>
								Geneva
							</Text>
						</Body>
						<Right>
							<Button transparent onPress={() => navigateToViewCooperative()}>
								<Text>View</Text>
							</Button>
						</Right>
					</ListItem>
				</List>
			</Content>
		</Container>
	)
}

export default Cooperative
