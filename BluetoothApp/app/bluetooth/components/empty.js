import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import {CirclesLoader, PulseLoader, TextLoader, DotsLoader,LinesLoader} from 'react-native-indicator';


function Empty(props){
	if(props.value == true && props.load == true){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>{props.text}</Text>
				<LinesLoader />
			</View>
		)
	}
	if(props.value ==true && props.load == false){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>{props.text}</Text>
				<Image style={styles.icon} source={require('../icons/nodevices.png')}/>
			</View>
		)
	}
	else{
		return(
			<View style={styles.container}>
				<Text style={styles.text}>{props.text}</Text>
				<Image style={styles.icon} source={require('../icons/connected.png')}/>
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
		marginVertical:0
	},
	text:{
		fontSize:20,
		marginTop:50,
		marginBottom:50
	}
})
export default Empty