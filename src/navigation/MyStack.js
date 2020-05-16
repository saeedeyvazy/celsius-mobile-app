import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import { QuoteTab } from './QuoteNavigation'
import ViewQuote from '../screens/ViewQuote'
import BuyingScreen from '../screens/Buying'
import AddViewClientScreen from '../screens/Client/AddViewClient'
import AddViewCoopScreen from '../screens/Cooperative/AddCooperative'
import CoopScreen from '../screens/Cooperative'
import ClientScreen from '../screens/Client'
import AddClientScreen from '../screens/Client/AddClient'

const Stack = createStackNavigator()

export function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode='none'>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Quote' component={QuoteTab} />
				<Stack.Screen name='ViewQuote' component={ViewQuote} />
				<Stack.Screen name='BuyingScreen' component={BuyingScreen} />
				<Stack.Screen name='CoopScreen' component={CoopScreen} />
				<Stack.Screen
					name='AddViewClientScreen'
					component={AddViewClientScreen}
				/>
				<Stack.Screen name='AddViewCoopScreen' component={AddViewCoopScreen} />
				<Stack.Screen name='ClientScreen' component={ClientScreen} />
				<Stack.Screen name='AddClientScreen' component={AddClientScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
