import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, Settings } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const image = { uri: "https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-009.jpg" };



import IncomePage from './IncomePage'
import CategoryPage from './CategoryPage'
import ExpensePage from './ExpensePage'
import Change from './Change';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Tab.Navigator animationType="slide"
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            elevation: 0, 
            backgroundColor:'white',
            height: 80,
            ...style.shadow
          }
        }}
      >
          <Tab.Screen name="IncomePage" component={IncomePage} options={{ 
            tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent: 'center', top: 10,}}>
                <Image
                  source={require('../assets/income.png')}
                  resizeMode='contain'
                  style={{
                    width:25,
                    height: 25,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                />
                <Text
                  style={{color: focused ? 'blue' : 'black', fontSize: 15,}}>
                Income</Text>
              </View>
            )
          }}/>
          <Tab.Screen name="ExpensePage" component={ExpensePage} options={{ 
            tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent: 'center', top: 10,}}>
                <Image
                  source={require('../assets/expense-1-502092.png')}
                  resizeMode='contain'
                  style={{
                    width:25,
                    height: 25,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                />
                <Text
                  style={{color: focused ? 'blue' : 'black', fontSize: 15,}}>
                Expense</Text>
              </View>
            )
          }}/>
          <Tab.Screen name="CategoryPage" component={CategoryPage} options={{ 
            tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent: 'center', top: 10,}}>
                <Image
                  source={require('../assets/2426188-200.png')}
                  resizeMode='contain'
                  style={{
                    width:25,
                    height: 25,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                />
                <Text
                  style={{color: focused ? 'blue' : 'black', fontSize: 15,}}>
                Category</Text>
              </View>
            )
          }}/>
          <Tab.Screen name="Change" component={Change} options={{ 
            tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent: 'center', top: 10,}}>
                <Image
                  source={require('../assets/setting.png')}
                  resizeMode='contain'
                  style={{
                    width:25,
                    height: 25,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                />
                <Text
                  style={{color: focused ? 'blue' : 'black', fontSize: 15,}}>
                Setting</Text>
              </View>
            )
          }}/>
    </Tab.Navigator>
    );
  }
}

const style = StyleSheet.create({
  tab:{

  },
  img:{
    width: 36,
    top: 0,
    height: 36,
  },
  shadow:{
    shadowOffset: {
      width:0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})