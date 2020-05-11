import React from 'react'
import { Header, Left, Body, Title, Right, Image } from 'native-base'
import { ImageBackground } from 'react-native'

const CelsiusHeader = () => {
	return (
		<Header
			style={{
				backgroundColor: 'white',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<Left></Left>
			<Body>
				{/* <Title style={{ color: 'black' }}>CelsiusPro</Title> */}
				<ImageBackground
					source={require('../../../img/logo.png')}
					style={{ width: 300, height: 30, resizeMode: 'contain', padding: 30 }}
				/>
			</Body>
			<Right></Right>
		</Header>
	)
}

export default CelsiusHeader
