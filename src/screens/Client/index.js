import {
	Button,
	Container,
	Content,
	Header,
	Icon,
	Input,
	Item,
	List,
	Text,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import ClientComponent from '../../components/common/Client'
import { getAllLocalClient } from '../../redux/actions/client'
const Client = ({ navigation }) => {
	const [clientList, setClientList] = useState([])

	const navigateToViewClient = (client) => {
		navigation.navigate('AddViewClientScreen', {
			clientDetailInfo: client,
		})
	}

	useEffect(() => {
		const fetchAllClient = async () => {
			const response = await getAllLocalClient()
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
								navigateToViewClient={() => navigateToViewClient(client)}
							></ClientComponent>
						)
					})}
				</List>
			</Content>
		</Container>
	)
}

export default Client
