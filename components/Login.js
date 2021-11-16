import React, { Component } from 'react'
import { Text, View, 
TextInput, StyleSheet, 
ImageBackground, KeyboardAvoidingView, 
Button, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard , Alert } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Loging extends Component {
constructor(props) {
    super(props);
    this.state = {
      userName:'',
      password:''
    };
    this.getData();
  }

storeData = async (value) => {
      try {
        await AsyncStorage.setItem('name', this.state.userName)
        await AsyncStorage.setItem('password', this.state.password)
        console.log("Data Saved");
      } catch (e) {
         console.log("Data Saved Faild");
      }
    }

getData = async () => {
  try {
    const name = await AsyncStorage.getItem('name')
    const password = await AsyncStorage.getItem('password')
    if(name != null ) {
      console.log("name is "+name);
      console.log("password is "+password);
      this.props.navigation.navigate('HomePage')
    }else{
          console.log("No Data !")
          Alert.alert("Check And Try Again");
    }
  } catch(e) {
    console.log("No Data")
    Massage
  }
}

createNewAccoutn = () => {
    console.log("Create New Account");
    this.props.navigation.navigate('NewAccount')
  
};

login = () => {
    console.log("Login")
    
};

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
            <ImageBackground source={require('../assets/11111.jpg')} style={styles.image}>
                
                <Text style={styles.mTxt}>Pocket  Money</Text>

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
                    secureTextEntry={true}
                    value={this.state.password}
                        onChangeText={(value)=>{
                        this.setState({
                        password : value
                    })
                }}
                />

                <TouchableOpacity style={styles.button} onPress={this.getData.bind(this)}>
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.cAcc}
                    onPress={this.createNewAccoutn}
                >Create New Account ?</Text>

            </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover"
  },
  text: {
    color: "white",
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  input: {
    width: 350,
    backgroundColor: 'white',
    margin: 25,
    left: 15,
    top: -110,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15
  },
  button:{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        top: -80,
        marginBottom:20,
        backgroundColor:'green',
        width: 200,
        borderRadius: 10,
        left: 105,
  },
  text:{
      left: 145,
      borderColor: "#000000",
      top: -70,
  },
  btnTxt:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
  cAcc:{
    color:'white',
    left: 120,
    top: -70,
    fontSize: 20,
    fontWeight: 'bold'
  },
  iTxt:{
    color: 'black'
  },
  mTxt:{
    color:'white',
    fontWeight:'bold',
    fontSize:45,
    left:70,
    bottom:150
  }


})