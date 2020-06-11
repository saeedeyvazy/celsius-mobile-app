import { accessToken } from './api'

export const config = {
	headers: { Authorization: `Bearer ${accessToken}` },
}
