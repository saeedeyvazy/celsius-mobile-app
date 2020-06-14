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
import { isNetworkAvailable } from '../../utility/network'
import AwesomeAlert from 'react-native-awesome-alerts'
import { sync } from '../../redux/actions/sync'

const Setting = ({ route, navigation }) => {
	const [isVisibleModal, setIsVisibleModal] = useState(false)
	const [isVisibleloginModal, setIsVisibleLoginModal] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [showCheckConnectionAlert, setShowCheckConnectionAlert] = useState(
		false
	)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const syncWithServer = async () => {
		const connected = await isNetworkAvailable()
		if (!connected) setShowCheckConnectionAlert(true)
		if (!isLoggedIn) setIsVisibleLoginModal(true)

		if (connected && isLoggedIn) await sync()
	}
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
						onPress={async () => {
							syncWithServer()
						}}
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
					</List>
				</Content>
				<SyncServerModal
					isVisible={isVisibleModal}
					close={() => setIsVisibleModal(false)}
				></SyncServerModal>
			</Container>
			<AwesomeAlert
				show={showCheckConnectionAlert}
				showProgress={false}
				title='Internet Connection'
				message='Please check your internet connection before server syncing!'
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={true}
				showConfirmButton={true}
				confirmText='    OK    '
				confirmButtonColor='#DD6B55'
				onConfirmPressed={() => setShowCheckConnectionAlert(false)}
			/>
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
