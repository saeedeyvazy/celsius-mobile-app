import React from 'react'
import {
	Text,
	Container,
	Content,
	List,
	ListItem,
	Left,
	Body,
	Right,
	Thumbnail,
	Button,
	Header,
	Item,
	Icon,
	Input,
} from 'native-base'

const Client = ({ navigation }) => {
	const navigateToViewClient = () => {
		navigation.navigate('AddViewClientScreen')
	}

	return (
		<Container>
			<Header style={{ backgroundColor: 'black' }} searchBar rounded>
				<Item>
					<Icon name='ios-search' />
					<Input placeholder='Search' />
					<Icon name='ios-add' />
				</Item>
				<Button transparent>
					<Text>Search</Text>
				</Button>
			</Header>
			<Content>
				<List>
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
							<Text note>confirmed</Text>
							<Button transparent onPress={() => navigateToViewClient()}>
								<Text>View</Text>
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
							<Text note>registered</Text>
							<Button transparent>
								<Text>View</Text>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail circular source={require('../../img/avatar2.jpg')} />
						</Left>
						<Body>
							<Text>Mahsa Daemi</Text>
							<Text note numberOfLines={1}>
								Geneva
							</Text>
						</Body>
						<Right>
							<Text note>confirmed</Text>
							<Button transparent>
								<Text>View</Text>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail circular source={require('../../img/avatar4.jpeg')} />
						</Left>
						<Body>
							<Text>Ali Bandari</Text>
							<Text note numberOfLines={1}>
								Bern
							</Text>
						</Body>
						<Right>
							<Text note>unknown</Text>
							<Button transparent>
								<Text>View</Text>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail circular source={require('../../img/no-avatar.png')} />
						</Left>
						<Body>
							<Text>David Simon</Text>
							<Text note numberOfLines={1}>
								Zurich
							</Text>
						</Body>
						<Right>
							<Text note>confirmed</Text>
							<Button transparent>
								<Text>View</Text>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail circular source={require('../../img/avatar5.jpeg')} />
						</Left>
						<Body>
							<Text>Luca Ahmadi</Text>
							<Text note numberOfLines={1}>
								Zurich
							</Text>
						</Body>
						<Right>
							<Text note>unknown</Text>
							<Button transparent>
								<Text>View</Text>
							</Button>
						</Right>
					</ListItem>
				</List>
			</Content>
		</Container>
	)
}

export default Client
