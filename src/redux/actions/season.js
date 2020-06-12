import axios from 'axios'
import { seasonUrl } from '../../utility/api'
import { config } from '../../utility/axiosConfig'
export const getAllSeason = async () => {
	try {
		const response = await axios.get(seasonUrl, config)

		return response.data.Result.map((season) => ({
			name: season.Name,
			id: season.Id,
		}))
	} catch (error) {
		console.log(error)
		return []
	}
}
