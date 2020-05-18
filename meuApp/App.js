import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebaseConnection';

console.disableYellowBox=true;


export default function App(){
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [nome, setNome] = useState('');


 
  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( (value) => {
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nome: nome
      })
      alert('Usuario cadastrado com sucesso!');
      setEmail('');
      setNome('');
      setpassword('');
    })
    .catch( (error) => {
      alert('Ops algo deu errado');
    })
  }

  return(
    <View style={ styles.container }>
       <Text style={styles.texto}>Nome</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto)}
      value={nome}
      />

      <Text style={styles.texto}>E-mail</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      />
       <Text style={styles.texto}>Senha</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setpassword(texto)}
      value={password}
      />

      <Button 
      title='Cadastrar'
      onPress={cadastrar}
      />
   
      
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    margin: 10
  },
  texto:{
    fontSize: 20
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212",
    height: 40,
    fontSize: 17
  },
})