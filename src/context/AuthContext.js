import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useState} from "react";
import { useEffect } from "react";

export const AuthContext=createContext();

export const AuthProvider= ({children})=>{
    const [isLoading, setIsLoading]=useState(false);
    const [userToken, setUserToken]=useState(null);

    const login=()=>{
        setUserToken("userToken1");
        AsyncStorage.setItem('userToken',"UserToken");
        setIsLoading(false);        
        
    };
    const logout=()=>{
        setUserToken(null);
        AsyncStorage.removeItem('userToken')
        setIsLoading(false);
    };
    const isLogin= async()=>{
        try{
            setIsLoading(true);
            let userToken= await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        } catch(e){
            console.log('isLogin is error');
        }
    }

    useEffect(()=>{
        isLogin();
    },[]);

    return(
        <AuthContext.Provider value={{login,logout,userToken,isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};