
import React from 'react';

import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';



export const CatItem = (props)=> {

  return (
  <TouchableOpacity style={styles.outerContainer} >
    <View style={styles.nameAndBreadBlock}>
      <Text style={styles.catName}>{props.cat.name}</Text>
      <Text style={styles.catBread}>{props.cat.bread}</Text>
    </View>
    <View style={styles.innerContainer}>
      
  <Image 
    source={props.cat.photo}

          style={styles.image}
          />
      <Text style={styles.textInfo}>{props.cat.info}</Text>
    </View>
    </TouchableOpacity>
    
    
  );
}

const styles = StyleSheet.create({
  outerContainer:{
margin:15,
marginBottom:40,
padding:10,
borderColor:'#C1807CFF',
borderWidth: 1,
borderRadius:5,

},
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  catName:{
  color: 'black',
  fontSize: 17,
  fontWeight: "bold",
},
catBread:{
  color: 'black',
  fontSize: 15,
  alignItems: 'flex-end',
},
nameAndBreadBlock:{
  
  borderBottomWidth: 1,
  borderBottomColor:'#C1807CFF',
  padding:5,
  flexDirection:'row',
  justifyContent:'space-between'

},
  textInfo: {
  color: 'black',
  fontSize: 15,
  margin: 0,
  },
  
  image:{width: '80%',
  height: 120,
  margin: 15,

}
  
});

