import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button, Modal } from 'react-native'

class App extends Component{

  constructor(props){
    super(props)
    this.state={
      modalVisible: false

    }

    this.abrir = this.abrir.bind(this)
    this.fechar = this.fechar.bind(this)
  }
  abrir(){
    this.setState({modalVisible: true})
  }

  fechar(){
    this.setState({modalVisible: false})
  }

  render(){
    return(

      <View style={styles.container}>
        <Button title='Abrir Modal' onPress={ this.abrir } />

        <Modal transparent={true} animationType='slid' visible={this.state.modalVisible}>
          <View style={{backgroundColor: '#292929', width:"100%", height: 350, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: "#fff", fontSize: 28}}>Seja Bem-Vindo</Text>
          </View>
          <Button title='Fecha Modal' onPress={ this.fechar } />
        </Modal>
      
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ddd'
  }
})

export default App;