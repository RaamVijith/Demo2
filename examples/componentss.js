import React from "react";
import { View, Text, Pressable } from "react-native";

function Component() {

    var jsonData = {
      "users": [
          {
              "name": "alan", 
              "age": 23,
              "username": "aturing"
          },
          {
              "name": "john", 
              "age": 29,
              "username": "__john__"
          }
      ]
    }
  
    function handleClick() {
      console.warn('fff')
      // Send data to the backend via POST
      fetch('https://jsonplaceholder.typicode.com/users', {  // Enter your IP address here
  
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
  
      })
      
    }
  
    return (
        <View>
        <Text>ddd</Text>
        <Pressable onPress={handleClick}>
            <Text>subbmit</Text>
        </Pressable>
    </View>
    );
  
  }
  
  export { Component };