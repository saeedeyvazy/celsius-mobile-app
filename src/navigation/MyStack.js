import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import { BottomNavigation } from './BottomNavigation'
import ViewQuote from '../screens/ViewQuote'
import BuyingScreen from '../screens/Buying'
import AddViewClientScreen from '../screens/Client/AddViewClient'
import ViewCoopScreen from '../screens/Cooperative/ViewCooperative'
import CoopScreen from '../screens/Cooperative'
import ClientScreen from '../screens/Client'
import AddClientScreen from '../screens/Client/AddClient'
import AddCoopScreen from '../screens/Cooperative/AddCoop'

const Stack = createStackNavigator()

export function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode='none'>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='BottomNavigation' component={BottomNavigation} />
				<Stack.Screen name='ViewQuote' component={ViewQuote} />
				<Stack.Screen name='BuyingScreen' component={BuyingScreen} />
				<Stack.Screen name='CoopScreen' component={CoopScreen} />
				<Stack.Screen
					name='AddViewClientScreen'
					component={AddViewClientScreen}
				/>
				<Stack.Screen name='AddViewCoopScreen' component={ViewCoopScreen} />
				<Stack.Screen name='ClientScreen' component={ClientScreen} />
				<Stack.Screen name='AddClientScreen' component={AddClientScreen} />
				<Stack.Screen name='AddCoopScreen' component={AddCoopScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
