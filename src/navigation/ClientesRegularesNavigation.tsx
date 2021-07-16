import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClienteDetail } from "../screens/ClientesCreacion/ClienteDetailScreen";
import { ClienteImagen } from "../screens/ClientesCreacion/ClienteImage";
import { CLiente } from "../screens/ClientesCreacion/ClienteScreen";
import { ClientesRegulares } from "../screens/ClientsRegulares";


export type ClientesStackParams={
    ClientesScreen:undefined,
    ClienteScreen:{id?:string,name?:string},
    ClienteDetailScreen:{id?:string,name?:string}
    ClienteImagen:{id?:string,name?:string}
}
const Stack = createStackNavigator<ClientesStackParams>();


export const ClientesNavigator = ()=>{
    return (
        <Stack.Navigator>
            
            <Stack.Screen name="ClientesScreen" component={ClientesRegulares} options={{title:'Cliente regular'}}/> 
             <Stack.Screen name="ClienteScreen" component={CLiente} options={{title:"Nuevo Cliente"}}/>
            <Stack.Screen name="ClienteDetailScreen" component={ClienteDetail} options={{title:"Detalle Cliente"}}/>
            <Stack.Screen name="ClienteImagen" component={ClienteImagen} options={{title:"Fotografia del Cliente"}}/>
        </Stack.Navigator>
    )
}