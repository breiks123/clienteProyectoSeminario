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

export type ClientesPotencialesStackParams={
    ClientesPotencialesScreen:undefined,
    ClientePotencialScreen:{id?:string,name?:string},
    ClientePotencialDetailScreen:{id?:string,name?:string}
    
    //ProductoImagen:{id?:string,name?:string}
}
const Stack = createStackNavigator<ClientesPotencialesStackParams>();


export const ClientesPotencialesNavigator = ()=>{
    return (
        <Stack.Navigator>
            
            <Stack.Screen name="ClientesPotencialesScreen" component={ClientesPotenciales} options={{title:'Cliente Potenciales'}}/> 
            <Stack.Screen name="ClientePotencialScreen" component={Producto} options={{title:'nuevo cliente'}}/>
            
            <Stack.Screen name="ClientePotencialDetailScreen" component={ProductoDetail} options={{title:"Detalle Cliente"}}/>
        </Stack.Navigator>
    )
}