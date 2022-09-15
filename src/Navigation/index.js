import React, {useContext} from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";

import SigninScreen from '../screens/SigninScreen/SigninScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import ConformEmailScreen from '../screens/ConformEmailScreen/ConformEmailScreen';
import ForgotPasswordScreen from '../screens/forgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { AuthProvider, AuthContext } from "../context/AuthContext";


const Stack= createNativeStackNavigator();


const Navigation=()=>{
    const {isLoading, userToken}=useContext(AuthContext);
    
    if(isLoading){
        return(
            <View>
                <ActivityIndicator size={'large'} />
            </View>
        );
    };

    const AuthStack=()=>{
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="SignIn" component={SigninScreen}/>
            <Stack.Screen name="SignUp" component={SignupScreen}/>
            <Stack.Screen name="ConfirmEmail" component={ConformEmailScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
            
           </Stack.Navigator>
    
        );
    };

    const HomeStack=()=>{
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
           </Stack.Navigator>
        );
    };

    
    return(
        
        <NavigationContainer >       
                    
           {userToken !== null ? <HomeStack/>:<AuthStack/>}                    
           {console.log(userToken)}
            
        </NavigationContainer>
       
        
    );
};

export default Navigation;