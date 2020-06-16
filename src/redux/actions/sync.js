import axios from 'axios'
import { clientUrl } from '../../utility/api'
import { config } from '../../utility/axiosConfig'
import { getAllLocalClient, storeAllClientInLocal } from './client'

const uploadLocalAddedClient = async () => {
	let localAddedClientList = await getAllLocalClient()
	if (localAddedClientList != null && localAddedClientList.length > 0) {
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
}

const getAllClients = async () => {
	try {
		const response = await axios.get(clientUrl, config)
		console.log(response)
		return response.data.Result.map((client) => ({
			firstName: client.FirstName,
			lastName: client.LastName,
			province: client.Province,
			city: client.City,
			registrationNumber: client.RegistrationNumber,
			vatNumber: client.VatNumber,
			title: client.Title,
			initials: client.Initials,
			dateOfBirth: client.DateOfBirth.split('T')[0],
			occupation: client.Occupation,
			idNumber: client.IdNumber,
			channelPartner: client.ChannelPartner,
			email: client.Email,
			district: client.District,
			ethnicGroup: client.EthnicGroup,
			contractMethod: client.ContractMethod,
			mobile: client.Mobile,
			physAddress: client.PhysAddress,
			postalCode: client.PostalCode,
			mobileMoney: client.MobileMoneyNumber,
		}))
	} catch (error) {
		alert(error)
		console.log(error)
		return []
	}
}

export const sync = async () => {
	await uploadLocalAddedClient()

	await storeAllClientInLocal(await getAllClients())
}
