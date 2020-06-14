import axios from 'axios'
import { clientUrl } from '../../utility/api'
import { config } from '../../utility/axiosConfig'
import { getAllLocalClient } from './client'

const uploadLocalAddedClient = async () => {
	let localAddedClientList = await getAllLocalClient()
	if (!Array.isArray(localAddedClientList))
		localAddedClientList = [localAddedClientList]

	try {
		localAddedClientList.map(async (localClient) => {
			await axios.post(clientUrl, [localClient], config)
		})
	} catch (error) {
		alert('error. try agian for uploading client')
		console.log(error)
	}
}

export const sync = async () => {
	await uploadLocalAddedClient()
}
