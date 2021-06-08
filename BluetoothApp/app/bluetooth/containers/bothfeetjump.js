import React, { useEffect, useState } from 'react';
import { Image, Text, ImageBackground,StyleSheet, View} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import LinearGradient from 'react-native-linear-gradient'

let dat=".";
let connected = false
const jump = () => {
	//console.log(props.val)
	const [titleText, setTitleText] = useState("");
	useEffect(() => {
		const interval = setInterval(() => {
		received();
		      
		}, 1500 );
		
		const received = async () => {
			await BluetoothSerial.readFromDevice().then((datas) => {dat = datas});
			console.log(dat)
			if(dat != ""){
			  setTitleText(dat);
			}
		}
		return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
	  }, [])

	// BluetoothSerial.connect("24:6F:28:79:54:CE")
    // .then((res) => {
    //   console.log(`Connected to device 24:6F:28:79:54:CE ooo`);
    //   connected = true;
    //   ToastAndroid.show(`Connected to device `, ToastAndroid.SHORT);
    // })
    //.catch((err) => console.log((err.message)))

	//BluetoothSerial.readFromDevice().then((data) => {console.log(data)});
	return(
		<View style={styles.container2}>
			<ImageBackground style={styles.photo} source={require('../icons/foto1.jpg')}>
				<Image style={styles.photo3} source={require('../icons/hylyght2.png')} />
			</ImageBackground>
			<LinearGradient colors={['black', 'grey']} style={styles.container} start={{ x: 0, y: 0 }}
        		end={{ x: 1, y: 1 }}>
				<Text style={styles.text}  > Welcome! </Text>
				<Text style={styles.subtext}  >Stand On the plate and Jump!</Text>				
				<ImageBackground style={styles.box} source={require('../icons/white.jpg')}>
				<Text style={styles.title}> {titleText} cm </Text>
				</ImageBackground>
			</LinearGradient>
		</View>
		
	);


}

const styles =StyleSheet.create({
	container:{
		justifyContent:'center',
		alignItems:'center',
		flex:1
	},
	container2:{
		flex:1,
	},
	text:{
		fontFamily: 'bold',
		fontSize: 30,
		color:"white",

	},
	subtext:{
		fontFamily: 'bold',
		fontSize: 20,
		color:"white",
		flex:0.3
	},
	photo:{
		backgroundColor: "transparent",
		width:360,
		height:150,
	},
	photo3:{
		backgroundColor: "transparent",
		width:105,
		height:500,
		flex:0.5,
		marginLeft:235,
		marginTop:100
	},
	title:{
		color:"black",
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize:30

	  },
	box:{
		flex:0.5,
		width:250,
		height:50,
		textAlign: 'center'
	}

})
export default jump