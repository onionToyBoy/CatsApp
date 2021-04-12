import { StatusBar } from 'expo-status-bar'
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View,TextInput ,SafeAreaView} from 'react-native';
import  {LinearGradient} from 'expo-linear-gradient'


import {Search} from '../components/Search'
import {CatsGenerator} from '../components/CatsGenerator'
import {state} from '../state'


const MainScreen=({navigation})=>{

  const [cats,setCats] = useState(state)

  const goToCat= (cat)=>{
    navigation.navigate('Cat',{cat})
  }

/* const searchCat=function(text=true){return text}

const renderCats = cats.
filter(el=>{if(searchCat()){
  return true;}
else{el.name.toLowerCase().includes(searchCat().toLowerCase())}}).
map((cat)=>(<Cat
cat={cat} 
key={cat.id}
goToCat={goToCat}/>)); */


  return(

    <View style={styles.container}>
      <LinearGradient colors={['#992C25FF', '#B5342CFF', '#520E0CFF']}  style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Hello, I am a Header!</Text>
          <CatsGenerator cats={cats} goToCat={goToCat}/>
          <StatusBar style="auto" />
        </SafeAreaView>
        </LinearGradient>
      <TextInput style={styles.search}
        placeholder="Type Here..." 
        editable
        maxLength={30}
        onChangeText={text=>{searchCat(text)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  header:{
    alignItems: 'flex-start',
    margin:5,
  },
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
});
  
  export default MainScreen