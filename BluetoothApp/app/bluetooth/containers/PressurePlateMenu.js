import React, { useEffect, useState } from 'react';
import { Image, Text, FlatList,StyleSheet, View} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import LinearGradient from 'react-native-linear-gradient'


function PlayRoom(props){

	handleClick = () => {
	console.log("print");
	BluetoothSerial.read((data, subscription) => {
		console.log(data);	  
		if (this.imBoredNow && subscription) {
		  BluetoothSerial.removeSubscription(subscription);
		}
	  }, "\r\n","24:6F:28:79:54:CE");
	  
	}
	
	db()
	BluetoothSerial.readFromDevice().then((data) => {console.log(data)});
	return(
		<View style={styles.container2}>
			<Image style={styles.photo3} source={require('../icons/foto3.png')} />
			<Image style={styles.photo} source={require('../icons/foto1.jpg')} />
			<LinearGradient colors={['black', 'grey']} style={styles.container} start={{ x: 0, y: 0 }}
        		end={{ x: 1, y: 1 }}>
				<Text onPress={() => handleClick(this)} style={styles.text}  > Welcome! </Text>
				<Text style={styles.subtext}  >Stand On the plate and Jump!</Text>
			</LinearGradient>
		</View>
		
	)
}

const db = async () => {
	await BluetoothSerial.writeToDevice("This is the test message");

};


const styles =StyleSheet.create({
	container:{
		justifyContent:'center',
		alignItems:'center',
		flex:0.7
	},
	container2:{
		flex:1,
	},
	text:{
		fontFamily: 'bold',
		fontSize: 30,
		color:"white",
		flex:0.
	},
	subtext:{
		fontFamily: 'bold',
		fontSize: 20,
		color:"white",
		flex:0.5
	},
	photo:{
		flex:0.4,
		backgroundColor: "transparent",
		width:360,
		height:150,
	},
	photo3:{
		backgroundColor: "transparent",
		width:105,
		height:30,
		flex:0.05,
		marginLeft:120
	}

})
export default PlayRoom