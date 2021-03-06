/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
 
} from 'react-native';

import Loader from './src/screens/Loader';

const App: () => React$Node = () => {
  return (
 <View style={{
   flex:1,
   flexGrow:1,
   justifyContent:'center',
   alignItems:'center'
 }}>

   <Loader></Loader>
 </View>
  );
};



export default App;
