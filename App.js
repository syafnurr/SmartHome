import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/Pages/SplashScreen'
import Home from './src/Pages/Home'

const App = () => {
  return (
    <View>
      {/* <SplashScreen /> */}
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})