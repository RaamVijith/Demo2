import React from "react";
import { Button, Text, View, StyleSheet, Pressable} from "react-native";

const CustomButton=({onPress,text, type="PRIMARY", bgColor, fgColor})=>{
    return(
        <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`] ,
            bgColor ? {backgroundColor:bgColor}:{}
            
            ]}         
            >

            <Text 
            style={[
                styles.text, 
                styles[`container_${type}`],
                fgColor ? {color:fgColor}:{}
                ]}>{text}</Text>
        </Pressable>
    );
};

const styles=StyleSheet.create({
    container:{
       
        width:'100%',
        height:40,

        padding:10,
        marginVertical:4,

        alignItems:'center',
        borderRadius:5,
    },
    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },
    container_TERTIARY:{

    },
    container_SECONDARY:{
        borderColor:'#3B71F3',
       
    },

    text:{
        fontWeight:'bold',
        
    },
    text_TERTIARY:{
        color:'gray'
    },
    text_PRIMARY:{
        color:'blue'
    }
});

export default CustomButton;