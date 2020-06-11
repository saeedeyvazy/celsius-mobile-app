import React, { useState } from 'react'
import LoginScreen from 'react-native-login-screen'

const Login = ({ navigation }) => {
	const [username, setUsername] = useState(null)
	const [switchValue, setSwitchValue] = useState(false)

	return (
		<LoginScreen
			disableSettings
			switchTextStyle={{ color: 'black' }}
			logoText='CelsiusPro'
			loginButtonBackgroundColor='#282828'
			source={require('../../img/wheat3.jpeg')}
			switchValue={switchValue}
			onPressLogin={() => navigation.navigate('BottomNavigation')}
			usernameOnChangeText={(username) => setUsername(username)}
			passwordOnChangeText={(password) => console.log('Password: ', password)}
			onSwitchValueChange={(switchValue) => {
				setSwitchValue(switchValue)
			}}
		></LoginScreen>
	)
}

export default Login
