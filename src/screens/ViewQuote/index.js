import React from 'react'
import Modal from 'react-native-modal'
import {
	View,
	Text,
	Button,
	ListItem,
	Body,
	List,
	Left,
	Input,
	Container,
	Content,
} from 'native-base'

const ViewQuote = ({
	navigation,
	isVisible,
	closeModal,
	premium,
	sumInsured,
	province,
	startDate,
	endDate,
	insuranceType,
}) => {
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
			<Container>
				<Content>
					<List>
						<ListItem noIndent>
							<Left>
								<Text>Premium</Text>
							</Left>
							<Body>
								<Input
									style={{ color: '#00008b' }}
									editable={false}
									value={premium}
								></Input>
							</Body>
						</ListItem>
						<ListItem first>
							<Left>
								<Text>Sum Insured</Text>
							</Left>
							<Body>
								<Input
									style={{ color: '#00008b' }}
									editable={false}
									value={sumInsured}
								></Input>
							</Body>
						</ListItem>
						<ListItem first>
							<Left>
								<Text>Insurance Type</Text>
							</Left>
							<Body>
								<Input
									style={{ color: '#00008b' }}
									editable={false}
									value={insuranceType}
								></Input>
							</Body>
						</ListItem>
						<ListItem first>
							<Left>
								<Text>Province</Text>
							</Left>
							<Body>
								<Input
									style={{ color: '#00008b' }}
									editable={false}
									value={province}
								></Input>
							</Body>
						</ListItem>
						<ListItem first>
							<Left>
								<Text>Start Date</Text>
							</Left>
							<Body>
								<Input
									style={{ color: '#00008b' }}
									editable={false}
									value={startDate}
								></Input>
							</Body>
						</ListItem>
						<ListItem first>
							<Left>
								<Text>End Date</Text>
							</Left>
							<Body>
								<Input
									style={{ color: '#00008b' }}
									editable={false}
									value={endDate}
								></Input>
							</Body>
						</ListItem>
						<ListItem first>
							<Left>
								<Text>Reference Number</Text>
							</Left>
							<Body>
								<Input
									style={{ color: '#00008b' }}
									editable={false}
									value='854857'
								></Input>
							</Body>
						</ListItem>
					</List>

					<Button full dark onPress={() => navigateToBuyingScreen()}>
						<Text>Buy</Text>
					</Button>
					<View style={{ height: 5 }}></View>
					<Button full danger onPress={() => closeModal()}>
						<Text>Close</Text>
					</Button>
				</Content>
			</Container>
		</Modal>
	)
}
export default ViewQuote
