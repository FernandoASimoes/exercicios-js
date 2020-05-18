
import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      switchStatus: false
      
    };

  };

  render() {
    return(
      <View style={styles.container}>

        <Switch 
          value={this.state.switchStatus}
          onValueChange={ (valorSwitch) => this.setState({ switchStatus: valorSwitch })}
          
        />

        <Text>
          {(this.state.switchStatus) ? 'Ativo' : 'Inativo'}
        </Text>
        
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container:{
   marginTop: 15,
  },
});

export default App;