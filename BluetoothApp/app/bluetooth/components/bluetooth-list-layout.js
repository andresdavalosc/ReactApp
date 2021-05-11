import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

function BluetoothListLayout(props){
	return(
		<View style={styles.container}> 
			<Text style={styles.title}> {props.title} </Text>
			{props.children}
		</View>
		
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white',

	},
	title:{
		marginLeft:100,
		fontSize:30,
		fontWeight:'bold',
		color:"black"
	}

})
export default BluetoothListLayout