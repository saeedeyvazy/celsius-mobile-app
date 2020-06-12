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

export default Client = ({ firstName, lastName, status, city, province }) => {
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
				<Text note>{status}</Text>
				<Button transparent onPress={() => navigateToViewClient()}>
					<Text>View</Text>
				</Button>
			</Right>
		</ListItem>
	)
}
