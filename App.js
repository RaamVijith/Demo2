import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './src/Navigation';
import { AuthProvider } from './src/context/AuthContext';




const App = () => {
  

  return (
      
<AuthProvider>
<SafeAreaView style={styles.root}>

    
    
<Navigation/>

</SafeAreaView> 
</AuthProvider>
    
  );
};

const styles=StyleSheet.create({
  root:{
    flex:1,
    
  }
});

export default App;