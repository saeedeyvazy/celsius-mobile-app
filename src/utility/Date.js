export const incrementDate = (dateInput, increment) => {
	var dateFormatTotime = new Date(dateInput)
	var increasedDate = new Date(
		dateFormatTotime.getTime() + increment * 86400000
	)
	return increasedDate
}
