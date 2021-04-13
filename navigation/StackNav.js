import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import MainScreen from '../screens/MainScreen'
import DetailScreen from '../screens/DetailScreen'


const CatsNavigator = createStackNavigator({

    Cats:{
        screen: MainScreen,
        navigationOptions:{
            title:'Коты',
            headerTitleAlign: 'center'
        }
    },

    Cat:{
        screen: DetailScreen,
        navigationOptions: ({navigation})=>({
            title: navigation.getParam('cat').name,
            headerTitleAlign: 'center'
        })
    },
})

export default createAppContainer(CatsNavigator);