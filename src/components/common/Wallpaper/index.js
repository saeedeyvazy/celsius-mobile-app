import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import styles from './styles'

class Wallpaper extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					style={styles.backgroundImg}
					source={this.props.imgSource}
				>
					{this.props.children}
				</ImageBackground>
			</View>
		)
	}
}
export default Wallpaper
