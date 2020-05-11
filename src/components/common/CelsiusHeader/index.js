import React from 'react'
import { Header, Left, Body, Title, Right } from 'native-base'

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
				<Title style={{ color: 'black' }}>CelsiusPro</Title>
			</Body>
			<Right></Right>
		</Header>
	)
}

export default CelsiusHeader
