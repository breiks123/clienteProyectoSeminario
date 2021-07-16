import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClientesPotenciales } from "../screens/ClientsPotencial";
import { ClientePotencial } from "../screens/ClientesCreacion/ClientePotencialScreen";
import { ClientePotencialImagen } from "../screens/ClientesCreacion/ClientePotencialImage";
import { ClienteDetail } from "../screens/ClientesCreacion/ClienteDetailScreen";
export type ClientesPotencialesStackParams={
    ClientesPotencialesScreen:undefined,
    ClientePotencialScreen:{id?:string,name?:string},
    ClientePotencialDetailScreen:{id?:string,name?:string}
    
    ClientePotencialImagen:{id?:string,name?:string}
}
const Stack = createStackNavigator<ClientesPotencialesStackParams>();


export const ClientesPotencialesNavigator = ()=>{
    return (
        <Stack.Navigator>
            
            <Stack.Screen name="ClientesPotencialesScreen" component={ClientesPotenciales} options={{title:'Cliente Potenciales'}}/> 
            <Stack.Screen name="ClientePotencialScreen" component={ClientePotencial} options={{title:'nuevo cliente'}}/>
            <Stack.Screen name="ClientePotencialImagen" component={ClientePotencialImagen} options={{title:"Fotografia del Cliente"}}/>
            <Stack.Screen name="ClientePotencialDetailScreen" component={ClienteDetail} options={{title:"Detalle Cliente"}}/>
        </Stack.Navigator>
    )
}