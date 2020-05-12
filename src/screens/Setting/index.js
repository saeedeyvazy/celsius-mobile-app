import React, { useState } from 'react'
import {
	Text,
	Container,
	Content,
	List,
	ListItem,
	Left,
	Button,
	Body,
	Icon,
} from 'native-base'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import SyncServerModal from './SyncServerModal'

const Setting = () => {
	const [isVisibleModal, setIsVisibleModal] = useState(false)

	return (
		<Container>
			<CelsiusHeader></CelsiusHeader>
			<Content>
				<ListItem>
					<Left></Left>
					<Body>
						<Button bordered iconRight full danger>
							<Text uppercase={false}>Logout</Text>
							<Icon type='AntDesign' name='logout'></Icon>
						</Button>
					</Body>
				</ListItem>
				<Button iconRight block dark onPress={() => setIsVisibleModal(true)}>
					<Text uppercase={false}>Sync with server</Text>
					<Icon type='MaterialCommunityIcons' name='sync'></Icon>
				</Button>
				<List>
					<ListItem itemDivider>
						<Text>Sync History</Text>
					</ListItem>
					<ListItem underlayColor>
						<Text>last update 2020/07/01</Text>
					</ListItem>

					<ListItem underlayColor>
						<Text>last update 2020/07/21</Text>
					</ListItem>

					<ListItem underlayColor>
						<Text>last update 2020/08/11</Text>
					</ListItem>

					<ListItem underlayColor>
						<Text>last update 2020/09/14</Text>
					</ListItem>

					<ListItem underlayColor>
						<Text>last update 2020/11/01</Text>
					</ListItem>

					<ListItem underlayColor>
						<Text>last update 2020/11/19</Text>
					</ListItem>
				</List>
			</Content>
			<SyncServerModal
				isVisible={isVisibleModal}
				close={() => setIsVisibleModal(false)}
			></SyncServerModal>
		</Container>
	)
}

export default Setting
