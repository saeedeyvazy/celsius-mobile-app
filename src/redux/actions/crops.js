import axios from 'axios'
import { cropsUrl } from '../../utility/api'
import { config } from '../../utility/axiosConfig'
export const getAllCrops = async () => {
	try {
		const response = await axios.get(cropsUrl, config)

		return response.data.Result
	} catch (error) {
		console.log(error)
		return []
	}
}
