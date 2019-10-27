import React, {useState} from 'react';
import {View, Image, StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native';
import api from '../services/api'
import logo from '../assets/logo.png'

export default function Login() {
  const [email,setEmail] = useState('');
  const [techs,setTechs] = useState('');
  async function handleSubmit(){
    console.log(email);
    console.log(techs);

  }
  return <View style={styles.container}>
    <Image source={logo}/>

    <View style={styles.form}>
    <Text style={styles.label}>SEU E-MAIL *</Text>
    <TextInput
    style={styles.input}
    placeholder="Seu e-mail"
    placeholderTextColor="#999"
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    value={email}
    onChangeText={setEmail}
    />
    <Text style={styles.label}>TECNOLOGIAS *</Text>
    <TextInput
    style={styles.input}
    placeholder="Tecnologias de interesse"
    placeholderTextColor="#999"
    autoCapitalize="words"
    autoCorrect={false}
    onChangeText={setTechs}
    />
    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
      <Text style={styles.buttonText}>Encontrar spots</Text>
    </TouchableOpacity>
   
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  label: {
    fontWeight: 'bold',
    color:'#444',
    marginBottom: 8,  
  },
  form:{
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginBottom:30,
  },
  input: {
    borderWidth:1,
    borderColor: '#ddd',
    paddingHorizontal:20,
    fontSize:16,
    color: '#444',
    height: 44,
    marginBottom:20,
    borderRadius:2
  },
  button: {
    height: 42,
    backgroundColor:'#f05a5b',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 2,
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize: 16,
  },
})