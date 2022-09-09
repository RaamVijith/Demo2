import React from 'react';
import { Controller } from 'react-hook-form';
import {Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




const CustomInput=({rules={},control,name, placeholder, secureTextEntry})=>{
 
    return(
        
        <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field:{value, onChange, onBlur},fieldState:{error}})=>(
            <>
            <View style={[styles.container,{borderColor: error ? 'red' :'white'}]}>
            <TextInput
             value={value}
             onChangeText={onChange}
             onBlur={onBlur}
             placeholder={placeholder} 
             style={styles.input}
             secureTextEntry={secureTextEntry}   
             />

            </View> 
            {error && 
                (<Text style={{color:'red', alignSelf:'stretch'}}>{error.message || 'error'}</Text>)}
            </>
        )}
        
        />   
         
      );    
};

  {/*  <Controller
            control={control}
            name='username'
            rules={{required:'user name is required',}}
            render={({field:{value, onChange, onBlur},fieldState:{error}})=>(
                <>
                <View style={[styles.container,{borderColor: error ? 'red' :'white'}]}>
                 <TextInput                    
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur }
                    placeholder={'username'}
                />
                </View>
                {error && 
                (<Text style={{color:'red', alignSelf:'stretch'}}>{error.message || 'error'}</Text>)}
                </>
            )}
                />*/}



const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        height:45,

        borderColor:'#e8e8e8',
        borderRadius:10,
        borderWidth:1,

        paddingHorizontal:10,
        marginVertical:7,

    },
    input:{
       

    }
}) ;




export default CustomInput;