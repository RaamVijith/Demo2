import React, {useState} from 'react';
import {Text, View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButton/SocialSigninButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignupScreen=()=>{
    const {height}=useWindowDimensions();

    const {control, handleSubmit, watch}= useForm();
    const pwd= watch('password');

    const Navigation=useNavigation();

    const onRegisterPressed=()=>{
        Navigation.navigate('ConfirmEmail')
      
    };    
     
    const onSigninPress=()=>{
        Navigation.navigate('SignIn');
    };    


    return(
     <ScrollView>
     <View style={styles.root} >
      
        <Text style={styles.title}>Create Account</Text>

        <CustomInput
            name='username'
            control={control}
            placeholder="Username"      
            rules={{required:'user name is required',
                   }}      
            
        />
        <CustomInput
            placeholder="Email"
            name='email'
            control={control}
            rules={{
                required:'password is required',
                pattern:{value:EMAIL_REGEX, message:'invalide email id'}
                   }}
            
        />
        <CustomInput
            placeholder="Password"
            name='password'
            control={control}
            secureTextEntry={true}
            rules={{required:'password is required',
                    minLength:{
                        value:8,
                        message:'password should more 8 charectors'
                    }}}
        />
        <CustomInput
            placeholder="Repeat Password"
            name='repeatPassword'
            control={control}
            secureTextEntry={true}
            rules={{
                validate: value => value===pwd || 'password is not match'
            }}
        />

        <CustomButton 
        text="Register" 
        onPress={handleSubmit(onRegisterPressed)} 
        type="PRIMARY"
        fgColor='white'    
        />

        <Text>By Registering, you conform to accecpt the
        <Text style={styles.link}> terms of use</Text> and
        <Text style={styles.link}>privacy policy</Text> </Text>

        <SocialSigninButton/>

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
        fontSize:40,
        marginBottom:10        
    },
    link:{
        color:'#FDB075'
        
    }
});

export default SignupScreen;