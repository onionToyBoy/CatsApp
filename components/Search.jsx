
import React from 'react';
import { StyleSheet, View,  TextInput } from 'react-native';


export const Search = (props)=> {
	return (
	<TextInput style={styles.search}
     placeholder="Type Here..." 
     editable
      maxLength={30}
    />
	);

	}
	const styles = StyleSheet.create({
	search:{
  height: 40,
  width:'100%',
  backgroundColor: 'white',
  justifyContent:'flex-end',
  alignItems:'center',
  borderWidth: 1,
  borderColor:'black',
  paddingLeft: 8,
},
})