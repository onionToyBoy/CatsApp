import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView, FlatList,TextInput ,SafeAreaView} from 'react-native';
import  {LinearGradient} from 'expo-linear-gradient';
import {Navbar} from './components/Navbar';
import {CatItem} from './components/CatItem';
import {CatList} from './components/CatList';
import {Search} from './components/Search';
import {state} from './state';


export default function App() {

const getRandomFact=(arr)=>(arr[Math.floor(Math.random()*arr.length)])

 const renderCats = state.cats.map((cat)=>(<CatItem cat={cat} key={cat.id}/>)); 
  return (
     <View style={styles.mainContainer}>
     <LinearGradient colors={['#992C25FF', '#B5342CFF', '#520E0CFF']}  style={styles.mainContainer}>
      
      <Navbar />
      <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hello, I am a Header!</Text>
        {renderCats}
      <StatusBar style="auto" />
    </SafeAreaView>
     </ScrollView>
    </LinearGradient>
    <CatList cat={state.cats[0]} randomFact={getRandomFact(state.randomFacts)}/>
     <Search/>
   </View>
  );
}

const styles = StyleSheet.create({
mainContainer:{
  flex: 1,
},
  container: {
    flex: 1,
    
  },
  textInfo: {
  color: 'black',
  fontSize: 30,
  margin: 20,
  },
  header:{
alignItems: 'flex-start',
margin:5,
},
});
