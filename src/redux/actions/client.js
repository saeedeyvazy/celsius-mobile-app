import axios from 'axios'
import { clientUrl } from '../../utility/api'
import { config } from '../../utility/axiosConfig'
export const getAllClients = async () => {
	try {
		const response = await axios.get(clientUrl, config)

		return response.data.Result.map((client) => ({
			firstName: client.FirstName,
			lastName: client.LastName,
			province: client.Province,
			city: client.City,
		}))
	} catch (error) {
		console.log(error)
		return []
	}
}
