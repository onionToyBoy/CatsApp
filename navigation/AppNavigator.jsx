
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'


import SearchScreen from '../screens/SearchScreen'
import MessageScreen from '../screens/MessageScreen'



const _SearchNavigator = createStackNavigator({

    Search:{
        screen: SearchScreen,
        navigationOptions:{
            title:'Поиск',
            headerTitleAlign: 'center'
        
        }

    },
})
const _MessageScreenNavigator = createStackNavigator({

    Messages:{
        screen: MessageScreen,
        navigationOptions:{
            title:'Сообщения',
            headerTitleAlign: 'center'
        
        }

    },
})
////////////////////////////////////////////////

const AppNavigator = createBottomTabNavigator({

  
    Search:{
        screen: _SearchNavigator,
        navigationOptions:{
            title:'Поиск'
        }

    },
    Messages:{
        screen: _MessageScreenNavigator,
        navigationOptions:{
            title:'Сообщения'
        }

    },
})

export default createAppContainer(AppNavigator)