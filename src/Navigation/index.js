import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";

import SigninScreen from '../screens/SigninScreen/SigninScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import ConformEmailScreen from '../screens/ConformEmailScreen/ConformEmailScreen';
import ForgotPasswordScreen from '../screens/forgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const Stack= createNativeStackNavigator();

const Navigation=()=>{
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SigninScreen}/>
                <Stack.Screen name="SignUp" component={SignupScreen}/>
                <Stack.Screen name="ConfirmEmail" component={ConformEmailScreen}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;