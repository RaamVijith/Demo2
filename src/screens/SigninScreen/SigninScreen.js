import React, { useState, useContext} from 'react';
import {Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import SocialSigninButton from '../../components/SocialSigninButton/SocialSigninButton';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';
import { removeData } from 'jquery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';



const SigninScreen=()=>{
    const {height}=useWindowDimensions();
    const [username, setUsername]= useState();
    const [password, setPassword]= useState();
    const Navigation= useNavigation();
    const {control, handleSubmit, formState:{errors}}= useForm();
    console.log(errors);

    const {login, userToken}=useContext(AuthContext);

    const onSignInPressed=(data)=>{           
        console.log(data.username)
        console.log(data.password)
       login();
       
   {/* const req ={
        "email": username,
    "password": password       
        
    }
    axios.post('http://localhost:3000/auth',req)
        .then(
            res=>{
                Navigation.navigate('ConfirmEmail');
            },
            err=>{
                alert('user password is wrong')
                console.warn(username,password);
            }
        )
        .catch(error => console.log(error));
        //validate user
        */}
        
    };

    const onForgotPasswordPressed=()=>{       

        Navigation.navigate('ForgotPassword');
    }; 
     
    const onSignUpPress=()=>{
        Navigation.navigate('SignUp');
    };

   

    return(
     <ScrollView >
     <View style={styles.root} >
      
        <Image style={[styles.image, {height:height*0.32}]} source={{uri: "https://img.freepik.com/premium-vector/letter-r-logo-arrow-design-technology-3d-colorful-icons_345408-665.jpg?w=2000"}}/>
                   

          <CustomInput
            name="username"
            placeholder="Username"
            control={control}
            rules={{required:'user name is required',
                   }}
            secureTextEntry={false}
            
        />
           <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            rules={{required:'password is required',
                    minLength:{
                        value:8,
                        message:'password should more 8 charectors'
                    }}}
            secureTextEntry={true}
        />  

        

        <CustomButton 
        text="SignIn" 
        onPress={handleSubmit(onSignInPressed)} 
        type="PRIMARY"
        fgColor='white'    
        />

        <CustomButton 
        text="Forgot password" 
        onPress={onForgotPasswordPressed} 
        type='TERTIARY'/>

       <SocialSigninButton/>

        <CustomButton 
        text="Don't have an account? Create one" 
        onPress={onSignUpPress} 
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
        backgroundColor:'white'
        
    },
    container:{
        backgroundColor:'white',
        width:'100%',
        height:45,

        borderColor:'#e8e8e8',
        borderRadius:10,
        borderWidth:1,

        paddingHorizontal:10,
        marginVertical:7,
    }
});

export default SigninScreen;