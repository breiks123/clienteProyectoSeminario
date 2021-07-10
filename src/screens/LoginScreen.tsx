import React from "react";
import { Background } from "../components/BackGround";
import { Logo } from "../components/Logo";

import { Text, View, TextInput, Platform, KeyboardAvoidingView, Keyboard, Alert, TouchableOpacity } from 'react-native';


import { loginStyles } from '../theme/LoginTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from "../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { useEffect } from "react";


interface Props extends StackScreenProps<any,any>{}

export const LoginScreen =({navigation}:Props) =>{

    const {singIn,errorMessage,removeError}= useContext(AuthContext);

    const {email,password,onChange}=useForm({
        email:'',
        password:''
    });
    useEffect(()=>{
        if(errorMessage.length===0)return;
        Alert.alert('Respuesta de servidor',errorMessage,
        [
            {
                text:'OK',
                onPress:removeError
            }
        ]
        );
    },[errorMessage]);

    const onLogin=()=>{
        singIn({email,password});
        Keyboard.dismiss();
    }
    return(
        <>
        <Background />
            
        <KeyboardAvoidingView
                style={{ flex: 1 }}
            >


                <View style={ loginStyles.formContainer }>                
                    {/* Keyboard avoid view */}
                    <Logo />

                    <Text style={ loginStyles.title }>Login</Text>

                    <Text style={ loginStyles.label }>Email:</Text>
                    <TextInput 
                        placeholder="Ingrese su email:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[ 
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'email') }
                        value={ email }
                        onSubmitEditing={ onLogin } 


                        autoCapitalize="none"
                        autoCorrect={ false }
                    />


                    <Text style={ loginStyles.label }>Contraseña:</Text>
                    <TextInput 
                        placeholder="******"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[ 
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'password') }
                        value={ password }
                        onSubmitEditing={ onLogin }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />


                    {/* Boton login */}
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ loginStyles.button }
                           onPress={ onLogin } 
                        >
                            <Text style={ loginStyles.buttonText } >Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}
                    <View style={ loginStyles.newUserContainer  }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                           /*  onPress={ () => navigation.replace('RegisterScreen') } */
                        >
                           
                        </TouchableOpacity>
                    </View>
                </View>
                
            </KeyboardAvoidingView>
        </>
    )
}
