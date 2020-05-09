import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	button: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		alignSelf: 'stretch',
		borderRadius: 20,
		margin: 20,
		backgroundColor: '#F035E0',
		height: 40,
		zIndex: 100,
	},

	inputContainer: {
		backgroundColor: 'rgba(255,255,255,.2)',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		alignSelf: 'stretch',
		borderWidth: 1,
		borderColor: '#fff',
		margin: 20,
	},

	input: {
		height: 40,
		padding: 10,
		marginBottom: 10,
		backgroundColor: 'rgba(255,255,255,1)',
		borderRadius: 2,
		width: '80%',
	},
})

export default styles
