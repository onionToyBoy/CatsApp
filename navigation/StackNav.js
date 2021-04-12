import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import MainScreen from '../screens/MainScreen'
import CatScreen2 from '../screens/CatScreen'


const CatsNavigator = createStackNavigator({

    Cats:{
        screen: MainScreen,
        navigationOptions:{
            title:'Коты',
            headerTitleAlign: 'center'
        }
    },

    Cat:{
        screen: CatScreen2,
        navigationOptions: ({navigation})=>({
            title: navigation.getParam('cat').name,
            headerTitleAlign: 'center'
        })
    },

})

export default createAppContainer(CatsNavigator);