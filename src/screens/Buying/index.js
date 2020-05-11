import React from 'react'
import {
	Container,
	Content,
	Radio,
	Picker,
	View,
	ListItem,
	Left,
	Text,
	Right,
	Button,
} from 'native-base'
import CelsiusHeader from '../../components/common/CelsiusHeader'
import CelsiusInput from '../../components/common/CelsiusInput'
import PickerContainer from '../../components/common/PickerContainer'

const Buying = () => {
	return (
		<Container>
			<CelsiusHeader></CelsiusHeader>
			<Content>
				<CelsiusInput label='Insurance Partner'></CelsiusInput>
				<CelsiusInput label='Premium'></CelsiusInput>
				<CelsiusInput label='2020/05/10'></CelsiusInput>
				<CelsiusInput label='Premium payment date'></CelsiusInput>
				<CelsiusInput label='Intermediary'></CelsiusInput>

				<PickerContainer>
					<Picker>
						<Picker.Item label='Client' value='key0' />
						<Picker.Item label='Client 1' value='key1' />
						<Picker.Item label='Client 2' value='key2' />
					</Picker>
				</PickerContainer>
				<ListItem>
					<Left>
						<Text>radio 1</Text>
					</Left>
					<Right>
						<Radio selected></Radio>
					</Right>
				</ListItem>
				<ListItem>
					<Left>
						<Text>radio 2</Text>
					</Left>
					<Right>
						<Radio></Radio>
					</Right>
				</ListItem>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}
				>
					<Button danger rounded>
						<Text>Cancel</Text>
					</Button>

					<Button dark rounded>
						<Text>Confirm</Text>
					</Button>
				</View>
			</Content>
		</Container>
	)
}

export default Buying
