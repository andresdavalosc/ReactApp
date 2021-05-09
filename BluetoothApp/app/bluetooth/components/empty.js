import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

function Empty(props){
	if(props.value ==true){
		return(
			<View style={styles.container}>
				<Image style={styles.icon} source={require('../icons/nodevices.png')}/>
				<Text style={styles.text}>{props.text}</Text>
			</View>
		)
	}
	else{
		return(
			<View style={styles.container}>
				<Image style={styles.icon} source={require('../icons/connected.png')}/>
				<Text style={styles.text}>{props.text}</Text>
			</View>
		)
	}
	
}

const styles= StyleSheet.create({
	container:{
		alignItems:'center'
	},
	icon:{
		width:200,
		height:200,
		marginVertical:50
	},
	text:{
		fontSize:20
	}
})
export default Empty