import React from 'react';
import { Button,StyleSheet, View} from 'react-native';

let enable=false;
function Buttonc (props){
	
	return (
		<View>
			<Button disabled={enable} style={styles.container} title="Next step" onPress={() => props.value.navigate('PressurePlateMenu')}/>
		</View>
	);
};


const styles =StyleSheet.create({
	container:{
		justifyContent:'center',
		flex:1,
		alignItems:'center',
		maxWidth:10
	}

})
export default Buttonc