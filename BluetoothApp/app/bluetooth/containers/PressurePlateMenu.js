import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-elements';
import { TouchableOpacity, Text, Image,StyleSheet, View} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import LinearGradient from 'react-native-linear-gradient'

const PlayRoom = ({ navigation }) => {
	return(
		<View style={styles.container}>
			<View style={styles.intro}>
				<Text style={styles.introText}>Click on the desired button</Text>
			</View>
			<View style={styles.row}>
				<View>
					<TouchableOpacity
					onPress={() => {
						navigation.navigate('leftfootjump')
					}}
					style={styles.buttonContainer2}
					>
						<Text style={styles.buttonText2}>LeftLeg Jump</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('rightfootjump')
						}}
						style={styles.buttonContainer2}
					>
						<Text style={styles.buttonText2}>RightLeg Jump</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('bothfeetjump')
					}}
					style={styles.buttonContainer}
				>
					<Text style={styles.buttonText2}>Normal jump</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bottom}>
				<View style={styles.row}>
					<Image
        				style={styles.tinyLogo}
        				source={require('../icons/running.png')}
      				/>
					<Image
        				style={styles.tinyLogo2}
        				source={require('../icons/hyglygt.png')}
      				/>
				</View>
				
			</View>
		</View>
	
	);


}

const styles = StyleSheet.create({
buttonContainer2: {
	marginVertical: 20,
	height: 150,
	width:150,
	marginHorizontal: 5,
	backgroundColor: '#5d57ff',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 8,
},
buttonContainer: {
	marginLeft:105,
	height: 150,
	width:150,
	marginHorizontal: 10,
	backgroundColor: '#5d57ff',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 8,
},
buttonText2: {
	textTransform: 'uppercase',
	color: '#fff',
	fontSize: 12,
	fontWeight: 'bold',
},
row:{
	flexDirection: 'row',
	marginHorizontal: 20,
	 marginTop: 5,
},
intro:{
	height:100,
	backgroundColor: 'black',
},
introText: {
	textTransform: 'uppercase',
	color: '#fff',
	fontSize: 12,
	fontWeight: 'bold',
	textAlign: 'center',
	marginTop:30
},
tinyLogo: {
    width: 50,
    height: 50,
  },
tinyLogo2: {
    width: 100,
    height: 50,
	position: 'absolute', top: 0, left: 100
},
bottom:{
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 0
},
container: {
    flex: 1,
	backgroundColor: 'white'
  }
});
export default PlayRoom