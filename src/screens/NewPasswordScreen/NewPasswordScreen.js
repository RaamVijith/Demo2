import React from "react";
import {Text, View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { useState } from "react";
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButton/SocialSigninButton';
import { useForm, Controller } from 'react-hook-form';



const NewPasswordScreen=()=>{
    const {height}=useWindowDimensions();

    const {control, handleSubmit}= useForm();

    const onSubmitPressed=()=>{
        console.warn("submit");
    };
    
    const onBackToSigninPressed=()=>{
        Navigation.navigate('SignIn');
    };  
    


    return(
     <ScrollView>
     <View style={styles.root} >
      
        <Text style={styles.title}>Reset your Password</Text>

        <CustomInput
            placeholder="Code"
            name='code'
            control={control}
            rules={{
                required:'code is required',
                
                   }}
            
        />

        <CustomInput
            placeholder="Enter your new password"
            name='enterYourNewPassword'
            control={control}
            rules={{
                required:'New password is required',
                
                   }}
            
        />
       

        <CustomButton 
        text="Submit" 
        onPress={handleSubmit(onSubmitPressed)} 
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

export default NewPasswordScreen;