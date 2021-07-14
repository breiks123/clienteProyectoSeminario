import { StackActions } from "@react-navigation/routers";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { ProductoDetail } from "../screens/ProductoDetailScreen";
import { ProductoImagen } from "../screens/ProductoImagen";
import { Producto } from "../screens/ProductoScreen";
import { Productos } from "../screens/ProductosScreen";

export type ProductsStackParams={
    ProductsScreen:undefined,
    ProductScreen:{id?:string,name?:string},
    ProductDetailScreen:{id?:string,name?:string}
    ProductoImagen:{id?:string,name?:string}
}
const Stack = createStackNavigator<ProductsStackParams>();


export const ProductsNavigator = ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductsScreen" component={Productos} options={{title:"PRODUCTOS"}}/>
            <Stack.Screen name="ProductScreen" component={Producto} options={{title:"Nuevo Producto"}}/>
            <Stack.Screen name="ProductDetailScreen" component={ProductoDetail} options={{title:"Detalle Producto"}}/>
            <Stack.Screen name="ProductoImagen" component={ProductoImagen} options={{title:"Imagen del Producto"}}/>
        </Stack.Navigator>
    )
}