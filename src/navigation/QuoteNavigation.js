import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ClientScreen from '../screens/Client'
import QuoteScreen from '../screens/Quote'
import SettingScreen from '../screens/Setting'
import CoopScreen from '../screens/Cooperative'
import Icon from 'react-native-dynamic-vector-icons'
const Tab = createMaterialTopTabNavigator()

export function QuoteTab() {
	return (
		<Tab.Navigator
			tabBarPosition='bottom'
			tabBarOptions={{
				style: {
					backgroundColor: 'white',
					padding: 0,
				},
				labelStyle: { fontSize: 10 },
				showIcon: true,
				indicatorStyle: {
					borderWidth: 2,
					borderColor: 'black',
				},
			}}
			swipeEnabled
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused, color }) => (
						<Icon
							name='home'
							size={25}
							color={focused ? 'black' : color}
						></Icon>
					),
				}}
				name='Quote'
				component={QuoteScreen}
			/>
			<Tab.Screen
				name='Client'
				options={{
					tabBarIcon: ({ focused, color }) => (
						<Icon
							name='person'
							size={25}
							color={focused ? 'black' : color}
						></Icon>
					),
				}}
				component={ClientScreen}
			/>
			<Tab.Screen
				name='Coop'
				component={CoopScreen}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<Icon name='add' size={25} color={focused ? 'black' : color}></Icon>
					),
				}}
			/>
			<Tab.Screen
				name='Setting'
				component={SettingScreen}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<Icon
							name='settings'
							size={25}
							color={focused ? 'black' : color}
						></Icon>
					),
				}}
			/>
		</Tab.Navigator>
	)
}
