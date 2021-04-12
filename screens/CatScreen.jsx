import React from 'react'
import { StyleSheet, Text, View,ScrollView, Image} from 'react-native'
import  {LinearGradient} from 'expo-linear-gradient'
import {InfoBlock} from '../components/InfoBlock/InfoBlock'
import {randomFactsGenerator} from '../randomFactsGenerator'


const CatScreen = ({navigation,getRandomFact})=> {
	return(
		<ScrollView style={styles.scroll}>
			<LinearGradient colors={['#152A57FF','#373967FF','#53223AFF']}  style={styles.container}>
	
				<Image source={navigation.getParam('cat').photo} style={styles.image}/>
		
	
				<InfoBlock cat={navigation.getParam('cat')}/>
				<View style={styles.randomFactsBlock}>
					<Text style={styles.randomFactsTitle}>Рандомный факт о котах:</Text>
					<Text style={styles.randomInfo}>{randomFactsGenerator.getRandomFact()}</Text>
				</View>

			</LinearGradient>
			<View style={styles.bottomLine}></View>	
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
},
bottomLine:{
	borderBottomWidth: 1,
	borderBottomColor:'black',
	justifyContent:'flex-end',
}

});
  export default CatScreen