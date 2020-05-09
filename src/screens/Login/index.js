import React, { useState } from 'react'
import { View, StatusBar, Text } from 'react-native'
import LoginScreen from 'react-native-login-screen'

const Login = () => {
	const [username, setUsername] = useState(null)
	const [switchValue, setSwitchValue] = useState(false)

	return (
		<LoginScreen
			spinnerEnable
			logoText='CelsiusPro'
			loginButtonBackgroundColor='#282828'
			source={require('../../img/wheat3.jpeg')}
			switchValue={switchValue}
			onPressLogin={() => alert('Login Button is pressed')}
			onPressSettings={() => alert('Settings Button is pressed')}
			usernameOnChangeText={(username) => setUsername(username)}
			passwordOnChangeText={(password) => console.log('Password: ', password)}
			onSwitchValueChange={(switchValue) => {
				setSwitchValue(switchValue)
			}}
		></LoginScreen>
	)
}

export default Login
