import React from "react";
import { Text } from "react-native";
import CustomButton from "../CustomButton/CustomButton";

const SocialSigninButton=()=>{

    const onSignInFacebook=()=>{
        console.warn("facebook");
    };
    const onSignInGoogle=()=>{
        console.warn("google");
    };

    return(
        <>
            <CustomButton 
        text="Sign in with Facebook" 
        onPress={onSignInFacebook} 
        type='TERTIARY'
        bgColor="#E7EAF4"
        fgColor="#4765A9"   
        />

        <CustomButton 
        text="Sign In with Google" 
        onPress={onSignInGoogle} 
        type='TERTIARY'
        bgColor="#FAE9EA"
        fgColor="#DD4D44"    
        />

        
        </>

    );
};


export default SocialSigninButton;