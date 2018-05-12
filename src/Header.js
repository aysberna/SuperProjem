import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
const { textStyle, viewStyle } = styles;
	return (
	<View style={viewStyle}>
	<Text style={textStyle}>
		Barkod Uygulaması

	</Text>
	</View>
	);

};


const styles = {
	textStyle:{
	fontSize: 30
	},
	viewStyle:{
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: 20
	}
};



export default Header;