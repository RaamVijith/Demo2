import React from "react";
import {Text, View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { useState } from "react";
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButton/SocialSigninButton';
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form';


const ForgotPasswordScreen=()=>{
    const {height}=useWindowDimensions();

    const {control, handleSubmit}= useForm();

    const Navigation=useNavigation();


    const onSendPressed=()=>{
        Navigation.navigate('NewPassword');
    };
    
    const onBackToSigninPressed=()=>{
        Navigation.navigate('SignIn');
    };  
    


    return(
     <ScrollView>
     <View style={styles.root} >
      
        <Text style={styles.title}>Forgot Password</Text>

        <CustomInput
            placeholder="User name *"
            name='useName'
            control={control}
            rules={{
                required:'user name is required',
                
                   }}
            
        />
       

        <CustomButton 
        text="Send" 
        onPress={handleSubmit(onSendPressed)} 
        type="PRIMARY"
        fgColor='white'    
        />

        <CustomButton 
        text="Back to Sign In" 
        onPress={onBackToSigninPressed} 
        type="SECONDARY"
        fgColor='black'      
            
        />

   
    </View>
    </ScrollView>
    );    
};


const styles= StyleSheet.create({
    image: {        
         width:290,
        padding:10,
        marginVertical:1    
   
    },
    root:{
        alignItems:'center',
        padding:20,
    },
    title:{
        fontWeight:'bold',
        fontSize:32,
        margin: 20        
    },
    link:{
        color:'#FDB075'
        
    }
});

export default ForgotPasswordScreen;