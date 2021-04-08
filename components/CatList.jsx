import React from 'react';
import { StyleSheet, Text, View,ScrollView, Image} from 'react-native';
import  {LinearGradient} from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {InfoBlock} from './InfoBlock/InfoBlock';

export const CatList = (props)=> {
return(
<ScrollView style={styles.scroll}>
<LinearGradient colors={['#152A57FF','#373967FF','#53223AFF']}  style={styles.container}>
	
	<Image source={props.cat.photo} style={styles.image}/>
		
	
	<InfoBlock cat={props.cat}/>
	<View style={styles.randomFactsBlock}>
		<Text style={styles.randomFactsTitle}>Рандомный факт о котах:</Text>
		<Text style={styles.randomInfo}>{props.randomFact}</Text>
	</View>

</LinearGradient>
</ScrollView>
)}
const styles = StyleSheet.create({
container:{
  flex: 1,
  width:'100%',
  alignItems: 'center',
    justifyContent: 'center', 
},
 scroll:{
    flex: 1,
  width:'100%',

},
image:{
  	width: '90%',
 	 height: 180,
 	 margin: 25,
},
randomFactsBlock:{
	width: '90%',
	padding:15,
	alignItems: 'center',
    justifyContent: 'center', 
},
randomFactsTitle:{
	fontSize:17,
	fontWeight: "bold",
	color: '#351CA7FF',
	marginBottom:10,
},
randomInfo:{
	fontSize:15,
}

});