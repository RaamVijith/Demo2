import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, Button, Pressable } from 'react-native';
import CustomButton from "../src/components/CustomButton/CustomButton";
  
const PostRequestExample = () => {
    const [name,setName]=useState("")

    const submitData=()=>{

    }
   
    return (
        <View style={styles.btn}>
            <Text>ddd</Text>
            <Pressable onPress={submitData}>
                <Text>subbmit</Text>
            </Pressable>
        </View>
    )
  
}
  
export default PostRequestExample;
  
const styles = StyleSheet.create({
    btn: {
        marginTop: 60,
        marginLeft: 30,
        marginRight: 30
    }
})