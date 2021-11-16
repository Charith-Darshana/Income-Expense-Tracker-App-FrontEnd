import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { DataTable } from 'react-native-paper';

export default class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      category:'',
      resp: [],
      tableHead: ['Categorys'],
      widthArr: [],
    };
    this.getData();
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
}

  removeValue = async () => {
  try {
    await AsyncStorage.removeItem('name')
    await AsyncStorage.removeItem('password')
    console.log("Data Remove");
  } catch(e) {
    console.log("No Data")
  }
}

saveCategory(){
  const date = new Date();

  fetch('http://192.168.1.11:3004/Category/postCategory', {
        method: 'POST',
        body: JSON.stringify({
          category: this.state.category,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  this.getData();
  
  Alert.alert('Saved')
}

getData() {
  fetch('http://192.168.1.11:3004/Category/getCategorys')
    .then((response) => response.json())
      .then((response) => {  
         let resp=response.data
          console.log(resp)
              this.setState({ resp })               
      })
   .catch((error) => console.error(error));
}

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <View>
          <TouchableOpacity  style={style.x}>
            <Image source={require('../assets/logout.png')} resizeMode='contain' style={style.iconlogOut} onPress={this.removeValue.bind(this)}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.back}>
            <Image source={require('../assets/bk.png')} resizeMode='contain' style={style.iconBack} onPress={this.createNewAccoutn}/>
          </TouchableOpacity>
            <Text style={style.topic}>Category Details</Text>
          </View>
            <View style={style.section}> 
              <DataTable>
               <DataTable.Header>
                   <DataTable.Title style={{justifyContent:'center'}}>Category</DataTable.Title>
                 </DataTable.Header>
               <DataTable.Row>
        
               </DataTable.Row>   
             </DataTable>

                    <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} style={style.editebutton}>
                     <Text style={style.cTxt}>Add Category</Text>
                    </TouchableOpacity>
           </View>

           <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}

        >
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.modalText}>Add New Category</Text>
              <TouchableOpacity
                style={[style.button, style.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                 <Image source={require('../assets/cl.png')} resizeMode='contain' style={style.iconclose} />
              </TouchableOpacity>

              <View>
                    <TextInput
                        style={style.category}
                        placeholder="Category"
                        value={this.state.category}
                            onChangeText={(value)=>{
                            this.setState({
                            category : value
                            })
                        }}
                   />
                   <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} style={style.btnSave}>
                     <Text style={style.sTxt}>Save</Text>
                    </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        </View>
    );
  }
}

const style = StyleSheet.create({

  topic:{
    top: -15,
    left: 97,
    fontSize:32,
    fontFamily:'Nunito-ExtraLightItalic',
    fontWeight:'bold',
    color:'blue'
  },
  iconlogOut:{
    left:370,
    top: 25,
    width:35,
    height: 35,
    position: 'absolute',
  },
  iconBack:{
    left:20,
    top: 25,
    width:35,
    height: 35,
  },
  section:{
    marginTop: 100,
    position: 'absolute',
    left:13,
    borderRadius: 10,
    width: 400,
    height: 650,
    backgroundColor: 'white',
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width:0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation:5
  },
  editebutton:{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        position: 'absolute',
        top: 550,
        marginBottom:20,
        borderWidth:2,
        borderColor:'blue',
        width: 180,
        borderRadius: 10,
        left:110,
  },


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: 410,
    height: 600,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
        padding: 10,
        position: 'absolute',
        top: 20,
        marginBottom:20,
        left: 350,
  },
  iconclose:{
      width: 20,
      height: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'blue',
    fontWeight:'bold',
    fontSize:30,
    left:-20
  },
  category: {
    height: 40,
    margin: 12,
    width: 300,
    top:60,
    borderWidth: 2,
    borderRadius:10
  },
  btnSave: {
    height: 50,
    margin: 12,
    width: 150,
    top:120,
    borderWidth: 1,
    left:70,
    backgroundColor:'green',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  cTxt:{
    color:'blue',
    fontWeight:'bold',
    fontSize: 20

  },
  sTxt:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
  }
})