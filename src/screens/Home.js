import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import Buttons from '../components/Buttons';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {

 

  const irShowUsers = () => {
    navigation.navigate('ShowUser');
  };



  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/SNOOPY.png')}
        style={styles.image}
      />
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>
        Esta aplicación nos servirá para comprender como utilizar la navegación y un tab menu en una aplicación móvil de react native
      </Text>

      <Buttons
        text='Ver todos los usuarios'
        action={irShowUsers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8f8ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  button: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    borderRadius: 10,
    backgroundColor: "darkblue"
  },
  buttonText: {
    textAlign: 'center',
    color: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    color: '#000000ff',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 5,
    color: '#000000ff', 
  },
});