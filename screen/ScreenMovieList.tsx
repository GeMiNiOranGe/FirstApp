import { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	TextInput,
} from "react-native";

// export default function ScreenMovieList({ navigation }): JSX.Element {
// 	const handleOnPress = () => {
// 		navigation.navigete('MovieDetail')
// 	}
// 	return (
// 		<View style={style.container}>
// 			<Text style={{ fontSize: 30 }}>Movie List</Text>
// 			<TextInput style={style.textInput}/>
// 			<TouchableOpacity style={style.button} onPress={handleOnPress}>
// 				<Text>Move to detail</Text>
// 			</TouchableOpacity>
// 		</View>
// 	)
// }

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	textInput: {
		borderWidth: 1,
		width: 300,
		height: 30,
		marginVertical: 20,
	},
	button: {
		borderWidth: 1,
		borderColor: 'black',
		width: 100,
		height: 50,
		justifyContent: "center",
		alignItems: 'center',
	}
})