import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import apiCasaReal from "../../api/casaRealApi";
import { LoginRequest, loginResponse } from "../../interfaces/responseIntefaces";
import { AuthReducer, AuthState } from "./AuthReducer";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

type AuthContextProps={
    errorMessage:string;
    token:string|null,
    user:loginResponse|null|'no data',
    status:'verificando'|'auntenticado'|'no-autenticado',
    singIn:(dataLogeo:LoginRequest)=>void,
    removeError:()=>void,
    logout:()=>void


}
const authInitialState:AuthState={
    status:'verificando',
    user:'no data',
    token:null,
    errorMessage:''
}


export const AuthContext = createContext({}as AuthContextProps);

export const AuthProvider = ({children}:any)=>{
   const [state,dispatch]= useReducer(AuthReducer,authInitialState);
    useEffect(()=>{
        verificarUser();
    },[]);

    const verificarUser=async()=>
    {
        const userData=await AsyncStorage.getItem('User');
        if(!userData)
            return dispatch({type:'logout'})
        const userdataLog:loginResponse=JSON.parse(userData);
        dispatch({
            type:'logueado',
            payload:userdataLog
        })
    }
    const singIn=async({email,password}:LoginRequest)=>{
        try {
            const result = await apiCasaReal.post<loginResponse|any>('/api/login',{email,password});
            
            if(result.data.serverResponse!=='Credenciales incorrectas')
            {
                dispatch({
                    type:'singIn',
                    payload:{
                        userL:result.data.serverResponse
                    }
                });
                await AsyncStorage.setItem('User',JSON.stringify(result.data.serverResponse));
                //console.log(result.data);
            }
            else
            {
                dispatch({
                    type:'addError',
                    payload:result.data.serverResponse||'error de datos'
                });
            }
        
        } catch (error) {
            console.log('error en la peticion singIn ',error.data)
        }
    };
    const removeError=()=>{
        dispatch({
            type:'removeError'
        });
    };
    const logout=async()=>{
        await AsyncStorage.removeItem('User');
        dispatch({type:'logout'})
    };
    return(
        <AuthContext.Provider value={{
            ...state,
            singIn,
            removeError,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
