import React from 'react'
import {
	ListItem,
	Left,
	Thumbnail,
	Body,
	Text,
	Right,
	Button,
} from 'native-base'

export default Client = ({
	firstName,
	lastName,
	status,
	city,
	province,
	navigateToViewClient,
}) => {
	return (
		<ListItem thumbnail>
			<Left>
				<Thumbnail circular source={require('../../../img/no-avatar.png')} />
			</Left>
			<Body>
				<Text>{`${firstName} ${lastName}`}</Text>
				<Text note numberOfLines={1}>
					{`${city}-${province}`}
				</Text>
			</Body>
			<Right>
				{/* TODO: change confirmed to status that recieved from api */}
				<Text note> confirmed </Text>
				<Button transparent onPress={() => navigateToViewClient()}>
					<Text>View</Text>
				</Button>
			</Right>
		</ListItem>
	)
}
