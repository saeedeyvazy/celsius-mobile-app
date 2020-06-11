export const isNullOrEmpty = (value) => {
	return !(typeof value === 'string' && value.length > 0)
}
