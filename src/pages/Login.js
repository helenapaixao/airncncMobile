import React from 'react';
import {View, Image, StyleSheet,Text, TextInput} from 'react-native';
import logo from '../assets/logo.png'

export default function Login() {
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
    >

    </TextInput>
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
})