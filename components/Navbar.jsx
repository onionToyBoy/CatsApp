import React from 'react';
import{View, Text, StyleSheet} from 'react-native';

export const Navbar = (props)=>{
	return (
	<View style={styles.navbar}>
		<Text style={styles.text}>Коты</Text>
	</View>
	)

}

const styles = StyleSheet.create({
	navbar: {
	height: 60,
	backgroundColor: 'white',
	justifyContent:'flex-end',
	alignItems:'center',
	padding:10,
	


},
text:{
	
    fontSize: 20,
},


})