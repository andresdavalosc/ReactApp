import React from 'react';
import { View, Text, Switch,StyleSheet} from 'react-native';


function Toggle(props){
	return(
		<View style={styles.container}>
			<Text style={styles.text}>{props.value?'ON':'OFF'}</Text>
            
			<Switch style={styles.switch} value={props.value}
				onValueChange={props.onValueChange}
			/>
		</View>
	)
}

const styles =StyleSheet.create({
	container:{
		paddingVertical:1,
		flexDirection:'row'
	},
	text:{
		marginTop:10,
		marginLeft:30,
		fontWeight:'bold',
		fontSize:20,
		flex:1,
		color:'black'
	},
	switch:{
		width:50,
		marginRight:20
	}

})
export default Toggle