/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import LoginScreen from './src/LogIn/LoginScreen';



const App = () => {

  return (

    <View style={{ flex: 1 }}>
      <LoginScreen></LoginScreen>
    </View>

  );
};


export default App;
