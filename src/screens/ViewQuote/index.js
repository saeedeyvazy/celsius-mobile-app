import React from 'react'
import Modal from 'react-native-modal'
import { View, Text, Button } from 'native-base'

const ViewQuote = ({ navigation, isVisible, closeModal }) => {
	const navigateToBuyingScreen = () => {
		closeModal()
		navigation.navigate('BuyingScreen')
	}

	return (
		<Modal
			isVisible={isVisible}
			animationInTiming={600}
			animationIn='fadeInRight'
			animationOut='fadeOutRight'
			animationOutTiming={600}
		>
			<View
				style={{
					backgroundColor: 'white',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,
				}}
			>
				<Text style={{ fontSize: 20, padding: 10 }}>Premium</Text>
				<Text style={{ fontSize: 20, padding: 10 }}>Sum Insured</Text>
				<Text style={{ fontSize: 20, padding: 10 }}>Insurance Type</Text>
				<Text style={{ fontSize: 20, padding: 10 }}>Province/District</Text>
				<Text style={{ fontSize: 20, padding: 10 }}>Start Date</Text>
				<Text style={{ fontSize: 20, padding: 10 }}>End Date</Text>
				<Text style={{ fontSize: 20, padding: 10 }}>#ref</Text>
				<View style={{ height: 30 }}></View>
				<Button full dark onPress={() => navigateToBuyingScreen()}>
					<Text>Buy</Text>
				</Button>
				<View style={{ height: 30 }}></View>
				<Button full danger onPress={() => closeModal()}>
					<Text>Close</Text>
				</Button>
			</View>
		</Modal>
	)
}
export default ViewQuote
