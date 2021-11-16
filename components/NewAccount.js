import React, { Component } from 'react';
import { Text, View, 
TextInput, StyleSheet, 
ImageBackground, KeyboardAvoidingView, 
Button, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard, Alert  } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class NewAccount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userName:'',
        password:''
      };
    }

    storeData = async (value) => {
        try {
          await AsyncStorage.setItem('name', this.state.userName)
          await AsyncStorage.setItem('password', this.state.password)
          console.log("Data Saved");
          Alert.alert("New User Saved..!");
          this.props.navigation.navigate('Loging')
        } catch (e) {
           
        }
    }
  
    render() {
      return (
        <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={styles.container}
                  >
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                      <View style={styles.container}>
              <ImageBackground source={require('../assets/11111.jpg')} style={styles.image}>
                  
                  <Text style={styles.mTxt}>New User</Text>

                  <TextInput style={styles.input}
                          placeholder='User Name'
                          value={this.state.userName}
                              onChangeText={(value)=>{
                              this.setState({
                              userName : value
                      })
                  }}
                  />    
  
                  <TextInput style={styles.input}
                      placeholder='Password'
                      value={this.state.password}
                          onChangeText={(value)=>{
                          this.setState({
                          password : value
                      })
                  }}
                  />
  
                  
  
                  <TouchableOpacity style={styles.button}  onPress={this.storeData.bind(this)}>
                      <Text style={styles.bTxt}>Sing Up</Text>
                  </TouchableOpacity>
  
              </ImageBackground>
          </View>
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    input: {
      width: 350,
      margin: 25,
      left: 15,
      top: -110,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
      backgroundColor:'white'
    },
    button:{
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      top: -80,
      marginBottom:20,
      backgroundColor:'green',
      width: 280,
      borderRadius: 10,
      left: 75
    },
    bTxt:{
      color:'white',
      fontWeight: 'bold',
      fontSize: 25
    },
    mTxt:{
      color:'white',
      fontWeight:'bold',
      fontSize:45,
      left:110,
      bottom:150
    }
  
  
  }) 