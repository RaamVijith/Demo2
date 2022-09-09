import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './src/Navigation';
import PostRequestExample from './examples/PostRequestExample';
import { Component } from './examples/componentss';




const App = () => {
  

  return (
      

    <SafeAreaView style={styles.root}>
    
    <Navigation/>

    </SafeAreaView> 
  );
};

const styles=StyleSheet.create({
  root:{
    flex:1,
    
  }
});

export default App;