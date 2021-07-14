import { StackActions } from "@react-navigation/routers";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { ClientesPotenciales } from "../screens/ClientsPotencial";
import { ClientesRegulares } from "../screens/ClientsRegulares";
import { ProductoDetail } from "../screens/ProductoDetailScreen";
import { ProductoImagen } from "../screens/ProductoImagen";
import { Producto } from "../screens/ProductoScreen";
import { Productos } from "../screens/ProductosScreen";

export type ClientesStackParams={
    ClientesScreen:undefined,
    ClienteScreen:{id?:string,name?:string},
    ClienteDetailScreen:{id?:string,name?:string}
    ClientePotencialScreen:{id?:string,name?:string}
    //ProductoImagen:{id?:string,name?:string}
}
const Stack = createStackNavigator<ClientesStackParams>();


export const ClientesNavigator = ()=>{
    return (
        <Stack.Navigator>
            
            <Stack.Screen name="ClientesScreen" component={ClientesRegulares} options={{title:'Cliente regular'}}/> 
            <Stack.Screen name="ClientePotencialScreen" component={ClientesPotenciales} options={{title:'CLIENTE POTENCIAL'}}/>
            <Stack.Screen name="ClienteScreen" component={Producto} options={{title:"Nuevo Cliente"}}/>
            <Stack.Screen name="ClienteDetailScreen" component={ProductoDetail} options={{title:"Detalle Cliente"}}/>
        </Stack.Navigator>
    )
}