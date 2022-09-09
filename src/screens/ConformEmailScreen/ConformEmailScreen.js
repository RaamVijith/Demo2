import React from "react";
import {Text, View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { useState } from "react";
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButton/SocialSigninButton';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";


const ConformEmailScreen=()=>{
    const {height}=useWindowDimensions();

    const {control, handleSubmit}= useForm();

    const Navigation= useNavigation();



    const onConformPressed=()=>{
        Navigation.navigate('HomeScreen');
    };
    
    const onResendCodePress=()=>{
        console.warn("Resend code");
    };  
    const onSigninPress=()=>{
        Navigation.navigate('SignIn');
    };  
    

    return(
     <ScrollView>
     <View style={styles.root} >
      
        <Text style={styles.title}>Conform your Email</Text>

        <CustomInput
            placeholder="Conform your code hear"
            name='code'
            control={control}
            rules={{
                required:'code is required',
               
                   }}
            
            
        />
       

        <CustomButton 
        text="Conform Code" 
        onPress={handleSubmit(onConformPressed)} 
        type="PRIMARY"
        fgColor='white'    
        />

        <CustomButton 
        text="Resent Code" 
        onPress={onResendCodePress} 
        type="SECONDARY"
        fgColor='black'
        
            
        />

        

        <CustomButton 
        text="You alredy have account? SignIn" 
        onPress={onSigninPress} 
        type='TERTIARY'/>
   
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

export default ConformEmailScreen;