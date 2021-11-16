import React, {Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Loging from './components/Login'
import NewAccount from './components/NewAccount'
import HomePage from './components/HomePage'

const Stack = createStackNavigator();

export default class App extends Component{
    render(){
        return(
            <NavigationContainer>
              <Stack.Navigator initialRouteName="PondScreen" headerMode="none" mode="card">
                { <Stack.Screen name="Loging" component={Loging} options={{tabBarVisible: false}}/> }
                <Stack.Screen name="NewAccount" component={NewAccount} />
                <Stack.Screen name="HomePage" component={HomePage} />
              </Stack.Navigator>
          </NavigationContainer>
          // <NewAccount/>
         
        )
    }
}