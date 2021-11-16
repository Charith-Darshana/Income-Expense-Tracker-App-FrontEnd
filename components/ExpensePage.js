import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default class ExpensePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      currentlyIncome:'',
      details:'',
      category:'',
      price:'',

      resp: [],
      tableHead: ['Details', 'Category', 'Price'],
      widthArr: [120, 120, 158],
    };
    this.getData();
  }
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  back = () => {
    console.log("Back")
    this.props.navigation.navigate('Loging')
  };

  saveExpense(){
    fetch('http://192.168.1.11:3004/Expense/postExpense', {
          method: 'POST',
          body: JSON.stringify({
            details: this.state.details,
            category: this.state.category,
            price: this.state.price,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    Alert.alert('Expense Save')
  }

  getData() {
    fetch('http://192.168.1.11:3004/Expense/getExpense')
        .then((response) => response.json())
        .then((response) => {
          let resp=response.data
          console.log(resp[0].category)
            this.setState({ resp })
        })
        .catch((error) => console.error(error));
  }

  render() {

    const { modalVisible } = this.state;

    const tableData = this.state.resp.map(record => ([record.details, record.category, record.price]));

    return (
      <View>
        <View>
        <TouchableOpacity onPress={this.back}>
          <Image source={require('../assets/bk.png')} resizeMode='contain' style={style.iconBack} onPress={this.createNewAccoutn}/>
        </TouchableOpacity>
          <Text style={style.topic}>Expense Details</Text>
        </View>
      <View style={style.section}> 
          <Text style={style.top}>Expense Table</Text>
        </View>
        <View style={style.section1}> 
          <DataTable>
      <DataTable.Header>
        <DataTable.Title>Wisthare</DataTable.Title>
        <DataTable.Title numeric>Category</DataTable.Title>
        <DataTable.Title numeric>Rs.</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Salary</DataTable.Cell>
        <DataTable.Cell numeric>Salary</DataTable.Cell>
        <DataTable.Cell numeric>Rs.100000.00</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
          <DataTable.Cell>{this.state.wisthare}</DataTable.Cell>
          <DataTable.Cell numeric></DataTable.Cell>
          <DataTable.Cell numeric></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        
      </DataTable.Row>

    </DataTable>
      <Text></Text>


          <TouchableOpacity style={style.button} onPress={this.login}>
                    <Text style={style.cTxt}>Add Expenses</Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  topic:{
    top: -15,
    left: 115,
    fontSize:32,
    color:'blue',
    fontWeight:'bold'
  },
  section:{
    marginTop: 90,
    position: 'absolute',
    left:13,
    borderRadius: 10,
    width: 400,
    height: 150,
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
  iconBack:{
    left:20,
    top: 25,
    width:35,
    height: 35,
  },
  iconBack:{
    left:20,
    top: 25,
    width:35,
    height: 35,
  },
  iconCalender:{
    flex:1,
    top:-10,
    left: 100,
    width:60,
  },
  calenderLbl:{
    fontSize: 22,
    position: 'absolute',
    left: 195,
    top: 50,
    color:'blue',
    fontWeight:'bold'
  },
  lblSalary:{
    fontSize: 22,
    position: 'absolute',
    left: 10,
    top: 50,
    color:'#10ac84',
    fontFamily: 'sans-serif-medium',
  },
  count:{
    fontSize: 22,
    position: 'absolute',
    right: 10,
    top: 50,
    color:'#10ac84'
  },
  section1:{
    marginTop: 250,
    position: 'absolute',
    left:13,
    borderRadius: 10,
    width: 400,
    height: 500,
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
  cTxt:{
    color:'blue',
    fontWeight:'bold',
    fontSize: 20
  },
  top:{
    color:'black',
    fontSize: 40,
    fontWeight:'bold',
    right:-90,
    top:45
  },
  button:{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        position: 'absolute',
        top: 400,
        marginBottom:20,
        borderWidth: 2,
        borderColor:'blue',
        width: 180,
        borderRadius: 10,
        left: 105,
  }

})