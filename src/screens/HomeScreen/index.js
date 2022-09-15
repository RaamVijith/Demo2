import React, {useContext} from "react";
import { Text, View , StyleSheet,Pressable} from "react-native";
import { AuthContext } from '../../context/AuthContext';


const HomeScreen=()=>{
    const {logout, userToken}=useContext(AuthContext);

    const logoutFunction=()=>{
        logout();
    }

    return(
        <View style={{ padding: 100, flex: 3 , alignContent:'center',alignItems:'center'}}>
        <Text style={styles.text}>
            Welcome Home
        </Text>
            <Pressable style={styles.button} onPress={logoutFunction} >
      <Text style={styles.text}>logOut</Text>
    </Pressable>
        </View>
        

    );
};

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
    
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'blue',
    },
  });

export default HomeScreen;