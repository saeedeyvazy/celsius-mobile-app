import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal'
import * as Progress from 'react-native-progress'
import { ListItem, Text, View, Button } from 'native-base'

const SyncServerModal = ({ isVisible, close }) => {
	const [percentage, setPercentage] = useState(0)
	setTimeout(function () {
		if (percentage <= 99) setPercentage(percentage + 1)
	}, 100)

	const closeModal = () => {
		setPercentage(0)
		close()
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
					justifyContent: 'space-around',
					alignItems: 'center',
					flex: 0.5,
				}}
			>
				<ListItem itemDivider>
					<Text>Uploading data to server...</Text>
				</ListItem>
				<View
					style={{
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Progress.Bar
						indeterminate={percentage < 100 ? true : false}
						progress={percentage}
						width={300}
					/>
					<ListItem>
						<Text>{percentage}%</Text>
					</ListItem>
				</View>
				<Button dark full onPress={() => closeModal()}>
					<Text>OK</Text>
				</Button>
			</View>
		</Modal>
	)
}

export default SyncServerModal
