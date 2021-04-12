import React from 'react'
import {FlatList} from 'react-native'
import {Cat} from './Cat'

export const CatsGenerator = ({cats,goToCat}) =>(
<FlatList
          data={cats}
          renderItem={({item})=><Cat cat={item} goToCat={goToCat}/>
          }
          keyExtractor={item => item.id.toString()}
/>
)

