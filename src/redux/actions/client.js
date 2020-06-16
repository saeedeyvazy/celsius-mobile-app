import { AsyncStorage } from 'react-native'

export const storeAllClientInLocal = async (clientList) => {
	await AsyncStorage.removeItem('@clients:localAdded')
	await AsyncStorage.setItem('@clients:localAdded', JSON.stringify(clientList))
}

export const addClient = async (client) => {
	let oldClientList = await AsyncStorage.getItem('@clients:localAdded')

	if (oldClientList == null)
		await AsyncStorage.setItem('@clients:localAdded', JSON.stringify(client))
	else {
		oldClientList = [JSON.parse(oldClientList)]
		await AsyncStorage.setItem(
			'@clients:localAdded',
			JSON.stringify([...oldClientList, client])
		)
	}
}

export const getAllLocalClient = async () => {
	const localAddedClientList = await AsyncStorage.getItem('@clients:localAdded')
	return localAddedClientList != null ? JSON.parse(localAddedClientList) : []
}
