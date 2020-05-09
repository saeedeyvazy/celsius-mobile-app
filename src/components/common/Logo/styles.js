import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	subContainer: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: 'red',
	},
	logo: {
		width: 400,
		height: 60,
	},
	header: {
		color: 'white',
		fontSize: 30,
		fontStyle: 'italic',
		textShadowColor: '#252525',
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 15,
		marginBottom: 20,
	},
})
