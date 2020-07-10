import { StatusBar } from 'react-native';
import React from 'react';
import { AppLoading } from 'expo'
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
       <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
       <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#199',
    alignItems: 'center',
    justifyContent: 'center',
  },

 size: {
    fontSize: 20,
    color: '#fff'
 }
});
