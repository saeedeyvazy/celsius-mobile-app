import React from 'react'
import NetInfo from '@react-native-community/netinfo'

export const isNetworkAvailable = async () => {
	const response = await NetInfo.fetch()
	return response.isConnected
}
