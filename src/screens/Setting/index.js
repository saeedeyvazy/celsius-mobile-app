import {
	Body,
	Button,
	Container,
	Content,
	Icon,
	Left,
	List,
	ListItem,
	Text,
} from 'native-base'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import CelsiusInput from '../../components/common/CelsiusInput'
import SyncServerModal from './SyncServerModal'

const Setting = ({ route, navigation }) => {
	const [isVisibleModal, setIsVisibleModal] = useState(false)
	const [isVisibleloginModal, setIsVisibleLoginModal] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	return (
		<>
			<Container>
				<CelsiusHeader></CelsiusHeader>
				<Content>
					<ListItem>
						<Left></Left>
						<Body>
							<Button
								bordered
								iconRight
								full
								danger
								onPress={() => navigation.navigate('Login')}
							>
								<Text uppercase={false}>Logout</Text>
								<Icon type='AntDesign' name='logout'></Icon>
							</Button>
						</Body>
					</ListItem>
					<Button
						iconRight
						block
						dark
						onPress={() => setIsVisibleLoginModal(true)}
					>
						<Text uppercase={false}>Sync with server</Text>
						<Icon type='MaterialCommunityIcons' name='sync'></Icon>
					</Button>
					<List style={{ display: isLoggedIn ? 'flex' : 'none' }}>
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
			<Modal
				isVisible={isVisibleloginModal}
				animationInTiming={600}
				animationIn='fadeInRight'
				animationOut='fadeOutRight'
				animationOutTiming={600}
			>
				<Container>
					<CelsiusHeader></CelsiusHeader>
					<Content>
						<CelsiusInput
							label='User name'
							onChangeText={(value) => setUsername(value)}
							value={username}
						></CelsiusInput>
						<CelsiusInput
							label='Password'
							onChangeText={(value) => setPassword(value)}
							value={password}
						></CelsiusInput>
						<Button
							full
							dark
							style={{ marginTop: 40 }}
							onPress={() => {
								setIsVisibleLoginModal(false)
								setIsLoggedIn(true)
								setIsVisibleModal(true)
							}}
						>
							<Text>Login</Text>
						</Button>
					</Content>
				</Container>
			</Modal>
		</>
	)
}

export default Setting
