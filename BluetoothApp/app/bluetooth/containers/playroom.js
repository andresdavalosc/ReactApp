import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,StyleSheet} from 'react-native';

function PlayRoom(props){
	return(
		<View style={styles.container}>
			<Text > testing playroom</Text>
		</View>
	)
}


const styles =StyleSheet.create({
	container:{
		justifyContent:'center',
		flex:1,
		alignItems:'center',
	}

})
export default PlayRoom