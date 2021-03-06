import axios from 'axios'
import { regionUrl } from '../../utility/api'
import { config } from '../../utility/axiosConfig'
export const getAllProvince = async () => {
	try {
		const response = await axios.get(regionUrl, config)

		return [
			...new Set(response.data.Result.map((result) => result.ProvinceName)),
		]
	} catch (error) {
		console.log(error)
		return []
	}
}
