import React, { useEffect, useState } from 'react'
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
import ClientComponent from '../../components/common/Client'
import { getAllClients } from '../../redux/actions/client'
const Client = ({ navigation }) => {
	const [clientList, setClientList] = useState([])

	const navigateToViewClient = () => {
		navigation.navigate('AddViewClientScreen')
	}

	useEffect(() => {
		const fetchAllClient = async () => {
			const response = await getAllClients()
			setClientList(response)
		}
		fetchAllClient()
	}, [])

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
					{clientList.map((client) => {
						const { firstName, lastName, city, province } = client
						return (
							<ClientComponent
								firstName={firstName}
								lastName={lastName}
								city={city}
								province={province}
							></ClientComponent>
						)
					})}
				</List>
			</Content>
		</Container>
	)
}

export default Client
