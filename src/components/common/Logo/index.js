import React, { Component } from 'react'
import { styles } from './styles'
import { View, Image, Text } from 'react-native'

class Logo extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<View style={styles.subContainer}>
				<Image
					style={{ flex: 1, resizeMode: 'contain' }}
					source={this.props.source}
				/>
				<Text style={styles.header}>{this.props.title}</Text>
			</View>
		)
	}
}

export default Logo
