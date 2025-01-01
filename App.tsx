import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import SplashScreen from './src/Screens/SplashScreen/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation/StackNavigation';

const App = () => {
  const[isShowSplash,setShowSplash]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setShowSplash(false)
    },3000);
  })
  return (
    // <NavigationContainer>{
    //   isShowSplash?<SplashScreen/>:<StackNavigation/>
    // }</NavigationContainer>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
     )
}

export default App

const styles = StyleSheet.create({})