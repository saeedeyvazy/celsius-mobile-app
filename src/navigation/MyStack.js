import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import { QuoteTab } from './QuoteNavigation'

const Stack = createStackNavigator()

export function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode='none'>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Quote' component={QuoteTab} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
